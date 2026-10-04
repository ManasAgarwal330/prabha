<script setup lang="ts">
import { Instagram, Mail, Phone } from 'lucide-vue-next'

const site = useSettings()
const year = new Date().getFullYear()

const socials = [
  { label: 'Instagram', handle: site.social.instagramHandle, href: site.social.instagram, icon: Instagram }
]

/**
 * Descriptive links to every destination and every category with something in it,
 * on every page. They help visitors jump straight in and tell search engines what
 * each page is about; built from the content, so they never point at an empty page.
 */
const { destinations, sections } = useSiteBundle()

/** A soft pill glides behind whichever footer link is under the pointer. */
const footerHighlight = {
  hover: true,
  class: 'rounded-lg bg-white/[0.07] ring-1 ring-inset ring-accent/25',
  spread: [10, 4] as [number, number]
}
const popularHighlight = { ...footerHighlight, items: 'children' as const }
const popular = [
  ...destinations.map((d) => ({ label: `${d.name} tours & stays`, to: `/destinations/${d.slug}` })),
  ...sections.flatMap((section) =>
    section.categories
      .filter((category) => category.listingCount > 0)
      .map((category) => ({ label: category.name, to: `${section.path}#${category.slug}` }))
  )
]
</script>

<template>
  <footer class="section-dark">
    <div class="h-px bg-gradient-to-r from-transparent via-brand-light/60 to-transparent" aria-hidden="true" />
    <div class="container-pravaah py-12 sm:py-16 lg:py-20">
      <div class="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-4">
          <NuxtLink to="/" class="inline-block" :aria-label="`${site.name} — home`">
            <PravaahLogo tone="light" size="lg" />
          </NuxtLink>
          <p class="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
            {{ site.description }}
          </p>

          <div class="mt-6 space-y-2 text-sm">
            <a
              :href="`mailto:${site.contact.email}`"
              class="flex items-center gap-2.5 text-ink-soft transition-colors hover:text-accent"
            >
              <Mail class="h-4 w-4 shrink-0" aria-hidden="true" />
              {{ site.contact.email }}
            </a>
            <a
              :href="`tel:${site.contact.phoneHref}`"
              class="flex items-center gap-2.5 text-ink-soft transition-colors hover:text-accent"
            >
              <Phone class="h-4 w-4 shrink-0" aria-hidden="true" />
              {{ site.contact.phoneDisplay }}
            </a>
          </div>
        </div>

        <!-- Phones: Explore (the longest list) runs down the left, Company and Support stack on the right. -->
        <div
          class="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-hairline pt-10 sm:grid-cols-3 sm:gap-8 sm:border-0 sm:pt-0 lg:col-span-6 lg:col-start-6"
        >
          <div>
            <h2 class="eyebrow mb-5">Company</h2>
            <ul v-animated-background="footerHighlight" class="space-y-3 text-sm">
              <li v-for="item in footerNav.company" :key="item.to">
                <NuxtLink :to="item.to" :data-id="item.to" class="text-ink-soft transition-colors hover:text-accent">
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="order-first row-span-2 sm:order-none sm:row-span-1">
            <h2 class="eyebrow mb-5">Explore</h2>
            <ul v-animated-background="footerHighlight" class="space-y-3 text-sm">
              <li v-for="item in footerNav.explore" :key="item.to">
                <NuxtLink :to="item.to" :data-id="item.to" class="text-ink-soft transition-colors hover:text-accent">
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="eyebrow mb-5">Support</h2>
            <ul v-animated-background="footerHighlight" class="space-y-3 text-sm">
              <li v-for="item in footerNav.support" :key="item.to">
                <NuxtLink :to="item.to" :data-id="item.to" class="text-ink-soft transition-colors hover:text-accent">
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="lg:col-span-2">
          <h2 class="eyebrow mb-5">Follow</h2>
          <div class="flex flex-col gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2.5 self-start rounded-pill border border-hairline px-4 py-2.5 text-sm text-ink-soft transition-colors hover:border-ink/40 hover:text-ink"
              :aria-label="`${site.name} on ${social.label} (${social.handle})`"
            >
              <component :is="social.icon" class="h-4 w-4 shrink-0" aria-hidden="true" />
              {{ social.handle }}
            </a>
          </div>
        </div>
      </div>

      <nav class="mt-10 border-t border-hairline pt-8 sm:mt-14" aria-label="Popular with travellers">
        <h2 class="eyebrow mb-4">Popular with travellers</h2>
        <!-- Phones show these as chips so the long list wraps into tidy rows. -->
        <ul v-animated-background="popularHighlight" class="flex flex-wrap gap-2 text-[0.8125rem] sm:gap-x-5 sm:gap-y-2.5 sm:text-sm">
          <li v-for="item in popular" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="inline-flex rounded-pill border border-hairline bg-surface/50 px-3 py-1.5 text-ink-soft transition-colors hover:text-accent sm:inline sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
        <p class="mt-6 max-w-4xl text-xs leading-relaxed text-ink-muted">
          {{ site.name }} ({{ site.legalName }}) is a tours and travels studio from {{ site.contact.location.region }}:
          homestay, villa and hotel bookings, Himalayan treks and expeditions, tour packages, festival trips and
          custom journeys across {{ site.contact.location.region }} and India.
        </p>
      </nav>

      <div
        class="mt-8 flex flex-col items-center gap-3 border-t border-hairline pb-14 pt-8 text-center text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pb-0 sm:text-left"
      >
        <p>© {{ year }} {{ site.legalName }}. All rights reserved.</p>
        <p class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-start">
          <NuxtLink to="/privacy-policy" class="transition-colors hover:text-accent">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="transition-colors hover:text-accent">Terms</NuxtLink>
          <span>{{ site.contact.location.region }}, {{ site.contact.location.country }}</span>
        </p>
      </div>
    </div>
  </footer>
</template>
