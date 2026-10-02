import type { ListingSummary } from '~/types'

/**
 * GET /api/listings — listing cards, in display order.
 *   ?section=stays        one tab
 *   ?featured=true        only featured listings
 *   ?destination=goa      only listings in a destination
 */
export default defineEventHandler(async (event): Promise<ListingSummary[]> => {
  const { section, featured, destination } = getQuery(event)
  const snapshot = await loadContent()
  if (section !== undefined && !isSectionKey(snapshot, section)) {
    throw createError({ statusCode: 400, statusMessage: `Unknown section "${section}".` })
  }
  return visibleListings(snapshot)
    .filter((l) => section === undefined || l.section === section)
    .filter((l) => featured !== 'true' || l.featured)
    .filter((l) => destination === undefined || l.destinationSlug === destination)
    .map((l) => toListingSummary(snapshot, l))
})
