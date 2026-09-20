<script setup lang="ts">
import { Search, X } from 'lucide-vue-next'
import { destinationCategories, destinations } from '~/data/destinations'
import type { DestinationCategory } from '~/types'

const query = ref('')
const activeCategory = ref<DestinationCategory | 'All'>('All')

const filtered = computed(() => {
  const term = query.value.trim().toLowerCase()

  return destinations.filter((destination) => {
    const matchesCategory =
      activeCategory.value === 'All' || destination.categories.includes(activeCategory.value)

    if (!term) return matchesCategory

    const haystack = [
      destination.name,
      destination.state,
      destination.tagline,
      destination.description,
      ...destination.categories,
      ...destination.experiences
    ]
      .join(' ')
      .toLowerCase()

    return matchesCategory && haystack.includes(term)
  })
})

const clearFilters = () => {
  query.value = ''
  activeCategory.value = 'All'
}

/** Groups destinations by the season they are at their best. */
const seasonal = [
  {
    window: 'Right now — September to November',
    note: 'Clear skies after the monsoon and the widest choice of routes in the year.',
    slugs: ['kashmir', 'northeast-india', 'kerala']
  },
  {
    window: 'Winter — December to February',
    note: 'Desert light, snow in the hills and the most comfortable weather in the south.',
    slugs: ['rajasthan', 'goa', 'kerala']
  },
  {
    window: 'Spring & summer — March to June',
    note: 'Blossom in the valley, high passes reopening and the season for the cold desert.',
    slugs: ['himachal-pradesh', 'kashmir']
  }
]

const bySlug = (slug: string) => destinations.find((d) => d.slug === slug)

usePageSeo({
  title: 'Destinations in India — Where Prabha Travels',
  description:
    'Explore the six regions Prabha plans journeys across: Kashmir, Himachal Pradesh, Rajasthan, Kerala, Goa and Northeast India, with seasons and trip ideas for each.',
  path: '/destinations',
  image: 'photo-1598091383021-15ddea10925d'
})

useJsonLd(
  breadcrumbLd([
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' }
  ])
)
</script>

<template>
  <div>
    <section class="container-prabha pb-4 pt-16 lg:pt-20">
      <Breadcrumbs
        :items="[
          { name: 'Home', path: '/' },
          { name: 'Destinations', path: '/destinations' }
        ]"
      />

      <div class="mt-8 max-w-3xl">
        <p class="eyebrow mb-4">Destinations</p>
        <h1 class="text-display-lg">Six regions we know well enough to plan properly.</h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
          We would rather go deep in a handful of places than thin across all of India. Filter by the kind of trip
          you are after, or search for something specific.
        </p>
      </div>
    </section>

    <!-- Search, filters and results share a wrapper so the sticky bar releases
         once you are past the results rather than following you down the page. -->
    <div>
      <!-- Search + filters -->
      <!-- The sticky backdrop spans the full width; only the contents are
           constrained, so the bar lines up with the page grid at every size. -->
      <section class="sticky top-16 z-30 border-b border-hairline/60 bg-canvas/95 backdrop-blur-sm">
      <div class="container-prabha py-6">
        <div class="relative">
          <Search
            class="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
            aria-hidden="true"
          />
          <label for="destination-search" class="sr-only">Search destinations</label>
          <input
            id="destination-search"
            v-model="query"
            type="search"
            placeholder="Search a place, a season or an experience"
            class="w-full rounded-pill border border-hairline bg-surface py-3 pl-11 pr-4 text-[0.95rem] text-ink placeholder:text-ink-muted/70 transition-colors focus:border-link focus:outline-none focus:ring-1 focus:ring-link"
          />
        </div>

        <div class="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter destinations by type">
          <button
            type="button"
            class="rounded-pill border px-4 py-2 text-xs font-medium transition-colors"
            :class="
              activeCategory === 'All'
                ? 'border-forest bg-forest text-ivory-bright'
                : 'border-hairline text-ink-soft hover:border-ink/40'
            "
            :aria-pressed="activeCategory === 'All'"
            @click="activeCategory = 'All'"
          >
            All
          </button>
          <button
            v-for="category in destinationCategories"
            :key="category"
            type="button"
            class="rounded-pill border px-4 py-2 text-xs font-medium transition-colors"
            :class="
              activeCategory === category
                ? 'border-forest bg-forest text-ivory-bright'
                : 'border-hairline text-ink-soft hover:border-ink/40'
            "
            :aria-pressed="activeCategory === category"
            @click="activeCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Results -->
    <section class="container-prabha pb-20 pt-6 lg:pb-28">
      <p class="mb-8 text-sm text-ink-muted" aria-live="polite">
        {{ filtered.length }} {{ filtered.length === 1 ? 'destination' : 'destinations' }}
        <template v-if="activeCategory !== 'All'"> for {{ activeCategory }}</template>
      </p>

      <div v-if="filtered.length" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        <div v-for="destination in filtered" :key="destination.slug" class="h-80 min-w-0 sm:h-[22rem]">
          <DestinationCard :destination="destination" />
        </div>
      </div>

      <div v-else class="surface-card px-6 py-16 text-center">
        <h2 class="font-display text-2xl">Nothing matched that.</h2>
        <p class="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
          We are adding regions steadily. Tell us where you want to go and we will plan it whether or not it is
          listed here.
        </p>
        <div class="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button type="button" class="btn-secondary" @click="clearFilters">
            <X class="h-4 w-4" aria-hidden="true" />
            Clear filters
          </button>
          <NuxtLink to="/plan-my-trip" class="btn-primary">Plan My Trip</NuxtLink>
        </div>
      </div>
      </section>
    </div>

    <!-- Seasonal recommendations -->
    <section class="section-dark py-20 lg:py-28">
      <div class="container-prabha">
        <SectionHeading
          eyebrow="When to go"
          title="What is at its best, and when."
          intro="India runs on several seasons at once. Here is where we would send you in each window."
        />

        <div class="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          <div
            v-for="(season, index) in seasonal"
            :key="season.window"
            class="reveal border-t border-hairline pt-6"
            :style="{ transitionDelay: `${index * 80}ms` }"
          >
            <h3 class="font-display text-xl leading-snug">{{ season.window }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-ink-muted">{{ season.note }}</p>
            <ul class="mt-5 space-y-2">
              <li v-for="slug in season.slugs" :key="slug">
                <NuxtLink
                  :to="`/destinations/${slug}`"
                  class="link-underline text-sm font-medium text-link"
                >
                  {{ bySlug(slug)?.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <CTASection
      title="Not sure which one?"
      body="Tell us the month you can travel and what you want the trip to feel like. We will suggest the region."
      image="photo-1470071459604-3b5ec3a7fe05"
      secondary-label="See all journeys"
    />
  </div>
</template>
