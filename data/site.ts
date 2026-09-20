import type { Step, ValueProp } from '~/types'

/**
 * Single source of truth for brand, contact and navigation.
 * Replace the placeholder contact details here — nothing else needs to change.
 */
export const site = {
  name: 'Prabha',
  legalName: 'Prabha Travel Studio',
  tagline: 'Journeys worth remembering.',
  description:
    'Prabha designs thoughtfully crafted journeys across India — built around places, people and the way you actually want to travel.',
  // Update after connecting your custom domain in Netlify.
  url: 'https://prabha-travel.netlify.app',
  locale: 'en_IN',
  founded: '2025',

  contact: {
    email: 'hello@prabha.travel',
    phoneDisplay: '+91 90000 00000',
    phoneHref: '+919000000000',
    // Placeholder WhatsApp number — swap for the real business number.
    whatsapp: '919000000000',
    whatsappMessage: "Hi Prabha! I'd like to plan a trip.",
    address: {
      line1: 'Prabha Travel Studio',
      line2: '2nd Floor, Lake View Road',
      city: 'Bengaluru',
      state: 'Karnataka',
      postalCode: '560001',
      country: 'India'
    },
    hours: 'Mon – Sat, 9:30am – 7:00pm IST'
  },

  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    youtube: 'https://youtube.com/'
  }
} as const

export const primaryNav = [
  { label: 'Destinations', to: '/destinations' },
  { label: 'Tours', to: '/tours' },
  { label: 'Experiences', to: '/experiences' },
  { label: 'Travel Stories', to: '/blog' },
  { label: 'About', to: '/about' }
]

export const footerNav = {
  company: [
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Careers', to: '/about#careers' }
  ],
  explore: [
    { label: 'Destinations', to: '/destinations' },
    { label: 'Tours', to: '/tours' },
    { label: 'Experiences', to: '/experiences' },
    { label: 'Travel Stories', to: '/blog' }
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
    'Prabha creates journeys around places, people, culture and experiences — giving you the freedom to explore while we take care of the details.',
    'We are a small studio of travellers, drivers, cooks, guides and hosts who have spent years on these roads. We plan the kind of trip we would want for ourselves: unhurried mornings, a route that makes sense, and people worth meeting at the other end.'
  ],
  stats: [
    { value: '6', label: 'Regions across India' },
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
