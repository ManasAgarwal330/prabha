<script setup lang="ts">
import { ArrowRight, CalendarDays, Check, Clock, Minus, Users } from 'lucide-vue-next'
import { formatPrice, getTour, tours } from '~/data/tours'
import { getDestination } from '~/data/destinations'

definePageMeta({ hero: true })

const route = useRoute()
const slug = computed(() => String(route.params.slug))

const tour = computed(() => getTour(slug.value))

if (!tour.value) {
  throw createError({ statusCode: 404, statusMessage: 'Journey not found', fatal: true })
}

const current = tour.value!
const destination = getDestination(current.destinationSlug)

const relatedTours = tours.filter((t) => t.slug !== current.slug).slice(0, 3)

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Tours', path: '/tours' },
  { name: current.title, path: `/tours/${current.slug}` }
]

usePageSeo({
  title: current.seo.title,
  description: current.seo.description,
  path: `/tours/${current.slug}`,
  image: current.image
})

useJsonLd(tourLd(current), breadcrumbLd(crumbs))
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative isolate flex min-h-[70svh] items-end overflow-hidden">
      <AppImage
        :src="current.image"
        :alt="current.title"
        :ratio="16 / 9"
        sizes="100vw"
        priority
        :zoom="false"
        class="absolute inset-0 h-full w-full"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-charcoal/40" aria-hidden="true" />

      <div class="container-pravaah relative w-full pb-14 pt-32 lg:pb-20">
        <Breadcrumbs :items="crumbs" light />
        <p class="eyebrow mt-7 text-ivory-bright/75">{{ current.destination }}</p>
        <h1 class="mt-4 max-w-3xl text-display-lg text-ivory-bright text-shadow-hero">{{ current.title }}</h1>
        <p class="mt-5 max-w-xl text-lg leading-relaxed text-ivory-bright/85">{{ current.description }}</p>

        <dl class="mt-9 flex flex-wrap gap-x-10 gap-y-5 border-t border-ivory-bright/20 pt-6 text-ivory-bright">
          <div>
            <dt class="text-[0.7rem] uppercase tracking-[0.14em] text-ivory-bright/60">Duration</dt>
            <dd class="mt-1.5 font-display text-lg">{{ current.duration }}</dd>
          </div>
          <div>
            <dt class="text-[0.7rem] uppercase tracking-[0.14em] text-ivory-bright/60">Starting from</dt>
            <dd class="mt-1.5 font-display text-lg">{{ formatPrice(current.price) }}</dd>
          </div>
          <div>
            <dt class="text-[0.7rem] uppercase tracking-[0.14em] text-ivory-bright/60">Group size</dt>
            <dd class="mt-1.5 font-display text-lg">{{ current.groupSize }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <div class="container-pravaah py-20 lg:py-24">
      <div class="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <!-- Main column -->
        <div class="lg:col-span-7">
          <section>
            <h2 class="reveal text-display-sm">About this journey</h2>
            <div class="reveal prose-pravaah mt-6">
              <p v-for="paragraph in current.overview" :key="paragraph">{{ paragraph }}</p>
            </div>

            <ul class="reveal mt-8 flex flex-wrap gap-2">
              <li
                v-for="theme in current.themes"
                :key="theme"
                class="rounded-pill border border-hairline px-3.5 py-1.5 text-xs text-ink-muted"
              >
                {{ theme }}
              </li>
            </ul>
          </section>

          <section class="mt-16">
            <h2 class="reveal text-display-sm">Highlights</h2>
            <ul class="reveal mt-6 space-y-3.5">
              <li
                v-for="highlight in current.highlights"
                :key="highlight"
                class="flex gap-3.5 text-[0.975rem] leading-relaxed text-ink-soft"
              >
                <Check class="mt-1 h-4 w-4 shrink-0 text-link" aria-hidden="true" />
                {{ highlight }}
              </li>
            </ul>
          </section>

          <section class="mt-16">
            <h2 class="reveal text-display-sm">Day by day</h2>
            <div class="reveal mt-8">
              <ItineraryList :days="current.itinerary" />
            </div>
          </section>

          <section class="mt-16 grid gap-10 sm:grid-cols-2">
            <div class="reveal">
              <h2 class="font-display text-2xl">What is included</h2>
              <ul class="mt-5 space-y-3 text-sm leading-relaxed text-ink-soft">
                <li v-for="item in current.inclusions" :key="item" class="flex gap-3">
                  <Check class="mt-0.5 h-4 w-4 shrink-0 text-link" aria-hidden="true" />
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="reveal" style="transition-delay: 80ms">
              <h2 class="font-display text-2xl">What is not included</h2>
              <ul class="mt-5 space-y-3 text-sm leading-relaxed text-ink-muted">
                <li v-for="item in current.exclusions" :key="item" class="flex gap-3">
                  <Minus class="mt-0.5 h-4 w-4 shrink-0 text-ink-muted/60" aria-hidden="true" />
                  {{ item }}
                </li>
              </ul>
            </div>
          </section>

          <section class="mt-16">
            <h2 class="reveal text-display-sm">Important information</h2>
            <ol class="reveal mt-6 space-y-5">
              <li
                v-for="(item, index) in current.importantInfo"
                :key="item"
                class="flex gap-5 border-t border-hairline pt-5"
              >
                <span class="font-display text-sm text-accent">{{ String(index + 1).padStart(2, '0') }}</span>
                <p class="text-[0.95rem] leading-relaxed text-ink-soft">{{ item }}</p>
              </li>
            </ol>
          </section>
        </div>

        <!-- Sticky enquiry card -->
        <aside class="lg:col-span-4 lg:col-start-9">
          <div class="lg:sticky lg:top-28">
            <div class="surface-card bg-surface p-7">
              <p class="text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">Starting from</p>
              <p class="mt-1.5 font-display text-4xl">
                {{ formatPrice(current.price) }}
                <span class="align-middle text-sm font-sans text-ink-muted">per person</span>
              </p>

              <dl class="mt-7 space-y-4 border-t border-hairline pt-6 text-sm">
                <div class="flex items-start gap-3">
                  <Clock class="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <dt class="text-ink-muted">Duration</dt>
                    <dd class="text-ink">{{ current.duration }}</dd>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <CalendarDays class="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <dt class="text-ink-muted">Best time to travel</dt>
                    <dd class="text-ink">{{ current.bestTimeToTravel }}</dd>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Users class="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <dt class="text-ink-muted">Group size</dt>
                    <dd class="text-ink">{{ current.groupSize }}</dd>
                  </div>
                </div>
              </dl>

              <a href="#enquire" class="btn-primary mt-7 w-full">Enquire about this journey</a>
              <div class="mt-3 flex justify-center">
                <WhatsAppButton variant="inline" />
              </div>
              <p class="mt-5 text-center text-xs leading-relaxed text-ink-muted">
                No payment now. We reply within one working day.
              </p>
            </div>

            <NuxtLink
              v-if="destination"
              :to="`/destinations/${destination.slug}`"
              class="group mt-5 flex items-center justify-between gap-4 rounded-card border border-hairline px-6 py-5 transition-colors hover:border-ink/40"
            >
              <span>
                <span class="block text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">
                  Destination guide
                </span>
                <span class="mt-1 block font-display text-lg">{{ destination.name }}</span>
              </span>
              <ArrowRight
                class="h-4 w-4 shrink-0 text-ink-muted transition-transform duration-300 ease-editorial group-hover:translate-x-1"
                aria-hidden="true"
              />
            </NuxtLink>
          </div>
        </aside>
      </div>
    </div>

    <!-- Gallery -->
    <section class="container-pravaah pb-20 lg:pb-24">
      <h2 class="reveal sr-only">Photographs from {{ current.title }}</h2>
      <ImageGallery :images="current.gallery" :label="current.title" />
    </section>

    <!-- Enquiry -->
    <section id="enquire" class="scroll-mt-24 border-y border-hairline bg-canvas-alt py-20 lg:py-24">
      <div class="container-pravaah grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-4">
          <SectionHeading eyebrow="Enquire" :title="`Ask us about ${current.title}.`" />
          <p class="reveal mt-6 text-[0.95rem] leading-relaxed text-ink-muted">
            Tell us your dates and who is travelling. We will send a route, a stay list and an indicative cost —
            usually within a working day, and always before you pay anything.
          </p>
        </div>
        <div class="reveal lg:col-span-7 lg:col-start-6">
          <ContactForm :preset-destination="destination?.name || ''" :source="`tour:${current.slug}`" compact />
        </div>
      </div>
    </section>

    <!-- Destination FAQ -->
    <section v-if="destination" class="container-pravaah py-20 lg:py-24">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-4">
          <SectionHeading eyebrow="FAQ" :title="`Questions about ${destination.name}.`" />
          <NuxtLink to="/faq" class="btn-ghost link-underline reveal mt-6">
            All frequently asked questions
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
        </div>
        <div class="reveal lg:col-span-7 lg:col-start-6">
          <FaqAccordion :items="destination.faqs" />
        </div>
      </div>
    </section>

    <!-- Related -->
    <section class="section-dark py-20 lg:py-24">
      <div class="container-pravaah">
        <SectionHeading eyebrow="Related journeys" title="Other routes you might like." />
        <div class="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          <div
            v-for="(related, index) in relatedTours"
            :key="related.slug"
            class="reveal"
            :style="{ transitionDelay: `${index * 80}ms` }"
          >
            <TourCard :tour="related" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
