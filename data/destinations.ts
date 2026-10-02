import type { Destination, DestinationCategory, Region } from '~/types'

/**
 * The regions shown under Destinations. `india` is the umbrella view that
 * lists everything; the rest filter destinations by their `region` field.
 */
export const regions: Region[] = [
  {
    slug: 'india',
    name: 'India',
    description:
      'Every region we plan for, from the Kumaon Himalaya to the Rajasthan desert, the Kerala backwaters and the Andaman Islands.'
  },
  {
    slug: 'north-india',
    name: 'North India',
    description:
      'The Himalaya of Uttarakhand and Kashmir. High valleys, base camps, river towns and the Char Dham circuit.'
  },
  {
    slug: 'west-india',
    name: 'West India',
    description: 'Rajasthan and Goa. Desert forts, camel safaris and a coastline that slows everything down.'
  },
  {
    slug: 'south-india',
    name: 'South India',
    description: 'Kerala. Backwaters, tea country in the Western Ghats and a coast that stays green all year.'
  },
  {
    slug: 'islands',
    name: 'Islands',
    description:
      'The Andaman & Nicobar Islands. White-sand beaches, coral reefs and some of the clearest water in India.'
  }
]

export const getRegion = (slug: string) => regions.find((r) => r.slug === slug)

export const destinationCategories: DestinationCategory[] = [
  'Mountains',
  'Beaches',
  'Heritage',
  'Adventure',
  'Wildlife',
  'Honeymoon',
  'Family',
  'Weekend'
]

