<script setup lang="ts">
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  Flag,
  Gauge,
  Info,
  LayoutGrid,
  Lightbulb,
  MapPinned,
  Moon,
  Navigation,
  Users
} from 'lucide-vue-next'
import type { Component } from 'vue'
import { getDestination } from '~/data/destinations'
import { getCategory, sections } from '~/data/sections'
import { listingPath, listingsBySection } from '~/data/listings'
import type { Listing } from '~/types'

/** Detail page shared by every stay, experience and event. */
const props = defineProps<{ listing: Listing }>()

/** An icon for each kind of key fact; anything unrecognised falls back to Info. */
const factIcons: Record<string, Component> = {
  Setting: MapPinned,
  'Best for': Users,
  'Ideal stay': Moon,
  'Getting there': Navigation,
  Duration: Clock,
  Level: Gauge,
  Difficulty: Gauge,
  'Starts from': Flag,
  'Start point': Flag,
  Season: CalendarDays,
  When: CalendarDays,
  Format: LayoutGrid,
  'Group size': Users
}
const factIcon = (label: string) => factIcons[label] ?? Info

const pad = (n: number) => String(n).padStart(2, '0')

const current = props.listing
const section = sections[current.section]
const category = getCategory(current.section, current.category)
const destination = current.destinationSlug ? getDestination(current.destinationSlug) : undefined

/** Same-category listings first, then the rest of the section. */
const related = listingsBySection[current.section]
  .filter((listing) => listing.slug !== current.slug)
  .sort((a, b) => Number(b.category === current.category) - Number(a.category === current.category))
  .slice(0, 3)

const crumbs = [
  { name: 'Home', path: '/' },
  { name: section.name, path: section.path },
  { name: current.title, path: listingPath(current) }
]

usePageSeo({
  title: current.seo.title,
  description: current.seo.description,
  path: listingPath(current),
  image: current.image
})

