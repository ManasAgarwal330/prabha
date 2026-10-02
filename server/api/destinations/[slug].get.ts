import type { DestinationPage } from '~/types'

/** GET /api/destinations/:slug — a destination, its listings and three others to explore. */
export default defineEventHandler(async (event): Promise<DestinationPage> => {
  const slug = getRouterParam(event, 'slug')
  const snapshot = await loadContent()
  const destination = snapshot.destinations.find((d) => d.slug === slug)
  if (!destination) throw createError({ statusCode: 404, statusMessage: 'Destination not found' })

  return {
    destination,
    listings: visibleListings(snapshot)
      .filter((l) => l.destinationSlug === destination.slug)
      .map((l) => toListingSummary(snapshot, l)),
    // Neighbours in the same region first, then the rest of India.
    others: snapshot.destinations
      .filter((d) => d.slug !== destination.slug)
      .sort((a, b) => Number(b.region === destination.region) - Number(a.region === destination.region))
      .slice(0, 3)
      .map((d) => toDestinationSummary(snapshot, d))
  }
})
