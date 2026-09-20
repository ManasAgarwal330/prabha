<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { destinations } from '~/data/destinations'
import { popularTours } from '~/data/tours'
import { experiences } from '~/data/experiences'
import { testimonials } from '~/data/testimonials'
import { sortedArticles } from '~/data/blog'
import { brandStory, howItWorks, site, valueProps } from '~/data/site'

const HERO_IMAGE = 'photo-1506905925346-21bda4d32df4'
const STORY_IMAGE = 'photo-1501555088652-021faa106b9b'

const gridDestinations = destinations.slice(0, 6)
const journeys = popularTours.slice(0, 3)
const stories = sortedArticles.slice(0, 3)

definePageMeta({ hero: true })

usePageSeo({
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  path: '/',
  image: HERO_IMAGE
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative isolate flex min-h-[92svh] items-end overflow-hidden">
      <AppImage
        :src="HERO_IMAGE"
        alt="First light over a Himalayan range above the clouds"
        :ratio="16 / 9"
        sizes="100vw"
        priority
        :zoom="false"
        class="absolute inset-0 h-full w-full"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-charcoal/45"
        aria-hidden="true"
      />

      <div class="container-prabha relative w-full pb-16 pt-32 sm:pb-20 lg:pb-24">
        <p class="eyebrow text-ivory-bright/80">{{ site.name }}</p>
        <h1 class="mt-5 max-w-4xl text-display-xl text-ivory-bright text-shadow-hero">
          {{ site.tagline }}
        </h1>
        <p class="mt-6 max-w-xl text-base leading-relaxed text-ivory-bright/85 sm:text-lg">
          Discover thoughtfully crafted journeys across extraordinary places, designed around the way you want to
          travel.
        </p>

        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <NuxtLink to="/tours" class="btn-light w-full sm:w-auto">
            Explore Journeys
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
          <NuxtLink
            to="/plan-my-trip"
            class="btn w-full border border-ivory-bright/40 text-ivory-bright hover:border-ivory-bright hover:bg-ivory-bright/10 sm:w-auto"
          >
            Plan My Trip
          </NuxtLink>
        </div>

        <dl class="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-ivory-bright/20 pt-7 sm:mt-16">
          <div v-for="stat in brandStory.stats" :key="stat.label">
            <dt class="sr-only">{{ stat.label }}</dt>
            <dd>
              <span class="block font-display text-3xl text-ivory-bright sm:text-4xl">{{ stat.value }}</span>
              <span class="mt-1 block text-xs leading-snug text-ivory-bright/70">{{ stat.label }}</span>
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Featured destinations -->
    <section class="container-prabha py-20 lg:py-28">
      <div class="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Where to go"
          title="Six regions, each worth a fortnight."
          intro="We work deeply in a small number of places rather than thinly across all of India. These are the ones we know well enough to plan properly."
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

    <!-- Popular journeys -->
    <section class="section-dark py-20 lg:py-28">
      <div class="container-prabha">
        <div class="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Popular journeys"
            title="Itineraries our travellers keep coming back to."
            intro="Every one of these is a starting point. Tell us what to change and we will rebuild it around you."
          />
          <NuxtLink to="/tours" class="btn-ghost link-underline reveal shrink-0">
            All journeys
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
        </div>

        <div class="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          <div
            v-for="(tour, index) in journeys"
            :key="tour.slug"
            class="reveal"
            :style="{ transitionDelay: `${index * 80}ms` }"
          >
            <TourCard :tour="tour" />
          </div>
        </div>
      </div>
    </section>

    <!-- Why Prabha -->
    <section class="container-prabha py-20 lg:py-28">
      <SectionHeading
        eyebrow="Why Prabha"
        title="A small studio, built around the parts of travel that matter."
      />

      <div class="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(value, index) in valueProps"
          :key="value.title"
          class="reveal"
          :style="{ transitionDelay: `${index * 70}ms` }"
        >
          <component :is="resolveIcon(value.icon)" class="h-6 w-6 text-accent" aria-hidden="true" />
          <h3 class="mt-5 font-display text-xl">{{ value.title }}</h3>
          <p class="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{{ value.description }}</p>
        </div>
      </div>
    </section>

    <!-- Brand story -->
    <section class="border-y border-hairline bg-canvas-alt py-20 lg:py-28">
      <div class="container-prabha grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div class="reveal order-2 overflow-hidden rounded-card lg:order-1">
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
            More about Prabha
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Experiences -->
    <section class="section-dark py-20 lg:py-28">
      <div class="container-prabha">
        <SectionHeading
          eyebrow="How you travel"
          title="We sell experiences, not transport and hotels."
          intro="Pick the thread that interests you and we will build the route around it."
        />

        <div class="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          <div
            v-for="(experience, index) in experiences"
            :key="experience.slug"
            class="reveal"
            :style="{ transitionDelay: `${Math.min(index, 5) * 60}ms` }"
          >
            <ExperienceCard :experience="experience" :tall="index % 4 === 1 || index % 4 === 2" />
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="section-forest py-20 lg:py-28">
      <div class="container-prabha">
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

    <!-- Travel stories -->
    <section class="container-prabha py-20 lg:py-28">
      <div class="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Travel stories"
          title="Notes from the road."
          intro="Guides, seasons and the practical detail we would want before booking a trip ourselves."
        />
        <NuxtLink to="/blog" class="btn-ghost link-underline reveal shrink-0">
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
      <div class="container-prabha">
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
