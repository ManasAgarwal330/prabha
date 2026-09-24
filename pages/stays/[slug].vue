<script setup lang="ts">
import { getListing } from '~/data/listings'

definePageMeta({ hero: true })

const route = useRoute()
const listing = getListing('stays', String(route.params.slug))

if (!listing) {
  throw createError({ statusCode: 404, statusMessage: 'Stay not found', fatal: true })
}
</script>

<template>
  <ListingDetail :listing="listing!" />
</template>
