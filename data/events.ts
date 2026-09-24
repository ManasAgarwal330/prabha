import type { Listing } from '~/types'

/** Events — hosted retreats and gatherings on fixed dates. */
export const events: Listing[] = [
  {
    slug: 'shama-base-camp-nature-retreat',
    section: 'events',
    category: 'wellness-retreats',
    title: 'Shama Base Camp Nature Retreat',
    location: 'Shama, Bageshwar district',
    destinationSlug: 'uttarakhand',
    tagline: 'Slow down in the Kumaon forest',
    description:
      'A small-group wellness retreat at a base camp in Shama — yoga, forest walks, simple food and nights under the stars.',
    overview: [
      'Shama is a quiet village in the Bageshwar hills of Kumaon, surrounded by pine and oak forest and far from any town. It is the kind of place where the loudest thing in the morning is a stream.',
      'The retreat is designed to help you reset. Mornings begin with yoga and breathwork, days are spent on gentle forest walks and in village life, meals are fresh and local, and evenings end around the fire or under a very dark sky. There is no pressure to do anything — the programme is an invitation, not a timetable.'
    ],
    image: 'photo-1545389336-cf090694435e',
    gallery: [
      'photo-1504280390367-361c6d9f38f4',
      'photo-1544161515-4ab6ce6db874',
      'photo-1418065460487-3e41a6c84dc5',
      'photo-1478131143081-80f7f84ca84d'
    ],
    facts: [
      { label: 'Duration', value: '4 days, 3 nights' },
      { label: 'Format', value: 'Small-group retreat' },
      { label: 'When', value: 'Fixed dates in spring & autumn' },
      { label: 'Group size', value: 'Up to 12 guests' }
    ],
    highlights: [
      'Daily yoga, breathwork and guided meditation',
      'Forest walks and forest-bathing sessions',
      'Fresh, local, mostly vegetarian meals',
      'Campfire evenings and stargazing',
      'A digital-light environment with time to rest'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive and settle in',
        description: 'Arrive at base camp in the afternoon, a gentle walk, and an opening circle by the fire.',
        stay: 'Shama base camp',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Forest day',
        description: 'Morning yoga, a guided forest walk and an unhurried afternoon.',
        stay: 'Shama base camp',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 3,
        title: 'Village and river',
        description: 'Yoga at sunrise, a walk to the village and the river, and stargazing after dinner.',
        stay: 'Shama base camp',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 4,
        title: 'Closing',
        description: 'A final morning practice, a closing circle and departure after brunch.',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Three nights at Shama base camp',
      'All meals during the retreat',
      'Daily yoga, meditation and guided walks',
      'Retreat host throughout'
    ],
    goodToKnow: [
      'Suitable for all levels, including complete beginners to yoga.',
      'Shama is a long drive from Kathgodam — we can arrange transfers or an overnight stop on the way.',
      'Accommodation is in comfortable tents or cottages; details are confirmed with your booking.',
      'Upcoming dates are shared on enquiry. Private retreats for groups can be arranged.'
    ],
    bestTime: 'March to June and September to November',
    featured: true,
    seo: {
      title: 'Shama Base Camp Nature Retreat — Wellness Retreat in Kumaon',
      description:
        'Join the Shama Base Camp nature retreat with Pravaah: yoga, forest walks, local food and stargazing in the Bageshwar hills of Kumaon.'
    }
  }
]
