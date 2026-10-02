import type { Listing } from '~/types'

/**
 * Place names behind the location search on each tab. Shared by the backend,
 * which works out each item's `places`, and the browser, which builds the
 * search options from them and filters by the visitor's picks.
 */

export type PlaceKind = 'State' | 'Place'

export interface PlaceOption {
  label: string
  kind: PlaceKind
  /** How many items on the current tab sit in this place. */
  count: number
}

/** States and union territories, so the search can label them "State". */
const STATES = new Set(
  [
    'Andaman & Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh',
    'Dadra & Nagar Haveli and Daman & Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir',
    'Jharkhand', 'Karnataka', 'Kashmir', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ].map((s) => s.toLowerCase())
)

/** Location text that names no place, e.g. the hosted events at "Any Pravaah stay". */
const NOT_A_PLACE = new Set(['any pravaah stay', 'ganga'])

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

/**
 * Every place a listing can be found under: its towns and regions, plus its state.
 * `listing.places` overrides what is read from `location`.
 */
export const listingPlaces = (listing: Pick<Listing, 'location' | 'places'>, stateName?: string): string[] => {
  const places = listing.places ?? parseLocation(listing.location)
  return stateName && !places.some((p) => normalise(p) === normalise(stateName)) ? [...places, stateName] : places
}

/** The search options for a set of items, states first, then places A–Z. */
export const placeOptions = (items: { places: string[] }[]): PlaceOption[] => {
  const options = new Map<string, PlaceOption>()
  for (const item of items) {
    // Count each item once per place, even if a place appears twice in its text.
    const seen = new Set<string>()
    for (const label of item.places) {
      const key = normalise(label)
      if (seen.has(key)) continue
      seen.add(key)
      const option = options.get(key)
      if (option) option.count++
      else options.set(key, { label, kind: STATES.has(key) ? 'State' : 'Place', count: 1 })
    }
  }
  return [...options.values()].sort((a, b) =>
    a.kind === b.kind ? a.label.localeCompare(b.label) : a.kind === 'State' ? -1 : 1
  )
}

/** True when nothing is selected, or the item sits in any of the selected places. */
export const inSelectedPlaces = (places: string[], selected: string[]) => {
  if (selected.length === 0) return true
  const wanted = new Set(selected.map(normalise))
  return places.some((place) => wanted.has(normalise(place)))
}

/** Unique, in first-seen order, ignoring case. */
export const uniquePlaces = (places: string[]) => {
  const seen = new Set<string>()
  return places.filter((place) => {
    const key = normalise(place)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}
