import type { SiteBundle } from '~/types'

/** GET /api/site — what every page needs: settings, tabs, regions, destinations and journal categories. */
export default defineEventHandler(async (): Promise<SiteBundle> => {
  const snapshot = await loadContent()
  return {
    settings: snapshot.settings,
    sections: sectionSummaries(snapshot),
    regions: snapshot.regions,
    destinations: snapshot.destinations.map((d) => toDestinationSummary(snapshot, d)),
    journalCategories: snapshot.journalCategories.map((category) => ({
      ...category,
      articleCount: snapshot.articles.filter((a) => a.category === category.name).length
    }))
  }
})
