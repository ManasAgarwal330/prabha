import type { ListingPage } from '~/types'

/** GET /api/listings/:section/:slug — one listing, its destination and three related listings. */
export default defineEventHandler(async (event): Promise<ListingPage> => {
  const section = getRouterParam(event, 'section')
  const slug = getRouterParam(event, 'slug')
  const snapshot = await loadContent()
  const live = visibleListings(snapshot)
  const listing = live.find((l) => l.section === section && l.slug === slug)
  if (!listing) throw createError({ statusCode: 404, statusMessage: 'Listing not found' })

  const destination = snapshot.destinations.find((d) => d.slug === listing.destinationSlug)
  return {
    listing,
    destination: destination ? toDestinationSummary(snapshot, destination) : undefined,
    // Same category first, then the rest of the tab.
    related: live
      .filter((l) => l.section === listing.section && l.slug !== listing.slug)
      .sort((a, b) => Number(b.category === listing.category) - Number(a.category === listing.category))
      .slice(0, 3)
      .map((l) => toListingSummary(snapshot, l))
  }
})
