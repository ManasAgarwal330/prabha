<script setup lang="ts">
import { site } from '~/data/site'

/**
 * The Prabha mark: a sun rising over a range — light, horizon and path.
 * `symbol` colours follow `currentColor` so the logo works in ivory, charcoal and full colour.
 */
withDefaults(
  defineProps<{
    variant?: 'full' | 'symbol'
    tone?: 'brand' | 'inherit'
    size?: 'sm' | 'md' | 'lg'
  }>(),
  { variant: 'full', tone: 'brand', size: 'md' }
)

const sizeMap = {
  sm: { mark: 'h-6 w-6', text: 'text-lg' },
  md: { mark: 'h-8 w-8', text: 'text-[1.4rem]' },
  lg: { mark: 'h-12 w-12', text: 'text-3xl' }
} as const
</script>

<template>
  <span class="inline-flex items-center gap-2.5 align-middle">
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      class="shrink-0"
      :class="sizeMap[size].mark"
    >
      <circle cx="20" cy="10" r="4.6" :fill="tone === 'brand' ? '#B45F3F' : 'currentColor'" />
      <path
        d="M2.8 33.2 12.6 21.4 19.6 29.2 27 19.4 37.2 33.2"
        :stroke="tone === 'brand' ? '#2E4A3C' : 'currentColor'"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span
      v-if="variant === 'full'"
      class="font-display font-medium leading-none tracking-[0.06em]"
      :class="sizeMap[size].text"
    >
      {{ site.name }}
    </span>
    <span v-else class="sr-only">{{ site.name }}</span>
  </span>
</template>
