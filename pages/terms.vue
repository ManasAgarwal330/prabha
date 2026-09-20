<script setup lang="ts">
import { site } from '~/data/site'

const updated = '1 September 2026'

usePageSeo({
  title: 'Terms & Conditions',
  description: `The terms that apply when you book a journey with ${site.name}, covering quotes, payments, changes, cancellations and liability.`,
  path: '/terms'
})
</script>

<template>
  <div class="container-prabha py-16 lg:py-20">
    <Breadcrumbs
      :items="[
        { name: 'Home', path: '/' },
        { name: 'Terms', path: '/terms' }
      ]"
    />

    <div class="mt-8 max-w-3xl">
      <h1 class="text-display-lg">Terms &amp; Conditions</h1>
      <p class="mt-4 text-sm text-charcoal-muted">Last updated {{ updated }}</p>
    </div>

    <div class="prose-prabha mt-12">
      <p>
        These terms apply when you book a journey with {{ site.legalName }} (&ldquo;{{ site.name }}&rdquo;). The
        specific terms for your trip — including the payment schedule and cancellation bands — are confirmed in
        writing before you pay anything, and those take precedence where they differ.
      </p>

      <h2>Quotes and confirmation</h2>
      <p>
        Prices shown on this website are indicative starting points, per person on twin sharing, and are not an
        offer. A quote is valid for the period stated on it and is subject to availability at the time of
        confirmation. A booking exists only once we confirm it in writing and the booking advance is received.
      </p>

      <h2>Payments</h2>
      <p>
        A booking advance confirms your dates and secures the stays. The balance is due before departure on the
        schedule set out in your confirmation. Payments are accepted by bank transfer and UPI. We do not take
        payments through this website.
      </p>

      <h2>Changes by you</h2>
      <p>
        We will do our best to accommodate changes after confirmation. Some suppliers permit changes without
        charge; many do not. Any supplier charges are passed on to you at cost, and we will tell you what they are
        before making the change.
      </p>

      <h2>Cancellations</h2>
      <p>
        Cancellation terms depend on the properties, permits and transport involved and are given to you in
        writing before payment. Where a supplier refunds us, we pass that refund on in full. Where an amount is
        non-refundable, we say so up front.
      </p>

      <h2>Changes by us</h2>
      <p>
        Mountain roads close, parks shut at short notice and weather does what it wants. Where something has to
        change we will offer the closest equivalent at no extra cost, or refund the difference if the replacement
        costs less. If a change is significant and no acceptable alternative exists, you may cancel that element
        and receive a refund of what we can recover.
      </p>

      <h2>Your responsibilities</h2>
      <ul>
        <li>Carrying valid identification, visas and any permits we have told you are required.</li>
        <li>Telling us about medical conditions, allergies and mobility needs before booking.</li>
        <li>Arranging your own travel insurance — we strongly recommend it and do not provide it.</li>
        <li>Arriving on time for transfers, safaris and permit-timed entries.</li>
      </ul>

      <h2>Activities and risk</h2>
      <p>
        Trekking, high-altitude travel, water activities and wildlife safaris carry inherent risk. We plan
        conservatively and brief you honestly, but participation is at your own risk and subject to the operator's
        conditions on the day. Guides may curtail an activity for safety reasons.
      </p>

      <h2>Liability</h2>
      <p>
        We act as a planner and agent for the hotels, transport operators and guides who deliver your trip, and we
        select them carefully. We are not liable for loss, delay or injury caused by circumstances beyond our
        reasonable control, including weather, road closures, strikes, government restrictions and acts of nature.
      </p>

      <h2>Content on this site</h2>
      <p>
        Itineraries, photographs and written content on this site belong to {{ site.legalName }} or are licensed
        for our use. Prices, inclusions and images are illustrative and may change without notice.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of India, and the courts at
        {{ site.contact.address.city }} have exclusive jurisdiction.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms:
        <a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a> or
        {{ site.contact.phoneDisplay }}.
      </p>
    </div>
  </div>
</template>
