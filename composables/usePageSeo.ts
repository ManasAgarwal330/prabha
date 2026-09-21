import { site } from '~/data/site'
import { buildImageUrl } from '~/composables/useImageSource'
import type { ImageRef } from '~/types'

export interface PageSeoInput {
  title: string
  description: string
  /** Path only, e.g. `/tours/magical-kashmir`. Canonical + OG url are derived from it. */
  path: string
  image?: ImageRef
  type?: 'website' | 'article'
  publishedAt?: string
  noindex?: boolean
}

/**
 * Applies title, description, canonical, OpenGraph and Twitter metadata for a page.
 * Every route calls this exactly once.
 */
export const usePageSeo = (input: PageSeoInput) => {
  const config = useRuntimeConfig()
  const base = (config.public.siteUrl as string) || site.url
  const url = `${base}${input.path === '/' ? '' : input.path}`

  const image = input.image
    ? buildImageUrl(input.image, { width: 1200, ratio: 1.91, quality: 75 })
    : `${base}/brand/pravaah-logo.svg`

  useHead({
    title: input.title,
    titleTemplate: (chunk?: string) =>
      chunk && !chunk.includes(site.name) ? `${chunk} | ${site.name}` : chunk || site.name,
    link: [{ rel: 'canonical', href: url }],
    meta: input.noindex ? [{ name: 'robots', content: 'noindex, follow' }] : []
  })

  useSeoMeta({
    description: input.description,
    ogTitle: input.title,
    ogDescription: input.description,
    ogType: input.type || 'website',
    ogUrl: url,
    ogImage: image,
    ogImageAlt: input.title,
    ogSiteName: site.name,
    ogLocale: site.locale,
    twitterCard: 'summary_large_image',
    twitterTitle: input.title,
    twitterDescription: input.description,
    twitterImage: image,
    ...(input.publishedAt ? { articlePublishedTime: input.publishedAt } : {})
  })

  return { url, base }
}
