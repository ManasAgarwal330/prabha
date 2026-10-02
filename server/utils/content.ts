import type { ContentSnapshot } from '~/types'
import { fromDocuments } from '~/server/database/documents'

/**
 * Loads all site content from Cosmos DB in one go — it is small (a few hundred KB) —
 * and keeps it in memory for NUXT_CONTENT_CACHE_SECONDS (default 60), so most page
 * views cost no database reads at all. Edits in Cosmos show up within that window;
 * set it to 0 to read the database on every request.
 */
let cache: { at: number; value: Promise<ContentSnapshot> } | null = null

const readFromCosmos = async (): Promise<ContentSnapshot> => {
  if (!getDatabase()) {
    throw createError({
      statusCode: 503,
      statusMessage: 'Content database is not configured — set NUXT_COSMOS_CONNECTION_STRING.'
    })
  }
  const [listings, destinations, articles, siteContent] = await Promise.all([
    readAll('listings'),
    readAll('destinations'),
    readAll('articles'),
    readAll('siteContent')
  ])
  return fromDocuments({ listings, destinations, articles, siteContent })
}

export const loadContent = (): Promise<ContentSnapshot> => {
  const ttl = Math.max(0, Number(useRuntimeConfig().contentCacheSeconds) || 0) * 1000
  if (cache && Date.now() - cache.at < ttl) return cache.value

  const value = readFromCosmos()
  cache = { at: Date.now(), value }
  // A failed read must not be cached: the next request tries the database again.
  value.catch(() => {
    if (cache?.value === value) cache = null
  })
  return value
}
