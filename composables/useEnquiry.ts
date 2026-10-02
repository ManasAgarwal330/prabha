export interface EnquiryPayload {
  name: string
  email: string
  phone: string
  destination: string
  /** First day of travel, `YYYY-MM-DD`. */
  travelFrom: string
  /** Last day of travel, `YYYY-MM-DD`. */
  travelTo: string
  travellers: string
  tripType: string
  budget: string
  message: string
  /** Where the enquiry came from, e.g. `stays:naini-retreat-nainital`. */
  source: string
}

export type EnquiryErrors = Partial<Record<keyof EnquiryPayload, string>>

/** Local part, then dot-separated domain labels (no leading/trailing hyphen) and a letters-only TLD. */
const EMAIL_RE = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,24}$/

/** Indian mobile numbers are 10 digits and start with 6, 7, 8 or 9. */
const INDIAN_MOBILE_RE = /^[6-9]\d{9}$/

/** Characters a phone number may be typed with; everything else is stripped as you type. */
export const PHONE_CHARS_RE = /[^\d+\s()-]/g

export const validateEmail = (value: string): string | undefined => {
  const email = value.trim()
  if (!email) return 'Please enter your email address.'
  if (!email.includes('@')) return 'An email address needs an @, e.g. name@example.com.'
  if (email.length > 254 || !EMAIL_RE.test(email)) return 'Enter a valid email address, e.g. name@example.com.'
  return undefined
}

/**
 * Accepts an Indian mobile with or without +91 / 91 / 0 in front, or any
 * international number written with its + country code (8 – 15 digits, E.164).
 */
export const validatePhone = (value: string): string | undefined => {
  const phone = value.trim()
  if (!phone) return 'Please enter your phone number.'

  const compact = phone.replace(/[\s()-]/g, '')
  if (!/^\+?\d+$/.test(compact)) return 'Use digits only, with an optional + for the country code.'

  if (compact.startsWith('+91')) {
    return INDIAN_MOBILE_RE.test(compact.slice(3)) ? undefined : 'Enter a valid 10-digit Indian mobile number after +91.'
  }
  if (compact.startsWith('+')) {
    return /^\+[1-9]\d{7,14}$/.test(compact) ? undefined : 'Enter a valid international number, e.g. +44 20 7946 0958.'
  }

  const local = compact.length === 12 && compact.startsWith('91')
    ? compact.slice(2)
    : compact.length === 11 && compact.startsWith('0')
      ? compact.slice(1)
      : compact
  return INDIAN_MOBILE_RE.test(local)
    ? undefined
    : 'Enter a 10-digit mobile number starting with 6, 7, 8 or 9 — or add your country code with +.'
}

/** Today in the visitor's own time zone, as `YYYY-MM-DD` — the format date inputs use. */
export const todayIso = () => {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}

/** Both dates are required; the trip cannot start in the past or end before it starts. */
export const validateTravelDates = (from: string, to: string): Pick<EnquiryErrors, 'travelFrom' | 'travelTo'> => {
  const errors: Pick<EnquiryErrors, 'travelFrom' | 'travelTo'> = {}
  if (!from) errors.travelFrom = 'Choose the date you would like to start travelling.'
  else if (from < todayIso()) errors.travelFrom = 'The start date cannot be in the past.'
  if (!to) errors.travelTo = 'Choose the date your trip ends.'
  else if (from && to < from) errors.travelTo = 'The end date must be on or after the start date.'
  return errors
}

export const validateEnquiry = (payload: EnquiryPayload): EnquiryErrors => {
  const errors: EnquiryErrors = {}

  if (payload.name.trim().length < 2) errors.name = 'Please tell us your name.'
  const email = validateEmail(payload.email)
  if (email) errors.email = email
  const phone = validatePhone(payload.phone)
  if (phone) errors.phone = phone
  if (!payload.destination.trim()) errors.destination = 'Let us know where you would like to go.'
  Object.assign(errors, validateTravelDates(payload.travelFrom, payload.travelTo))

  return errors
}

/**
 * Frontend-only for the MVP: the payload is validated and resolved locally.
 * Point `ENDPOINT` at `/api/enquiries`, Formspree, Supabase or the .NET API
 * and flip `USE_ENDPOINT` — no component changes required.
 */
const ENDPOINT = '/api/enquiries'
const USE_ENDPOINT = false

/** Set once a visitor has sent any enquiry, so the enquiry popup stops asking. */
export const ENQUIRED_KEY = 'pravaah:enquired'

const rememberEnquiry = () => {
  try {
    localStorage.setItem(ENQUIRED_KEY, new Date().toISOString())
  } catch {
    // Storage can be blocked (private mode, strict settings); the popup just asks again next visit.
  }
}

export const submitEnquiry = async (payload: EnquiryPayload): Promise<void> => {
  if (!USE_ENDPOINT) {
    if (import.meta.dev) console.info('[pravaah] enquiry captured', payload)
    await new Promise((resolve) => setTimeout(resolve, 600))
    rememberEnquiry()
    return
  }

  await $fetch(ENDPOINT, { method: 'POST', body: payload })
  rememberEnquiry()
}
