import type { Section, SectionKey } from '~/types'

/**
 * The four offering tabs. Each one owns a set of categories; every listing in
 * `data/stays.ts`, `data/experiences.ts`, `data/expeditions.ts` and
 * `data/events.ts` points at one of these category slugs.
 */
export const sections: Record<SectionKey, Section> = {
  stays: {
    key: 'stays',
    name: 'Stays',
    singular: 'stay',
    path: '/stays',
    title: 'Places to stay that are worth the journey on their own.',
    intro:
      'Lakeside hotels, orchard homestays, glamping in the woods and farm stays in the Kumaon hills. Every one of them is run by people we know, and every one of them is somewhere we would happily spend a slow week.',
    heroImage: 'photo-1445019980597-93fa8acb246c',
    categories: [
      {
        slug: 'hotels-resorts',
        name: 'Hotels & Resorts',
        description: 'Full-service stays with the comforts taken care of — a good base for families and first visits.'
      },
      {
        slug: 'villas-homestays',
        name: 'Villas & Homestays',
        description:
          'Private cottages and family-run homes with a view, a kitchen that cooks local, and hosts who know the valley.'
      },
      {
        slug: 'camps-glamping',
        name: 'Camps & Glamping',
        description: 'Tents with proper beds, a campfire and a forest around you. Outdoors, without roughing it.'
      },
      {
        slug: 'experiential-stays',
        name: 'Experiential Stays',
        description:
          'Stays where the place is the point — organic farms, wildlife valleys and days built around what the land is doing.'
      }
    ],
    seo: {
      title: 'Stays — Hotels, Homestays, Glamping & Farm Stays in the Himalaya',
      description:
        'Handpicked stays with Pravaah: hotels in Bhimtal, homestays in Hartola, Munsiyari and Rishikesh, glamping in Sonapani and experiential stays in Kosi and Chakulwa.'
    }
  },

  experiences: {
    key: 'experiences',
    name: 'Experiences',
    singular: 'experience',
    path: '/experiences',
    title: 'Start with what you want to feel, not where you want to go.',
    intro:
      'A night at a Himalayan base camp, a festival in the hills of Nagaland, Holi in the lanes of Pushkar, or a week in a border valley few travellers reach. These are the experiences we build journeys around.',
    heroImage: 'photo-1510312305653-8ed496efae75',
    categories: [
      {
        slug: 'adventure',
        name: 'Adventure',
        description: 'Camps, trails and big mountain days — for people who want to come home with tired legs.'
      },
      {
        slug: 'culture-heritage',
        name: 'Culture & Heritage',
        description: 'Festivals, pilgrimages and living traditions, planned so you are part of the day rather than watching it.'
      },
      {
        slug: 'offbeat',
        name: 'Offbeat Experiences',
        description: 'Remote border valleys of Uttarakhand, with village homestays and the people who still live there.'
      }
    ],
    seo: {
      title: 'Experiences — Adventure, Culture & Offbeat Travel in India',
      description:
        'Pravaah experiences: Bankatiya base camp, Nanda Ashtami in Munsiyari, the Char Dham yatra, Hornbill festival, Shillong cherry blossoms, Holi in Pushkar and the Darma, Johar and Niti valleys.'
    }
  },

  expeditions: {
    key: 'expeditions',
    name: 'Expeditions',
    singular: 'expedition',
    path: '/expeditions',
    title: 'Longer, higher and further — journeys that take some doing.',
    intro:
      'Base camp treks in the Kumaon Himalaya, 4x4 routes into the border valleys, and a river journey that follows the Ganga from the mountains to the plains. Fully supported, carefully paced, and led by people who know the ground.',
    heroImage: 'photo-1533130061792-64b345e4a833',
    categories: [
      {
        slug: 'treks',
        name: 'Treks',
        description: 'Guided walks to base camps and high meadows, with camps, cooks and porters arranged.'
      },
      {
        slug: 'off-road',
        name: '4x4 / Off-Road',
        description: 'Driver-led 4x4 expeditions into valleys where the road is still part of the adventure.'
      },
      {
        slug: 'multi-day',
        name: 'Multi-Day Expeditions',
        description: 'Long, linked journeys that combine road, trail and river over a week or more.'
      }
    ],
    seo: {
      title: 'Expeditions — Himalayan Treks, 4x4 Journeys & River Expeditions',
      description:
        'Pravaah expeditions: Bankatiya and Panchachuli base camp treks, Khaliya Top, 4x4 expeditions to the Johar, Darma and Niti valleys, and Flow with the Ganga.'
    }
  },

  events: {
    key: 'events',
    name: 'Events',
    singular: 'event',
    path: '/events',
    title: 'Retreats and gatherings, held somewhere that helps.',
    intro:
      'Small, carefully hosted events in the mountains — time set aside to slow down, walk in the forest and come back rested. Fixed dates, small groups, everything taken care of.',
    heroImage: 'photo-1545389336-cf090694435e',
    categories: [
      {
        slug: 'wellness-retreats',
        name: 'Wellness Retreats',
        description: 'Yoga, forest walks, simple food and early nights in the quiet of the Kumaon hills.'
      }
    ],
    seo: {
      title: 'Events — Wellness Retreats in the Himalaya',
      description:
        'Pravaah events and retreats, including the Shama Base Camp nature retreat in the Kumaon Himalaya: yoga, forest walks, local food and time to slow down.'
    }
  }
}

export const sectionList: Section[] = Object.values(sections)

export const getCategory = (section: SectionKey, slug: string) =>
  sections[section].categories.find((category) => category.slug === slug)
