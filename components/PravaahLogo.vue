<script setup lang="ts">
import { site } from '~/data/site'

/**
 * The Pravaah logo — mountain, pines, sun and river above the "thepravaah.in" wordmark.
 * `brand` is the navy version for light surfaces (the forest-green original is
 * kept as pravaah-logo.png); `light` is the white version for photographs and dark bands.
 */
withDefaults(
  defineProps<{
    tone?: 'brand' | 'light'
    size?: 'sm' | 'md' | 'lg'
  }>(),
  { tone: 'brand', size: 'md' }
)

const sizeMap = {
  sm: 'h-11',
  md: 'h-12 sm:h-14',
  lg: 'h-20 sm:h-24'
} as const
</script>

<template>
  <img
    :src="tone === 'light' ? '/brand/pravaah-logo-light.png' : '/brand/pravaah-logo-navy.png'"
    :alt="site.name"
    width="907"
    height="424"
    class="block w-auto max-w-none select-none"
    :class="sizeMap[size]"
    draggable="false"
  />
</template>
