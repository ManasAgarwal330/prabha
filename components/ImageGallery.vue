<script setup lang="ts">
import type { ImageRef } from '~/types'

defineProps<{
  images: ImageRef[]
  label: string
}>()

/**
 * Mosaic: a large lead photograph, a wide one beside it, then the rest in the
 * remaining cells. Row heights are fixed, so each image fills its cell.
 */
const cellClass = (index: number) =>
  index === 0 ? 'col-span-2 row-span-2' : index === 1 ? 'col-span-2' : ''

/** Crop each photograph close to its cell's shape. */
const cellRatio = (index: number) => (index === 0 ? 1.1 : index === 1 ? 2.2 : 1)
</script>

<template>
  <ul class="grid auto-rows-[10rem] grid-cols-2 gap-3 sm:auto-rows-[13rem] sm:gap-4 lg:auto-rows-[15rem] lg:grid-cols-4">
    <li
      v-for="(image, index) in images"
      :key="image"
      class="reveal-media glow-card min-w-0 overflow-hidden rounded-card shadow-soft"
      :class="cellClass(index)"
      :style="{ transitionDelay: `${index * 60}ms` }"
    >
      <AppImage
        :src="image"
        :alt="`${label} — photograph ${index + 1}`"
        :ratio="cellRatio(index)"
        :sizes="index < 2 ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'"
        class="h-full w-full"
      />
    </li>
  </ul>
</template>
