<script setup lang="ts">
import { Check, Loader2 } from 'lucide-vue-next'
import { destinations } from '~/data/destinations'
import { budgetRanges, site, travellerCounts } from '~/data/site'
import type { EnquiryErrors, EnquiryPayload } from '~/composables/useEnquiry'

const props = withDefaults(
  defineProps<{
    /** Pre-selects the destination dropdown, e.g. from a tour page. */
    presetDestination?: string
    source?: string
    compact?: boolean
  }>(),
  { presetDestination: '', source: 'contact', compact: false }
)

const form = reactive<EnquiryPayload>({
  name: '',
  email: '',
  phone: '',
  destination: props.presetDestination,
  travelDates: '',
  travellers: travellerCounts[1] as string,
  budget: budgetRanges[1] as string,
  message: '',
  source: props.source
})

const errors = ref<EnquiryErrors>({})
const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')

const onSubmit = async () => {
  errors.value = validateEnquiry(form)
  if (Object.keys(errors.value).length > 0) {
    const first = document.querySelector<HTMLElement>('[data-invalid="true"]')
    first?.focus()
    return
  }

  status.value = 'submitting'
  try {
    await submitEnquiry({ ...form })
    status.value = 'success'
  } catch {
    status.value = 'error'
  }
}

const reset = () => {
  Object.assign(form, {
    name: '',
    email: '',
    phone: '',
    destination: props.presetDestination,
    travelDates: '',
    travellers: travellerCounts[1] as string,
    budget: budgetRanges[1] as string,
    message: ''
  })
  errors.value = {}
  status.value = 'idle'
}

const fieldClass =
  'w-full rounded-lg border bg-surface px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-muted/60 transition-colors focus:border-link focus:outline-none focus:ring-1 focus:ring-link'
</script>

