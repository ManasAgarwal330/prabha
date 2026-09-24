<script setup lang="ts">
import { ArrowRight, CalendarDays, Check, Info } from 'lucide-vue-next'
import { getDestination } from '~/data/destinations'
import { getCategory, sections } from '~/data/sections'
import { listingPath, listingsBySection } from '~/data/listings'
import type { Listing } from '~/types'

/** Detail page shared by every stay, experience and event. */
const props = defineProps<{ listing: Listing }>()

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
      <div class="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-charcoal/40" aria-hidden="true" />

      <div class="container-pravaah relative w-full pb-14 pt-32 lg:pb-20">
        <Breadcrumbs :items="crumbs" light />
        <p class="eyebrow mt-7 text-ivory-bright/75">
          {{ category?.name }} · {{ current.location }}
        </p>
        <h1 class="mt-4 max-w-3xl text-display-lg text-ivory-bright text-shadow-hero">{{ current.title }}</h1>
        <p class="mt-5 max-w-xl text-lg leading-relaxed text-ivory-bright/85">{{ current.tagline }}</p>

        <dl class="mt-9 flex flex-wrap gap-x-10 gap-y-5 border-t border-ivory-bright/20 pt-6 text-ivory-bright">
          <div v-for="fact in current.facts.slice(0, 3)" :key="fact.label">
            <dt class="text-[0.7rem] uppercase tracking-[0.14em] text-ivory-bright/60">{{ fact.label }}</dt>
            <dd class="mt-1.5 font-display text-lg">{{ fact.value }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <div class="container-pravaah py-20 lg:py-24">
      <div class="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <!-- Main column -->
        <div class="lg:col-span-7">
          <section>
            <h2 class="reveal text-display-sm">About this {{ section.singular }}</h2>
            <div class="reveal prose-pravaah mt-6">
              <p v-for="paragraph in current.overview" :key="paragraph">{{ paragraph }}</p>
            </div>
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

          <section v-if="current.itinerary?.length" class="mt-16">
            <h2 class="reveal text-display-sm">Day by day</h2>
            <div class="reveal mt-8">
              <ItineraryList :days="current.itinerary" />
            </div>
          </section>

          <section v-if="current.inclusions?.length" class="mt-16">
            <h2 class="reveal font-display text-2xl">What is included</h2>
            <ul class="reveal mt-5 grid gap-3 text-sm leading-relaxed text-ink-soft sm:grid-cols-2">
              <li v-for="item in current.inclusions" :key="item" class="flex gap-3">
                <Check class="mt-0.5 h-4 w-4 shrink-0 text-link" aria-hidden="true" />
                {{ item }}
              </li>
            </ul>
          </section>

          <section class="mt-16">
            <h2 class="reveal text-display-sm">Good to know</h2>
            <ol class="reveal mt-6 space-y-5">
              <li
                v-for="(item, index) in current.goodToKnow"
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
              <p class="text-[0.7rem] uppercase tracking-[0.14em] text-ink-muted">{{ category?.name }}</p>
              <p class="mt-1.5 font-display text-3xl leading-tight">{{ current.title }}</p>

              <dl class="mt-7 space-y-4 border-t border-hairline pt-6 text-sm">
                <div v-for="fact in current.facts" :key="fact.label" class="flex items-start gap-3">
                  <Info class="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
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
