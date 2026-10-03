<script setup lang="ts">
import { Check, Loader2 } from 'lucide-vue-next'
import type { EnquiryErrors, EnquiryPayload } from '~/composables/useEnquiry'

const props = withDefaults(
  defineProps<{
    /** Pre-selects the destination dropdown, e.g. from a tour page. */
    presetDestination?: string
    /** Pre-fills "Tell us about the trip", e.g. from the home page trip brief. */
    presetMessage?: string
    /** Pre-selects the trip type, e.g. from the Plan Your Journey menu. */
    presetTripType?: string
    source?: string
    compact?: boolean
    /** 3 lays the fields out three across on large screens, so the form fits the popup without scrolling. */
    columns?: 2 | 3
  }>(),
  { presetDestination: '', presetMessage: '', presetTripType: '', source: 'contact', compact: false, columns: 2 }
)

const emit = defineEmits<{ submitted: [] }>()

const { destinations } = useSiteBundle()
const site = useSettings()
const { budgetRanges, travellerCounts, tripTypes } = site

/** Honeypot: hidden from people, but bots fill it in — the backend then quietly drops the enquiry. */
const honeypot = ref('')

/** Keeps field ids unique when two forms share a page, e.g. the enquiry popup over Plan My Trip. */
const uid = useId()
const formEl = ref<HTMLFormElement | null>(null)

const form = reactive<EnquiryPayload>({
  name: '',
  email: '',
  phone: '',
  destination: props.presetDestination,
  travelFrom: '',
  travelTo: '',
  travellers: travellerCounts[1] as string,
  tripType: props.presetTripType,
  budget: budgetRanges[1] as string,
  message: props.presetMessage,
  source: props.source
})

/** Earliest date the calendar offers. Set after mount so server and browser render the same markup. */
const today = ref('')
onMounted(() => {
  today.value = todayIso()
})

const errors = ref<EnquiryErrors>({})
const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')

/**
 * Email and phone are checked as soon as you leave the field, then re-checked
 * on every keystroke while an error is showing, so it clears the moment it is fixed.
 */
const fieldValidators = { email: validateEmail, phone: validatePhone }
type LiveField = keyof typeof fieldValidators

const checkField = (field: LiveField) => {
  const { [field]: _previous, ...rest } = errors.value
  const message = fieldValidators[field](form[field])
  errors.value = message ? { ...rest, [field]: message } : rest
}

const recheckIfInvalid = (field: LiveField) => {
  if (errors.value[field]) checkField(field)
}

/** Re-checks both dates together, since each one's rule depends on the other. */
const checkDates = () => {
  const { travelFrom: _from, travelTo: _to, ...rest } = errors.value
  errors.value = { ...rest, ...validateTravelDates(form.travelFrom, form.travelTo) }
}

/** A start date after the chosen end date clears the end date, so it is picked again. */
const onFromChange = () => {
  if (form.travelTo && form.travelTo < form.travelFrom) form.travelTo = ''
  if (form.travelTo || errors.value.travelFrom || errors.value.travelTo) checkDates()
}

/** Opens the calendar on any click in the field, not just on its small calendar icon. */
const openPicker = (event: MouseEvent) => {
  try {
    ;(event.currentTarget as HTMLInputElement).showPicker?.()
  } catch {
    // Older browsers, or a picker that is already open — the field still works by typing.
  }
}

// Letters and symbols never belong in a phone number — drop them as they are typed or pasted.
watch(
  () => form.phone,
  (value) => {
    const clean = value.replace(PHONE_CHARS_RE, '')
    if (clean !== value) form.phone = clean
  }
)

/** Waits for the error state to render, then focuses the first bad field in this form. */
const focusFirstError = async () => {
  await nextTick()
  // Skip fields hidden at this screen size: phones and desktop show different date fields.
  ;[...(formEl.value?.querySelectorAll<HTMLElement>('[data-invalid="true"]') ?? [])]
    .find((el) => el.offsetParent !== null)
    ?.focus()
}

