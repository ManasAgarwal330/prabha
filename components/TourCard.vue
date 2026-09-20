<script setup lang="ts">
import { Clock, MapPin } from 'lucide-vue-next'
import { formatPrice } from '~/data/tours'
import type { Tour } from '~/types'

withDefaults(
  defineProps<{
    tour: Tour
    sizes?: string
  }>(),
  { sizes: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw' }
)
</script>

<template>
  <article class="group relative flex h-full flex-col">
    <NuxtLink :to="`/tours/${tour.slug}`" class="block overflow-hidden rounded-card" tabindex="-1" aria-hidden="true">
      <AppImage :src="tour.image" :alt="tour.title" :ratio="4 / 3" :sizes="sizes" />
    </NuxtLink>

    <div class="flex flex-1 flex-col pt-5">
      <p class="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-accent">
        <MapPin class="h-3.5 w-3.5" aria-hidden="true" />
        {{ tour.destination }}
      </p>

      <h3 class="mt-2.5 font-display text-2xl leading-snug">
        <NuxtLink :to="`/tours/${tour.slug}`" class="transition-colors">
          <span class="absolute inset-0" />
          <span class="sweep">{{ tour.title }}</span>
        </NuxtLink>
      </h3>

      <p class="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">
        {{ tour.description }}
      </p>

      <div class="mt-5 flex items-end justify-between gap-4 border-t border-hairline pt-4">
        <span class="flex items-center gap-1.5 text-xs text-ink-muted">
          <Clock class="h-3.5 w-3.5" aria-hidden="true" />
          {{ tour.duration }}
        </span>
        <span class="text-right">
          <span class="block text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">From</span>
          <span class="font-display text-xl text-ink">{{ formatPrice(tour.price) }}</span>
        </span>
      </div>
    </div>
  </article>
</template>
