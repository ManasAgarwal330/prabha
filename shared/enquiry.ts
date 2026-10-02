/**
 * The enquiry form's data and rules, shared by the browser (instant feedback)
 * and the backend (the rules that actually count — never trust the browser).
 */

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
  /** Where the enquiry came from, e.g. `stays:naini-retreat-nainital` or `popup:/destinations/goa`. */
  source: string
}

export type EnquiryErrors = Partial<Record<keyof EnquiryPayload, string>>

/** Longest value the backend accepts for each field; anything longer is rejected, not trimmed. */
export const ENQUIRY_LIMITS: Record<keyof EnquiryPayload, number> = {
  name: 120,
  email: 254,
  phone: 20,
  destination: 120,
  travelFrom: 10,
  travelTo: 10,
  travellers: 60,
  tripType: 60,
  budget: 60,
  message: 4000,
  source: 200
}

/** Local part, then dot-separated domain labels (no leading/trailing hyphen) and a letters-only TLD. */
const EMAIL_RE =
  /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,24}$/

/** Indian mobile numbers are 10 digits and start with 6, 7, 8 or 9. */
const INDIAN_MOBILE_RE = /^[6-9]\d{9}$/

const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/

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

  return INDIAN_MOBILE_RE.test(indianLocal(compact))
    ? undefined
    : 'Enter a 10-digit mobile number starting with 6, 7, 8 or 9 — or add your country code with +.'
}

/** Drops a 91 or 0 prefix from an Indian number written without +. */
const indianLocal = (digits: string) =>
  digits.length === 12 && digits.startsWith('91')
    ? digits.slice(2)
    : digits.length === 11 && digits.startsWith('0')
      ? digits.slice(1)
      : digits

/**
 * One canonical form per number (E.164), so every way of writing it lands on the
 * same enquiry record: "92057 47247", "09205747247" and "+91-92057-47247" all
 * become "+919205747247". Only call this on a number that passed `validatePhone`.
 */
export const normalizePhone = (value: string): string => {
  const compact = value.trim().replace(/[\s()-]/g, '')
  return compact.startsWith('+') ? compact : `+91${indianLocal(compact)}`
}

/** Today in the visitor's own time zone, as `YYYY-MM-DD` — the format date inputs use. */
export const todayIso = () => {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}

/**
 * Both dates are required; the trip cannot start in the past or end before it starts.
 * `today` defaults to the local date; the backend passes a day earlier to allow for
 * visitors in time zones ahead of the server.
 */
export const validateTravelDates = (
  from: string,
  to: string,
  today = todayIso()
): Pick<EnquiryErrors, 'travelFrom' | 'travelTo'> => {
  const errors: Pick<EnquiryErrors, 'travelFrom' | 'travelTo'> = {}
  if (!from) errors.travelFrom = 'Choose the date you would like to start travelling.'
  else if (!ISO_DATE_RE.test(from)) errors.travelFrom = 'Choose the start date from the calendar.'
  else if (from < today) errors.travelFrom = 'The start date cannot be in the past.'
  if (!to) errors.travelTo = 'Choose the date your trip ends.'
  else if (!ISO_DATE_RE.test(to)) errors.travelTo = 'Choose the end date from the calendar.'
  else if (from && to < from) errors.travelTo = 'The end date must be on or after the start date.'
  return errors
}

export const validateEnquiry = (payload: EnquiryPayload, today?: string): EnquiryErrors => {
  const errors: EnquiryErrors = {}

  if (payload.name.trim().length < 2) errors.name = 'Please tell us your name.'
  const email = validateEmail(payload.email)
  if (email) errors.email = email
  const phone = validatePhone(payload.phone)
  if (phone) errors.phone = phone
  if (!payload.destination.trim()) errors.destination = 'Let us know where you would like to go.'
  Object.assign(errors, validateTravelDates(payload.travelFrom, payload.travelTo, today))

  return errors
}