/**
 * Field errors from a 422 response. h3 puts createError's `data` under `data` in the
 * response body, so the errors sit at body.data.errors; body.errors is accepted too.
 */
const serverFieldErrors = (error: unknown): EnquiryErrors | undefined => {
  const fetchError = error as { statusCode?: number; data?: { errors?: EnquiryErrors; data?: { errors?: EnquiryErrors } } }
  if (fetchError?.statusCode !== 422) return undefined
  const fieldErrors = fetchError.data?.data?.errors ?? fetchError.data?.errors
  return fieldErrors && Object.keys(fieldErrors).length ? fieldErrors : undefined
}

const onSubmit = async () => {
  errors.value = validateEnquiry(form)
  if (Object.keys(errors.value).length > 0) {
    await focusFirstError()
    return
  }

  status.value = 'submitting'
  try {
    await submitEnquiry({ ...form }, honeypot.value)
    status.value = 'success'
    emit('submitted')
  } catch (error) {
    const fieldErrors = serverFieldErrors(error)
    if (fieldErrors) {
      errors.value = fieldErrors
      status.value = 'idle'
      await focusFirstError()
      return
    }
    status.value = 'error'
  }
}

const reset = () => {
  Object.assign(form, {
    name: '',
    email: '',
    phone: '',
    destination: props.presetDestination,
    travelFrom: '',
    travelTo: '',
    travellers: travellerCounts[1] as string,
    tripType: props.presetTripType,
    budget: budgetRanges[1] as string,
    message: props.presetMessage
  })
  errors.value = {}
  status.value = 'idle'
}

/** 16px text below desktop, so iOS does not zoom the page when a field is focused. */
const fieldClass =
  'w-full rounded-xl border bg-surface px-4 py-3 text-[1rem] text-ink lg:rounded-lg lg:text-[0.95rem] placeholder:text-ink-muted/60 transition-colors focus:border-link focus:outline-none focus:ring-1 focus:ring-link'

/** Date inputs keep the same height as the text fields and show a pointer, since a click opens the calendar. */
const dateClass = 'min-h-[3.125rem] cursor-pointer'

/** Selects draw their own chevron below desktop, so their text lines up with the inputs. */
const selectClass = 'field-select'

