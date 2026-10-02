import type { Testimonial } from '~/types'

/** GET /api/testimonials */
export default defineEventHandler(async (): Promise<Testimonial[]> => (await loadContent()).testimonials)
