/**
 * Pravaah content models.
 * Content lives in Azure Cosmos DB and reaches the site through the backend in
 * `server/api/` — the shapes here are what the database holds and the API returns.
 */

/**
 * Where an image comes from — see `composables/useImageSource.ts`:
 * - `stays/<slug>/cover` — an image set in Azure Blob Storage (the normal case)
 * - `photo-…` — an Unsplash photo id, until it is moved into Storage
 * - `/images/<section>/<slug>/<name>` — a set still served from /public
 * Append `@x,y` (0–1 fractions) to keep that point in frame when cropped.
 */
export type ImageRef = string

export interface SeoMeta {
  title: string
  description: string
}

export type DestinationCategory =
  | 'Mountains'
  | 'Beaches'
  | 'Heritage'
  | 'Adventure'
  | 'Wildlife'
  | 'Honeymoon'
  | 'Family'
  | 'Weekend'

export interface Highlight {
  title: string
  description: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface SeasonNote {
  window: string
  label: string
  description: string
}

export type RegionSlug = 'india' | 'north-india' | 'west-india' | 'south-india' | 'islands'

export interface Region {
  slug: RegionSlug
  name: string
  description: string
}

export interface Destination {
  slug: string
  name: string
  state: string
  region: Exclude<RegionSlug, 'india'>
  tagline: string
  /** One-line summary used on cards. */
  description: string
  /** Long-form intro used on the detail page. */
  overview: string[]
  image: ImageRef
  heroImage: ImageRef
  gallery: ImageRef[]
  categories: DestinationCategory[]
  bestTimeToVisit: string
  seasons: SeasonNote[]
  idealDuration: string
  whyVisit: Highlight[]
  experiences: string[]
  travelTips: string[]
  faqs: FaqItem[]
  featured?: boolean
  /** Position in menus and lists; lower comes first. */
  order?: number
  seo: SeoMeta
}

export interface ItineraryDay {
  day: number
  title: string
  description: string
  stay?: string
  meals?: string
}

export type SectionKey = 'stays' | 'experiences' | 'expeditions' | 'events'

export interface ListingCategory {
  slug: string
  name: string
  description: string
}

/** A top-level offering tab — Stays, Experiences, Expeditions or Events. */
export interface Section {
  key: SectionKey
  name: string
  /** Lower-case singular used in copy, e.g. "stay". */
  singular: string
  path: string
  title: string
  intro: string
  heroImage: ImageRef
  categories: ListingCategory[]
  /** Tab position in the header; lower comes first. */
  order?: number
  seo: SeoMeta
}

export interface KeyFact {
  label: string
  value: string
}

/** A single stay, experience, expedition or event with its own detail page. */
/**
 * Where a listing sits on the map. `query` is searched on Google Maps, so a place's
 * own name and town find the business itself; `lat`/`lng`, when set, pin an exact
 * point instead.
 */
export interface MapLocation {
  query: string
  lat?: number
  lng?: number
}

export interface Listing {
  slug: string
  section: SectionKey
  /** Slug of a category within the section. */
  category: string
  title: string
  location: string
  destinationSlug?: string
  /**
   * Towns, regions and states the location search should find this under.
   * Optional — when omitted they are read from `location`, which covers most listings.
   */
  places?: string[]
  tagline: string
  /** One-line summary used on cards. */
  description: string
  overview: string[]
  image: ImageRef
  gallery: ImageRef[]
  /** Short facts shown in the hero and the enquiry card, e.g. duration or altitude. */
  facts: KeyFact[]
  highlights: string[]
  itinerary?: ItineraryDay[]
  inclusions?: string[]
  goodToKnow: string[]
  bestTime: string
  /** Optional: shows the map on the page and a map button on the listing's card. */
  map?: MapLocation
  featured?: boolean
  /** Kept in the database but left off the site, e.g. the Offbeat Experiences for now. */
  hidden?: boolean
  /** Position within its section; lower comes first. */
  order?: number
  seo: SeoMeta
}

export interface Testimonial {
  name: string
  location: string
  trip: string
  quote: string
  rating?: number
}

/** The reviews section: its heading and the reviews, all from the `testimonials` document in Cosmos. */
export interface TestimonialSection {
  eyebrow: string
  title: string
  items: Testimonial[]
}

export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string }

