import { destinations } from '~/data/destinations'
import { tours } from '~/data/tours'
import { articles } from '~/data/blog'
import { site } from '~/data/site'

interface Entry {
  path: string
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly'
  priority: string
  lastmod?: string
}

const staticEntries: Entry[] = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/destinations', changefreq: 'weekly', priority: '0.9' },
  { path: '/tours', changefreq: 'weekly', priority: '0.9' },
  { path: '/experiences', changefreq: 'monthly', priority: '0.8' },
  { path: '/blog', changefreq: 'weekly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/plan-my-trip', changefreq: 'monthly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.7' },
  { path: '/faq', changefreq: 'monthly', priority: '0.6' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' }
]

export default defineEventHandler((event) => {
  const base = (useRuntimeConfig().public.siteUrl as string) || site.url
  const today = new Date().toISOString().slice(0, 10)

  const entries: Entry[] = [
    ...staticEntries,
    ...destinations.map((destination) => ({
      path: `/destinations/${destination.slug}`,
      changefreq: 'monthly' as const,
      priority: '0.8'
    })),
    ...tours.map((tour) => ({
      path: `/tours/${tour.slug}`,
      changefreq: 'monthly' as const,
      priority: '0.8'
    })),
    ...articles.map((article) => ({
      path: `/blog/${article.slug}`,
      changefreq: 'yearly' as const,
      priority: '0.6',
      lastmod: article.publishedAt
    }))
  ]

  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${base}${entry.path === '/' ? '/' : entry.path}</loc>
    <lastmod>${entry.lastmod || today}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join('\n')

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
})
