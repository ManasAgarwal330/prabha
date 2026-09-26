<script setup lang="ts">
import type { ImageRef } from '~/types'

const props = defineProps<{
  images: ImageRef[]
  label: string
}>()

/**
 * Mosaic: a large lead photograph, a wide one beside it, then the rest in the
 * remaining cells. Row heights are fixed, so each image fills its cell.
 * The first four fill two full rows; photographs past that run in rows of four
 * (two on phones), and the last row stretches so no cell is left empty.
 */
const cellClass = (index: number) => {
  if (index === 0) return 'col-span-2 row-span-2'
  if (index === 1) return 'col-span-2'

  const count = props.images.length
  const remainder = (count - 4) % 4
  if (index < 4 || remainder === 0) return ''

  const fromEnd = count - 1 - index
  // Phones: two columns, so an odd count leaves the last photograph alone.
  const phone = count % 2 === 1 && fromEnd === 0 ? 'col-span-2' : ''
  const desktop =
    // A lone last photograph spans the full width; two rows tall keeps it a
    // panorama rather than a thin strip that crops away most of the picture.
    remainder === 1 && fromEnd === 0
      ? 'lg:col-span-4 lg:row-span-2'
      : (remainder === 2 && fromEnd < 2) || (remainder === 3 && fromEnd === 0)
        ? 'lg:col-span-2'
        : ''
  return `${phone} ${desktop}`
}

/** Crop each photograph close to its cell's shape. */
const cellRatio = (index: number) =>
  index === 0 ? 1.1 : index === 1 || cellClass(index).includes('col-span') ? 2.2 : 1
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
