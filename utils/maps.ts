import type { MapLocation } from '~/types'

/**
 * Google Maps links for a listing's location. All three use Google's public,
 * key-free URL formats, so they cost nothing and need no API key.
 * On phones the "open" and "directions" links hand over to the Google Maps app.
 */
const target = (map: MapLocation) =>
  map.lat !== undefined && map.lng !== undefined ? `${map.lat},${map.lng}` : map.query

/** For an <iframe>: the interactive map, shown inside our own page. */
export const mapEmbedUrl = (map: MapLocation) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(target(map))}&z=14&hl=en&output=embed`

/** Opens the place in Google Maps. */
export const mapOpenUrl = (map: MapLocation) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(target(map))}`

/** Opens turn-by-turn directions from wherever the visitor is. */
export const mapDirectionsUrl = (map: MapLocation) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(target(map))}`
