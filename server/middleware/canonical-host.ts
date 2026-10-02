/**
 * One address per page. Netlify also serves the site on its own *.netlify.app
 * address; search engines treat that as a duplicate competing with the real
 * domain, so it is sent to the domain in NUXT_PUBLIC_SITE_URL with a permanent
 * redirect. Deploy previews and branch deploys (whose host contains "--") stay
 * reachable for review but are marked noindex.
 */
export default defineEventHandler((event) => {
  if (import.meta.dev) return

  const canonical = new URL(String(useRuntimeConfig().public.siteUrl))
  const host = getRequestHost(event, { xForwardedHost: true }).toLowerCase()
  if (!host || host === canonical.host) return

  if (host.endsWith('.netlify.app')) {
    if (host.includes('--')) {
      setHeader(event, 'x-robots-tag', 'noindex, nofollow')
      return
    }
    return sendRedirect(event, `${canonical.origin}${event.path}`, 301)
  }

  if (host === `www.${canonical.host}`) return sendRedirect(event, `${canonical.origin}${event.path}`, 301)
})
