<script setup lang="ts">
import { ArrowRight, Mail } from 'lucide-vue-next'
import { brandStory, howItWorks, site, valueProps } from '~/data/site'
import { testimonials } from '~/data/testimonials'

const HERO_IMAGE = 'photo-1469474968028-56623f02e42e'

const principles = [
  {
    title: 'We say when a plan is wrong',
    body: 'If your dates do not suit the region, or the budget will not buy the trip you are imagining, we will tell you before you pay rather than after you arrive.'
  },
  {
    title: 'Money should reach the people hosting you',
    body: 'Homestays, family kitchens, village guides and independent drivers, wherever they exist. We would rather book the small operator than the chain.'
  },
  {
    title: 'Fewer places, better planned',
    body: 'A short list of places is a deliberate limit. We only sell stays and trips where we have walked the route and met the people running it.'
  },
  {
    title: 'No pressure, ever',
    body: 'One follow-up after a quote, and that is it. If the timing is not right, we would rather you came back next year.'
  }
]

usePageSeo({
  title: 'About Pravaah — A Travel Studio Built Around India',
  description:
    'Pravaah is a small travel studio planning stays, treks, experiences and retreats across India. How we work, what we believe, and who is behind the trips.',
  path: '/about',
  image: HERO_IMAGE
})

useJsonLd(
  breadcrumbLd([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' }
  ])
)
</script>

<template>
  <div>
    <section class="container-pravaah pb-14 pt-16 lg:pt-20">
      <Breadcrumbs
        :items="[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' }
        ]"
      />

      <div class="mt-8 max-w-4xl">
        <p class="chip mb-6"><span class="chip-dot" aria-hidden="true" />About {{ site.name }}</p>
        <h1 class="text-display-lg">{{ brandStory.title }}</h1>
      </div>
    </section>

    <section class="container-pravaah">
      <div class="reveal-media overflow-hidden rounded-card shadow-lift">
        <AppImage
          :src="HERO_IMAGE"
          alt="A misty valley at first light in the Indian hills"
          :ratio="21 / 9"
          sizes="(min-width: 1280px) 1200px, 100vw"
          priority
        />
      </div>
    </section>

    <section class="container-pravaah py-20 lg:py-24">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-7">
          <div class="reveal prose-pravaah">
            <p
              v-for="(paragraph, index) in brandStory.body"
              :key="paragraph"
              :class="index === 0 ? 'border-l-2 border-accent pl-5 text-xl leading-relaxed text-ink' : ''"
            >
              {{ paragraph }}
            </p>
            <p>
              Pravaah means flow — the movement of a river, the way a current finds its own line through a
              valley. It seemed like the right name for a company built around journeys that carry you along
              rather than march you through.
            </p>
            <p>
              We are new as a business and not new to this work. Between us we have spent years driving these
              roads, sleeping in these valleys and learning which stay is worth the extra hour. The studio exists
              because we kept being asked to plan trips for friends, and eventually it stopped being a favour.
            </p>
          </div>
        </div>

        <aside class="reveal lg:col-span-4 lg:col-start-9">
          <dl class="space-y-3">
            <div v-for="stat in brandStory.stats" :key="stat.label" class="surface-card glow-card flex flex-col-reverse p-6 shadow-soft">
              <dt class="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-muted">{{ stat.label }}</dt>
              <dd class="text-gradient font-display text-5xl font-semibold">{{ stat.value }}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>

    <!-- What we believe -->
    <section class="section-dark py-20 lg:py-24">
      <div class="container-pravaah">
        <SectionHeading eyebrow="What we believe" title="Four things we will not trade away." />

        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5">
          <div
            v-for="(principle, index) in principles"
            :key="principle.title"
            class="reveal surface-card glow-card p-7"
            :style="{ transitionDelay: `${index * 70}ms` }"
          >
            <span class="icon-tile h-10 w-10 rounded-xl font-mono text-[0.72rem] font-medium">{{ String(index + 1).padStart(2, '0') }}</span>
            <h3 class="mt-5 font-display text-xl leading-snug">{{ principle.title }}</h3>
            <p class="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{{ principle.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How we work -->
    <section class="container-pravaah py-20 lg:py-24">
      <SectionHeading eyebrow="How we work" title="From first message to the last mile home." />

      <ol class="mt-12 grid gap-4 sm:grid-cols-3 lg:gap-5">
        <li
          v-for="(step, index) in howItWorks"
          :key="step.number"
          class="reveal surface-card glow-card p-7 shadow-soft"
          :style="{ transitionDelay: `${index * 80}ms` }"
        >
          <span class="icon-tile h-10 w-10 rounded-xl font-mono text-[0.72rem] font-medium">{{ step.number }}</span>
          <h3 class="mt-4 font-display text-2xl">{{ step.title }}</h3>
          <p class="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{{ step.description }}</p>
        </li>
      </ol>

      <div class="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(value, index) in valueProps"
          :key="value.title"
          class="reveal"
          :style="{ transitionDelay: `${index * 60}ms` }"
        >
          <span class="icon-tile"><component :is="resolveIcon(value.icon)" class="h-5 w-5" aria-hidden="true" /></span>
          <h3 class="mt-5 font-display text-xl">{{ value.title }}</h3>
          <p class="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{{ value.description }}</p>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="border-y border-hairline bg-canvas-alt py-20 lg:py-24">
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

    <!-- Careers -->
    <section id="careers" class="container-pravaah scroll-mt-24 py-20 lg:py-24">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-5">
          <SectionHeading eyebrow="Careers" title="We are small, and we hire slowly." />
        </div>
        <div class="reveal lg:col-span-6 lg:col-start-7">
          <p class="prose-pravaah">
            There are no open roles right now. We do keep a list, and when we add trip designers, guides or
            drivers it is almost always someone already on it.
          </p>
          <p class="prose-pravaah">
            If you know a region deeply — properly, not from a listicle — write to us with where you have been and
            what you would plan differently.
          </p>
          <a :href="`mailto:${site.contact.email}`" class="btn-secondary mt-6">
            <Mail class="h-4 w-4" aria-hidden="true" />
            {{ site.contact.email }}
          </a>
        </div>
      </div>
    </section>

    <section class="section-forest py-20 lg:py-24">
      <div class="container-pravaah flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div class="reveal max-w-xl">
          <h2 class="text-display-md">Have a question before you plan anything?</h2>
          <p class="mt-4 leading-relaxed text-ink-soft">
            Ask it. We answer questions about routes and seasons whether or not you end up booking with us.
          </p>
        </div>
        <div class="reveal flex flex-col gap-3 sm:flex-row">
          <NuxtLink to="/contact" class="btn-primary">
            Contact us
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
          <NuxtLink to="/plan-my-trip" class="btn border border-white/40 text-white backdrop-blur-sm hover:border-white hover:bg-white/10">
            Plan My Trip
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
