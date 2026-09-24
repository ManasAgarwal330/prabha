<script setup lang="ts">
import { Instagram, Mail, Phone } from 'lucide-vue-next'
import { footerNav, site } from '~/data/site'

const year = new Date().getFullYear()

const socials = [
  { label: 'Instagram', handle: site.social.instagramHandle, href: site.social.instagram, icon: Instagram }
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

      <div
        class="mt-14 flex flex-col gap-4 border-t border-hairline pt-8 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between"
      >
        <p>© {{ year }} {{ site.legalName }}. All rights reserved.</p>
        <p class="flex flex-wrap items-center gap-x-5 gap-y-2">
          <NuxtLink to="/privacy-policy" class="transition-colors hover:text-accent">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" class="transition-colors hover:text-accent">Terms</NuxtLink>
          <span>{{ site.contact.address.city }}, {{ site.contact.address.country }}</span>
        </p>
      </div>
    </div>
  </footer>
</template>
