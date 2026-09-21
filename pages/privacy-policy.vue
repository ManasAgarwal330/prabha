<script setup lang="ts">
import { site } from '~/data/site'

const updated = '1 September 2026'

usePageSeo({
  title: 'Privacy Policy',
  description: `How ${site.name} collects, uses and protects the personal information you share when enquiring about a trip.`,
  path: '/privacy-policy'
})
</script>

<template>
  <div class="container-pravaah py-16 lg:py-20">
    <Breadcrumbs
      :items="[
        { name: 'Home', path: '/' },
        { name: 'Privacy Policy', path: '/privacy-policy' }
      ]"
    />

    <div class="mt-8 max-w-3xl">
      <h1 class="text-display-lg">Privacy Policy</h1>
      <p class="mt-4 text-sm text-ink-muted">Last updated {{ updated }}</p>
    </div>

    <div class="prose-pravaah mt-12">
      <p>
        This policy explains what {{ site.legalName }} (&ldquo;{{ site.name }}&rdquo;, &ldquo;we&rdquo;) does with
        the personal information you share with us. We keep it short because our handling of your data is
        deliberately simple.
      </p>

      <h2>What we collect</h2>
      <p>
        When you send an enquiry we collect the details you type into the form: your name, email address, phone
        number, destination, travel dates, number of travellers, budget range and your message. If you contact us
        by email, phone or WhatsApp we hold that correspondence.
      </p>
      <p>
        We do not run advertising trackers or third-party analytics profiling on this site. Our hosting provider
        keeps standard server logs, which may include IP addresses, for security and reliability.
      </p>

      <h2>Why we use it</h2>
      <ul>
        <li>To answer your enquiry and prepare an itinerary and quote.</li>
        <li>To make bookings with hotels, transport operators, guides and permit authorities on your behalf.</li>
        <li>To stay in touch during your trip and handle anything that comes up.</li>
        <li>To meet legal, tax and accounting obligations in India.</li>
      </ul>
      <p>We do not sell your data, and we do not send marketing emails unless you have asked us to.</p>

      <h2>Who we share it with</h2>
      <p>
        Only the suppliers needed to deliver your trip — the properties you are staying in, transport providers,
        guides, and government bodies where a permit requires identification. We share the minimum each one needs.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Enquiries that do not become bookings are deleted within twenty-four months. Booking records are kept for
        as long as Indian tax and accounting law requires, and then deleted.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask us what we hold about you, ask us to correct it, or ask us to delete it. Write to
        <a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a> and we will respond within thirty
        days.
      </p>

      <h2>Cookies</h2>
      <p>
        This site does not set advertising or tracking cookies. Any storage used is strictly functional — for
        example remembering a filter you selected while browsing.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes we will update the date at the top of this page. Material changes affecting
        existing bookings will be communicated directly.
      </p>

      <h2>Contact</h2>
      <p>
        {{ site.legalName }}<br />
        {{ site.contact.address.line2 }}, {{ site.contact.address.city }},
        {{ site.contact.address.state }} {{ site.contact.address.postalCode }}, India<br />
        <a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a>
      </p>
    </div>
  </div>
</template>
