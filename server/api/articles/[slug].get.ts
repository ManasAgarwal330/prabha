import type { ArticlePage } from '~/types'

/** GET /api/articles/:slug — one story and the three newest others. */
export default defineEventHandler(async (event): Promise<ArticlePage> => {
  const slug = getRouterParam(event, 'slug')
  const snapshot = await loadContent()
  const sorted = sortedArticles(snapshot)
  const article = sorted.find((a) => a.slug === slug)
  if (!article) throw createError({ statusCode: 404, statusMessage: 'Story not found' })
  return { article, related: sorted.filter((a) => a.slug !== slug).slice(0, 3).map(toArticleSummary) }
})
