<script setup lang="ts">
import { site } from '~/data/site'

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
