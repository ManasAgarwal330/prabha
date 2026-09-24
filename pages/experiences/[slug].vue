<script setup lang="ts">
import { getListing } from '~/data/listings'

definePageMeta({ hero: true })

const route = useRoute()
const listing = getListing('experiences', String(route.params.slug))

if (!listing) {
  throw createError({ statusCode: 404, statusMessage: 'Experience not found', fatal: true })
}
</script>

<template>
  <ListingDetail :listing="listing!" />
</template>
