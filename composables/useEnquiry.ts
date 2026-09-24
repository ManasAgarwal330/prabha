export interface EnquiryPayload {
  name: string
  email: string
  phone: string
  destination: string
  travelDates: string
  travellers: string
  budget: string
  message: string
  /** Where the enquiry came from, e.g. `stays:pi-palace-bhimtal`. */
  source: string
}

export type EnquiryErrors = Partial<Record<keyof EnquiryPayload, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^[+\d][\d\s-]{7,16}$/

export const validateEnquiry = (payload: EnquiryPayload): EnquiryErrors => {
  const errors: EnquiryErrors = {}

  if (payload.name.trim().length < 2) errors.name = 'Please tell us your name.'
  if (!EMAIL_RE.test(payload.email.trim())) errors.email = 'Enter a valid email address.'
  if (!PHONE_RE.test(payload.phone.trim())) errors.phone = 'Enter a valid phone number with country code.'
  if (!payload.destination.trim()) errors.destination = 'Let us know where you would like to go.'
  if (payload.message.trim().length < 10) errors.message = 'A sentence or two about the trip helps us plan.'

  return errors
}

/**
 * Frontend-only for the MVP: the payload is validated and resolved locally.
 * Point `ENDPOINT` at `/api/enquiries`, Formspree, Supabase or the .NET API
 * and flip `USE_ENDPOINT` — no component changes required.
 */
const ENDPOINT = '/api/enquiries'
const USE_ENDPOINT = false

export const submitEnquiry = async (payload: EnquiryPayload): Promise<void> => {
  if (!USE_ENDPOINT) {
    if (import.meta.dev) console.info('[pravaah] enquiry captured', payload)
    await new Promise((resolve) => setTimeout(resolve, 600))
    return
  }

  await $fetch(ENDPOINT, { method: 'POST', body: payload })
}
