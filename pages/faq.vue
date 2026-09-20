<script setup lang="ts">
import { destinations } from '~/data/destinations'
import { generalFaqs } from '~/data/faq'

usePageSeo({
  title: 'Frequently Asked Questions — Planning a Trip with Prabha',
  description:
    'How planning, pricing, payments, cancellations, permits and support work at Prabha, plus destination-specific questions for each region we cover.',
  path: '/faq',
  image: 'photo-1544735716-392fe2489ffa'
})

useJsonLd(
  breadcrumbLd([
    { name: 'Home', path: '/' },
    { name: 'FAQ', path: '/faq' }
  ]),
  faqLd(generalFaqs)
)
</script>

<template>
  <div>
    <section class="container-prabha pb-14 pt-16 lg:pt-20">
      <Breadcrumbs
        :items="[
          { name: 'Home', path: '/' },
          { name: 'FAQ', path: '/faq' }
        ]"
      />

      <div class="mt-8 max-w-3xl">
        <p class="eyebrow mb-4">Frequently asked</p>
        <h1 class="text-display-lg">Straight answers, before you commit to anything.</h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-muted">
          How planning works, what prices cover, and what happens if something changes. If your question is not
          here, ask it — we will add it.
        </p>
      </div>
    </section>

    <section class="container-prabha pb-20 lg:pb-24">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-4">
          <nav class="lg:sticky lg:top-28" aria-label="FAQ sections">
            <p class="eyebrow mb-5">On this page</p>
            <ul class="space-y-3 text-sm">
              <li>
                <a href="#general" class="link-underline text-charcoal-soft transition-colors hover:text-clay">
                  Planning &amp; booking
                </a>
              </li>
              <li v-for="destination in destinations" :key="destination.slug">
                <a
                  :href="`#${destination.slug}`"
                  class="link-underline text-charcoal-soft transition-colors hover:text-clay"
                >
                  {{ destination.name }}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="lg:col-span-7 lg:col-start-6">
          <section id="general" class="scroll-mt-28">
            <h2 class="reveal text-display-sm">Planning &amp; booking</h2>
            <div class="reveal mt-7">
              <FaqAccordion :items="generalFaqs" />
            </div>
          </section>

          <section
            v-for="destination in destinations"
            :id="destination.slug"
            :key="destination.slug"
            class="mt-16 scroll-mt-28"
          >
            <h2 class="reveal text-display-sm">{{ destination.name }}</h2>
            <div class="reveal mt-7">
              <FaqAccordion :items="destination.faqs" />
            </div>
            <NuxtLink
              :to="`/destinations/${destination.slug}`"
              class="btn-ghost link-underline reveal mt-6"
            >
              Read the {{ destination.name }} guide
            </NuxtLink>
          </section>
        </div>
      </div>
    </section>

    <CTASection
      title="Still have a question?"
      body="Ask it directly. We answer questions about routes and seasons whether or not you book with us."
      image="photo-1602216056096-3b40cc0c9944"
      primary-label="Contact us"
      primary-to="/contact"
      secondary-label="Plan My Trip"
      secondary-to="/plan-my-trip"
    />
  </div>
</template>
