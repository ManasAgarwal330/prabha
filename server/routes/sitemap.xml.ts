import { buildImageUrl } from '~/composables/useImageSource'
import type { ImageRef } from '~/types'

/**
 * Every public page, built from the live content so new listings, destinations and
 * stories appear automatically. Each page also lists its main photos (Google image
 * sitemap extension), which helps them show up in image search.
 */
interface Entry {
  path: string
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly'
  priority: string
  lastmod?: string
  images?: { ref: ImageRef; title: string }[]
}

const staticEntries: Entry[] = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/destinations', changefreq: 'weekly', priority: '0.9' },
  { path: '/stays', changefreq: 'weekly', priority: '0.9' },
  { path: '/experiences', changefreq: 'weekly', priority: '0.9' },
  { path: '/expeditions', changefreq: 'weekly', priority: '0.9' },
  { path: '/events', changefreq: 'weekly', priority: '0.8' },
  { path: '/journals', changefreq: 'weekly', priority: '0.8' },
  { path: '/plan-my-trip', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq', changefreq: 'monthly', priority: '0.6' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' }
]

const escapeXml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const base = String(config.public.siteUrl).replace(/\/$/, '')
  const imageBase = String(config.public.imageBaseUrl || '')
  const snapshot = await loadContent()
  const today = new Date().toISOString().slice(0, 10)

  const entries: Entry[] = [
    ...staticEntries,
    ...snapshot.destinations.map((destination) => ({
      path: `/destinations/${destination.slug}`,
      changefreq: 'monthly' as const,
      priority: '0.8',
      images: [destination.heroImage, ...destination.gallery.slice(0, 4)].map((ref) => ({ ref, title: destination.name }))
    })),
    ...visibleListings(snapshot).map((listing) => ({
      path: `/${listing.section}/${listing.slug}`,
      changefreq: 'monthly' as const,
      priority: '0.8',
      images: [listing.image, ...listing.gallery.slice(0, 4)].map((ref) => ({ ref, title: listing.title }))
    })),
    ...snapshot.articles.map((article) => ({
      path: `/journals/${article.slug}`,
      changefreq: 'yearly' as const,
      priority: '0.6',
      lastmod: article.publishedAt,
      images: [{ ref: article.coverImage, title: article.title }]
    }))
  ]

  const imageUrl = (ref: ImageRef) => new URL(buildImageUrl(ref, { width: 1920, base: imageBase }), base).href

  const urls = entries
    .map((entry) => {
      const images = (entry.images ?? [])
        .map(
          (image) => `
    <image:image>
      <image:loc>${escapeXml(imageUrl(image.ref))}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
    </image:image>`
        )
        .join('')
      return `  <url>
    <loc>${base}${entry.path}</loc>
    <lastmod>${entry.lastmod || today}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>${images}
  </url>`
    })
    .join('\n')

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`
})
