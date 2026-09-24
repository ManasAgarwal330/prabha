<script setup lang="ts">
import { ArrowRight, ArrowDown, ArrowUpRight, MapPin, Star, Compass } from 'lucide-vue-next'
import { destinations } from '~/data/destinations'
import { sectionList } from '~/data/sections'
import { featuredListings, listingsBySection } from '~/data/listings'
import { testimonials } from '~/data/testimonials'
import { sortedArticles } from '~/data/blog'
import { brandStory, howItWorks, site, valueProps } from '~/data/site'

const HERO_IMAGE = 'photo-1506905925346-21bda4d32df4'
const STORY_IMAGE = 'photo-1501555088652-021faa106b9b'

/** Split so each word can ride up from behind its own mask. */
const headlineWords = site.heroHeadline.split(' ')

const gridDestinations = destinations.slice(0, 6)
const featuredStays = featuredListings('stays').slice(0, 3)
const featuredJourneys = featuredListings('experiences').slice(0, 3)
const stories = sortedArticles.slice(0, 3)

/** The four offering tabs, shown as the first thing under the hero. */
const pillars = sectionList.map((section) => ({
  section,
  count: listingsBySection[section.key].length
}))

definePageMeta({ hero: true })

usePageSeo({
  title: `${site.name} — ${site.titleTagline}`,
  description: site.description,
  path: '/',
  image: HERO_IMAGE
})
</script>

