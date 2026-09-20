import type { Experience } from '~/types'

export const experiences: Experience[] = [
  {
    slug: 'adventure',
    name: 'Adventure',
    description:
      'High passes, long descents and the kind of day that ends with tired legs — treks, rafting, paragliding and winter sport.',
    image: 'photo-1626621341517-bbf3d9990a23',
    icon: 'Mountain',
    destinations: ['Himachal Pradesh', 'Kashmir', 'Northeast India']
  },
  {
    slug: 'culture',
    name: 'Culture',
    description:
      'Old cities, working craft studios and evenings at a ghat or a courtyard performance — places where the tradition is still in use.',
    image: 'photo-1571536802807-30451e3955d8',
    icon: 'Landmark',
    destinations: ['Rajasthan', 'Kerala', 'Northeast India']
  },
  {
    slug: 'nature',
    name: 'Nature',
    description:
      'Forest walks, river valleys and mornings that start before the birds do. Trails that are about the walking, not the summit.',
    image: 'photo-1447752875215-b2761acb3c5d',
    icon: 'Trees',
    destinations: ['Himachal Pradesh', 'Northeast India', 'Kerala']
  },
  {
    slug: 'beaches',
    name: 'Beaches',
    description: 'Long, quiet sand on the south coast, a sunset cruise, and food a few streets back from the water.',
    image: 'photo-1505118380757-91f5f5632de0',
    icon: 'Waves',
    destinations: ['Goa', 'Kerala']
  },
  {
    slug: 'mountains',
    name: 'Mountains',
    description:
      'Meadows above the treeline, monasteries on a ridge and cold desert at 4,000m. The Himalaya at whatever altitude suits you.',
    image: 'photo-1464822759023-fed622ff2c3b',
    icon: 'MountainSnow',
    destinations: ['Himachal Pradesh', 'Kashmir']
  },
  {
    slug: 'food',
    name: 'Food',
    description:
      'Wazwan in Srinagar, a Goan kitchen at lunchtime, appam on the backwaters — trips planned around where you will eat.',
    image: 'photo-1631452180519-c014fe946bc7',
    icon: 'UtensilsCrossed',
    destinations: ['Kashmir', 'Goa', 'Kerala', 'Rajasthan']
  },
  {
    slug: 'wildlife',
    name: 'Wildlife',
    description:
      'Rhino in the elephant grass at Kaziranga, tigers in Ranthambore, and elephant herds in the Periyar forest.',
    image: 'photo-1549366021-9f761d450615',
    icon: 'PawPrint',
    destinations: ['Northeast India', 'Rajasthan', 'Kerala']
  },
  {
    slug: 'wellness',
    name: 'Wellness',
    description:
      'Certified Ayurveda in Kerala, yoga on an estate verandah and itineraries deliberately built with nothing in them.',
    image: 'photo-1506126613408-eca07ce68773',
    icon: 'Flower2',
    destinations: ['Kerala', 'Himachal Pradesh']
  }
]

export const getExperience = (slug: string) => experiences.find((e) => e.slug === slug)
