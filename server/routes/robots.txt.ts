export default defineEventHandler((event) => {
  const base = String(useRuntimeConfig().public.siteUrl)

  setHeader(event, 'content-type', 'text/plain; charset=utf-8')

  return `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`
})
