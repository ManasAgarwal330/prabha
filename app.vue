<script setup lang="ts">
// Site-wide content (settings, tabs, destinations) from the backend. Awaited so every
// component below can read it synchronously with useSiteBundle().
const { error } = await loadSiteBundle()
if (error.value) {
  throw createError({ statusCode: 503, statusMessage: 'The site is temporarily unavailable.', fatal: true })
}

const site = useSettings()

useHead({
  titleTemplate: (chunk?: string) =>
    chunk && !chunk.includes(site.name) ? `${chunk} | ${site.name}` : chunk || `${site.name} — ${site.titleTagline}`
})

// Ownership checks for Google Search Console and Bing Webmaster Tools, when configured.
const { googleSiteVerification, bingSiteVerification } = useRuntimeConfig().public
useHead({
  meta: [
    ...(googleSiteVerification ? [{ name: 'google-site-verification', content: String(googleSiteVerification) }] : []),
    ...(bingSiteVerification ? [{ name: 'msvalidate.01', content: String(bingSiteVerification) }] : [])
  ]
})

// Google ignores the keywords tag, but Bing and some smaller engines still read it.
const { destinations } = useSiteBundle()
useSeoMeta({
  keywords: [
    site.name,
    site.legalName,
    `${site.name} India`,
    `${site.name} travel`,
    `${site.name} tours and travels`,
    'tours and travels',
    'tour packages',
    'homestay booking',
    'hotel booking',
    'resort booking',
    'Himalayan treks',
    'trekking packages',
    ...destinations.map((d) => `${d.name} tour packages`)
  ].join(', ')
})

// Site-wide structured data, emitted once on every page.
useJsonLd(organizationLd(), websiteLd())
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
