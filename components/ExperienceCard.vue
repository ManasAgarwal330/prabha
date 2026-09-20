<script setup lang="ts">
import type { Experience } from '~/types'

const props = withDefaults(
  defineProps<{
    experience: Experience
    sizes?: string
    tall?: boolean
  }>(),
  { sizes: '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw', tall: false }
)

const icon = computed(() => resolveIcon(props.experience.icon))
</script>

<template>
  <NuxtLink
    :to="`/experiences#${experience.slug}`"
    v-tilt
    class="group relative block h-full overflow-hidden rounded-card"
  >
    <AppImage
      :src="experience.image"
      :alt="experience.name"
      :ratio="tall ? 3 / 4 : 1"
      :sizes="sizes"
      class="h-full w-full"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/5"
      aria-hidden="true"
    />
    <div class="absolute inset-x-0 bottom-0 p-5">
      <component :is="icon" class="mb-3 h-5 w-5 text-ivory-bright/80" aria-hidden="true" />
      <h3 class="font-display text-xl text-ivory-bright">{{ experience.name }}</h3>
      <p class="mt-1.5 line-clamp-2 text-xs leading-relaxed text-ivory-bright/80">
        {{ experience.description }}
      </p>
    </div>
  </NuxtLink>
</template>
