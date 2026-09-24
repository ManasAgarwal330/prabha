<script setup lang="ts">
import { ArrowUpRight, BedDouble, Clock, MapPin } from 'lucide-vue-next'
import { getCategory } from '~/data/sections'
import { listingPath } from '~/data/listings'
import type { Listing } from '~/types'

const props = withDefaults(
  defineProps<{
    listing: Listing
    sizes?: string
  }>(),
  { sizes: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw' }
)

const to = computed(() => listingPath(props.listing))
const category = computed(() => getCategory(props.listing.section, props.listing.category))
/** Stays lead with the setting; everything else leads with its duration. */
const leadFact = computed(() => props.listing.facts[0])
const leadIcon = computed(() => (props.listing.section === 'stays' ? BedDouble : Clock))
</script>

<template>
  <article class="glow-card group card-lift relative flex h-full flex-col overflow-hidden rounded-card border border-hairline bg-surface shadow-soft">
    <NuxtLink :to="to" class="relative block overflow-hidden" tabindex="-1" aria-hidden="true">
      <AppImage :src="listing.image" :alt="listing.title" :ratio="4 / 3" :sizes="sizes" />
      <span
        v-if="category"
        class="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-pill border border-white/15 bg-navy-deep/60 px-3 py-1.5 font-mono text-[0.62rem] font-medium uppercase tracking-[0.12em] text-white backdrop-blur-md"
      >
        {{ category.name }}
      </span>
    </NuxtLink>

    <div class="flex flex-1 flex-col p-6">
      <p class="flex items-center gap-1.5 font-mono text-[0.66rem] font-medium uppercase tracking-[0.12em] text-accent">
        <MapPin class="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        {{ listing.location }}
      </p>

      <h3 class="mt-2.5 font-display text-2xl leading-snug tracking-[-0.015em]">
        <NuxtLink :to="to" class="transition-colors">
          <span class="absolute inset-0" />
          <span class="sweep">{{ listing.title }}</span>
        </NuxtLink>
      </h3>

      <p class="mb-5 mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">
        {{ listing.description }}
      </p>

      <div class="mt-auto flex items-center justify-between gap-4 border-t border-hairline pt-4">
        <span v-if="leadFact" class="flex min-w-0 items-center gap-1.5 text-xs text-ink-muted">
          <component :is="leadIcon" class="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span class="truncate">{{ leadFact.value }}</span>
        </span>
        <span class="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-ink">
          Explore
          <ArrowUpRight
            class="h-4 w-4 transition-transform duration-300 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </div>
  </article>
</template>
