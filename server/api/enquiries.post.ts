import { ENQUIRY_LIMITS, validateEnquiry, type EnquiryPayload } from '~/shared/enquiry'

/**
 * POST /api/enquiries — validates an enquiry and saves it under the visitor's phone number.
 * The browser checks the same rules first; these are the ones that count.
 */
const FIELDS = Object.keys(ENQUIRY_LIMITS) as (keyof EnquiryPayload)[]

/** One day back, so a visitor whose calendar is already on "tomorrow" (east of the server) is not rejected. */
const lenientToday = () => new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().slice(0, 10)

export default defineEventHandler(async (event) => {
  const body = await readBody<Record<string, unknown>>(event).catch(() => null)
  if (!body || typeof body !== 'object') {
    throw createError({ statusCode: 400, statusMessage: 'Send the enquiry as JSON.' })
  }

  // Honeypot: people never see this field, bots fill it in. Pretend it worked.
  if (typeof body.website === 'string' && body.website.trim()) return { ok: true }

  const payload = {} as EnquiryPayload
  for (const field of FIELDS) {
    const value = body[field] ?? ''
    if (typeof value !== 'string') throw createError({ statusCode: 400, statusMessage: `"${field}" must be text.` })
    if (value.length > ENQUIRY_LIMITS[field]) {
      throw createError({ statusCode: 400, statusMessage: `"${field}" is too long.` })
    }
    payload[field] = value.trim()
  }

  const errors = validateEnquiry(payload, lenientToday())
  if (Object.keys(errors).length) {
    throw createError({ statusCode: 422, statusMessage: 'Please check the highlighted fields.', data: { errors } })
  }

  await saveEnquiry(payload)
  setResponseStatus(event, 201)
  // Nothing about the stored record goes back — anyone can post a phone number here.
  return { ok: true }
})