<template>
  <div>
    <!-- Success state -->
    <div
      v-if="status === 'success'"
      class="surface-card p-8 text-center sm:p-12"
      role="status"
      aria-live="polite"
    >
      <span class="mx-auto flex h-14 w-14 items-center justify-center rounded-pill bg-forest/10 text-link">
        <Check class="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 class="mt-6 text-display-sm">Thank you — we have your enquiry.</h3>
      <p class="mx-auto mt-4 max-w-md leading-relaxed text-ink-muted">
        One of our trip designers will write back within one working day with a suggested route and an indicative
        cost. If it is urgent, reach us on
        <a :href="`tel:${site.contact.phoneHref}`" class="text-link underline underline-offset-4">
          {{ site.contact.phoneDisplay }}</a
        >.
      </p>
      <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button type="button" class="btn-secondary" @click="reset">Send another enquiry</button>
        <WhatsAppButton variant="inline" />
      </div>
    </div>

    <!-- Form -->
    <form v-else class="space-y-5" novalidate @submit.prevent="onSubmit">
      <div class="grid gap-5 sm:grid-cols-2">
        <div>
          <label for="enq-name" class="mb-2 block text-sm font-medium text-ink">Name</label>
          <input
            id="enq-name"
            v-model="form.name"
            type="text"
            name="name"
            autocomplete="name"
            placeholder="Your full name"
            :class="[fieldClass, errors.name ? 'border-accent' : 'border-hairline']"
            :aria-invalid="Boolean(errors.name)"
            :data-invalid="Boolean(errors.name)"
            :aria-describedby="errors.name ? 'enq-name-error' : undefined"
          />
          <p v-if="errors.name" id="enq-name-error" class="mt-1.5 text-xs text-accent">{{ errors.name }}</p>
        </div>

        <div>
          <label for="enq-email" class="mb-2 block text-sm font-medium text-ink">Email</label>
          <input
            id="enq-email"
            v-model="form.email"
            type="email"
            name="email"
            autocomplete="email"
            placeholder="you@example.com"
            :class="[fieldClass, errors.email ? 'border-accent' : 'border-hairline']"
            :aria-invalid="Boolean(errors.email)"
            :data-invalid="Boolean(errors.email)"
            :aria-describedby="errors.email ? 'enq-email-error' : undefined"
          />
          <p v-if="errors.email" id="enq-email-error" class="mt-1.5 text-xs text-accent">{{ errors.email }}</p>
        </div>

        <div>
          <label for="enq-phone" class="mb-2 block text-sm font-medium text-ink">Phone</label>
          <input
            id="enq-phone"
            v-model="form.phone"
            type="tel"
            name="phone"
            autocomplete="tel"
            placeholder="+91 90000 00000"
            :class="[fieldClass, errors.phone ? 'border-accent' : 'border-hairline']"
            :aria-invalid="Boolean(errors.phone)"
            :data-invalid="Boolean(errors.phone)"
            :aria-describedby="errors.phone ? 'enq-phone-error' : undefined"
          />
          <p v-if="errors.phone" id="enq-phone-error" class="mt-1.5 text-xs text-accent">{{ errors.phone }}</p>
        </div>

        <div>
          <label for="enq-destination" class="mb-2 block text-sm font-medium text-ink">Destination</label>
          <select
            id="enq-destination"
            v-model="form.destination"
            name="destination"
            :class="[fieldClass, errors.destination ? 'border-accent' : 'border-hairline']"
            :aria-invalid="Boolean(errors.destination)"
            :data-invalid="Boolean(errors.destination)"
            :aria-describedby="errors.destination ? 'enq-destination-error' : undefined"
          >
            <option value="">Select a destination</option>
            <option v-for="destination in destinations" :key="destination.slug" :value="destination.name">
              {{ destination.name }}
            </option>
            <option value="Somewhere else in India">Somewhere else in India</option>
            <option value="Not decided yet">Not decided yet</option>
          </select>
          <p v-if="errors.destination" id="enq-destination-error" class="mt-1.5 text-xs text-accent">
            {{ errors.destination }}
          </p>
        </div>

        <div>
          <label for="enq-dates" class="mb-2 block text-sm font-medium text-ink">
            Preferred travel dates
            <span class="font-normal text-ink-muted">(optional)</span>
          </label>
          <input
            id="enq-dates"
            v-model="form.travelDates"
            type="text"
            name="travelDates"
            placeholder="e.g. mid-March, or 12–19 Oct"
            :class="[fieldClass, 'border-hairline']"
          />
        </div>

        <div>
          <label for="enq-travellers" class="mb-2 block text-sm font-medium text-ink">Travellers</label>
          <select
            id="enq-travellers"
            v-model="form.travellers"
            name="travellers"
            :class="[fieldClass, 'border-hairline']"
          >
            <option v-for="count in travellerCounts" :key="count" :value="count">{{ count }}</option>
          </select>
        </div>

        <div class="sm:col-span-2">
          <label for="enq-budget" class="mb-2 block text-sm font-medium text-ink">Budget range</label>
          <select id="enq-budget" v-model="form.budget" name="budget" :class="[fieldClass, 'border-hairline']">
            <option v-for="range in budgetRanges" :key="range" :value="range">{{ range }}</option>
          </select>
        </div>
      </div>

      <div>
        <label for="enq-message" class="mb-2 block text-sm font-medium text-ink">
          Tell us about the trip
        </label>
        <textarea
          id="enq-message"
          v-model="form.message"
          name="message"
          :rows="compact ? 4 : 5"
          placeholder="Who is travelling, what you would like to see, how fast or slow you want to move."
          :class="[fieldClass, 'resize-y', errors.message ? 'border-accent' : 'border-hairline']"
          :aria-invalid="Boolean(errors.message)"
          :data-invalid="Boolean(errors.message)"
          :aria-describedby="errors.message ? 'enq-message-error' : undefined"
        />
        <p v-if="errors.message" id="enq-message-error" class="mt-1.5 text-xs text-accent">{{ errors.message }}</p>
      </div>

      <p v-if="status === 'error'" class="text-sm text-accent" role="alert">
        Something went wrong sending that. Please email us at
        <a :href="`mailto:${site.contact.email}`" class="underline underline-offset-4">{{ site.contact.email }}</a
        >.
      </p>

      <div class="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
        <button type="submit" class="btn-primary w-full sm:w-auto" :disabled="status === 'submitting'">
          <Loader2 v-if="status === 'submitting'" class="h-4 w-4 animate-spin" aria-hidden="true" />
          {{ status === 'submitting' ? 'Sending…' : 'Send enquiry' }}
        </button>
        <p class="text-xs leading-relaxed text-ink-muted">
          We reply within one working day. No spam, and we never share your details.
        </p>
      </div>
    </form>
  </div>
</template>
