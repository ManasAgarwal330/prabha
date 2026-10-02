import type { Destination, Listing } from '~/types'
import { destinations, getDestination } from '~/data/destinations'
import { allListings } from '~/data/listings'

/**
 * Place names behind the location search on each tab. Built from the data, so
 * a new listing shows up in the search without any extra wiring.
 */

export type PlaceKind = 'State' | 'Place'

export interface PlaceOption {
  label: string
  kind: PlaceKind
  /** How many items on the current tab sit in this place. */
  count: number
}

/** Location text that names no place, e.g. the hosted events at "Any Pravaah stay". */
const NOT_A_PLACE = new Set(['any pravaah stay', 'ganga'])

const STATES = new Set(
  [...destinations.flatMap((d) => [d.name, ...d.state.split(/\s*,\s*/)]), 'Uttar Pradesh'].map((s) => s.toLowerCase())
)

const normalise = (place: string) => place.trim().toLowerCase()

/**
 * Only the places a listing is actually in. Districts and "near X" / "beyond X"
 * are context, not locations — a stay in Munsiyari must not turn up under
 * Pithoragarh, and nothing should appear under a town with no listing of its own.
 * "Munsiyari, Pithoragarh district" → Munsiyari. "Satkhol, near Mukteshwar" → Satkhol.
 * "Munsiyari to Milam" → Munsiyari, Milam.
 */
const parseLocation = (location: string) =>
  location
    .split(/\s*,\s*|\s+to\s+/i)
    .map((part) => part.trim())
    .filter((part) => !/\bdistrict$/i.test(part) && !/^(near|beyond)\s/i.test(part))
    .map((part) => part.replace(/^(the upper|the)\s+/i, ''))
    .filter((part) => part && !NOT_A_PLACE.has(part.toLowerCase()))

/** Every place a listing can be found under: its towns and regions, plus its state. */
export const listingPlaces = (listing: Listing): string[] => {
  const places = listing.places ?? parseLocation(listing.location)
  const state = listing.destinationSlug ? getDestination(listing.destinationSlug)?.name : undefined
  return state ? [...places, state] : places
}

/**
 * A destination is found under its own name, its state, and every place its listings are in.
 * The state is left out when it only repeats the name, e.g. "Jammu & Kashmir" for Kashmir.
 */
export const destinationPlaces = (destination: Destination): string[] => [
  destination.name,
  ...(normalise(destination.state).includes(normalise(destination.name)) ? [] : [destination.state]),
  ...allListings.filter((l) => l.destinationSlug === destination.slug).flatMap(listingPlaces)
]

/** The search options for a set of items, states first, then places A–Z. */
export const placeOptions = <T>(items: T[], placesOf: (item: T) => string[]): PlaceOption[] => {
  const options = new Map<string, PlaceOption>()
  for (const item of items) {
    // Count each item once per place, even if a place appears twice in its text.
    const seen = new Set<string>()
    for (const label of placesOf(item)) {
      const key = normalise(label)
      if (seen.has(key)) continue
      seen.add(key)
      const option = options.get(key)
      if (option) option.count++
      else options.set(key, { label, kind: STATES.has(key) ? 'State' : 'Place', count: 1 })
    }
  }
  return [...options.values()].sort(
    (a, b) => (a.kind === b.kind ? a.label.localeCompare(b.label) : a.kind === 'State' ? -1 : 1)
  )
}

/** True when nothing is selected, or the item sits in any of the selected places. */
export const inSelectedPlaces = (places: string[], selected: string[]) => {
  if (selected.length === 0) return true
  const wanted = new Set(selected.map(normalise))
  return places.some((place) => wanted.has(normalise(place)))
}
