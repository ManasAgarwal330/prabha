import type { FaqContent } from '~/types'

/** GET /api/faqs — the general questions, then each destination's own. */
export default defineEventHandler(async (): Promise<FaqContent> => {
  const snapshot = await loadContent()
  return {
    general: snapshot.faqs,
    destinations: snapshot.destinations.map((d) => ({ slug: d.slug, name: d.name, faqs: d.faqs }))
  }
})
