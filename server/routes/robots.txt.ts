import { site } from '~/data/site'

export default defineEventHandler((event) => {
  const base = (useRuntimeConfig().public.siteUrl as string) || site.url

  setHeader(event, 'content-type', 'text/plain; charset=utf-8')

  return `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`
})
