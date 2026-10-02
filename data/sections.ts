import type { Section, SectionKey } from '~/types'

/**
 * The four offering tabs. Each one owns a set of categories; every listing in
 * `data/stays.ts`, `data/experiences.ts`, `data/expeditions.ts` and
 * `data/events.ts` points at one of these category slugs.
 *
 * A category with no listings yet is hidden on its tab and in the header, so
 * planned categories can sit here until their first listing is added.
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
    heroImage: '/images/sections/stays/cover',
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
      title: 'Stays — Resorts, Villas, Homestays, Camping & Farm Stays',
      description:
        'Handpicked stays with Pravaah: hotels and resorts in Mukteshwar, Kasar Devi, Jim Corbett, Bhimtal and Nainital, villas and homestays in Hartola, Munsiyari and Rishikesh, glamping in Sonapani and experiential stays in Kosi and Chakulwa.'
    }
  },

  experiences: {
    key: 'experiences',
    name: 'Experiences',
    singular: 'experience',
    path: '/experiences',
    title: 'Start with what you want to feel, not where you want to go.',
    intro:
      'White water on the Ganga, a jeep safari in Corbett, a night in the Thar, a flight over the Kumaon lakes, or the Char Dham and Adi Kailash yatras. These are the experiences we build journeys around.',
    heroImage: 'photo-1510312305653-8ed496efae75',
    categories: [
      {
        slug: 'river-rafting',
        name: 'River Rafting',
        description: 'White water on the Ganga with certified guides — rapids, calm pools and a riverside camp.'
      },
      {
        slug: 'safari',
        name: 'Safari',
        description: 'Jeep safaris in tiger country and camel rides into the desert, with the permits and the camp arranged.'
      },
      {
        slug: 'paragliding',
        name: 'Paragliding',
        description: 'Tandem flights with certified pilots over the lakes and ridges of the Kumaon hills.'
      },
      {
        slug: 'culture-heritage',
        name: 'Cultural & Heritage Experiences',
        description:
          'Pilgrimages and living traditions — planned so you are part of the day rather than watching it.'
      },
      {
        slug: 'wellness-slow-travel',
        name: 'Wellness & Slow Travel',
        description: 'Unhurried days built around rest, good food and time outdoors, with nowhere to be by a certain hour.'
      },
      {
        slug: 'offbeat',
        name: 'Offbeat Experiences',
        description: 'Remote border valleys of Uttarakhand, with village homestays and the people who still live there.'
      }
    ],
    seo: {
      title: 'Experiences — Rafting, Safaris, Paragliding & Pilgrimages in India',
      description:
        'Pravaah experiences: white water rafting in Rishikesh, Jim Corbett and Jaisalmer desert safaris, paragliding at Naukuchiatal and the Char Dham and Adi Kailash yatras.'
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
        slug: 'road-trips',
        name: 'Road Trips',
        description: 'Long drives with the route, the stays and the stops worked out — the road is the trip.'
      },
      {
        slug: 'motorcycle',
        name: 'Motorcycle Expeditions',
        description: 'Mountain routes on two wheels, planned around the road and the weather.'
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
    title: 'Festivals, retreats and gatherings worth planning a trip around.',
    intro:
      'Family celebrations, team offsites and group getaways at the stay of your choice, a wellness retreat in the Kumaon forest, and the festivals worth travelling for — the Nanda Ashtami yatra in Munsiyari, Holi in Vrindavan and Barsana, the Butter Festival at Dayara Bugyal and Dev Deepawali in Varanasi. Everything taken care of.',
    heroImage: 'photo-1545389336-cf090694435e',
    categories: [
      {
        slug: 'family-celebrations',
        name: 'Family Celebrations',
        description: 'Birthdays, anniversaries and family get-togethers, hosted somewhere worth the journey.'
      },
      {
        slug: 'corporate-retreats',
        name: 'Corporate Retreats',
        description: 'Offsites and team retreats in the hills, with the stay and the days planned around your agenda.'
      },
      {
        slug: 'group-getaways',
        name: 'Group Getaways',
        description: 'Trips for friends and larger groups, with the stays, transport and plans taken care of.'
      },
      {
        slug: 'festive-escape',
        name: 'Festive Escape',
        description:
          'Festivals and yatras that happen on fixed dates — worth planning a trip around, and planned so you are part of the day rather than watching it.'
      },
      {
        slug: 'wellness-retreats',
        name: 'Wellness Retreats',
        description: 'Yoga, forest walks, simple food and early nights in the quiet of the Kumaon hills.'
      }
    ],
    seo: {
      title: 'Events — Celebrations, Retreats & Festivals in India',
      description:
        'Pravaah events: family celebrations, corporate retreats and group getaways at any Pravaah stay, the Nanda Ashtami Yatra in Munsiyari, Holi in Vrindavan and Barsana, the Butter Festival at Dayara Bugyal, Dev Deepawali in Varanasi and the Shama Base Camp nature retreat.'
    }
  }
}

export const sectionList: Section[] = Object.values(sections)

export const getCategory = (section: SectionKey, slug: string) =>
  sections[section].categories.find((category) => category.slug === slug)
