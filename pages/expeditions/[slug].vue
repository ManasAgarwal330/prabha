<script setup lang="ts">
import type { ListingPage } from '~/types'

definePageMeta({ hero: true })

const route = useRoute()
const slug = String(route.params.slug)
const { data: page, error } = await useFetch<ListingPage>(`/api/listings/expeditions/${slug}`, {
  key: `listing:expeditions:${slug}`,
  getCachedData: cachedForVisit
})

if (error.value || !page.value) {
  throw createError({
    statusCode: error.value?.statusCode === 404 || !page.value ? 404 : 500,
    statusMessage: error.value?.statusCode === 404 || !page.value ? 'Expedition not found' : 'Could not load this expedition',
    fatal: true
  })
}
</script>

<template>
  <ListingDetail :page="page!" />
</template>
