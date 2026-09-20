<script setup lang="ts">
import type { ImageRef } from '~/types'

defineProps<{
  images: ImageRef[]
  label: string
}>()
</script>

<template>
  <ul class="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
    <li
      v-for="(image, index) in images"
      :key="image"
      class="reveal min-w-0 overflow-hidden rounded-card"
      :style="{ transitionDelay: `${index * 60}ms` }"
    >
      <AppImage
        :src="image"
        :alt="`${label} — photograph ${index + 1}`"
        :ratio="4 / 5"
        sizes="(min-width: 1024px) 25vw, 50vw"
        class="h-full w-full"
      />
    </li>
  </ul>
</template>
