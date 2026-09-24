import type { Section, SectionKey } from '~/types'

/**
 * The three offering tabs. Each one owns a set of categories; every listing in
 * `data/stays.ts`, `data/experiences.ts` and `data/events.ts` points at one of
 * these category slugs.
 */
export const sections: Record<SectionKey, Section> = {
  stays: {
    key: 'stays',
    name: 'Stays',
    singular: 'stay',
    path: '/stays',
    title: 'Places to stay that are worth the journey on their own.',
    intro:
      'Lakeside hotels, orchard homestays, camping in the woods and farm stays in the Kumaon hills. Every one of them is run by people we know, and every one of them is somewhere we would happily spend a slow week.',
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
        slug: 'camps-camping',
        name: 'Camps & Camping',
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
      title: 'Stays — Resorts, Villas, Homestays, Camping & Farm Stays',
      description:
        'Handpicked stays with Pravaah: resorts in Bhimtal and Satkhol, villas and homestays in Hartola, Jim Corbett, Munsiyari and Rishikesh, camping in Sonapani and experiential stays in Kosi and Chakulwa.'
    }
  },

  experiences: {
    key: 'experiences',
    name: 'Experiences',
    singular: 'experience',
    path: '/experiences',
    title: 'Start with what you want to feel, not where you want to go.',
    intro:
      'A night at a Himalayan base camp, a trek to the foot of Panchachuli, a 4x4 route into the border valleys, a festival in the hills of Nagaland or a journey down the Ganga. These are the experiences we build journeys around.',
    heroImage: 'photo-1510312305653-8ed496efae75',
    categories: [
      {
        slug: 'adventure',
        name: 'Adventure',
        description: 'Camps, trails and big mountain days — for people who want to come home with tired legs.'
      },
      {
        slug: 'treks',
        name: 'Treks',
        description: 'Guided walks to base camps and high meadows, with camps, cooks and porters arranged.'
      },
      {
        slug: 'off-road',
        name: '4x4 / Off-Road',
        description: 'Driver-led 4x4 journeys into valleys where the road is still part of the adventure.'
      },
      {
        slug: 'culture-heritage',
        name: 'Culture & Heritage',
        description:
          'Festivals, pilgrimages, living traditions and the journey down the Ganga — planned so you are part of the day rather than watching it.'
      },
      {
        slug: 'offbeat',
        name: 'Offbeat Experiences',
        description: 'Remote border valleys of Uttarakhand, with village homestays and the people who still live there.'
      }
    ],
    seo: {
      title: 'Experiences — Treks, 4x4 Journeys, Culture & Offbeat Travel in India',
      description:
        'Pravaah experiences: Bankatiya, Panchachuli and Khaliya Top treks, 4x4 journeys to the Johar, Darma and Niti valleys, the Char Dham, Flow with the Ganga, Hornbill, Shillong cherry blossoms and Holi in Pushkar.'
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
