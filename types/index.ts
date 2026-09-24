/**
 * Pravaah content models.
 * Every piece of copy, price and image on the site is typed here and lives in `data/`.
 * Swapping dummy content for real content never requires touching a component.
 */

/** An Unsplash photo id (`photo-...`) or an absolute/relative path under /public/images. */
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

export type RegionSlug = 'india' | 'north-india' | 'northeast-india' | 'west-india'

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
  seo: SeoMeta
}

export interface KeyFact {
  label: string
  value: string
}

/** A single stay, experience, expedition or event with its own detail page. */
export interface Listing {
  slug: string
  section: SectionKey
  /** Slug of a category within the section. */
  category: string
  title: string
  location: string
  destinationSlug?: string
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
  featured?: boolean
  seo: SeoMeta
}

export interface Testimonial {
  name: string
  location: string
  trip: string
  quote: string
  rating?: number
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
