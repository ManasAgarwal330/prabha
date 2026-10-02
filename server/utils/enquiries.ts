import { randomUUID } from 'node:crypto'
import type { PatchOperation } from '@azure/cosmos'
import { normalizePhone, type EnquiryPayload } from '~/shared/enquiry'

/**
 * Enquiries are grouped by phone number: one document per number in the
 * `enquiries` container (partition key /phone), each new enquiry appended to
 * its `enquiries` list. The latest name and email are kept on top for quick reading.
 *
 *   {
 *     "id": "+919205747247", "phone": "+919205747247",
 *     "name": "…", "email": "…",
 *     "enquiryCount": 2, "firstEnquiryAt": "…", "lastEnquiryAt": "…",
 *     "enquiries": [ { "id": "…", "receivedAt": "…", "status": "new", "destination": "…", … } ]
 *   }
 */

export interface StoredEnquiry extends EnquiryPayload {
  id: string
  receivedAt: string
  /** For the team's own follow-up; every enquiry starts as "new". */
  status: 'new'
}

export interface EnquiryRecord {
  id: string
  phone: string
  name: string
  email: string
  enquiryCount: number
  firstEnquiryAt: string
  lastEnquiryAt: string
  enquiries: StoredEnquiry[]
}

const newRecord = (phone: string, entry: StoredEnquiry): EnquiryRecord => ({
  id: phone,
  phone,
  name: entry.name,
  email: entry.email,
  enquiryCount: 1,
  firstEnquiryAt: entry.receivedAt,
  lastEnquiryAt: entry.receivedAt,
  enquiries: [entry]
})

/** Appends to an existing record in one atomic operation — no read-modify-write race. */
const appendOperations = (entry: StoredEnquiry): PatchOperation[] => [
  { op: 'add', path: '/enquiries/-', value: entry },
  { op: 'incr', path: '/enquiryCount', value: 1 },
  { op: 'set', path: '/lastEnquiryAt', value: entry.receivedAt },
  { op: 'set', path: '/name', value: entry.name },
  { op: 'set', path: '/email', value: entry.email }
]

export const saveEnquiry = async (payload: EnquiryPayload): Promise<{ phone: string; enquiryCount: number }> => {
  const phone = normalizePhone(payload.phone)
  const entry: StoredEnquiry = { ...payload, id: randomUUID(), receivedAt: new Date().toISOString(), status: 'new' }
  const container = getContainer('enquiries')

  if (!container) {
    throw createError({ statusCode: 503, statusMessage: 'Enquiries are not connected to the database yet.' })
  }

  const item = container.item(phone, phone)
  const append = async () => {
    const { resource } = await item.patch<EnquiryRecord>(appendOperations(entry))
    return { phone, enquiryCount: resource?.enquiryCount ?? 0 }
  }

  try {
    return await append()
  } catch (error) {
    if (cosmosStatus(error) !== 404) throw error
  }

  // First enquiry from this number.
  try {
    await container.items.create(newRecord(phone, entry))
    return { phone, enquiryCount: 1 }
  } catch (error) {
    // Another enquiry from the same number created the record a moment ago — add to it.
    if (cosmosStatus(error) === 409) return append()
    throw error
  }
}
