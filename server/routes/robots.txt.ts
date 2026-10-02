/**
 * Crawlers may index every page; the JSON API behind the pages is not content and
 * stays out of results. The sitemap address must be on the live domain (NUXT_PUBLIC_SITE_URL).
 */
export default defineEventHandler((event) => {
  const base = String(useRuntimeConfig().public.siteUrl).replace(/\/$/, '')

  setHeader(event, 'content-type', 'text/plain; charset=utf-8')

  return `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${base}/sitemap.xml
`
})
