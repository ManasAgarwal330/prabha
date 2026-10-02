import type {
  Article,
  ContentSnapshot,
  Destination,
  FaqItem,
  JournalCategory,
  Listing,
  Region,
  Section,
  SiteSettings,
  Testimonial
} from '~/types'

/*
 * Turns the documents stored in Cosmos into the content snapshot the site works with.
 */

/** Ids of the documents in `siteContent`. */
export const SITE_DOC = {
  settings: 'settings',
  regions: 'regions',
  journalCategories: 'journal-categories',
  faqs: 'faqs',
  testimonials: 'testimonials'
} as const

/** Cosmos adds `_rid`, `_etag` and friends to every document; the site never needs them. */
const stripSystem = <T>(doc: Record<string, unknown>): T => {
  const clean: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(doc)) if (!key.startsWith('_')) clean[key] = value
  delete clean.id
  delete clean.type
  return clean as T
}

const byOrder = <T extends { order?: number }>(a: T, b: T) => (a.order ?? 1e9) - (b.order ?? 1e9)

/** Rebuilds the snapshot from what was read out of each container. */
export const fromDocuments = (docs: {
  listings: Record<string, unknown>[]
  destinations: Record<string, unknown>[]
  articles: Record<string, unknown>[]
  siteContent: Record<string, unknown>[]
}): ContentSnapshot => {
  const site = (id: string) => docs.siteContent.find((doc) => doc.id === id)
  const items = <T>(id: string) => ((site(id)?.items as T[] | undefined) ?? [])

  const settings = site(SITE_DOC.settings)
  if (!settings) throw new Error('The siteContent container has no "settings" document.')

  return {
    settings: stripSystem<SiteSettings>(settings),
    sections: docs.siteContent
      .filter((doc) => doc.type === 'section')
      .map((doc) => stripSystem<Section>(doc))
      .sort(byOrder),
    regions: items<Region>(SITE_DOC.regions),
    journalCategories: items<JournalCategory>(SITE_DOC.journalCategories),
    listings: docs.listings.map((doc) => ({ ...stripSystem<Listing>(doc), slug: String(doc.id) })).sort(byOrder),
    destinations: docs.destinations.map((doc) => ({ ...stripSystem<Destination>(doc), slug: String(doc.id) })).sort(byOrder),
    articles: docs.articles.map((doc) => ({ ...stripSystem<Article>(doc), slug: String(doc.id) })),
    faqs: items<FaqItem>(SITE_DOC.faqs),
    testimonials: items<Testimonial>(SITE_DOC.testimonials)
  }
}
