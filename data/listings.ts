import type { Listing, SectionKey } from '~/types'
import { sections } from '~/data/sections'
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

/** A section's categories that have at least one listing, in their configured order. */
export const categoriesWithListings = (section: SectionKey) =>
  sections[section].categories.filter((category) => listingsInCategory(section, category.slug).length > 0)

export const featuredListings = (section: SectionKey) => listingsBySection[section].filter((listing) => listing.featured)

export const listingPath = (listing: Listing) => `/${listing.section}/${listing.slug}`
