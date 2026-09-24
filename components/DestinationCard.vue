<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { listingsByDestination } from '~/data/listings'
import type { Destination } from '~/types'

const props = withDefaults(
  defineProps<{
    destination: Destination
    /** `feature` is the large editorial tile; `compact` is the stacked grid tile. */
    size?: 'feature' | 'compact'
    sizes?: string
  }>(),
  { size: 'compact', sizes: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw' }
)

const listingCount = computed(() => listingsByDestination(props.destination.slug).length)
const experienceCount = computed(() => props.destination.experiences.length)
</script>

<template>
  <NuxtLink
    :to="`/destinations/${destination.slug}`"
    v-tilt
    class="group relative block h-full overflow-hidden rounded-card"
  >
    <AppImage
      :src="destination.image"
      :alt="`${destination.name}, ${destination.state}`"
      :ratio="size === 'feature' ? 4 / 5 : 3 / 2"
      :sizes="sizes"
      class="h-full w-full"
    />

    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-charcoal/10"
      aria-hidden="true"
    />

    <div class="absolute inset-x-0 bottom-0 p-6 text-ivory-bright sm:p-7">
      <p class="mb-3 inline-flex items-center rounded-pill border border-ivory-bright/30 bg-ivory-bright/10 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ivory-bright backdrop-blur-md">{{ destination.state }}</p>
      <h3 class="font-display leading-tight tracking-[-0.015em]" :class="size === 'feature' ? 'text-display-sm' : 'text-2xl'">
        <span class="sweep">{{ destination.name }}</span>
      </h3>
      <p
        class="mt-2 max-w-md text-sm leading-relaxed text-ivory-bright/90"
        :class="size === 'feature' ? '' : 'line-clamp-2'"
      >
        {{ destination.description }}
      </p>

      <div class="mt-5 flex items-center justify-between gap-4 border-t border-ivory-bright/20 pt-4">
        <span class="text-xs text-ivory-bright/75">
          <template v-if="listingCount">{{ listingCount }} {{ listingCount === 1 ? 'stay or trip' : 'stays & trips' }} · </template>{{ experienceCount }} highlights
        </span>
        <span class="inline-flex items-center gap-1.5 text-xs font-medium text-ivory-bright">
          Explore
          <ArrowUpRight
            class="h-4 w-4 transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
