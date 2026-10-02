/**
 * Old URLs and where they go now. Applied as Nuxt route rules, which the
 * Netlify build turns into `_redirects` entries ahead of the server catch-all.
 * (Redirects in netlify.toml would never be reached with server rendering.)
 * 302 = temporary, for pages that are only hidden for now.
 */
type Redirect = { redirect: { to: string; statusCode: 301 | 302 } }

const moved = (to: string): Redirect => ({ redirect: { to, statusCode: 301 } })
const hiddenForNow = (to: string): Redirect => ({ redirect: { to, statusCode: 302 } })

export const redirects: Record<string, Redirect> = {
  // The previous site structure.
  '/tours': moved('/experiences'),
  '/tours/**': moved('/experiences'),
  '/blog': moved('/journals'),
  '/blog/**': moved('/journals/**'),

  // Treks, 4x4 and multi-day journeys moved back to Expeditions; the slugs did not change.
  '/experiences/bankatiya-base-camp-trek': moved('/expeditions/bankatiya-base-camp-trek'),
  '/experiences/panchachuli-base-camp-trek': moved('/expeditions/panchachuli-base-camp-trek'),
  '/experiences/khaliya-top-trek': moved('/expeditions/khaliya-top-trek'),
  '/experiences/johar-valley-expedition': moved('/expeditions/johar-valley-expedition'),
  '/experiences/darma-valley-expedition': moved('/expeditions/darma-valley-expedition'),
  '/experiences/niti-valley-expedition': moved('/expeditions/niti-valley-expedition'),
  '/experiences/flow-with-the-ganga': moved('/expeditions/flow-with-the-ganga'),
  // The shorter Bankatiya experience was folded into the Bankatiya Base Camp Trek.
  '/experiences/bankatiya-base-camp': moved('/expeditions/bankatiya-base-camp-trek'),

  // Festivals moved from Experiences to Events; Hornbill and Cherry Blossom were retired;
  // Holi moved from Pushkar to Vrindavan & Barsana.
  '/experiences/nanda-ashtami-yatra-munsiyari': moved('/events/nanda-ashtami-yatra-munsiyari'),
  '/experiences/hornbill-festival-nagaland': moved('/events'),
  '/events/hornbill-festival-nagaland': moved('/events'),
  '/experiences/cherry-blossom-music-festival-shillong': moved('/events'),
  '/events/cherry-blossom-music-festival-shillong': moved('/events'),
  '/experiences/holi-pushkar': moved('/events/holi-vrindavan-barsana'),
  '/events/holi-pushkar': moved('/events/holi-vrindavan-barsana'),

  // Offbeat Experiences are hidden for now; send visitors to the 4x4 expedition for the same valley.
  '/experiences/darma-valley': hiddenForNow('/expeditions/darma-valley-expedition'),
  '/experiences/johar-valley': hiddenForNow('/expeditions/johar-valley-expedition'),
  '/experiences/niti-valley': hiddenForNow('/expeditions/niti-valley-expedition'),

  // Stays no longer offered, or renamed.
  '/stays/pi-palace-bhimtal': moved('/stays'),
  '/stays/ethereal-hartola': moved('/stays'),
  '/stays/scenic-solitude-hartola': moved('/stays/nirvaana-mansion-hartola'),

  // Destinations no longer covered.
  '/destinations/himachal-pradesh': moved('/destinations'),
  '/destinations/northeast-india': moved('/destinations')
}
