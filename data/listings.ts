import type { Listing, SectionKey } from '~/types'
import { stays } from '~/data/stays'
import { experiences } from '~/data/experiences'
import { expeditions } from '~/data/expeditions'
import { events } from '~/data/events'

export const listingsBySection: Record<SectionKey, Listing[]> = {
  stays,
  experiences,
  expeditions,
  events
}

export const allListings: Listing[] = [...stays, ...experiences, ...expeditions, ...events]

export const getListing = (section: SectionKey, slug: string) =>
  listingsBySection[section].find((listing) => listing.slug === slug)

export const listingsInCategory = (section: SectionKey, category: string) =>
  listingsBySection[section].filter((listing) => listing.category === category)

export const listingsByDestination = (destinationSlug: string) =>
  allListings.filter((listing) => listing.destinationSlug === destinationSlug)

export const featuredListings = (section: SectionKey) => listingsBySection[section].filter((listing) => listing.featured)

export const listingPath = (listing: Listing) => `/${listing.section}/${listing.slug}`
