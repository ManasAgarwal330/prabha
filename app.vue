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

// Site-wide structured data, emitted once on every page.
useJsonLd(organizationLd(), websiteLd())
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