useJsonLd(listingLd(current), breadcrumbLd(crumbs))
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
      <div class="absolute inset-0 bg-gradient-to-t from-pine-deep/95 via-pine/40 to-pine/40" aria-hidden="true" />
      <div class="bg-grid-photo pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        class="pointer-events-none absolute -left-40 bottom-[-8rem] h-[32rem] w-[32rem] animate-aurora rounded-full bg-brand/30 blur-[110px]"
        aria-hidden="true"
      />

      <div class="container-pravaah relative w-full pb-14 pt-32 lg:pb-20">
        <Breadcrumbs :items="crumbs" light />
        <p class="eyebrow mt-7 text-white/80">
          {{ category?.name }} · {{ current.location }}
        </p>
        <h1 class="mt-4 max-w-3xl text-display-lg text-white text-shadow-hero">{{ current.title }}</h1>
        <p class="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{{ current.tagline }}</p>

        <dl class="mt-9 grid max-w-3xl gap-3 text-white sm:grid-cols-3">
          <div
            v-for="fact in current.facts.slice(0, 3)"
            :key="fact.label"
            class="glass-panel flex items-start gap-3 rounded-2xl border border-white/10 px-4 py-3.5"
          >
            <component :is="factIcon(fact.label)" class="mt-0.5 h-4 w-4 shrink-0 text-brand-lime" aria-hidden="true" />
            <div>
              <dt class="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-white/55">{{ fact.label }}</dt>
              <dd class="mt-1 font-display text-[0.95rem] leading-snug">{{ fact.value }}</dd>
            </div>
          </div>
        </dl>
      </div>
    </section>

    <div class="container-pravaah py-20 lg:py-24">
      <div class="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <!-- Main column -->
        <div class="lg:col-span-7">
          <section>
            <p class="chip reveal"><span class="chip-dot" aria-hidden="true" />01 · Overview</p>
            <h2 class="reveal mt-5 text-display-sm">About this <span class="text-gradient">{{ section.singular }}</span></h2>
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
          </section>

          <section class="mt-20">
            <p class="chip reveal"><span class="chip-dot" aria-hidden="true" />02 · Highlights</p>
            <h2 class="reveal mt-5 text-display-sm"><span class="text-gradient">Highlights</span></h2>
            <ul class="mt-8 grid gap-4 sm:grid-cols-2">
              <li
                v-for="(highlight, index) in current.highlights"
                :key="highlight"
                class="reveal surface-card glow-card flex items-start gap-4 p-5 shadow-soft"
                :class="index === current.highlights.length - 1 && current.highlights.length % 2 === 1 ? 'sm:col-span-2' : ''"
                :style="{ transitionDelay: `${Math.min(index, 5) * 60}ms` }"
              >
                <span class="icon-tile h-9 w-9 shrink-0 rounded-xl font-mono text-[0.7rem] font-medium">{{ pad(index + 1) }}</span>
                <span class="text-[0.95rem] leading-relaxed text-ink-soft">{{ highlight }}</span>
              </li>
            </ul>
          </section>

          <section v-if="current.itinerary?.length" class="mt-20">
            <p class="chip reveal"><span class="chip-dot" aria-hidden="true" />03 · Itinerary</p>
            <h2 class="reveal mt-5 text-display-sm">Day by <span class="text-gradient">day</span></h2>
            <div class="reveal mt-8">
              <ItineraryList :days="current.itinerary" />
            </div>
          </section>

          <section v-if="current.inclusions?.length" class="mt-20">
            <p class="chip reveal"><span class="chip-dot" aria-hidden="true" />Included</p>
            <h2 class="reveal mt-5 text-display-sm">What is <span class="text-gradient">included</span></h2>
            <ul class="reveal mt-7 flex flex-wrap gap-2.5">
              <li
                v-for="item in current.inclusions"
                :key="item"
                class="inline-flex items-center gap-2.5 rounded-pill border border-accent/20 bg-accent/[0.05] py-2 pl-2 pr-4 text-sm text-ink-soft"
              >
                <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-teal text-white">
                  <Check class="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {{ item }}
              </li>
            </ul>
          </section>

          <section class="mt-20">
            <p class="chip reveal"><span class="chip-dot" aria-hidden="true" />Before you go</p>
            <h2 class="reveal mt-5 text-display-sm">Good to <span class="text-gradient">know</span></h2>
            <div
              class="reveal relative mt-8 overflow-hidden rounded-card border border-accent/20 bg-gradient-to-br from-brand/[0.07] via-surface to-brand-lime/[0.06] p-6 shadow-soft sm:p-8"
            >
              <Lightbulb
                class="pointer-events-none absolute -right-4 -top-4 h-28 w-28 text-accent/[0.07]"
                aria-hidden="true"
              />
              <ol class="relative grid gap-6 sm:grid-cols-2">
                <li v-for="(item, index) in current.goodToKnow" :key="item" class="flex gap-4">
                  <span
                    class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-surface font-mono text-[0.7rem] font-medium text-accent shadow-soft ring-1 ring-accent/15"
                  >
                    {{ pad(index + 1) }}
                  </span>
                  <p class="text-[0.95rem] leading-relaxed text-ink-soft">{{ item }}</p>
                </li>
              </ol>
            </div>
          </section>
        </div>

        <!-- Sticky enquiry card -->
        <aside class="lg:col-span-4 lg:col-start-9">
          <div class="lg:sticky lg:top-28">
            <div class="surface-card glow-card bg-surface p-7 shadow-lift">
              <p class="chip"><span class="chip-dot" aria-hidden="true" />{{ category?.name }}</p>
              <p class="mt-4 font-display text-2xl leading-tight">{{ current.title }}</p>

              <dl class="mt-7 space-y-4 border-t border-hairline pt-6 text-sm">
                <div v-for="fact in current.facts" :key="fact.label" class="flex items-start gap-3">
                  <component :is="factIcon(fact.label)" class="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <dt class="text-ink-muted">{{ fact.label }}</dt>
                    <dd class="text-ink">{{ fact.value }}</dd>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <CalendarDays class="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <dt class="text-ink-muted">Best time</dt>
                    <dd class="text-ink">{{ current.bestTime }}</dd>
                  </div>
                </div>
              </dl>

              <a href="#enquire" class="btn-primary mt-7 w-full">Enquire about this {{ section.singular }}</a>
              <div class="mt-3 flex justify-center">
                <WhatsAppButton variant="inline" />
              </div>
              <p class="mt-5 text-center text-xs leading-relaxed text-ink-muted">
                Rates on request. No payment now — we reply within one working day.
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
            Tell us your dates and who is travelling. We will confirm availability and send the details and an
            indicative cost — usually within a working day, and always before you pay anything.
          </p>
        </div>
        <div class="reveal lg:col-span-7 lg:col-start-6">
          <ContactForm
            :preset-destination="destination?.name || ''"
            :source="`${current.section}:${current.slug}`"
            compact
          />
        </div>
      </div>
    </section>

    <!-- Related -->
    <section v-if="related.length" class="section-dark py-20 lg:py-24">
      <div class="container-pravaah">
        <div class="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading :eyebrow="`More ${section.name.toLowerCase()}`" title="You might also like." />
          <NuxtLink :to="section.path" class="btn-ghost link-underline reveal shrink-0">
            All {{ section.name.toLowerCase() }}
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
        </div>
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          <div
            v-for="(item, index) in related"
            :key="item.slug"
            class="reveal"
            :style="{ transitionDelay: `${index * 80}ms` }"
          >
            <ListingCard :listing="item" />
          </div>
        </div>
      </div>
    </section>

    <CTASection v-else secondary-label="Browse destinations" secondary-to="/destinations" />
  </div>
</template>
