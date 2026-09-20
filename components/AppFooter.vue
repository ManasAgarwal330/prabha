<script setup lang="ts">
import { Instagram, Facebook, Youtube, Mail, Phone } from 'lucide-vue-next'
import { footerNav, site } from '~/data/site'

const year = new Date().getFullYear()

const socials = [
  { label: 'Instagram', href: site.social.instagram, icon: Instagram },
  { label: 'Facebook', href: site.social.facebook, icon: Facebook },
  { label: 'YouTube', href: site.social.youtube, icon: Youtube }
]
</script>

<template>
  <footer class="section-dark">
    <div class="container-prabha py-16 lg:py-20">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-4">
          <NuxtLink to="/" class="inline-block" :aria-label="`${site.name} — home`">
            <PrabhaLogo size="lg" />
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
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex h-10 w-10 items-center justify-center rounded-pill border border-hairline text-ink-soft transition-colors hover:border-ink/40 hover:text-ink"
              :aria-label="`${site.name} on ${social.label}`"
            >
              <component :is="social.icon" class="h-4 w-4" aria-hidden="true" />
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
