<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { destinations, destinationsByRegion, regions } from '~/data/destinations'

/** `india` is the page itself; every other region gets an anchored block below. */
const regionGroups = regions
  .filter((region) => region.slug !== 'india')
  .map((region) => ({ region, destinations: destinationsByRegion(region.slug) }))
  .filter((group) => group.destinations.length > 0)

const india = regions.find((region) => region.slug === 'india')!

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' }
]

definePageMeta({ hero: true })

/** Groups destinations by the season they are at their best. */
const seasonal = [
  {
    window: 'Right now — September to November',
    note: 'Clear skies after the monsoon, festival season in the northeast and the best light of the year in the Himalaya.',
    slugs: ['uttarakhand', 'kashmir', 'northeast-india']
  },
  {
    window: 'Winter — December to February',
    note: 'Desert light in Rajasthan, the Goa coast at its best and snow on the Kumaon ridges.',
    slugs: ['rajasthan', 'goa', 'uttarakhand']
  },
  {
    window: 'Spring & summer — March to June',
    note: 'Holi in Pushkar, rhododendrons on the trails and the high passes reopening.',
    slugs: ['uttarakhand', 'himachal-pradesh', 'rajasthan']
  }
]

const bySlug = (slug: string) => destinations.find((d) => d.slug === slug)

usePageSeo({
  title: 'Destinations in India — North, Northeast & West India',
  description:
    'Explore where Pravaah travels across India: Uttarakhand, Himachal and Kashmir in the north, Meghalaya and Nagaland in the northeast, and Rajasthan and Goa in the west.',
  path: '/destinations',
  image: 'photo-1486911278844-a81c5267e227'
})

useJsonLd(breadcrumbLd(crumbs))
</script>

<template>
  <div>
    <PageHero
      image="photo-1486911278844-a81c5267e227"
      alt="Snow peaks of the Himalaya"
      eyebrow="Destinations"
      title="India, region by region."
      :intro="`${india.description} We go deep in a handful of places rather than thin across the whole country.`"
      :crumbs="crumbs"
    >
      <nav class="mt-9 flex flex-wrap gap-2" aria-label="Regions">
        <NuxtLink
          v-for="group in regionGroups"
          :key="group.region.slug"
          :to="{ hash: `#${group.region.slug}` }"
          class="rounded-pill border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition-colors hover:border-white/60 hover:bg-white/20"
        >
          {{ group.region.name }}
          <span class="ml-1 text-white/60">{{ group.destinations.length }}</span>
        </NuxtLink>
      </nav>
    </PageHero>

    <section id="india" class="container-pravaah scroll-mt-24 py-16 lg:py-20">
      <SectionHeading :eyebrow="india.name" title="Where we travel." />

      <ul class="mt-12 grid gap-4 md:grid-cols-3 lg:gap-5">
        <li
          v-for="(group, index) in regionGroups"
          :key="group.region.slug"
          class="reveal"
          :style="{ transitionDelay: `${index * 80}ms` }"
        >
          <NuxtLink
            :to="{ hash: `#${group.region.slug}` }"
            class="surface-card card-lift group flex h-full flex-col p-7 shadow-soft hover:shadow-lift"
          >
            <span class="text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">
              {{ group.destinations.length }} {{ group.destinations.length === 1 ? 'destination' : 'destinations' }}
            </span>
            <span class="mt-3 font-display text-2xl leading-snug">{{ group.region.name }}</span>
            <span class="mt-3 text-sm leading-relaxed text-ink-muted">{{ group.region.description }}</span>
            <span class="mt-auto flex items-center gap-1.5 pt-6 text-xs font-medium text-accent">
              {{ group.destinations.map((d) => d.name).join(' · ') }}
              <ArrowRight
                class="h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-editorial group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </NuxtLink>
        </li>
      </ul>
    </section>

    <!-- One block per region, anchored for the header dropdown -->
    <section
      v-for="(group, groupIndex) in regionGroups"
      :id="group.region.slug"
      :key="group.region.slug"
      class="scroll-mt-24 py-16 lg:py-20"
      :class="groupIndex % 2 === 0 ? 'section-dark' : ''"
    >
      <div class="container-pravaah">
        <SectionHeading eyebrow="Destinations" :title="group.region.name" :intro="group.region.description" />

        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          <div
            v-for="(destination, index) in group.destinations"
            :key="destination.slug"
            class="reveal h-80 min-w-0 sm:h-[22rem]"
            :style="{ transitionDelay: `${index * 80}ms` }"
          >
            <DestinationCard :destination="destination" />
          </div>
        </div>
      </div>
    </section>

    <!-- Seasonal recommendations -->
    <section class="py-20 lg:py-28">
      <div class="container-pravaah">
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
      secondary-label="About Pravaah"
      secondary-to="/#about"
    />
  </div>
</template>
