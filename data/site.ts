import type { Step, ValueProp } from '~/types'

/**
 * Single source of truth for brand, contact and navigation.
 * Replace the placeholder contact details here — nothing else needs to change.
 */
export const site = {
  name: 'Pravaah',
  legalName: 'Pravaah Travel Studio',
  tagline: "Pravaah doesn't sell the mountains. Pravaah curates how you experience them!",
  /** Home page headline. */
  heroHeadline: 'Journeys worth remembering.',
  /** Short form for page titles, where the full tagline is too long. */
  titleTagline: 'Curated stays, experiences & retreats',
  description:
    "Pravaah doesn't sell the mountains — it curates how you experience them. Handpicked stays, treks, experiences and retreats across the Himalaya and beyond.",
  // Update after connecting your custom domain in Netlify.
  url: 'https://pravaah-travel.netlify.app',
  locale: 'en_IN',
  founded: '2025',

  contact: {
    email: 'hello@pravaah.travel',
    phoneDisplay: '+91 92057 47247',
    phoneHref: '+919205747247',
    whatsapp: '919205747247',
    whatsappMessage: "Hi Pravaah! I'd like to plan a trip.",
    address: {
      line1: 'Pravaah Travel Studio',
      line2: '2nd Floor, Lake View Road',
      city: 'Bengaluru',
      state: 'Karnataka',
      postalCode: '560001',
      country: 'India'
    },
    hours: 'Mon – Sat, 9:30am – 7:00pm IST'
  },

  social: {
    instagram: 'https://www.instagram.com/thepravaah.in/',
    instagramHandle: '@thepravaah.in'
  }
} as const

export interface NavItem {
  label: string
  to: string
  children?: { label: string; to: string }[]
}

/** The main tabs. Children are the sub-categories shown in each dropdown. */
export const primaryNav: NavItem[] = [
  {
    label: 'Stays',
    to: '/stays',
    children: [
      { label: 'Hotels & Resorts', to: '/stays#hotels-resorts' },
      { label: 'Villas & Homestays', to: '/stays#villas-homestays' },
      { label: 'Camps & Glamping', to: '/stays#camps-glamping' },
      { label: 'Experiential Stays', to: '/stays#experiential-stays' }
    ]
  },
  {
    label: 'Experiences',
    to: '/experiences',
    children: [
      { label: 'Adventure', to: '/experiences#adventure' },
      { label: 'Treks', to: '/experiences#treks' },
      { label: '4x4 / Off-Road', to: '/experiences#off-road' },
      { label: 'Culture & Heritage', to: '/experiences#culture-heritage' },
      { label: 'Offbeat Experiences', to: '/experiences#offbeat' }
    ]
  },
  {
    label: 'Events',
    to: '/events',
    children: [{ label: 'Wellness Retreats', to: '/events#wellness-retreats' }]
  },
  {
    label: 'Destinations',
    to: '/destinations',
    children: [
      { label: 'India', to: '/destinations#india' },
      { label: 'North India', to: '/destinations#north-india' },
      { label: 'Northeast India', to: '/destinations#northeast-india' },
      { label: 'West India', to: '/destinations#west-india' }
    ]
  },
  {
    label: 'Journals',
    to: '/journals',
    children: [{ label: 'Travel Stories', to: '/journals#travel-stories' }]
  }
]

export const footerNav = {
  company: [
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Plan My Trip', to: '/plan-my-trip' }
  ],
  explore: [
    { label: 'Stays', to: '/stays' },
    { label: 'Experiences', to: '/experiences' },
    { label: 'Events', to: '/events' },
    { label: 'Destinations', to: '/destinations' },
    { label: 'Journals', to: '/journals' }
  ],
  support: [
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
    { label: 'Terms', to: '/terms' },
    { label: 'Privacy', to: '/privacy-policy' }
  ]
}

export const brandStory = {
  eyebrow: 'Our story',
  title: 'Travel should feel like more than moving from one place to another.',
  body: [
    'Pravaah creates journeys around places, people, culture and experiences — giving you the freedom to explore while we take care of the details.',
    'We are a small studio of travellers, drivers, cooks, guides and hosts who have spent years on these roads. We plan the kind of trip we would want for ourselves: unhurried mornings, a route that makes sense, and people worth meeting at the other end.'
  ],
  stats: [
    { value: '9', label: 'Handpicked stays' },
    { value: '40+', label: 'Local partners & guides' },
    { value: '100%', label: 'Custom-built itineraries' }
  ]
}

export const valueProps: ValueProp[] = [
  {
    title: 'Curated Experiences',
    description:
      'Trips designed around meaningful experiences rather than generic itineraries — the walk, the meal and the morning that make a place stay with you.',
    icon: 'Compass'
  },
  {
    title: 'Local Expertise',
    description:
      'Discover places through people who know them best. Every journey is built with guides and hosts who actually live there.',
    icon: 'MapPin'
  },
  {
    title: 'Flexible Journeys',
    description:
      'Travel plans that adapt to you. Shift a day, add a detour, slow the pace down — the itinerary belongs to you, not to us.',
    icon: 'Route'
  },
  {
    title: 'Human Support',
    description:
      'Real people available when you need help. One number, one team, from the first question to the last mile home.',
    icon: 'MessageCircle'
  }
]

export const howItWorks: Step[] = [
  {
    number: '01',
    title: 'Choose',
    description:
      'Tell us where you want to go — or just the kind of trip you are after. We will suggest the regions and seasons that fit.'
  },
  {
    number: '02',
    title: 'Customize',
    description:
      'We shape the journey around your pace, budget and interests, then refine it with you until the plan feels right.'
  },
  {
    number: '03',
    title: 'Travel',
    description:
      'Pack your bags. Transfers, stays, guides and permits are handled, and our team stays reachable through the trip.'
  }
]

/** Budget bands offered in the enquiry form. */
export const budgetRanges = [
  'Under ₹25,000 per person',
  '₹25,000 – ₹50,000 per person',
  '₹50,000 – ₹1,00,000 per person',
  'Above ₹1,00,000 per person',
  'Not sure yet'
]

export const travellerCounts = ['1 traveller', '2 travellers', '3 – 4 travellers', '5 – 8 travellers', '9+ travellers']