export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  coverImage: ImageRef
  author: string
  publishedAt: string
  readingTime: number
  body: ArticleBlock[]
  seo: SeoMeta
}

export interface Step {
  number: string
  title: string
  description: string
}

export interface ValueProp {
  title: string
  description: string
  icon: string
}

export interface TripType {
  slug: string
  label: string
}

export interface JournalCategory {
  slug: string
  name: string
}

/** Brand, contact details and the reusable copy blocks — one document in the database. */
export interface SiteSettings {
  name: string
  legalName: string
  tagline: string
  /** Home page headline. */
  heroHeadline: string
  /** Short form for page titles, where the full tagline is too long. */
  titleTagline: string
  description: string
  locale: string
  founded: string
  contact: {
    email: string
    phoneDisplay: string
    phoneHref: string
    whatsapp: string
    whatsappMessage: string
    /** Location only — no street address is published. */
    location: { region: string; country: string }
    hours: string
  }
  social: { instagram: string; instagramHandle: string }
  brandStory: { eyebrow: string; title: string; body: string[]; stats: { value: string; label: string }[] }
  valueProps: ValueProp[]
  howItWorks: Step[]
  /** Options in the enquiry form. */
  budgetRanges: string[]
  travellerCounts: string[]
  /** The kinds of trip under Plan Your Journey; also the "Type of trip" options in the enquiry form. */
  tripTypes: TripType[]
}

/* ---------- What the API returns ---------- */

/** The fields a listing card needs, plus the places the location search matches on. */
export type ListingSummary = Pick<
  Listing,
  'slug' | 'section' | 'category' | 'title' | 'location' | 'destinationSlug' | 'tagline' | 'description' | 'image' | 'facts' | 'map' | 'featured'
> & { places: string[] }

export interface CategoryWithCount extends ListingCategory {
  listingCount: number
}

/** A tab with its categories and how many listings each holds (0 = hidden from menus). */
export interface SectionSummary extends Omit<Section, 'categories'> {
  categories: CategoryWithCount[]
  listingCount: number
}

export type DestinationSummary = Pick<
  Destination,
  | 'slug'
  | 'name'
  | 'state'
  | 'region'
  | 'tagline'
  | 'description'
  | 'image'
  | 'heroImage'
  | 'categories'
  | 'bestTimeToVisit'
  | 'idealDuration'
  | 'featured'
> & { listingCount: number; experienceCount: number; places: string[] }

export type ArticleSummary = Omit<Article, 'body'>

export interface JournalCategoryWithCount extends JournalCategory {
  articleCount: number
}

/** Everything the header, footer and forms need on every page — `GET /api/site`. */
export interface SiteBundle {
  settings: SiteSettings
  sections: SectionSummary[]
  regions: Region[]
  destinations: DestinationSummary[]
  journalCategories: JournalCategoryWithCount[]
}

/** `GET /api/listings/:section/:slug` */
export interface ListingPage {
  listing: Listing
  related: ListingSummary[]
  destination?: DestinationSummary
}

/** `GET /api/destinations/:slug` */
export interface DestinationPage {
  destination: Destination
  listings: ListingSummary[]
  /** Neighbours in the same region first, then the rest. */
  others: DestinationSummary[]
}

/** `GET /api/articles/:slug` */
export interface ArticlePage {
  article: Article
  related: ArticleSummary[]
}

/** `GET /api/faqs` */
export interface FaqContent {
  general: FaqItem[]
  destinations: { slug: string; name: string; faqs: FaqItem[] }[]
}

/** All content, as the backend loads it from the database. */
export interface ContentSnapshot {
  settings: SiteSettings
  /** In tab order: Stays, Experiences, Expeditions, Events. */
  sections: Section[]
  regions: Region[]
  journalCategories: JournalCategory[]
  /** Every listing, hidden ones included, each with its `order`. */
  listings: Listing[]
  destinations: Destination[]
  articles: Article[]
  faqs: FaqItem[]
  testimonials: TestimonialSection
}
