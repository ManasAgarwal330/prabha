<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { inSelectedPlaces, placeOptions } from '~/shared/places'
import type { ListingSummary, SectionKey } from '~/types'

/**
 * Landing page for one offering tab (Stays, Experiences, Expeditions, Events).
 * Each category gets its own anchored block so the header dropdown can deep-link to it.
 * The location search under the hero narrows every block to the chosen places.
 */
const props = defineProps<{ sectionKey: SectionKey }>()

const section = useSection(props.sectionKey)

const { data: listings, error } = await useFetch<ListingSummary[]>('/api/listings', {
  key: `listings:${section.key}`,
  query: { section: section.key },
  getCachedData: cachedForVisit
})
if (error.value) {
  throw createError({ statusCode: 500, statusMessage: `Could not load ${section.name.toLowerCase()}`, fatal: true })
}
const all = computed(() => listings.value ?? [])

const places = computed(() => placeOptions(all.value))
const selectedPlaces = ref<string[]>([])

const groups = computed(() =>
  section.categories
    .map((category) => ({
      category,
      listings: all.value.filter(
        (listing) => listing.category === category.slug && inSelectedPlaces(listing.places, selectedPlaces.value)
      )
    }))
    .filter((group) => group.listings.length > 0)
)

const resultCount = computed(() => groups.value.reduce((total, group) => total + group.listings.length, 0))

/** e.g. "Uttarakhand", "Nainital or Almora", "Nainital, Almora or Rishikesh". */
const selectedText = computed(() => {
  const list = selectedPlaces.value
  return list.length < 2 ? list.join('') : `${list.slice(0, -1).join(', ')} or ${list[list.length - 1]}`
})

const crumbs = [
  { name: 'Home', path: '/' },
  { name: section.name, path: section.path }
]

usePageSeo({
  title: section.seo.title,
  description: section.seo.description,
  path: section.path,
  image: section.heroImage
})

useJsonLd(
  breadcrumbLd(crumbs),
  itemListLd(
    section.name,
    (listings.value ?? []).map((listing) => ({ name: listing.title, path: listingPath(listing) }))
  )
)
</script>

<template>
  <div>
    <PageHero
      :image="section.heroImage"
      :alt="section.name"
      :eyebrow="section.name"
      :title="section.title"
      :intro="section.intro"
      :crumbs="crumbs"
    >
      <nav v-if="groups.length > 1" v-animated-background="{ hover: true, items: 'children', class: 'rounded-pill bg-white/25 ring-1 ring-inset ring-white/60 shadow-glow' }" class="mt-7 flex flex-wrap gap-2 sm:mt-9" :aria-label="`${section.name} categories`">
        <NuxtLink
          v-for="group in groups"
          :key="group.category.slug"
          :to="{ hash: `#${group.category.slug}` }"
          class="rounded-pill border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition-colors hover:border-white/60"
        >
          {{ group.category.name }}
          <span class="ml-1 text-white/60">{{ group.listings.length }}</span>
        </NuxtLink>
      </nav>
    </PageHero>

    <div class="container-pravaah relative z-20 -mt-10">
      <div class="surface-card p-5 shadow-lift sm:p-6">
        <LocationSearch v-model="selectedPlaces" :options="places" :noun="[section.singular, section.name.toLowerCase()]" />
        <p v-if="selectedPlaces.length" class="mt-3 text-sm text-ink-muted" role="status">
          {{ resultCount }} {{ resultCount === 1 ? section.singular : section.name.toLowerCase() }} in {{ selectedText }}
        </p>
      </div>
    </div>

    <section v-if="!groups.length" class="container-pravaah py-16 text-center lg:py-20">
      <p class="font-display text-2xl leading-snug">Nothing here for {{ selectedText }} yet.</p>
      <p class="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
        Try another place, or tell us where you would like to go and we will plan it for you.
      </p>
      <div class="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button type="button" class="btn-secondary" @click="selectedPlaces = []">Clear search</button>
        <NuxtLink to="/plan-my-trip" class="btn-primary">Plan my trip</NuxtLink>
      </div>
    </section>

    <section
      v-for="(group, groupIndex) in groups"
      :id="group.category.slug"
      :key="group.category.slug"
      class="scroll-mt-24 py-12 sm:py-16 lg:py-20"
      :class="groupIndex % 2 === 1 ? 'section-dark' : ''"
    >
      <div class="container-pravaah">
        <SectionHeading :eyebrow="section.name" :title="group.category.name" :intro="group.category.description" />

        <CardRail label="listing" class="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          <div
            v-for="(listing, index) in group.listings"
            :key="listing.slug"
            class="reveal"
            :style="{ transitionDelay: `${Math.min(index, 4) * 80}ms` }"
          >
            <ListingCard :listing="listing" />
          </div>
        </CardRail>
      </div>
    </section>

    <section class="container-pravaah pt-8">
      <div class="reveal flex flex-col items-start justify-between gap-6 rounded-card border border-dashed border-hairline p-6 sm:flex-row sm:p-8 sm:items-center">
        <div>
          <h2 class="font-display text-2xl leading-snug">Looking for something that is not listed?</h2>
          <p class="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">
            These are the {{ section.name.toLowerCase() }} we publish. Tell us what you have in mind and we will
            find or build the right {{ section.singular }} for you.
          </p>
        </div>
        <NuxtLink to="/plan-my-trip" class="btn-secondary shrink-0">
          Ask us
          <ArrowRight class="h-4 w-4" aria-hidden="true" />
        </NuxtLink>
      </div>
    </section>

    <CTASection secondary-label="Browse destinations" secondary-to="/destinations" />
  </div>
</template>
