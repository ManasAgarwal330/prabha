<script setup lang="ts">
import { destinations } from '~/data/destinations'
import { tours } from '~/data/tours'

type Sort = 'recommended' | 'price-asc' | 'price-desc' | 'duration'

const activeDestination = ref<string>('all')
const sort = ref<Sort>('recommended')

const sortOptions: { value: Sort; label: string }[] = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'duration', label: 'Longest first' }
]

const filtered = computed(() => {
  const list =
    activeDestination.value === 'all'
      ? [...tours]
      : tours.filter((tour) => tour.destinationSlug === activeDestination.value)

  switch (sort.value) {
    case 'price-asc':
      return list.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return list.sort((a, b) => b.price - a.price)
    case 'duration':
      return list.sort((a, b) => b.days - a.days)
    default:
      return list.sort((a, b) => Number(b.popular ?? false) - Number(a.popular ?? false))
  }
})

usePageSeo({
  title: 'Tours & Journeys Across India — Prabha',
  description:
    'Browse Prabha journeys across Kashmir, Himachal, Rajasthan, Kerala, Goa and Northeast India. Private, fully customisable itineraries with transparent starting prices.',
  path: '/tours',
  image: 'photo-1501785888041-af3ef285b470'
})

useJsonLd(
  breadcrumbLd([
    { name: 'Home', path: '/' },
    { name: 'Tours', path: '/tours' }
  ])
)
</script>

<template>
  <div>
    <section class="container-prabha pb-2 pt-16 lg:pt-20">
      <Breadcrumbs
        :items="[
          { name: 'Home', path: '/' },
          { name: 'Tours', path: '/tours' }
        ]"
      />

      <div class="mt-8 max-w-3xl">
        <p class="eyebrow mb-4">Journeys</p>
        <h1 class="text-display-lg">Itineraries built to be changed.</h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
          Each of these is a route we run and would happily travel ourselves. Treat the days, the stays and the
          pace as a draft — most trips end up looking quite different by the time we are done.
        </p>
      </div>
    </section>

    <!-- Filters -->
    <section class="container-prabha pt-10">
      <div class="flex flex-col gap-5 border-y border-hairline py-5 lg:flex-row lg:items-center lg:justify-between">
        <div class="flex flex-wrap gap-2" role="group" aria-label="Filter journeys by destination">
          <button
            type="button"
            class="rounded-pill border px-4 py-2 text-xs font-medium transition-colors"
            :class="
              activeDestination === 'all'
                ? 'border-forest bg-forest text-ivory-bright'
                : 'border-hairline text-ink-soft hover:border-ink/40'
            "
            :aria-pressed="activeDestination === 'all'"
            @click="activeDestination = 'all'"
          >
            All destinations
          </button>
          <button
            v-for="destination in destinations"
            :key="destination.slug"
            type="button"
            class="rounded-pill border px-4 py-2 text-xs font-medium transition-colors"
            :class="
              activeDestination === destination.slug
                ? 'border-forest bg-forest text-ivory-bright'
                : 'border-hairline text-ink-soft hover:border-ink/40'
            "
            :aria-pressed="activeDestination === destination.slug"
            @click="activeDestination = destination.slug"
          >
            {{ destination.name }}
          </button>
        </div>

        <div class="flex shrink-0 items-center gap-3">
          <label for="tour-sort" class="text-xs text-ink-muted">Sort</label>
          <select
            id="tour-sort"
            v-model="sort"
            class="rounded-pill border border-hairline bg-surface px-4 py-2 text-xs text-ink transition-colors focus:border-link focus:outline-none focus:ring-1 focus:ring-link"
          >
            <option v-for="option in sortOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>
    </section>

    <!-- Results -->
    <section class="container-prabha py-12 lg:py-16">
      <p class="mb-10 text-sm text-ink-muted" aria-live="polite">
        {{ filtered.length }} {{ filtered.length === 1 ? 'journey' : 'journeys' }}
      </p>

      <div v-if="filtered.length" class="grid gap-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        <div v-for="tour in filtered" :key="tour.slug">
          <TourCard :tour="tour" />
        </div>
      </div>

      <div v-else class="surface-card px-6 py-16 text-center">
        <h2 class="font-display text-2xl">No journeys listed there yet.</h2>
        <p class="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
          We build custom routes for every region we cover. Send us the idea and we will price it.
        </p>
        <NuxtLink to="/plan-my-trip" class="btn-primary mt-7">Plan My Trip</NuxtLink>
      </div>
    </section>

    <section class="section-dark py-16 lg:py-20">
      <div class="container-prabha grid gap-8 sm:grid-cols-3">
        <div class="reveal">
          <h2 class="font-display text-xl">Prices are honest starting points</h2>
          <p class="mt-3 text-sm leading-relaxed text-ink-muted">
            Per person on twin sharing, covering the stays, transport and experiences listed on each journey. What
            is excluded is written down, not buried.
          </p>
        </div>
        <div class="reveal" style="transition-delay: 80ms">
          <h2 class="font-display text-xl">Private by default</h2>
          <p class="mt-3 text-sm leading-relaxed text-ink-muted">
            Your own vehicle, driver and guides. We do not merge groups unless you have asked us to.
          </p>
        </div>
        <div class="reveal" style="transition-delay: 160ms">
          <h2 class="font-display text-xl">Nothing is fixed</h2>
          <p class="mt-3 text-sm leading-relaxed text-ink-muted">
            Add days, swap a stay, slow the pace down or combine two journeys into one. Ask and we will redraw it.
          </p>
        </div>
      </div>
    </section>

    <CTASection
      title="Tell us what to change."
      body="Send us the journey you like and the parts that do not fit. We will rebuild it around you."
      image="photo-1493246507139-91e8fad9978e"
      secondary-label="Browse destinations"
      secondary-to="/destinations"
    />
  </div>
</template>
