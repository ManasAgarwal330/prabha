import type { EnquiryPayload } from '~/shared/enquiry'

export {
  PHONE_CHARS_RE,
  todayIso,
  validateEmail,
  validateEnquiry,
  validatePhone,
  validateTravelDates
} from '~/shared/enquiry'
export type { EnquiryErrors, EnquiryPayload } from '~/shared/enquiry'

/**
 * Sends the enquiry to the backend (`server/api/enquiries.post.ts`), which
 * validates it again and saves it in Cosmos DB under the visitor's phone number.
 * Throws if it was not saved, so the form can show its error message.
 */
export const submitEnquiry = async (payload: EnquiryPayload, honeypot = ''): Promise<void> => {
  // `website` is a honeypot field: hidden from people, but form-filling bots fill it in.
  await $fetch('/api/enquiries', { method: 'POST', body: { ...payload, website: honeypot } })
}
