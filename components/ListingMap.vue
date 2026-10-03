<script setup lang="ts">
import { ExternalLink, Navigation } from 'lucide-vue-next'
import type { MapLocation } from '~/types'

/**
 * The interactive map for one place, with buttons to open it in Google Maps
 * or get directions. The embed is Google's free, key-free one; it loads lazily,
 * so a page only fetches the map when the visitor scrolls near it.
 */
withDefaults(
  defineProps<{
    map: MapLocation
    /** Read out by screen readers as the map's name. */
    label: string
    /** Tailwind height classes for the map area. */
    heightClass?: string
  }>(),
  { heightClass: 'h-72 sm:h-96' }
)
</script>

<template>
  <div>
    <div class="relative overflow-hidden rounded-card border border-hairline bg-canvas-alt shadow-soft" :class="heightClass">
      <iframe
        :src="mapEmbedUrl(map)"
        :title="`Map: ${label}`"
        class="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
      />
    </div>
    <div class="mt-4 flex flex-col gap-3 sm:flex-row">
      <a :href="mapOpenUrl(map)" target="_blank" rel="noopener noreferrer" class="btn-primary">
        <ExternalLink class="h-4 w-4" aria-hidden="true" />
        Open in Google Maps
      </a>
      <a :href="mapDirectionsUrl(map)" target="_blank" rel="noopener noreferrer" class="btn-secondary">
        <Navigation class="h-4 w-4" aria-hidden="true" />
        Get directions
      </a>
    </div>
  </div>
</template>
