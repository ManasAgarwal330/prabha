import type { TestimonialSection } from '~/types'

/** GET /api/testimonials — the reviews section's heading and its reviews. */
export default defineEventHandler(async (): Promise<TestimonialSection> => (await loadContent()).testimonials)
