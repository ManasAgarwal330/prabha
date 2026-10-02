import type { ArticleSummary } from '~/types'

/** GET /api/articles — journal stories without their body, newest first. */
export default defineEventHandler(async (): Promise<ArticleSummary[]> => {
  const snapshot = await loadContent()
  return sortedArticles(snapshot).map(toArticleSummary)
})
