<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { experiences } from '~/data/experiences'
import { destinations } from '~/data/destinations'

const slugFor = (name: string) => destinations.find((d) => d.name === name)?.slug

usePageSeo({
  title: 'Travel Experiences in India — Adventure, Culture, Food & More',
  description:
    'The eight threads Prabha builds journeys around: adventure, culture, nature, beaches, mountains, food, wildlife and wellness across India.',
  path: '/experiences',
  image: 'photo-1626621341517-bbf3d9990a23'
})

useJsonLd(
  breadcrumbLd([
    { name: 'Home', path: '/' },
    { name: 'Experiences', path: '/experiences' }
  ])
)
</script>

<template>
  <div>
    <section class="container-prabha pb-12 pt-16 lg:pt-20">
      <Breadcrumbs
        :items="[
          { name: 'Home', path: '/' },
          { name: 'Experiences', path: '/experiences' }
        ]"
      />

      <div class="mt-8 max-w-3xl">
        <p class="eyebrow mb-4">Experiences</p>
        <h1 class="text-display-lg">Start with what you want to feel, not where you want to go.</h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-muted">
          Most people come to us with a place in mind. The trips that work best usually start somewhere else — with
          a walk, a meal or a morning someone described to them. These are the threads we build routes around.
        </p>
      </div>
    </section>

    <!-- Grid overview -->
    <section class="container-prabha pb-20">
      <div class="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <div
          v-for="(experience, index) in experiences"
          :key="experience.slug"
          class="reveal"
          :style="{ transitionDelay: `${Math.min(index, 5) * 60}ms` }"
        >
          <ExperienceCard :experience="experience" :tall="index % 4 === 1 || index % 4 === 2" />
        </div>
      </div>
    </section>

    <!-- Detail sections -->
    <section class="border-t border-line">
      <article
        v-for="(experience, index) in experiences"
        :id="experience.slug"
        :key="experience.slug"
        class="scroll-mt-24 border-b border-line"
        :class="index % 2 === 1 ? 'bg-ivory-deep' : ''"
      >
        <div class="container-prabha grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div class="reveal overflow-hidden rounded-card" :class="index % 2 === 1 ? 'lg:order-2' : ''">
            <AppImage
              :src="experience.image"
              :alt="experience.name"
              :ratio="4 / 3"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>

          <div :class="index % 2 === 1 ? 'lg:order-1' : ''">
            <component :is="resolveIcon(experience.icon)" class="h-6 w-6 text-clay" aria-hidden="true" />
            <h2 class="reveal mt-5 text-display-sm">{{ experience.name }}</h2>
            <p class="reveal mt-5 max-w-prose text-[1.0625rem] leading-relaxed text-charcoal-soft">
              {{ experience.description }}
            </p>

            <div class="reveal mt-7">
              <p class="eyebrow mb-3">Where we plan it</p>
              <ul class="flex flex-wrap gap-2">
                <li v-for="name in experience.destinations" :key="name">
                  <NuxtLink
                    v-if="slugFor(name)"
                    :to="`/destinations/${slugFor(name)}`"
                    class="inline-block rounded-pill border border-line px-4 py-2 text-xs font-medium text-charcoal-soft transition-colors hover:border-charcoal/40 hover:text-charcoal"
                  >
                    {{ name }}
                  </NuxtLink>
                  <span
                    v-else
                    class="inline-block rounded-pill border border-line px-4 py-2 text-xs text-charcoal-muted"
                  >
                    {{ name }}
                  </span>
                </li>
              </ul>
            </div>

            <NuxtLink to="/plan-my-trip" class="btn-secondary reveal mt-8">
              Plan a {{ experience.name.toLowerCase() }} trip
              <ArrowRight class="h-4 w-4" aria-hidden="true" />
            </NuxtLink>
          </div>
        </div>
      </article>
    </section>

    <CTASection
      title="Tell us what you want the trip to feel like."
      body="We will work backwards from there to a region, a season and a route."
      image="photo-1506126613408-eca07ce68773"
      secondary-label="Browse destinations"
      secondary-to="/destinations"
    />
  </div>
</template>
