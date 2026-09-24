<script setup lang="ts">
import { Clock, MessageCircle, ShieldCheck } from 'lucide-vue-next'
import { site } from '~/data/site'
import { howItWorks } from '~/data/site'

const route = useRoute()

/** Allows deep links like /plan-my-trip?destination=Uttarakhand from anywhere on the site. */
const presetDestination = computed(() => String(route.query.destination || ''))

const reassurances = [
  {
    icon: Clock,
    title: 'A reply within one working day',
    body: 'With a suggested route, a stay list and an indicative cost — not a brochure.'
  },
  {
    icon: ShieldCheck,
    title: 'Nothing to pay to get a plan',
    body: 'Quotes are free and unconditional. You only pay once you are happy with the itinerary.'
  },
  {
    icon: MessageCircle,
    title: 'One follow-up, then silence',
    body: 'We check in once. If the timing is wrong, we would rather you came back next year.'
  }
]

usePageSeo({
  title: 'Plan My Trip — Tell Pravaah Where You Want to Go',
  description:
    'Share your dates, destination and budget and a Pravaah trip designer will come back within one working day with a suggested route and an indicative cost.',
  path: '/plan-my-trip',
  image: 'photo-1493246507139-91e8fad9978e'
})

useJsonLd(
  breadcrumbLd([
    { name: 'Home', path: '/' },
    { name: 'Plan My Trip', path: '/plan-my-trip' }
  ])
)
</script>

<template>
  <div>
    <section class="container-pravaah pb-14 pt-16 lg:pt-20">
      <Breadcrumbs
        :items="[
          { name: 'Home', path: '/' },
          { name: 'Plan My Trip', path: '/plan-my-trip' }
        ]"
      />

      <div class="mt-8 max-w-3xl">
        <p class="eyebrow mb-4">Plan my trip</p>
        <h1 class="text-display-lg">Tell us where you want to go.</h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
          We will help you figure out the rest — the route, the season, the pace and what it actually costs. It
          takes two minutes to send, and there is nothing to pay for a plan.
        </p>
      </div>
    </section>

    <section class="container-pravaah pb-20 lg:pb-24">
      <div class="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div class="reveal lg:col-span-7">
          <div class="surface-card bg-surface p-7 sm:p-10">
            <ContactForm :preset-destination="presetDestination" source="plan-my-trip" />
          </div>
        </div>

        <aside class="lg:col-span-4 lg:col-start-9">
          <div class="lg:sticky lg:top-28">
            <h2 class="eyebrow mb-6">What happens next</h2>
            <ul class="space-y-7">
              <li v-for="item in reassurances" :key="item.title" class="reveal flex gap-4">
                <component :is="item.icon" class="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <h3 class="font-display text-lg leading-snug">{{ item.title }}</h3>
                  <p class="mt-1.5 text-sm leading-relaxed text-ink-muted">{{ item.body }}</p>
                </div>
              </li>
            </ul>

            <div class="mt-10 border-t border-hairline pt-7">
              <p class="text-sm leading-relaxed text-ink-muted">
                Prefer to talk it through? Call
                <a :href="`tel:${site.contact.phoneHref}`" class="font-medium text-link underline underline-offset-4">
                  {{ site.contact.phoneDisplay }}</a
                >
                — we are on {{ site.contact.hours }}.
              </p>
              <div class="mt-5">
                <WhatsAppButton variant="inline" />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="section-dark py-20 lg:py-24">
      <div class="container-pravaah">
        <SectionHeading eyebrow="How it works" title="Three steps, and then you are travelling." />
        <ol class="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
          <li
            v-for="(step, index) in howItWorks"
            :key="step.number"
            class="reveal border-t border-hairline pt-6"
            :style="{ transitionDelay: `${index * 80}ms` }"
          >
            <span class="font-display text-sm tracking-[0.2em] text-accent">{{ step.number }}</span>
            <h3 class="mt-4 font-display text-2xl">{{ step.title }}</h3>
            <p class="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{{ step.description }}</p>
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>
