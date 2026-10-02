import type { DestinationSummary } from '~/types'

/** GET /api/destinations — every destination, in menu order. */
export default defineEventHandler(async (): Promise<DestinationSummary[]> => {
  const snapshot = await loadContent()
  return snapshot.destinations.map((d) => toDestinationSummary(snapshot, d))
})
