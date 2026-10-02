import type { Listing, ListingSummary, SectionKey, SiteBundle } from '~/types'

/**
 * Site-wide content from the backend (`GET /api/site`): brand and contact
 * settings, the four tabs with their categories, regions, destinations and
 * journal categories. app.vue loads it once per page load with `loadSiteBundle()`;
 * everything else reads it synchronously with `useSiteBundle()`.
 */
export const SITE_KEY = 'site'

export const loadSiteBundle = () => useAsyncData(SITE_KEY, () => $fetch<SiteBundle>('/api/site'))

export const useSiteBundle = (): SiteBundle => {
  const { data } = useNuxtData<SiteBundle>(SITE_KEY)
  if (!data.value) throw new Error('Site content is not loaded — app.vue must await loadSiteBundle() first.')
  return data.value
}

export const useSettings = () => useSiteBundle().settings

export const useSection = (key: SectionKey) => {
  const section = useSiteBundle().sections.find((s) => s.key === key)
  if (!section) throw createError({ statusCode: 404, statusMessage: 'Section not found', fatal: true })
  return section
}

export const listingPath = (listing: Pick<Listing | ListingSummary, 'section' | 'slug'>) =>
  `/${listing.section}/${listing.slug}`

export interface NavItem {
  label: string
  to: string
  children?: { label: string; to: string }[]
  /** Last link in the dropdown, back to the tab's own page. Defaults to "All <label>". */
  allLabel?: string
  /** Shown last on desktop, styled as the header's call-to-action button. */
  highlight?: boolean
}

/**
 * The header menu, built from the content: each tab lists only the categories
 * that have something in them, Destinations lists every destination in order,
 * and Journals lists the categories that have stories.
 */
export const usePrimaryNav = (): NavItem[] => {
  const { sections, destinations, journalCategories, settings } = useSiteBundle()
  return [
    ...sections.map((section) => ({
      label: section.name,
      to: section.path,
      children: section.categories
        .filter((category) => category.listingCount > 0)
        .map((category) => ({ label: category.name, to: `${section.path}#${category.slug}` }))
    })),
    {
      label: 'Destinations',
      to: '/destinations',
      children: destinations.map((d) => ({ label: d.name, to: `/destinations/${d.slug}` }))
    },
    {
      label: 'Journals',
      to: '/journals',
      children: journalCategories
        .filter((category) => category.articleCount > 0)
        .map((category) => ({ label: category.name, to: `/journals?category=${category.slug}#stories` }))
    },
    {
      label: 'Plan Your Journey',
      to: '/plan-my-trip',
      allLabel: 'Start planning',
      highlight: true,
      children: [
        ...settings.tripTypes.map((type) => ({ label: type.label, to: `/plan-my-trip?trip=${type.slug}#enquiry` })),
        { label: 'Talk to a Travel Designer', to: '/contact' }
      ]
    },
    // About is out of scope for now: /about still exists but nothing links to it.
    { label: 'Contact', to: '/contact' }
  ]
}

/** Footer links — page structure, not content, so it stays in code. */
export const footerNav = {
  company: [
    { label: 'Contact', to: '/contact' },
    { label: 'Plan My Trip', to: '/plan-my-trip' }
  ],
  explore: [
    { label: 'Stays', to: '/stays' },
    { label: 'Experiences', to: '/experiences' },
    { label: 'Expeditions', to: '/expeditions' },
    { label: 'Events', to: '/events' },
    { label: 'Destinations', to: '/destinations' },
    { label: 'Journals', to: '/journals' }
  ],
  support: [
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
    { label: 'Terms', to: '/terms' },
    { label: 'Privacy', to: '/privacy-policy' }
  ]
}

/**
 * Lets a page tell the enquiry popup which destination it is about, so the
 * popup can pre-select it. Tied to the path, so it never leaks onto the next page.
 */
export const useEnquiryContext = () =>
  useState<{ path: string; destination: string } | null>('enquiry-context', () => null)

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

/**
 * `getCachedData` for page fetches: once a page's data has been loaded, going back
 * to it in the same visit reuses it instead of calling the API (and Cosmos) again.
 * A full page refresh starts with empty memory, so it always loads fresh data.
 * Needs `experimental.purgeCachedData: false` (nuxt.config) so data survives navigation.
 *
 *   useFetch('/api/faqs', { key: 'faqs', getCachedData: cachedForVisit })
 */
export const cachedForVisit = <T>(
  key: string,
  nuxtApp: { payload: { data: Record<string, unknown> }; static: { data: Record<string, unknown> } },
  context: { cause: string }
): T | undefined =>
  context.cause === 'refresh:manual' ? undefined : ((nuxtApp.payload.data[key] ?? nuxtApp.static.data[key]) as T | undefined)
