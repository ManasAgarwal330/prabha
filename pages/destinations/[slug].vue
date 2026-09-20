<script setup lang="ts">
import { ArrowRight, CalendarDays, Clock, MapPin } from 'lucide-vue-next'
import { destinations, getDestination } from '~/data/destinations'
import { toursByDestination } from '~/data/tours'

definePageMeta({ hero: true })

const route = useRoute()
const slug = computed(() => String(route.params.slug))

const destination = computed(() => getDestination(slug.value))

if (!destination.value) {
  throw createError({ statusCode: 404, statusMessage: 'Destination not found', fatal: true })
}

const current = destination.value!
const relatedTours = toursByDestination(current.slug)
const otherDestinations = destinations.filter((d) => d.slug !== current.slug).slice(0, 3)

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: current.name, path: `/destinations/${current.slug}` }
]

usePageSeo({
  title: current.seo.title,
  description: current.seo.description,
  path: `/destinations/${current.slug}`,
  image: current.heroImage
})

useJsonLd(destinationLd(current), breadcrumbLd(crumbs), faqLd(current.faqs))
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative isolate flex min-h-[72svh] items-end overflow-hidden">
      <AppImage
        :src="current.heroImage"
        :alt="`${current.name}, ${current.state}`"
        :ratio="16 / 9"
        sizes="100vw"
        priority
        :zoom="false"
        class="absolute inset-0 h-full w-full"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-charcoal/40" aria-hidden="true" />

      <div class="container-prabha relative w-full pb-14 pt-32 lg:pb-20">
        <Breadcrumbs :items="crumbs" light />
        <p class="eyebrow mt-7 text-ivory-bright/75">{{ current.state }}</p>
        <h1 class="mt-4 max-w-3xl text-display-xl text-ivory-bright text-shadow-hero">{{ current.name }}</h1>
        <p class="mt-5 max-w-xl text-lg text-ivory-bright/85">{{ current.tagline }}</p>
      </div>
    </section>

    <!-- Quick facts -->
    <section class="border-b border-hairline bg-canvas-alt">
      <div class="container-prabha grid gap-6 py-7 sm:grid-cols-3">
        <div class="flex items-start gap-3">
          <CalendarDays class="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <div>
            <p class="text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">Best time to visit</p>
            <p class="mt-1 text-sm text-ink">{{ current.bestTimeToVisit }}</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <Clock class="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <div>
            <p class="text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">Ideal duration</p>
            <p class="mt-1 text-sm text-ink">{{ current.idealDuration }}</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <MapPin class="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <div>
            <p class="text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">Good for</p>
            <p class="mt-1 text-sm text-ink">{{ current.categories.join(' · ') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview -->
    <section class="container-prabha py-20 lg:py-24">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-7">
          <h2 class="reveal text-display-sm">Overview</h2>
          <div class="reveal prose-prabha mt-6">
            <p v-for="paragraph in current.overview" :key="paragraph">{{ paragraph }}</p>
          </div>
        </div>

        <aside class="reveal lg:col-span-4 lg:col-start-9">
          <div class="surface-card p-7">
            <h2 class="font-display text-xl">Things to do in {{ current.name }}</h2>
            <ul class="mt-5 space-y-3 text-sm leading-relaxed text-ink-soft">
              <li v-for="item in current.experiences" :key="item" class="flex gap-3">
                <span class="mt-2 h-1 w-1 shrink-0 rounded-pill bg-clay" aria-hidden="true" />
                {{ item }}
              </li>
            </ul>
            <NuxtLink to="/plan-my-trip" class="btn-primary mt-7 w-full">
              Plan a trip to {{ current.name }}
            </NuxtLink>
          </div>
        </aside>
      </div>
    </section>

    <!-- Why visit -->
    <section class="section-dark py-20 lg:py-24">
      <div class="container-prabha">
        <SectionHeading eyebrow="Why visit" :title="`What makes ${current.name} worth the journey.`" />

        <div class="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          <div
            v-for="(item, index) in current.whyVisit"
            :key="item.title"
            class="reveal border-t border-hairline pt-6"
            :style="{ transitionDelay: `${index * 70}ms` }"
          >
            <h3 class="font-display text-xl leading-snug">{{ item.title }}</h3>
            <p class="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Best time to visit -->
    <section class="container-prabha py-20 lg:py-24">
      <SectionHeading
        eyebrow="Best time to visit"
        :title="`${current.name}, season by season.`"
        :intro="`In short: ${current.bestTimeToVisit}.`"
      />

      <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(season, index) in current.seasons"
          :key="season.window"
          class="reveal border-t border-hairline pt-6"
          :style="{ transitionDelay: `${index * 70}ms` }"
        >
          <p class="eyebrow text-accent">{{ season.window }}</p>
          <h3 class="mt-3 font-display text-lg">{{ season.label }}</h3>
          <p class="mt-2.5 text-sm leading-relaxed text-ink-muted">{{ season.description }}</p>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="container-prabha pb-20 lg:pb-24">
      <h2 class="reveal sr-only">Photographs of {{ current.name }}</h2>
      <ImageGallery :images="current.gallery" :label="current.name" />
    </section>

    <!-- Recommended tours -->
    <section v-if="relatedTours.length" class="section-dark py-20 lg:py-24">
      <div class="container-prabha">
        <div class="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Recommended journeys" :title="`Ways to travel ${current.name}.`" />
          <NuxtLink to="/tours" class="btn-ghost link-underline reveal shrink-0">
            All journeys
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
        </div>

        <div class="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          <div
            v-for="(tour, index) in relatedTours"
            :key="tour.slug"
            class="reveal"
            :style="{ transitionDelay: `${index * 80}ms` }"
          >
            <TourCard :tour="tour" />
          </div>

          <!-- Keeps the row visually complete for regions with one or two listed journeys,
               and offers the custom route instead of an empty column. -->
          <div
            v-if="relatedTours.length < 3"
            class="reveal flex flex-col justify-center rounded-card border border-dashed border-hairline p-8"
            :style="{ transitionDelay: `${relatedTours.length * 80}ms` }"
          >
            <h3 class="font-display text-2xl leading-snug">Something else in {{ current.name }}?</h3>
            <p class="mt-3 text-sm leading-relaxed text-ink-muted">
              These are the routes we publish. Most trips we run are built from scratch — tell us the days you
              have and what you want out of them.
            </p>
            <NuxtLink to="/plan-my-trip" class="btn-secondary mt-6 self-start">
              Build a custom route
              <ArrowRight class="h-4 w-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Travel tips -->
    <section class="container-prabha py-20 lg:py-24">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-5">
          <SectionHeading eyebrow="Travel tips" :title="`Practical notes for ${current.name}.`" />
        </div>
        <ol class="reveal space-y-6 lg:col-span-6 lg:col-start-7">
          <li
            v-for="(tip, index) in current.travelTips"
            :key="tip"
            class="flex gap-5 border-t border-hairline pt-6"
          >
            <span class="font-display text-sm text-accent">{{ String(index + 1).padStart(2, '0') }}</span>
            <p class="text-[0.95rem] leading-relaxed text-ink-soft">{{ tip }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-dark py-20 lg:py-24">
      <div class="container-prabha grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-4">
          <SectionHeading eyebrow="FAQ" :title="`${current.name} questions we get asked.`" />
          <NuxtLink to="/faq" class="btn-ghost link-underline reveal mt-6">
            All frequently asked questions
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
        </div>
        <div class="reveal lg:col-span-7 lg:col-start-6">
          <FaqAccordion :items="current.faqs" />
        </div>
      </div>
    </section>

    <!-- Other destinations -->
    <section class="container-prabha py-20 lg:py-24">
      <SectionHeading eyebrow="Keep exploring" title="Other regions worth a look." />
      <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        <div v-for="other in otherDestinations" :key="other.slug" class="reveal h-72 min-w-0">
          <DestinationCard :destination="other" />
        </div>
      </div>
    </section>

    <CTASection
      :title="`Plan a trip to ${current.name}.`"
      body="Tell us your dates and how you like to travel. We will come back with a route and an indicative cost within a working day."
      :image="current.gallery[0] || current.heroImage"
      secondary-label="See all journeys"
    />
  </div>
</template>