/** Travel dates are mandatory: the label carries a marker, and the form will not send without them. */
const dateError = computed(() =>
  !form.travelFrom && !form.travelTo && errors.value.travelFrom && errors.value.travelTo
    ? 'Choose your travel dates — a start and an end date.'
    : errors.value.travelFrom || errors.value.travelTo
)
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
      <span class="mx-auto flex h-14 w-14 items-center justify-center rounded-pill bg-brand/10 text-link">
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
    <form v-else ref="formEl" class="space-y-5" novalidate @submit.prevent="onSubmit">
      <!-- Honeypot: visually hidden and out of the tab order; only bots fill it in. -->
      <div class="sr-only" aria-hidden="true">
        <label :for="`${uid}-website`">Website</label>
        <input :id="`${uid}-website`" v-model="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" />
      </div>
      <!-- Phones pair the short fields two across; everything else takes the full row. -->
      <div
        class="grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-5"
        :class="columns === 3 ? 'lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4' : ''"
      >
        <div class="col-span-2 sm:col-span-1">
          <label :for="`${uid}-name`" class="mb-2 block text-sm font-medium text-ink">Name</label>
          <input
            :id="`${uid}-name`"
            v-model="form.name"
            type="text"
            name="name"
            autocomplete="name"
            placeholder="Your full name"
            :class="[fieldClass, errors.name ? 'border-accent' : 'border-hairline']"
            :aria-invalid="Boolean(errors.name)"
            :data-invalid="Boolean(errors.name)"
            :aria-describedby="errors.name ? `${uid}-name-error` : undefined"
          />
          <p v-if="errors.name" :id="`${uid}-name-error`" class="mt-1.5 text-xs text-accent">{{ errors.name }}</p>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <label :for="`${uid}-email`" class="mb-2 block text-sm font-medium text-ink">Email</label>
          <input
            :id="`${uid}-email`"
            v-model="form.email"
            type="email"
            name="email"
            autocomplete="email"
            inputmode="email"
            autocapitalize="off"
            spellcheck="false"
            maxlength="254"
            placeholder="you@example.com"
            :class="[fieldClass, errors.email ? 'border-accent' : 'border-hairline']"
            :aria-invalid="Boolean(errors.email)"
            :data-invalid="Boolean(errors.email)"
            :aria-describedby="errors.email ? `${uid}-email-error` : undefined"
            @blur="checkField('email')"
            @input="recheckIfInvalid('email')"
          />
          <p v-if="errors.email" :id="`${uid}-email-error`" class="mt-1.5 text-xs text-accent">{{ errors.email }}</p>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <label :for="`${uid}-phone`" class="mb-2 block text-sm font-medium text-ink">Phone</label>
          <input
            :id="`${uid}-phone`"
            v-model="form.phone"
            type="tel"
            name="phone"
            autocomplete="tel"
            inputmode="tel"
            maxlength="20"
            placeholder="+91 90000 00000"
            :class="[fieldClass, errors.phone ? 'border-accent' : 'border-hairline']"
            :aria-invalid="Boolean(errors.phone)"
            :data-invalid="Boolean(errors.phone)"
            :aria-describedby="errors.phone ? `${uid}-phone-error` : `${uid}-phone-hint`"
            @blur="checkField('phone')"
            @input="recheckIfInvalid('phone')"
          />
          <p v-if="errors.phone" :id="`${uid}-phone-error`" class="mt-1.5 text-xs text-accent">{{ errors.phone }}</p>
          <p v-else :id="`${uid}-phone-hint`" class="mt-1.5 text-xs text-ink-muted">
            Outside India? Start with your country code, e.g. +44.
          </p>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <label :for="`${uid}-destination`" class="mb-2 block text-sm font-medium text-ink">Destination</label>
          <select
            :id="`${uid}-destination`"
            v-model="form.destination"
            name="destination"
            :class="[fieldClass, selectClass, errors.destination ? 'border-accent' : 'border-hairline']"
            :aria-invalid="Boolean(errors.destination)"
            :data-invalid="Boolean(errors.destination)"
            :aria-describedby="errors.destination ? `${uid}-destination-error` : undefined"
          >
            <option value="">Select a destination</option>
            <option v-for="destination in destinations" :key="destination.slug" :value="destination.name">
              {{ destination.name }}
            </option>
            <option value="Somewhere else in India">Somewhere else in India</option>
            <option value="Not decided yet">Not decided yet</option>
          </select>
          <p v-if="errors.destination" :id="`${uid}-destination-error`" class="mt-1.5 text-xs text-accent">
            {{ errors.destination }}
          </p>
        </div>

        <!-- Phones and tablets: one field that opens the calendar sheet. -->
        <div class="col-span-2 lg:hidden">
          <label :for="`${uid}-travel-dates`" class="mb-2 block text-sm font-medium text-ink">
            Travel dates <span class="text-accent" aria-hidden="true">*</span>
          </label>
          <DateRangeSheet
            :id="`${uid}-travel-dates`"
            v-model:from="form.travelFrom"
            v-model:to="form.travelTo"
            :min="today"
            :invalid="Boolean(dateError)"
            :describedby="dateError ? `${uid}-travel-dates-error` : undefined"
            @change="checkDates"
          />
          <p v-if="dateError" :id="`${uid}-travel-dates-error`" class="mt-1.5 text-xs text-accent">{{ dateError }}</p>
        </div>

        <!-- Desktop: the browser's own date inputs. -->
        <div class="hidden lg:block">
          <label :for="`${uid}-travel-from`" class="mb-2 block text-sm font-medium text-ink">
            Travel from <span class="text-accent" aria-hidden="true">*</span>
          </label>
          <input
            :id="`${uid}-travel-from`"
            v-model="form.travelFrom"
            type="date"
            name="travelFrom"
            required
            :min="today || undefined"
            :class="[fieldClass, dateClass, errors.travelFrom ? 'border-accent' : 'border-hairline']"
            :aria-invalid="Boolean(errors.travelFrom)"
            :data-invalid="Boolean(errors.travelFrom)"
            :aria-describedby="errors.travelFrom ? `${uid}-travel-from-error` : undefined"
            @click="openPicker"
            @change="onFromChange"
          />
          <p v-if="errors.travelFrom" :id="`${uid}-travel-from-error`" class="mt-1.5 text-xs text-accent">
            {{ errors.travelFrom }}
          </p>
        </div>

        <div class="hidden lg:block">
          <label :for="`${uid}-travel-to`" class="mb-2 block text-sm font-medium text-ink">
            Travel to <span class="text-accent" aria-hidden="true">*</span>
          </label>
          <input
            :id="`${uid}-travel-to`"
            v-model="form.travelTo"
            type="date"
            name="travelTo"
            required
            :min="form.travelFrom || today || undefined"
            :class="[fieldClass, dateClass, errors.travelTo ? 'border-accent' : 'border-hairline']"
            :aria-invalid="Boolean(errors.travelTo)"
            :data-invalid="Boolean(errors.travelTo)"
            :aria-describedby="errors.travelTo ? `${uid}-travel-to-error` : undefined"
            @click="openPicker"
            @change="checkDates"
          />
          <p v-if="errors.travelTo" :id="`${uid}-travel-to-error`" class="mt-1.5 text-xs text-accent">
            {{ errors.travelTo }}
          </p>
        </div>

        <div>
          <label :for="`${uid}-travellers`" class="mb-2 block text-sm font-medium text-ink">Travellers</label>
          <select
            :id="`${uid}-travellers`"
            v-model="form.travellers"
            name="travellers"
            :class="[fieldClass, selectClass, 'border-hairline']"
          >
            <option v-for="count in travellerCounts" :key="count" :value="count">{{ count }}</option>
          </select>
        </div>

        <div>
          <label :for="`${uid}-trip-type`" class="mb-2 block text-sm font-medium text-ink">
            Type of trip
            <span class="font-normal text-ink-muted">(optional)</span>
          </label>
          <select :id="`${uid}-trip-type`" v-model="form.tripType" name="tripType" :class="[fieldClass, selectClass, 'border-hairline']">
            <option value="">Not sure yet</option>
            <option v-for="type in tripTypes" :key="type.slug" :value="type.label">{{ type.label }}</option>
          </select>
        </div>

        <!-- In two columns the last field takes the full row. -->
        <div class="col-span-2" :class="columns === 3 ? 'lg:col-span-1' : ''">
          <label :for="`${uid}-budget`" class="mb-2 block text-sm font-medium text-ink">Budget range</label>
          <select :id="`${uid}-budget`" v-model="form.budget" name="budget" :class="[fieldClass, selectClass, 'border-hairline']">
            <option v-for="range in budgetRanges" :key="range" :value="range">{{ range }}</option>
          </select>
        </div>
      </div>

      <div>
        <label :for="`${uid}-message`" class="mb-2 block text-sm font-medium text-ink">
          Tell us about the trip
          <span class="font-normal text-ink-muted">(optional)</span>
        </label>
        <textarea
          :id="`${uid}-message`"
          v-model="form.message"
          name="message"
          :rows="columns === 3 ? 2 : compact ? 4 : 5"
          placeholder="Who is travelling, what you would like to see, how fast or slow you want to move."
          :class="[fieldClass, 'resize-y border-hairline']"
        />
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
