import { site } from '~/data/site'
import { buildImageUrl } from '~/composables/useImageSource'
import type { Article, Destination, FaqItem, Tour } from '~/types'

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

const baseUrl = () => {
  const config = useRuntimeConfig()
  return (config.public.siteUrl as string) || site.url
}

export const organizationLd = (): Json => {
  const base = baseUrl()
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': `${base}/#organization`,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: base,
    logo: `${base}/brand/pravaah-logo.svg`,
    image: `${base}/brand/pravaah-logo.svg`,
    email: site.contact.email,
    telephone: site.contact.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.contact.address.line2,
      addressLocality: site.contact.address.city,
      addressRegion: site.contact.address.state,
      postalCode: site.contact.address.postalCode,
      addressCountry: 'IN'
    },
    areaServed: { '@type': 'Country', name: 'India' },
    sameAs: [site.social.instagram, site.social.facebook, site.social.youtube]
  }
}

export const websiteLd = (): Json => {
  const base = baseUrl()
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${base}/#website`,
    name: site.name,
    url: base,
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
      item: `${base}${crumb.path === '/' ? '' : crumb.path}`
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
    image: buildImageUrl(destination.heroImage, { width: 1600, ratio: 1.6 }),
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
 * Tours are described as TouristTrip with a Offer for the starting price.
 * No aggregateRating or review schema is emitted — we do not publish fabricated ratings.
 */
export const tourLd = (tour: Tour): Json => {
  const base = baseUrl()
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.title,
    description: tour.description,
    url: `${base}/tours/${tour.slug}`,
    image: buildImageUrl(tour.image, { width: 1600, ratio: 1.6 }),
    provider: { '@id': `${base}/#organization` },
    touristType: tour.themes,
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: tour.itinerary.length,
      itemListElement: tour.itinerary.map((day) => ({
        '@type': 'ListItem',
        position: day.day,
        item: { '@type': 'TouristAttraction', name: day.title, description: day.description }
      }))
    },
    offers: {
      '@type': 'Offer',
      price: tour.price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `${base}/tours/${tour.slug}`
    }
  }
}

export const articleLd = (article: Article): Json => {
  const base = baseUrl()
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    url: `${base}/blog/${article.slug}`,
    image: buildImageUrl(article.coverImage, { width: 1600, ratio: 1.6 }),
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    articleSection: article.category,
    author: { '@type': 'Organization', name: article.author },
    publisher: { '@id': `${base}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${base}/blog/${article.slug}` },
    inLanguage: 'en-IN'
  }
}