export const destinations: Destination[] = [
  {
    slug: 'uttarakhand',
    name: 'Uttarakhand',
    state: 'Uttarakhand',
    region: 'north-india',
    tagline: 'Where the Ganga begins',
    description:
      'Kumaon lakes and orchards, the high valleys of Darma, Johar and Niti, and the source of the Ganga — our home ground.',
    overview: [
      'Uttarakhand is where most of what we do begins. The state splits into two old kingdoms: Garhwal in the west, with Rishikesh, the Char Dham shrines and the Niti valley, and Kumaon in the east, with the lake country around Bhimtal, orchard villages like Hartola, the long road up to Munsiyari and the Panchachuli peaks, and down in the foothills the sal forests of Jim Corbett National Park.',
      'It rewards travellers who go beyond the hill stations. A few hours past the last big town you are in villages that still move with the seasons, on trails to base camps that see a handful of groups a year, and in valleys that sit a day away from the Tibetan border. We stay in small, locally run places and travel with guides who grew up in these valleys.'
    ],
    image: 'photo-1522506209496-4536d9020ec4',
    heroImage: 'photo-1689736771471-5e46e579e1cb',
    gallery: [
      'photo-1609920658906-8223bd289001',
      'photo-1622308644420-b20142dc993c',
      'photo-1551632811-561732d1e306',
      'photo-1508672019048-805c876b67e2'
    ],
    categories: ['Mountains', 'Adventure', 'Family', 'Weekend'],
    bestTimeToVisit: 'March to June and September to November',
    idealDuration: '5 – 10 days',
    seasons: [
      {
        window: 'March – June',
        label: 'Rhododendron & trek season',
        description:
          'Rhododendron forests in bloom, high trails opening up and the Char Dham portals opening from late April or May.'
      },
      {
        window: 'July – August',
        label: 'Monsoon',
        description:
          'Green and dramatic, with landslide risk on the mountain roads. Best for lake stays and short foothill trips.'
      },
      {
        window: 'September – November',
        label: 'Clear skies',
        description:
          'The clearest Himalayan views of the year, Nanda Ashtami in Kumaon, and the best window for the high valleys.'
      },
      {
        window: 'December – February',
        label: 'Winter light',
        description:
          'Snow at Hartola, Munsiyari and Khaliya Top, crisp days in Kumaon, and quiet homestays with a fire going.'
      }
    ],
    whyVisit: [
      {
        title: 'Views of the high Himalaya',
        description:
          'Panchachuli from Munsiyari, Nanda Devi and Trishul from the Kumaon ridges — a wall of peaks from your window.'
      },
      {
        title: 'Valleys few people reach',
        description:
          'Darma, Johar and Niti are old trade valleys near the Tibetan border, with stone villages, glaciers and permits to match.'
      },
      {
        title: 'The river and the shrines',
        description:
          'From Gangotri down to Rishikesh, the Ganga ties together the Char Dham, the ghats and the towns built along its banks.'
      },
      {
        title: 'Stays with a sense of place',
        description:
          'Orchard homestays, organic farms, camping in the woods and lakeside hotels — chosen for the hosts as much as the rooms.'
      }
    ],
    experiences: [
      'Sunrise over Panchachuli from Khaliya Top',
      'Base camp treks to Bankatiya and Panchachuli',
      '4x4 journeys into the Darma, Johar and Niti valleys',
      'The Char Dham yatra, planned at a humane pace',
      'Orchard walks and farm-to-table meals in Kumaon'
    ],
    travelTips: [
      'Mountain roads are slow. Plan on 25 – 30 km an hour in the high country and avoid driving after dark.',
      'Darma, Johar and Niti need an Inner Line Permit. We arrange it — carry original photo ID and passport photographs.',
      'In the monsoon, keep one buffer day in any itinerary that crosses a pass or a river valley.',
      'Mobile coverage drops off beyond Munsiyari and Dharchula. Let family know you may be offline for a few days.'
    ],
    faqs: [
      {
        question: 'How do I reach Kumaon?',
        answer:
          'The nearest railhead is Kathgodam, with overnight trains from Delhi, and Pantnagar has the nearest airport. From Kathgodam, Bhimtal is about an hour away; Munsiyari is a long day or two easier days by road.'
      },
      {
        question: 'Do I need a permit for the border valleys?',
        answer:
          'Yes. Darma, Johar and Niti are inner-line areas and need a permit from the local administration before you travel. Foreign nationals may need additional permissions. We handle the paperwork as part of the booking.'
      },
      {
        question: 'Is Uttarakhand good for a first trip to the mountains?',
        answer:
          'Very. Bhimtal, Hartola and Rishikesh are easy, comfortable introductions, and Khaliya Top is a good first overnight trek. We would save the high valleys for a second visit.'
      },
      {
        question: 'When is the Char Dham yatra open?',
        answer:
          'The shrines open around late April or May and close around Diwali, with exact dates announced each year. May – June and September – October are the most comfortable windows.'
      }
    ],
    featured: true,
    seo: {
      title: 'Uttarakhand Travel Guide — Kumaon Stays, Treks & High Valleys',
      description:
        'Plan an Uttarakhand trip with Pravaah: Bhimtal and Hartola stays, Munsiyari and Panchachuli, base camp treks, the Darma, Johar and Niti valleys, and the Char Dham.'
    }
  },

  {
    slug: 'kerala',
    name: 'Kerala',
    state: 'Kerala',
    region: 'south-india',
    tagline: 'Backwaters, hills and long lunches',
    description:
      'Houseboats on the backwaters, tea country in the Western Ghats and a coastline that runs green all the way down.',
    overview: [
      'Kerala is the easiest state in India to travel slowly. Distances are short, the roads are good, and almost every drive passes water.',
      'The standard arc goes coast to backwaters to hills — Kochi, Alleppey and then up to Munnar or Thekkady. It works because each stop changes the temperature and the pace, and because nothing is more than four hours from the last thing.'
    ],
    image: 'photo-1602216056096-3b40cc0c9944',
    heroImage: 'photo-1602216056096-3b40cc0c9944',
    gallery: [
      'photo-1593693411515-c20261bcad6e',
      'photo-1544084944-15269ec7b5a0',
      'photo-1454391304352-2bf4678b1a7a',
      'photo-1433086966358-54859d0ed716'
    ],
    categories: ['Beaches', 'Honeymoon', 'Family', 'Wildlife', 'Weekend'],
    bestTimeToVisit: 'September to March',
    idealDuration: '6 – 8 days',
    seasons: [
      {
        window: 'September – November',
        label: 'After the rain',
        description: 'Everything is green, the backwaters are full and the crowds have not arrived yet.'
      },
      {
        window: 'December – February',
        label: 'Peak season',
        description: 'Dry, warm and reliable. Book houseboats and hill stays well ahead over the holidays.'
      },
      {
        window: 'March – May',
        label: 'Warm',
        description: 'Humid on the coast but comfortable in Munnar and Wayanad, and far quieter everywhere.'
      },
      {
        window: 'June – August',
        label: 'Monsoon',
        description: 'Dramatic rain and the traditional season for Ayurvedic treatment. Beaches are largely off-limits.'
      }
    ],
    whyVisit: [
      {
        title: 'A night on the backwaters',
        description: 'A houseboat from Alleppey through the paddy-fed canals, with lunch cooked on board.'
      },
      {
        title: 'Tea country',
        description: 'The plantations around Munnar, where the hills are cut into green terraces to the skyline.'
      },
      {
        title: 'Fort Kochi',
        description: 'Colonial streets, Chinese fishing nets, a working spice market and the best café culture in the south.'
      },
      {
        title: 'Food worth planning around',
        description: 'Appam and stew, Syrian-Christian beef fry, Malabar biryani and fish grilled the hour it was landed.'
      }
    ],
    experiences: [
      'Overnight houseboat through the Alleppey backwaters',
      'Tea estate walk and tasting near Munnar',
      'Kathakali performance and a spice-market walk in Kochi',
      'Periyar boat safari and a bamboo raft morning',
      'Ayurvedic treatment at a certified centre'
    ],
    travelTips: [
      'Book a smaller houseboat — the large ones stay on the main channel and miss the narrow canals.',
      'Munnar is cold at night year round. Pack one warm layer even in April.',
      'Kochi is the most convenient arrival airport for the classic loop; Trivandrum suits a southern beach trip.',
      'Most Ayurvedic packages need a minimum of seven days to do anything meaningful.'
    ],
    faqs: [
      {
        question: 'Is one night enough on a houseboat?',
        answer:
          'For most travellers, yes. You board at midday, cruise through the afternoon, moor overnight and disembark after breakfast — a second night mostly repeats the first.'
      },
      {
        question: 'Munnar or Wayanad?',
        answer:
          'Munnar for tea landscapes and easy access from Kochi. Wayanad for forest, wildlife and a quieter, less built-up feel.'
      },
      {
        question: 'Does Kerala work during the monsoon?',
        answer:
          'It can be wonderful if you go for the rain, the greenery and Ayurveda rather than for beaches. We adjust the route to avoid the most flood-prone stretches.'
      },
      {
        question: 'Is Kerala a good destination with small children?',
        answer:
          'One of the best. Short drives, calm water, good hospitals within reach and food that is easy to adapt.'
      }
    ],
    featured: false,
    seo: {
      title: 'Kerala Travel Guide — Backwaters, Munnar & Best Time to Visit',
      description:
        'Plan a Kerala trip with Pravaah: Alleppey houseboats, Munnar tea country, Fort Kochi and Periyar, with seasons, tips and custom itineraries.'
    }
  },

  {
    slug: 'andaman-nicobar-islands',
    name: 'Andaman & Nicobar Islands',
    state: 'Andaman & Nicobar Islands',
    region: 'islands',
    tagline: 'Clear water, white sand and coral reefs',
    description:
      'White-sand beaches on Havelock and Neil, some of the clearest water in India and coral reefs you can reach from the shore.',
    overview: [
      'The Andamans sit far out in the Bay of Bengal, closer to Myanmar than to mainland India — a chain of forested islands ringed by coral reef, with beaches that still empty out by late afternoon.',
      'Most trips start in Sri Vijaya Puram (Port Blair) for the history of the Cellular Jail, then take the ferry to Swaraj Dweep (Havelock) for Radhanagar beach and the dive sites, and on to quiet Shaheed Dweep (Neil). We plan the ferries, the stays and the time in the water so the islands feel unhurried rather than like a ticket counter.'
    ],
    image: 'photo-1559128010-7c1ad6e1b6a5',
    heroImage: 'photo-1586861635167-e5223aadc9fe',
    gallery: [
      'photo-1544551763-46a013bb70d5',
      'photo-1540541338287-41700207dee6',
      'photo-1507525428034-b723cf961d3e',
      'photo-1519046904884-53103b34b206'
    ],
    categories: ['Beaches', 'Honeymoon', 'Adventure', 'Family'],
    bestTimeToVisit: 'October to May',
    idealDuration: '6 – 7 days',
    seasons: [
      {
        window: 'October – December',
        label: 'Seas settling',
        description: 'The monsoon has passed, the islands are green and visibility underwater keeps improving.'
      },
      {
        window: 'January – March',
        label: 'Peak season',
        description: 'Calm seas, dry days and the best diving conditions. Book ferries and beach stays well ahead.'
      },
      {
        window: 'April – May',
        label: 'Warm and clear',
        description: 'Hot and humid, but the water is at its clearest and the crowds thin out.'
      },
      {
        window: 'June – September',
        label: 'Monsoon',
        description: 'Heavy rain and rough seas. Ferries are often cancelled and water sports are largely suspended.'
      }
    ],
    whyVisit: [
      {
        title: 'Radhanagar beach',
        description: 'The long, white curve of sand on Havelock, backed by tall forest and famous for its sunsets.'
      },
      {
        title: 'Coral reefs from the shore',
        description: 'Snorkelling and beginner scuba dives off Elephant beach and around Havelock, with reef fish in waist-deep water.'
      },
      {
        title: 'The Cellular Jail',
        description: 'The colonial prison in Sri Vijaya Puram where freedom fighters were held, and its evening light-and-sound show.'
      },
      {
        title: 'Baratang',
        description: 'Mangrove creeks by boat and a short forest walk to the limestone caves, on a long day out from Sri Vijaya Puram.'
      }
    ],
    experiences: [
      'Sunset on Radhanagar beach, Swaraj Dweep (Havelock)',
      'A first scuba dive or snorkelling session at Elephant beach',
      'The Cellular Jail and its light-and-sound show',
      'Mangrove creeks and the limestone caves of Baratang',
      'Natural rock formations and quiet beaches on Shaheed Dweep (Neil)'
    ],
    travelTips: [
      'Book private ferries such as Makruzz or ITT Majestic early in peak season — they sell out and set the shape of the trip.',
      'Foreign nationals need a Restricted Area Permit for some islands; it is issued on arrival at Sri Vijaya Puram for the main tourist islands.',
      'Mobile signal and card payments are patchy on Havelock and Neil. Carry cash.',
      'Use reef-safe sunscreen and do not touch or stand on coral — it is protected by law.'
    ],
    faqs: [
      {
        question: 'How do we get to the Andamans?',
        answer:
          'Fly into Sri Vijaya Puram (Port Blair), with direct flights from Chennai, Kolkata, Delhi and Bengaluru. Havelock and Neil are reached by ferry from there.'
      },
      {
        question: 'Can non-swimmers try scuba diving?',
        answer:
          'Yes. Introductory dives are done in shallow water with an instructor holding on to you throughout — no swimming or prior experience needed.'
      },
      {
        question: 'How many days do we need?',
        answer:
          'Six to seven days covers Sri Vijaya Puram, three nights on Havelock and a night or two on Neil without rushing the ferries.'
      },
      {
        question: 'Is it a good honeymoon destination?',
        answer:
          'One of the best in India — quiet beaches, beach-front stays and sunsets, with enough to do in the water that the days never drag.'
      }
    ],
    featured: true,
    seo: {
      title: 'Andaman & Nicobar Islands Travel Guide — Havelock, Neil & Best Time to Visit',
      description:
        'Plan an Andaman trip with Pravaah: Radhanagar beach on Havelock, Neil island, scuba and snorkelling at Elephant beach, the Cellular Jail and Baratang caves.'
    }
  },

  {
    slug: 'rajasthan',
    name: 'Rajasthan',
    state: 'Rajasthan',
    region: 'west-india',
    tagline: 'Forts, courtyards and desert light',
    description:
      'Hill forts, lake palaces and old city lanes — the most theatrical landscape of heritage architecture in India.',
    overview: [
      'Rajasthan is built for late afternoons. Sandstone holds the light, courtyards cool down, and the forts that look severe at noon turn gold by five.',
      'A classic loop runs Jaipur to Jodhpur to Udaipur, with Jaisalmer added if you want the desert. Each city has a distinct character — Jaipur is busy and commercial, Jodhpur is blue and vertical, Udaipur is soft and built around water.'
    ],
    image: 'photo-1477587458883-47145ed94245',
    heroImage: 'photo-1599661046289-e31897846e41',
    gallery: [
      'photo-1548013146-72479768bada',
      'photo-1524492412937-b28074a5d7da',
      'photo-1477587458883-47145ed94245',
      'photo-1566073771259-6a8506099945'
    ],
    categories: ['Heritage', 'Family', 'Honeymoon', 'Wildlife'],
    bestTimeToVisit: 'October to March',
    idealDuration: '7 – 10 days',
    seasons: [
      {
        window: 'October – November',
        label: 'Post-monsoon',
        description: 'Warm days, cool evenings and the lakes at their fullest. Festival season around Diwali.'
      },
      {
        window: 'December – February',
        label: 'Peak season',
        description: 'The most comfortable weather of the year. Desert nights get genuinely cold — carry a jacket.'
      },
      {
        window: 'March – April',
        label: 'Shoulder',
        description: 'Still pleasant in the mornings, quieter monuments and noticeably better rates.'
      },
      {
        window: 'May – September',
        label: 'Hot & monsoon',
        description: 'Very hot through May and June. We only recommend it for short heritage-hotel stays.'
      }
    ],
    whyVisit: [
      {
        title: 'Forts you can walk for hours',
        description: 'Amber, Mehrangarh, Kumbhalgarh and Jaisalmer — each one a working town rather than a monument.'
      },
      {
        title: 'Craft still made by hand',
        description: 'Block printing in Bagru, blue pottery in Jaipur, and mirror work in the villages around Jodhpur.'
      },
      {
        title: 'Heritage stays',
        description: 'Converted havelis and small palace hotels where the building is half the reason you came.'
      },
      {
        title: 'Ranthambore',
        description: 'One of the most reliable places in India to see a wild tiger, an easy detour from Jaipur.'
      }
    ],
    experiences: [
      'Sunrise at Amber Fort before the crowds',
      'Block printing workshop with a Bagru family',
      'Boat across Lake Pichola at dusk',
      'Mehrangarh Fort and the blue lanes of old Jodhpur',
      'Tiger safari in Ranthambore'
    ],
    travelTips: [
      'Start monument visits at opening time — by 11am both the heat and the queues arrive.',
      'Trains between Jaipur, Jodhpur and Udaipur are comfortable and often faster than driving.',
      'Modest clothing makes temple visits and village stops easier.',
      'Agree on a price before any camel or jeep ride in Jaisalmer.'
    ],
    faqs: [
      {
        question: 'What is the ideal Rajasthan route for a first visit?',
        answer:
          'Jaipur, Jodhpur and Udaipur over eight days covers the range without rushing. Add Jaisalmer for the desert, or Ranthambore for wildlife, if you have ten.'
      },
      {
        question: 'Is October too hot for Rajasthan?',
        answer:
          'Early October can still touch 35°C in the afternoon, but mornings and evenings are pleasant. Late October onwards is comfortable throughout.'
      },
      {
        question: 'Are heritage hotels worth the extra cost?',
        answer:
          'In Rajasthan, usually yes. A restored haveli in Jodhpur or a lakeside property in Udaipur changes the trip, and mid-range options start well below palace-hotel rates.'
      },
      {
        question: 'How much time should we keep for shopping?',
        answer:
          'Half a day in Jaipur covers most of it. We can arrange visits to workshops rather than showrooms if you would rather buy directly from makers.'
      }
    ],
    featured: true,
    seo: {
      title: 'Rajasthan Travel Guide — Forts, Tours & Best Time to Visit',
      description:
        'Plan a Rajasthan trip with Pravaah: Jaipur, Jodhpur, Udaipur and Jaisalmer, heritage stays, craft workshops and tiger safaris in Ranthambore.'
    }
  },

  {
    slug: 'goa',
    name: 'Goa',
    state: 'Goa',
    region: 'west-india',
    tagline: 'Two coastlines, one pace',
    description:
      'Quiet southern sands, a busier north, and a Portuguese-era interior that most visitors never get to.',
    overview: [
      'Goa is really three destinations. The north is social and late-night, the south is long, empty and slow, and the hinterland — Chandor, Quepem, the spice villages — is where the old houses and churches still stand.',
      'The trick is deciding which one you came for, then picking a base rather than trying to cover the whole coast from one hotel.'
    ],
    image: 'photo-1512343879784-a960bf40e7f2',
    heroImage: 'photo-1512343879784-a960bf40e7f2',
    gallery: [
      'photo-1507525428034-b723cf961d3e',
      'photo-1519046904884-53103b34b206',
      'photo-1505118380757-91f5f5632de0',
      'photo-1502680390469-be75c86b636f'
    ],
    categories: ['Beaches', 'Weekend', 'Honeymoon', 'Family'],
    bestTimeToVisit: 'November to February',
    idealDuration: '4 – 6 days',
    seasons: [
      {
        window: 'November – February',
        label: 'Peak season',
        description: 'Dry, breezy and warm. Every shack is open and the sea is calm — also the most expensive window.'
      },
      {
        window: 'March – May',
        label: 'Hot & quiet',
        description: 'Humid afternoons but very few people, and rates drop sharply after mid-March.'
      },
      {
        window: 'June – September',
        label: 'Monsoon',
        description: 'Green, cheap and beautiful, though swimming is unsafe and most beach shacks close.'
      },
      {
        window: 'October',
        label: 'Reopening',
        description: 'The coast comes back to life. Occasional rain, but the best value of the year.'
      }
    ],
    whyVisit: [
      {
        title: 'The south coast',
        description: 'Agonda, Patnem and Palolem — long sands, low buildings and a genuinely quiet evening.'
      },
      {
        title: 'Portuguese-era Goa',
        description: 'The mansions of Chandor, the churches of Old Goa and the painted lanes of Fontainhas in Panjim.'
      },
      {
        title: 'Food that is not just beach food',
        description: 'Xacuti, cafreal, poie from the morning baker and river fish in a family-run kitchen inland.'
      },
      {
        title: 'Water and wildlife',
        description: 'Dolphin boats from Sinquerim, kayaking on the Sal, and the forest at Bhagwan Mahavir.'
      }
    ],
    experiences: [
      'Sunset dolphin cruise from the Mandovi',
      'Heritage walk through Fontainhas and Panjim',
      'Goan home-cooking class with a local family',
      'Dudhsagar Falls and spice plantation day trip',
      'Surf lesson at Ashwem or Arambol'
    ],
    travelTips: [
      'Pick north or south and stay there. The drive between them takes well over an hour.',
      'Rent a scooter only with a valid licence and a helmet — checks are routine.',
      'The best food is usually a few streets back from the sand.',
      'Sunday afternoons are quiet in Panjim; plan museum and church visits for a weekday.'
    ],
    faqs: [
      {
        question: 'North Goa or South Goa?',
        answer:
          'North for nightlife, markets and variety. South for quiet beaches and space. Couples and families usually prefer the south; first-time visitors who want both can split four nights either side.'
      },
      {
        question: 'Is Goa worth it in the monsoon?',
        answer:
          'For the landscape and the prices, yes. For the beach, no — the sea is rough, flags go up and most shacks are dismantled for the season.'
      },
      {
        question: 'How many days do we need in Goa?',
        answer:
          'Four nights is a comfortable long weekend. Six lets you add the interior and a day trip to Dudhsagar without rushing.'
      },
      {
        question: 'Can you arrange a special occasion in Goa?',
        answer:
          'We arrange private dinners, anniversary set-ups and small celebrations with our partner properties. Full wedding planning is outside what we do.'
      }
    ],
    featured: false,
    seo: {
      title: 'Goa Travel Guide — Beaches, Heritage & Best Time to Visit',
      description:
        'Plan a Goa trip with Pravaah: quiet southern beaches, Portuguese-era heritage, Goan food and day trips, with seasons and custom itineraries.'
    }
  },

  {
    slug: 'kashmir',
    name: 'Kashmir',
    state: 'Jammu & Kashmir',
    region: 'north-india',
    tagline: 'Meadows, water and light',
    description:
      'Alpine meadows, houseboats on still water and a valley that changes colour with every month of the year.',
    overview: [
      'Kashmir is the kind of place that rearranges your sense of scale. Snow lines sit above pine forests, saffron fields run flat to the horizon, and the whole valley seems to slow down around the Jhelum.',
      'A week here moves between three moods: the water and gardens of Srinagar, the meadows of Gulmarg and Pahalgam, and the high road to Sonamarg where the glaciers begin. It rewards travellers who leave room in the schedule for a long lunch and an unplanned detour.'
    ],
    image: 'photo-1598091383021-15ddea10925d',
    heroImage: 'photo-1598091383021-15ddea10925d',
    gallery: [
      'photo-1501785888041-af3ef285b470',
      'photo-1476514525535-07fb3b4ae5f1',
      'photo-1626621341517-bbf3d9990a23',
      'photo-1544735716-392fe2489ffa'
    ],
    categories: ['Mountains', 'Honeymoon', 'Adventure', 'Family'],
    bestTimeToVisit: 'March to October, and December to February for snow',
    idealDuration: '6 – 8 days',
    seasons: [
      {
        window: 'March – May',
        label: 'Blossom season',
        description: 'Almond and tulip blooms in Srinagar, mild days and cold mornings. The valley at its greenest.'
      },
      {
        window: 'June – August',
        label: 'High meadows',
        description: 'Sonamarg and Gulmarg fully open, ideal for treks, pony rides and long drives to Aru and Betaab.'
      },
      {
        window: 'September – October',
        label: 'Chinar autumn',
        description: 'Golden chinar leaves, saffron harvest in Pampore, and the clearest mountain views of the year.'
      },
      {
        window: 'December – February',
        label: 'Snow',
        description: 'Gulmarg turns into a ski destination. Expect road closures and pack for real winter.'
      }
    ],
    whyVisit: [
      {
        title: 'Mornings on Dal Lake',
        description:
          'A shikara ride before the mist lifts, past floating vegetable gardens and kitchens working on the water.'
      },
      {
        title: 'Meadows above the treeline',
        description: 'Gulmarg, Yusmarg and Doodhpathri are walkable, wide-open and quiet outside of peak hours.'
      },
      {
        title: 'Mughal garden architecture',
        description: 'Shalimar, Nishat and Chashme Shahi — terraced gardens built around sightlines and running water.'
      },
      {
        title: 'Kashmiri kitchens',
        description: 'Wazwan, harissa on a cold morning, and nun chai poured from a samovar in a shopfront in Srinagar.'
      }
    ],
    experiences: [
      'Shikara ride and a night on a cedar houseboat',
      'Gondola to Apharwat Peak in Gulmarg',
      'Day walk to Aru and Betaab valleys from Pahalgam',
      'Saffron fields and spice tasting in Pampore',
      'Papier-mâché and walnut wood workshops in the old city'
    ],
    travelTips: [
      'Carry a government photo ID — it is checked at several points along the highway.',
      'Mobile data can be patchy outside Srinagar; download offline maps before you travel.',
      'Layers work better than one heavy jacket. Evenings are cold even in summer.',
      'Fix shikara and pony rates before you start, and keep small cash for the markets.'
    ],
    faqs: [
      {
        question: 'Is Kashmir safe for travellers right now?',
        answer:
          'The main tourist circuit — Srinagar, Gulmarg, Pahalgam and Sonamarg — sees visitors through the year and is routinely travelled. We track local advisories before every departure and will tell you plainly if a route needs to change.'
      },
      {
        question: 'How many days do I need in Kashmir?',
        answer:
          'Six to eight days lets you spend two nights in Srinagar and two each in Gulmarg and Pahalgam without spending your holiday in the car. Five days works if you drop one of the valleys.'
      },
      {
        question: 'When does it snow in Gulmarg?',
        answer:
          'Reliable snow usually arrives by late December and lasts into March. January and February are the strongest months for skiing.'
      },
      {
        question: 'Can we travel to Kashmir with young children or elderly parents?',
        answer:
          'Yes. We keep driving days short, book stays with lifts or ground-floor rooms where needed, and swap pony rides for gentler alternatives.'
      }
    ],
    featured: true,
    seo: {
      title: 'Kashmir Travel Guide — Tours, Best Time to Visit & Itineraries',
      description:
        'Plan a Kashmir trip with Pravaah: Dal Lake houseboats, Gulmarg meadows, Pahalgam valleys and Sonamarg glaciers, with the best time to visit and custom itineraries.'
    }
  }
]

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug)

export const destinationsByRegion = (region: string) =>
  region === 'india' ? destinations : destinations.filter((d) => d.region === region)

export const featuredDestinations = destinations.filter((d) => d.featured)
