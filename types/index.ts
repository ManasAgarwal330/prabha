/**
 * Prabha content models.
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

export interface Destination {
  slug: string
  name: string
  state: string
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

export interface Tour {
  slug: string
  title: string
  destinationSlug: string
  destination: string
  duration: string
  nights: number
  days: number
  /** Starting price per person in INR. */
  price: number
  image: ImageRef
  gallery: ImageRef[]
  description: string
  overview: string[]
  themes: string[]
  highlights: string[]
  itinerary: ItineraryDay[]
  inclusions: string[]
  exclusions: string[]
  importantInfo: string[]
  bestTimeToTravel: string
  groupSize: string
  popular?: boolean
  seo: SeoMeta
}

export interface Experience {
  slug: string
  name: string
  description: string
  image: ImageRef
  /** Lucide icon name rendered by the ExperienceCard. */
  icon: string
  destinations: string[]
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
