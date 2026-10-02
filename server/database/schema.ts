/**
 * Cosmos DB layout (NoSQL API). One database, five containers.
 * Used by the backend (server/utils/cosmos.ts) and `npm run db:setup` (scripts/db/setup.ts),
 * which creates anything missing. No auto-imports here — the setup script runs outside Nuxt.
 *
 *   listings      /section  One document per stay, experience, expedition or event. id = slug.
 *   destinations  /id       One document per destination. id = slug.
 *   articles      /id       One document per journal story. id = slug.
 *   siteContent   /type     Site-wide content, one document per kind:
 *                             settings (brand, contact, copy blocks, form options),
 *                             section ×4 (the tabs and their categories),
 *                             regions, journalCategories, faqs, testimonials.
 *   enquiries     /phone    One document per phone number (E.164, e.g. +919205747247),
 *                           holding every enquiry from that number in `enquiries`.
 */
export const COSMOS_CONTAINERS = {
  listings: { id: 'listings', partitionKey: '/section' },
  destinations: { id: 'destinations', partitionKey: '/id' },
  articles: { id: 'articles', partitionKey: '/id' },
  siteContent: { id: 'siteContent', partitionKey: '/type' },
  enquiries: { id: 'enquiries', partitionKey: '/phone' }
} as const

export type ContainerKey = keyof typeof COSMOS_CONTAINERS

export const DEFAULT_DATABASE = 'pravaah'

/**
 * Provisioned throughput, set once on the database and shared by all five containers
 * (manual, not autoscale). 1000 RU/s is what the Cosmos free tier covers at no cost.
 * Applied by `npm run db:setup`; override with COSMOS_THROUGHPUT (minimum 400, steps of 100).
 */
export const DATABASE_THROUGHPUT = 1000
