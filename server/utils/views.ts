import type {
  Article,
  ArticleSummary,
  ContentSnapshot,
  Destination,
  DestinationSummary,
  Listing,
  ListingSummary,
  SectionKey,
  SectionSummary
} from '~/types'
import { listingPlaces, uniquePlaces } from '~/shared/places'

/**
 * Shapes content for the API: drops hidden listings, trims records down to what
 * cards need, and works out the places the location search matches on.
 */

const sectionOrder = (snapshot: ContentSnapshot) => new Map(snapshot.sections.map((s, i) => [s.key, i]))

/** Listings that are live on the site, in tab order and then their own order. */
export const visibleListings = (snapshot: ContentSnapshot): Listing[] => {
  const order = sectionOrder(snapshot)
  return snapshot.listings
    .filter((listing) => !listing.hidden)
    .sort(
      (a, b) =>
        (order.get(a.section) ?? 99) - (order.get(b.section) ?? 99) || (a.order ?? 1e9) - (b.order ?? 1e9)
    )
}

const destinationName = (snapshot: ContentSnapshot, slug?: string) =>
  slug ? snapshot.destinations.find((d) => d.slug === slug)?.name : undefined

export const toListingSummary = (snapshot: ContentSnapshot, listing: Listing): ListingSummary => ({
  slug: listing.slug,
  section: listing.section,
  category: listing.category,
  title: listing.title,
  location: listing.location,
  destinationSlug: listing.destinationSlug,
  tagline: listing.tagline,
  description: listing.description,
  image: listing.image,
  facts: listing.facts,
  map: listing.map,
  featured: listing.featured,
  places: listingPlaces(listing, destinationName(snapshot, listing.destinationSlug))
})

export const toDestinationSummary = (snapshot: ContentSnapshot, destination: Destination): DestinationSummary => {
  const listings = visibleListings(snapshot).filter((l) => l.destinationSlug === destination.slug)
  // The state is left out when it only repeats the name, e.g. "Jammu & Kashmir" for Kashmir.
  const state = destination.state.toLowerCase().includes(destination.name.toLowerCase()) ? [] : [destination.state]
  return {
    slug: destination.slug,
    name: destination.name,
    state: destination.state,
    region: destination.region,
    tagline: destination.tagline,
    description: destination.description,
    image: destination.image,
    heroImage: destination.heroImage,
    categories: destination.categories,
    bestTimeToVisit: destination.bestTimeToVisit,
    idealDuration: destination.idealDuration,
    featured: destination.featured,
    listingCount: listings.length,
    experienceCount: destination.experiences.length,
    places: uniquePlaces([destination.name, ...state, ...listings.flatMap((l) => listingPlaces(l))])
  }
}

export const toArticleSummary = ({ body: _body, ...summary }: Article): ArticleSummary => summary

/** Newest first. */
export const sortedArticles = (snapshot: ContentSnapshot) =>
  [...snapshot.articles].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

export const sectionSummaries = (snapshot: ContentSnapshot): SectionSummary[] => {
  const live = visibleListings(snapshot)
  return snapshot.sections.map((section) => {
    const inSection = live.filter((l) => l.section === section.key)
    return {
      ...section,
      listingCount: inSection.length,
      categories: section.categories.map((category) => ({
        ...category,
        listingCount: inSection.filter((l) => l.category === category.slug).length
      }))
    }
  })
}

export const isSectionKey = (snapshot: ContentSnapshot, value: unknown): value is SectionKey =>
  snapshot.sections.some((section) => section.key === value)
