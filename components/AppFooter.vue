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
    <div class="container-pravaah py-16 lg:py-20">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-8">
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

        <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6 lg:col-start-6">
          <div>
            <h2 class="eyebrow mb-5">Company</h2>
            <ul class="space-y-3 text-sm">
              <li v-for="item in footerNav.company" :key="item.to">
                <NuxtLink :to="item.to" class="text-ink-soft transition-colors hover:text-accent">
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="eyebrow mb-5">Explore</h2>
            <ul class="space-y-3 text-sm">
              <li v-for="item in footerNav.explore" :key="item.to">
                <NuxtLink :to="item.to" class="text-ink-soft transition-colors hover:text-accent">
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="eyebrow mb-5">Support</h2>
            <ul class="space-y-3 text-sm">
              <li v-for="item in footerNav.support" :key="item.to">
                <NuxtLink :to="item.to" class="text-ink-soft transition-colors hover:text-accent">
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

      <nav class="mt-14 border-t border-hairline pt-8" aria-label="Popular with travellers">
        <h2 class="eyebrow mb-4">Popular with travellers</h2>
        <ul class="flex flex-wrap gap-x-5 gap-y-2.5 text-sm">
          <li v-for="item in popular" :key="item.to">
            <NuxtLink :to="item.to" class="text-ink-soft transition-colors hover:text-accent">{{ item.label }}</NuxtLink>
          </li>
        </ul>
        <p class="mt-6 max-w-4xl text-xs leading-relaxed text-ink-muted">
          {{ site.name }} ({{ site.legalName }}) is a tours and travels studio from {{ site.contact.location.region }}:
          homestay, villa and hotel bookings, Himalayan treks and expeditions, tour packages, festival trips and
          custom journeys across {{ site.contact.location.region }} and India.
        </p>
      </nav>

      <div
        class="mt-8 flex flex-col gap-4 border-t border-hairline pt-8 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between"
      >
        <p>© {{ year }} {{ site.legalName }}. All rights reserved.</p>
        <p class="flex flex-wrap items-center gap-x-5 gap-y-2">
          <NuxtLink to="/privacy-policy" class="transition-colors hover:text-accent">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="transition-colors hover:text-accent">Terms</NuxtLink>
          <span>{{ site.contact.location.region }}, {{ site.contact.location.country }}</span>
        </p>
      </div>
    </div>
  </footer>
</template>
