<script setup lang="ts">
import { ArrowRight, CalendarDays, Check, Clock, MapPin } from 'lucide-vue-next'
import { destinations, getDestination } from '~/data/destinations'
import { listingsByDestination } from '~/data/listings'

definePageMeta({ hero: true })

const route = useRoute()
const slug = computed(() => String(route.params.slug))

const destination = computed(() => getDestination(slug.value))

if (!destination.value) {
  throw createError({ statusCode: 404, statusMessage: 'Destination not found', fatal: true })
}

const current = destination.value!
const relatedListings = listingsByDestination(current.slug)
const featuredHere = [...relatedListings].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))).slice(0, 6)
/** Neighbours in the same region first, then the rest of India. */
const otherDestinations = destinations
  .filter((d) => d.slug !== current.slug)
  .sort((a, b) => Number(b.region === current.region) - Number(a.region === current.region))
  .slice(0, 3)

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
      <div class="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy/40 to-navy/40" aria-hidden="true" />
      <div class="bg-grid-photo pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        class="pointer-events-none absolute -left-40 bottom-[-8rem] h-[32rem] w-[32rem] animate-aurora rounded-full bg-brand/30 blur-[110px]"
        aria-hidden="true"
      />

      <div class="container-pravaah relative w-full pb-14 pt-32 lg:pb-20">
        <Breadcrumbs :items="crumbs" light />
        <p class="eyebrow mt-7 text-white/80">{{ current.state }}</p>
        <h1 class="mt-4 max-w-3xl text-display-xl text-white text-shadow-hero">{{ current.name }}</h1>
        <p class="mt-5 max-w-xl text-lg text-white/85">{{ current.tagline }}</p>
      </div>
    </section>

    <!-- Quick facts -->
    <section class="relative z-10 -mt-10">
      <div class="container-pravaah grid gap-3 sm:grid-cols-3 sm:gap-4">
        <div class="surface-card glow-card flex items-start gap-4 p-5 shadow-lift">
          <span class="icon-tile h-10 w-10 shrink-0 rounded-xl"><CalendarDays class="h-4 w-4" aria-hidden="true" /></span>
          <div>
            <p class="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink-muted">Best time to visit</p>
            <p class="mt-1 text-sm font-medium text-ink">{{ current.bestTimeToVisit }}</p>
          </div>
        </div>
        <div class="surface-card glow-card flex items-start gap-4 p-5 shadow-lift">
          <span class="icon-tile h-10 w-10 shrink-0 rounded-xl"><Clock class="h-4 w-4" aria-hidden="true" /></span>
          <div>
            <p class="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink-muted">Ideal duration</p>
            <p class="mt-1 text-sm font-medium text-ink">{{ current.idealDuration }}</p>
          </div>
        </div>
        <div class="surface-card glow-card flex items-start gap-4 p-5 shadow-lift">
          <span class="icon-tile h-10 w-10 shrink-0 rounded-xl"><MapPin class="h-4 w-4" aria-hidden="true" /></span>
          <div>
            <p class="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink-muted">Good for</p>
            <p class="mt-1 text-sm font-medium text-ink">{{ current.categories.join(' · ') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview -->
    <section class="container-pravaah py-20 lg:py-24">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-7">
          <p class="chip reveal"><span class="chip-dot" aria-hidden="true" />Overview</p>
          <h2 class="reveal mt-5 text-display-sm">{{ current.tagline }}</h2>
          <div class="reveal mt-6 space-y-5">
            <p
              v-for="(paragraph, index) in current.overview"
              :key="paragraph"
              :class="
                index === 0
                  ? 'border-l-2 border-accent pl-5 text-lg leading-relaxed text-ink sm:text-xl'
                  : 'text-[1.0625rem] leading-[1.8] text-ink-soft'
              "
            >
              {{ paragraph }}
            </p>
          </div>
        </div>

        <aside class="reveal lg:col-span-4 lg:col-start-9">
          <div class="surface-card glow-card p-7 shadow-lift">
            <p class="chip"><span class="chip-dot" aria-hidden="true" />Things to do</p>
            <h2 class="mt-4 font-display text-xl">Things to do in {{ current.name }}</h2>
            <ul class="mt-5 space-y-3.5 text-sm leading-relaxed text-ink-soft">
              <li v-for="item in current.experiences" :key="item" class="flex gap-3">
                <span class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-indigo text-white">
                  <Check class="h-3 w-3" aria-hidden="true" />
                </span>
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
      <div class="container-pravaah">
        <SectionHeading eyebrow="Why visit" :title="`What makes ${current.name} worth the journey.`" />

        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5">
          <div
            v-for="(item, index) in current.whyVisit"
            :key="item.title"
            class="reveal surface-card glow-card p-7"
            :style="{ transitionDelay: `${index * 70}ms` }"
          >
            <span class="icon-tile h-10 w-10 rounded-xl font-mono text-[0.72rem] font-medium">{{ String(index + 1).padStart(2, '0') }}</span>
            <h3 class="mt-5 font-display text-xl leading-snug">{{ item.title }}</h3>
            <p class="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Best time to visit -->
    <section class="container-pravaah py-20 lg:py-24">
      <SectionHeading
        eyebrow="Best time to visit"
        :title="`${current.name}, season by season.`"
        :intro="`In short: ${current.bestTimeToVisit}.`"
      />

      <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(season, index) in current.seasons"
          :key="season.window"
          class="reveal surface-card glow-card relative overflow-hidden p-6 shadow-soft"
          :style="{ transitionDelay: `${index * 70}ms` }"
        >
          <span class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-brand-indigo to-brand-cyan" aria-hidden="true" />
          <p class="eyebrow text-accent">{{ season.window }}</p>
          <h3 class="mt-3 font-display text-lg">{{ season.label }}</h3>
          <p class="mt-2.5 text-sm leading-relaxed text-ink-muted">{{ season.description }}</p>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="container-pravaah pb-20 lg:pb-24">
      <h2 class="reveal sr-only">Photographs of {{ current.name }}</h2>
      <ImageGallery :images="current.gallery" :label="current.name" />
    </section>

    <!-- Stays and experiences here -->
    <section class="section-dark py-20 lg:py-24">
      <div class="container-pravaah">
        <SectionHeading
          :eyebrow="`In ${current.name}`"
          :title="relatedListings.length ? `Where to stay and what to do in ${current.name}.` : `Travel ${current.name} your way.`"
        />

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          <div
            v-for="(listing, index) in featuredHere"
            :key="`${listing.section}-${listing.slug}`"
            class="reveal"
            :style="{ transitionDelay: `${Math.min(index, 4) * 80}ms` }"
          >
            <ListingCard :listing="listing" />
          </div>

          <!-- Keeps the row visually complete for regions with few listings,
               and offers the custom route instead of an empty column. -->
          <div
            v-if="featuredHere.length % 3 !== 0 || featuredHere.length === 0"
            class="reveal flex flex-col justify-center rounded-card border border-dashed border-hairline p-8"
          >
            <h3 class="font-display text-2xl leading-snug">Something else in {{ current.name }}?</h3>
            <p class="mt-3 text-sm leading-relaxed text-ink-muted">
              These are the stays and trips we publish. Most journeys we run are built from scratch — tell us the
              days you have and what you want out of them.
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
    <section class="container-pravaah py-20 lg:py-24">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-5">
          <SectionHeading eyebrow="Travel tips" :title="`Practical notes for ${current.name}.`" />
        </div>
        <ol class="reveal space-y-3 lg:col-span-7 lg:col-start-6">
          <li
            v-for="(tip, index) in current.travelTips"
            :key="tip"
            class="surface-card glow-card flex items-start gap-4 p-5 shadow-soft"
          >
            <span class="icon-tile h-9 w-9 shrink-0 rounded-xl font-mono text-[0.7rem] font-medium">{{ String(index + 1).padStart(2, '0') }}</span>
            <p class="pt-1.5 text-[0.95rem] leading-relaxed text-ink-soft">{{ tip }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-dark py-20 lg:py-24">
      <div class="container-pravaah grid gap-12 lg:grid-cols-12 lg:gap-16">
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
    <section class="container-pravaah py-20 lg:py-24">
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
    />
  </div>
</template>
