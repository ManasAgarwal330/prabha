<script setup lang="ts">
import { ArrowRight, Clock, Instagram, Mail, MapPin, Phone } from 'lucide-vue-next'
import { site } from '~/data/site'
import { generalFaqs } from '~/data/faq'

usePageSeo({
  title: 'Contact Pravaah — Talk to a Trip Designer',
  description: `Reach Pravaah by email, phone or WhatsApp. We reply to every enquiry within one working day. ${site.contact.hours}.`,
  path: '/contact',
  image: 'photo-1602216056096-3b40cc0c9944'
})

useJsonLd(
  breadcrumbLd([
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' }
  ])
)
</script>

<template>
  <div>
    <section class="container-pravaah pb-14 pt-16 lg:pt-20">
      <Breadcrumbs
        :items="[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' }
        ]"
      />

      <div class="mt-8 max-w-3xl">
        <p class="eyebrow mb-4">Contact</p>
        <h1 class="text-display-lg">Talk to someone who has been there.</h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
          Every enquiry is answered by a trip designer, not a queue. Write, call or message — whichever is easier.
        </p>
      </div>
    </section>

    <section class="container-pravaah pb-20 lg:pb-24">
      <div class="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <!-- Details -->
        <div class="lg:col-span-4">
          <div class="space-y-8">
            <div class="reveal">
              <h2 class="eyebrow mb-4">Write to us</h2>
              <a
                :href="`mailto:${site.contact.email}`"
                class="flex items-start gap-3 font-display text-xl transition-colors hover:text-accent"
              >
                <Mail class="mt-1.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {{ site.contact.email }}
              </a>
            </div>

            <div class="reveal">
              <h2 class="eyebrow mb-4">Call us</h2>
              <a
                :href="`tel:${site.contact.phoneHref}`"
                class="flex items-start gap-3 font-display text-xl transition-colors hover:text-accent"
              >
                <Phone class="mt-1.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {{ site.contact.phoneDisplay }}
              </a>
              <p class="mt-3 flex items-start gap-3 text-sm text-ink-muted">
                <Clock class="mt-0.5 h-4 w-4 shrink-0 opacity-60" aria-hidden="true" />
                {{ site.contact.hours }}
              </p>
            </div>

            <div class="reveal">
              <h2 class="eyebrow mb-4">Message us</h2>
              <p class="mb-4 text-sm leading-relaxed text-ink-muted">
                Fastest way to reach us. Send your dates and we will take it from there.
              </p>
              <WhatsAppButton variant="inline" />
            </div>

            <div class="reveal">
              <h2 class="eyebrow mb-4">Follow along</h2>
              <a
                :href="site.social.instagram"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-start gap-3 font-display text-xl transition-colors hover:text-accent"
              >
                <Instagram class="mt-1.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {{ site.social.instagramHandle }}
              </a>
            </div>

            <div class="reveal">
              <h2 class="eyebrow mb-4">Find us</h2>
              <address class="flex items-start gap-3 text-sm not-italic leading-relaxed text-ink-soft">
                <MapPin class="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  {{ site.contact.address.line1 }}<br />
                  {{ site.contact.address.line2 }}<br />
                  {{ site.contact.address.city }}, {{ site.contact.address.state }}
                  {{ site.contact.address.postalCode }}<br />
                  {{ site.contact.address.country }}
                </span>
              </address>
              <p class="mt-3 text-xs text-ink-muted">
                Visits by appointment — most of our planning happens over a call.
              </p>
            </div>

            <div class="reveal border-t border-hairline pt-6">
              <p class="text-sm leading-relaxed text-ink-muted">
                Looking for something specific?
                <NuxtLink to="/faq" class="link-underline font-medium text-link">
                  Read the frequently asked questions
                </NuxtLink>
                first — the answer is often already there.
              </p>
            </div>
          </div>
        </div>

        <!-- Form -->
        <div class="reveal lg:col-span-7 lg:col-start-6">
          <div class="surface-card bg-surface p-7 sm:p-10">
            <h2 class="text-display-sm">Send us a message</h2>
            <p class="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">
              The more you tell us, the more useful our first reply will be.
            </p>
            <div class="mt-8">
              <ContactForm source="contact-page" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ preview -->
    <section class="section-dark py-20 lg:py-24">
      <div class="container-pravaah grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-4">
          <SectionHeading eyebrow="Before you ask" title="The questions we get most." />
          <NuxtLink to="/faq" class="btn-ghost link-underline reveal mt-6">
            See all questions
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
        </div>
        <div class="reveal lg:col-span-7 lg:col-start-6">
          <FaqAccordion :items="generalFaqs.slice(0, 5)" />
        </div>
      </div>
    </section>
  </div>
</template>