<template>
  <div>
    <!-- Hero -->
    <!-- Full small-viewport height: at scroll 0 the image fills the screen with
         no strip of the next section showing. `svh` (not `vh`) so mobile browser
         chrome cannot leave a gap when the toolbar collapses. -->
    <section class="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <!-- The slow push-in sits on a wrapper so it never fights the image's own transforms. -->
      <div class="absolute inset-0 animate-kenburns will-change-transform">
        <AppImage
          :src="HERO_IMAGE"
          alt="First light over a Himalayan range above the clouds"
          :ratio="16 / 9"
          sizes="100vw"
          priority
          :zoom="false"
          class="h-full w-full"
        />
      </div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-pine-deep via-pine-deep/45 to-pine/30"
        aria-hidden="true"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-pine-deep/70 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div class="container-pravaah relative w-full pb-14 pt-32 sm:pb-16 lg:pb-20">
        <p class="hero-fade inline-flex items-center gap-2 rounded-pill border border-ivory-bright/25 bg-ivory-bright/10 px-4 py-2 text-xs font-medium tracking-wide text-ivory-bright backdrop-blur-md" style="animation-delay: 0.1s">
          <span class="inline-flex h-2 w-2 rounded-full bg-saffron-light" aria-hidden="true" />
          Custom journeys across India
          <span class="hidden items-center gap-1 text-ivory-bright/80 sm:inline-flex">
            · <Star class="h-3 w-3 fill-saffron-light text-saffron-light" aria-hidden="true" /> Loved by slow travellers
          </span>
        </p>

        <h1 class="mt-6 max-w-4xl text-display-xl tracking-[-0.025em] text-ivory-bright text-shadow-hero">
          <span v-for="(word, index) in headlineWords" :key="`${word}-${index}`" class="hero-mask mr-[0.26em]">
            <span class="hero-word" :style="{ animationDelay: `${0.25 + index * 0.09}s` }">{{ word }}</span>
          </span>
        </h1>

        <p
          class="hero-fade mt-6 max-w-xl text-base leading-relaxed text-ivory-bright/85 sm:text-lg"
          style="animation-delay: 0.62s"
        >
          Handpicked stays, Himalayan treks, festivals and retreats — thoughtfully crafted journeys across India, designed around the way you want to travel.
        </p>

        <div class="hero-fade mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style="animation-delay: 0.74s">
          <NuxtLink to="/#about" class="btn-light group w-full px-8 py-4 sm:w-auto">
            About Pravaah
            <ArrowRight
              class="h-4 w-4 transition-transform duration-300 ease-editorial group-hover:translate-x-1"
              aria-hidden="true"
            />
          </NuxtLink>
          <NuxtLink
            to="/plan-my-trip"
            class="btn glass-panel w-full border border-ivory-bright/30 text-ivory-bright hover:border-ivory-bright/70 hover:bg-ivory-bright/10 px-8 py-4 sm:w-auto"
          >
            <Compass class="h-4 w-4" aria-hidden="true" />
            Plan My Trip
          </NuxtLink>
        </div>

        <div class="hero-fade mt-8 flex flex-wrap items-center gap-2 text-xs text-ivory-bright/70" style="animation-delay: 0.8s">
          <span class="mr-1 inline-flex items-center gap-1.5"><MapPin class="h-3.5 w-3.5" aria-hidden="true" /> Popular:</span>
          <NuxtLink to="/destinations/uttarakhand" class="rounded-pill border border-ivory-bright/20 px-3 py-1.5 backdrop-blur-sm transition-colors hover:border-ivory-bright/60 hover:text-ivory-bright">Uttarakhand</NuxtLink>
          <NuxtLink to="/experiences/hornbill-festival-nagaland" class="rounded-pill border border-ivory-bright/20 px-3 py-1.5 backdrop-blur-sm transition-colors hover:border-ivory-bright/60 hover:text-ivory-bright">Hornbill Festival</NuxtLink>
          <NuxtLink to="/experiences/khaliya-top-trek" class="rounded-pill border border-ivory-bright/20 px-3 py-1.5 backdrop-blur-sm transition-colors hover:border-ivory-bright/60 hover:text-ivory-bright">Khaliya Top</NuxtLink>
        </div>

        <dl
          class="hero-fade mt-10 grid max-w-2xl grid-cols-3 gap-3 sm:gap-4"
          style="animation-delay: 0.86s"
        >
          <div v-for="stat in brandStory.stats" :key="stat.label" class="glass-panel rounded-card border border-ivory-bright/15 px-4 py-4 sm:px-5">
            <dt class="sr-only">{{ stat.label }}</dt>
            <dd>
              <span class="block font-display text-2xl text-ivory-bright sm:text-3xl">
                <CountUp :value="stat.value" />
              </span>
              <span class="mt-1 block text-[0.7rem] leading-snug text-ivory-bright/70">{{ stat.label }}</span>
            </dd>
          </div>
        </dl>

        <a href="#explore" class="hero-fade mt-10 hidden items-center gap-2 text-xs uppercase tracking-[0.18em] text-ivory-bright/60 transition-colors hover:text-ivory-bright sm:inline-flex" style="animation-delay: 0.95s">
          Scroll to explore
          <ArrowDown class="h-4 w-4 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>

    <!-- What we offer -->
    <section id="explore" class="container-pravaah scroll-mt-20 py-20 lg:py-28">
      <SectionHeading
        eyebrow="Explore Pravaah"
        title="Stay, explore — or simply slow down."
        intro="Three ways to travel with us. Every one of them is planned around the people and places we know best."
      />

      <div class="mt-12 grid gap-4 sm:grid-cols-3 lg:gap-5">
        <NuxtLink
          v-for="(pillar, index) in pillars"
          :key="pillar.section.key"
          :to="pillar.section.path"
          v-tilt
          class="reveal group relative block h-[26rem] overflow-hidden rounded-card"
          :style="{ transitionDelay: `${index * 70}ms` }"
        >
          <AppImage
            :src="pillar.section.heroImage"
            :alt="pillar.section.name"
            :ratio="3 / 4"
            sizes="(min-width: 640px) 33vw, 100vw"
            class="h-full w-full"
          />
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/45 to-charcoal/5"
            aria-hidden="true"
          />
          <div class="absolute inset-x-0 bottom-0 p-6 text-ivory-bright">
            <p class="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ivory-bright/75">
              {{ pillar.count }} {{ pillar.count === 1 ? pillar.section.singular : `${pillar.section.singular}s` }}
            </p>
            <h3 class="mt-2 font-display text-3xl tracking-[-0.015em]">
              <span class="sweep">{{ pillar.section.name }}</span>
            </h3>
            <ul class="mt-3 space-y-1 text-xs text-ivory-bright/80">
              <li v-for="category in pillar.section.categories" :key="category.slug">{{ category.name }}</li>
            </ul>
            <span class="mt-5 inline-flex items-center gap-1.5 border-t border-ivory-bright/20 pt-4 text-xs font-medium">
              Explore {{ pillar.section.name.toLowerCase() }}
              <ArrowUpRight
                class="h-4 w-4 transition-transform duration-300 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Featured stays -->
    <section class="section-dark py-20 lg:py-28">
      <div class="container-pravaah">
        <div class="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Handpicked stays"
            title="Places worth the journey on their own."
            intro="Lakeside hotels, orchard homestays, camping in the woods and farm stays — every one run by people we know."
          />
          <NuxtLink to="/stays" class="btn-ghost link-underline reveal shrink-0">
            All stays
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          <div
            v-for="(listing, index) in featuredStays"
            :key="listing.slug"
            class="reveal"
            :style="{ transitionDelay: `${index * 80}ms` }"
          >
            <ListingCard :listing="listing" />
          </div>
        </div>
      </div>
    </section>

    <!-- Featured destinations -->
    <section id="destinations" class="container-pravaah scroll-mt-20 py-20 lg:py-28">
      <div class="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Where to go"
          title="From the Kumaon Himalaya to the Rajasthan desert."
          intro="North, northeast and west India — a small number of places we know deeply rather than thinly across the whole country."
        />
        <NuxtLink to="/destinations" class="btn-ghost link-underline reveal shrink-0">
          All destinations
          <ArrowRight class="h-4 w-4" aria-hidden="true" />
        </NuxtLink>
      </div>

      <div
        class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[repeat(3,15rem)] lg:gap-5"
      >
        <div
          v-for="(destination, index) in gridDestinations"
          :key="destination.slug"
          class="reveal h-80 min-w-0 sm:h-72 lg:h-full"
          :class="index === 0 ? 'sm:col-span-2 lg:row-span-2 lg:h-full' : ''"
          :style="{ transitionDelay: `${Math.min(index, 4) * 70}ms` }"
        >
          <DestinationCard
            :destination="destination"
            :size="index === 0 ? 'feature' : 'compact'"
            :sizes="index === 0 ? '(min-width: 1024px) 66vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'"
          />
        </div>
      </div>
    </section>

    <!-- Brand story — the "About Pravaah" buttons land here -->
    <section id="about" class="scroll-mt-20 border-y border-hairline bg-canvas-alt py-20 lg:py-28">
      <div class="container-pravaah grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div class="reveal-media order-2 overflow-hidden rounded-card lg:order-1">
          <AppImage
            :src="STORY_IMAGE"
            alt="A traveller looking out across a green valley in the Indian Himalaya"
            :ratio="4 / 5"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </div>

        <div class="order-1 lg:order-2">
          <SectionHeading :eyebrow="brandStory.eyebrow" :title="brandStory.title" />
          <div class="reveal mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            <p v-for="paragraph in brandStory.body" :key="paragraph">{{ paragraph }}</p>
          </div>
          <NuxtLink to="/about" class="btn-secondary reveal mt-9">
            More about Pravaah
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Treks & experiences -->
    <section class="section-dark py-20 lg:py-28">
      <div class="container-pravaah">
        <div class="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Treks & experiences"
            title="Base camps, border valleys and the source of the Ganga."
            intro="Fully supported treks, 4x4 journeys and festivals — planned and led by people who know the ground."
          />
          <NuxtLink to="/experiences" class="btn-ghost link-underline reveal shrink-0">
            All experiences
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          <div
            v-for="(listing, index) in featuredJourneys"
            :key="`${listing.section}-${listing.slug}`"
            class="reveal"
            :style="{ transitionDelay: `${index * 80}ms` }"
          >
            <ListingCard :listing="listing" />
          </div>
        </div>
      </div>
    </section>

    <!-- Why Pravaah -->
    <section class="container-pravaah py-20 lg:py-28">
      <SectionHeading
        eyebrow="Why Pravaah"
        title="A small studio, built around the parts of travel that matter."
        intro="No queues, no generic packages — just people who know these roads and plan like it matters."
      />

      <div class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        <div
          v-for="(value, index) in valueProps"
          :key="value.title"
          class="reveal surface-card card-lift group p-7 shadow-soft hover:shadow-lift"
          :style="{ transitionDelay: `${index * 70}ms` }"
        >
          <span class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-forest/10 text-forest">
            <component :is="resolveIcon(value.icon)" class="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 class="mt-5 font-display text-xl tracking-[-0.01em]">{{ value.title }}</h3>
          <p class="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{{ value.description }}</p>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="section-forest py-20 lg:py-28">
      <div class="container-pravaah">
        <div class="reveal max-w-3xl">
          <p class="eyebrow mb-4">How it works</p>
          <h2 class="text-display-md">Three steps, and then you are travelling.</h2>
        </div>

        <ol class="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          <li
            v-for="(step, index) in howItWorks"
            :key="step.number"
            class="reveal border-t border-hairline pt-6"
            :style="{ transitionDelay: `${index * 90}ms` }"
          >
            <span class="font-display text-sm tracking-[0.2em] text-accent">{{ step.number }}</span>
            <h3 class="mt-4 font-display text-2xl">{{ step.title }}</h3>
            <p class="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{{ step.description }}</p>
          </li>
        </ol>

        <NuxtLink to="/plan-my-trip" class="btn-primary reveal mt-12">
          Start planning
          <ArrowRight class="h-4 w-4" aria-hidden="true" />
        </NuxtLink>
      </div>
    </section>

    <!-- Journals -->
    <section class="container-pravaah py-20 lg:py-28">
      <div class="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Journals"
          title="Notes from the road."
          intro="Guides, seasons and the practical detail we would want before booking a trip ourselves."
        />
        <NuxtLink to="/journals" class="btn-ghost link-underline reveal shrink-0">
          All stories
          <ArrowRight class="h-4 w-4" aria-hidden="true" />
        </NuxtLink>
      </div>

      <div class="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        <div
          v-for="(article, index) in stories"
          :key="article.slug"
          class="reveal"
          :style="{ transitionDelay: `${index * 80}ms` }"
        >
          <BlogCard :article="article" />
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-dark py-20 lg:py-28">
      <div class="container-pravaah">
        <SectionHeading eyebrow="In their words" title="What travellers tell us afterwards." />

        <div class="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.name"
            class="reveal"
            :style="{ transitionDelay: `${index * 70}ms` }"
          >
            <TestimonialCard :testimonial="testimonial" />
          </div>
        </div>
      </div>
    </section>

    <CTASection />
  </div>
</template>
