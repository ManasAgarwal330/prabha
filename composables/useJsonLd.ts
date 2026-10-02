import { buildImageUrl } from '~/composables/useImageSource'
import type { Article, Destination, FaqItem, ImageRef, Listing } from '~/types'

type Json = Record<string, unknown>

/**
 * Injects one or more JSON-LD blocks into the page head.
 * Keys are derived from the schema type so app-level blocks (Organization,
 * WebSite) are never overwritten by the page-level ones.
 */
export const useJsonLd = (...blocks: Json[]) => {
  useHead({
    script: blocks.map((block, index) => ({
      key: `ld-${String(block['@type'] ?? index).toLowerCase()}`,
      type: 'application/ld+json',
      innerHTML: JSON.stringify(block)
    }))
  })
}

const baseUrl = () => String(useRuntimeConfig().public.siteUrl)

/** Absolute, because structured data is read off-site; self-hosted images resolve to a path. */
const imageUrl = (ref: ImageRef) =>
  new URL(buildImageUrl(ref, { width: 1600, ratio: 1.6, base: useRuntimeConfig().public.imageBaseUrl }), baseUrl()).href

/**
 * Every name people might search the brand by. Google uses `alternateName` on the
 * WebSite and Organization to match these searches to this site and to choose the
 * site name shown in results.
 */
const brandNames = (site: ReturnType<typeof useSettings>, base: string) => {
  const domain = new URL(base).host
  return [
    ...new Set([
      site.legalName,
      'The Pravaah',
      `${site.name} India`,
      `${site.name} Travel`,
      `${site.name} Travels`,
      `${site.name} Tours and Travels`,
      `${site.name} Tours & Travels`,
      `${site.name} Tours`,
      `${site.name} Holidays`,
      domain
    ])
  ]
}

export const organizationLd = (): Json => {
  const base = baseUrl()
  const site = useSettings()
  const { sections, destinations } = useSiteBundle()
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': `${base}/#organization`,
    name: site.name,
    legalName: site.legalName,
    alternateName: brandNames(site, base),
    description: site.description,
    slogan: site.tagline,
    url: `${base}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${base}/brand/pravaah-logo.png`,
      caption: site.name
    },
    image: `${base}/brand/pravaah-logo-square.jpg`,
    foundingDate: site.founded,
    email: site.contact.email,
    telephone: site.contact.phoneHref,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: site.contact.phoneHref,
      email: site.contact.email,
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi']
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: site.contact.location.region,
      addressCountry: 'IN'
    },
    areaServed: { '@type': 'Country', name: 'India' },
    knowsAbout: [
      'Tours and travels',
      'Tour packages',
      'Homestay booking',
      'Hotel and resort booking',
      'Himalayan treks',
      'Uttarakhand travel',
      'Kumaon homestays',
      'Festival trips in India',
      ...destinations.map((d) => `${d.name} travel`)
    ],
    // What the business offers, from the live tabs and categories — helps match
    // searches like "homestay booking" or "trek packages" to the brand.
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${site.name} travel services`,
      itemListElement: sections.map((section) => ({
        '@type': 'OfferCatalog',
        name: section.name,
        itemListElement: section.categories
          .filter((category) => category.listingCount > 0)
          .map((category) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: category.name,
              description: category.description,
              url: `${base}${section.path}#${category.slug}`,
              provider: { '@id': `${base}/#organization` },
              areaServed: { '@type': 'Country', name: 'India' }
            }
          }))
      }))
    },
    sameAs: [site.social.instagram]
  }
}

/** A list of pages, e.g. the stays on the Stays tab, so search engines see them as one collection. */
export const itemListLd = (name: string, items: { name: string; path: string }[]): Json => {
  const base = baseUrl()
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: `${base}${item.path}`
    }))
  }
}

export const websiteLd = (): Json => {
  const base = baseUrl()
  const site = useSettings()
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${base}/#website`,
    name: site.name,
    alternateName: brandNames(site, base),
    url: `${base}/`,
    description: site.description,
    publisher: { '@id': `${base}/#organization` },
    inLanguage: 'en-IN'
  }
}

export interface Crumb {
  name: string
  path: string
}

export const breadcrumbLd = (crumbs: Crumb[]): Json => {
  const base = baseUrl()
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${base}${crumb.path}`
    }))
  }
}

export const faqLd = (faqs: FaqItem[]): Json => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer }
  }))
})

export const destinationLd = (destination: Destination): Json => {
  const base = baseUrl()
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: destination.name,
    description: destination.description,
    url: `${base}/destinations/${destination.slug}`,
    image: imageUrl(destination.heroImage),
    touristType: destination.categories,
    includesAttraction: destination.whyVisit.map((item) => ({
      '@type': 'TouristAttraction',
      name: item.title,
      description: item.description
    })),
    address: {
      '@type': 'PostalAddress',
      addressRegion: destination.state,
      addressCountry: 'IN'
    }
  }
}

/**
 * Stays are described as LodgingBusiness; everything else as a TouristTrip.
 * No prices, ratings or review schema are emitted — rates are on request and
 * we do not publish fabricated ratings.
 */
export const listingLd = (listing: Listing): Json => {
  const base = baseUrl()
  const url = `${base}/${listing.section}/${listing.slug}`
  const image = imageUrl(listing.image)

  if (listing.section === 'stays') {
    return {
      '@context': 'https://schema.org',
      '@type': 'LodgingBusiness',
      name: listing.title,
      description: listing.description,
      url,
      image,
      address: { '@type': 'PostalAddress', addressLocality: listing.location, addressCountry: 'IN' }
    }
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: listing.title,
    description: listing.description,
    url,
    image,
    provider: { '@id': `${base}/#organization` },
    ...(listing.itinerary?.length
      ? {
          itinerary: {
            '@type': 'ItemList',
            numberOfItems: listing.itinerary.length,
            itemListElement: listing.itinerary.map((day) => ({
              '@type': 'ListItem',
              position: day.day,
              item: { '@type': 'TouristAttraction', name: day.title, description: day.description }
            }))
          }
        }
      : {})
  }
}

export const articleLd = (article: Article): Json => {
  const base = baseUrl()
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    url: `${base}/journals/${article.slug}`,
    image: imageUrl(article.coverImage),
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    articleSection: article.category,
    author: { '@type': 'Organization', name: article.author },
    publisher: { '@id': `${base}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${base}/journals/${article.slug}` },
    inLanguage: 'en-IN'
  }
}
