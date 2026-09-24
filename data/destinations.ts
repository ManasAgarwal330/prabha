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
      'Every region we plan for, from the Kumaon Himalaya to the Rajasthan desert and the hills of the northeast.'
  },
  {
    slug: 'north-india',
    name: 'North India',
    description:
      'The Himalayan states — Uttarakhand, Himachal and Kashmir. High valleys, base camps, river towns and the Char Dham circuit.'
  },
  {
    slug: 'northeast-india',
    name: 'Northeast India',
    description:
      'Meghalaya, Assam and Nagaland. Living root bridges, tea country and two of the best festivals in the country.'
  },
  {
    slug: 'west-india',
    name: 'West India',
    description: 'Rajasthan and Goa. Desert forts, Holi in Pushkar and a coastline that slows everything down.'
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
    image: 'photo-1597074866923-dc0589150358',
    heroImage: 'photo-1486911278844-a81c5267e227',
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
          'Orchard homestays, organic farms, glamping in the woods and lakeside hotels — chosen for the hosts as much as the rooms.'
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
  },

  {
    slug: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    state: 'Himachal Pradesh',
    region: 'north-india',
    tagline: 'River valleys and quiet ridges',
    description:
      'Deodar forests, glacial rivers and hill towns that reward slow travel — from the Parvati valley to the edge of Spiti.',
    overview: [
      'Himachal is the easiest doorway into the Indian Himalaya. Within a day of Delhi you are in cedar forest, listening to a river that has not slowed down since the glacier.',
      'The state splits neatly into two trips. The green side — Shimla, Kullu, Manali, Tirthan and Parvati — is soft, forested and comfortable in almost any season. The high side — Spiti, Kinnaur and Lahaul — is cold desert, monasteries and altitude, and needs planning around the road openings.'
    ],
    image: 'photo-1609920658906-8223bd289001',
    heroImage: 'photo-1609920658906-8223bd289001',
    gallery: [
      'photo-1418065460487-3e41a6c84dc5',
      'photo-1506905925346-21bda4d32df4',
      'photo-1533240332313-0db49b459ad6',
      'photo-1504280390367-361c6d9f38f4'
    ],
    categories: ['Mountains', 'Adventure', 'Weekend', 'Honeymoon', 'Family'],
    bestTimeToVisit: 'March to June, and September to November',
    idealDuration: '5 – 9 days',
    seasons: [
      {
        window: 'March – June',
        label: 'Clear and green',
        description: 'Best all-round window. Rhododendron in the lower hills, snow still visible on the high passes.'
      },
      {
        window: 'July – August',
        label: 'Monsoon',
        description: 'Lush and empty, but landslides are common. Good for Spiti, which sits in the rain shadow.'
      },
      {
        window: 'September – November',
        label: 'Post-monsoon',
        description: 'The clearest skies of the year and comfortable trekking weather before the cold sets in.'
      },
      {
        window: 'December – February',
        label: 'Winter',
        description: 'Snow in Manali, Narkanda and Kufri. Many high roads including Spiti via Kunzum stay closed.'
      }
    ],
    whyVisit: [
      {
        title: 'The Tirthan and Parvati valleys',
        description: 'Riverside stays, trout streams and village walks that most itineraries drive straight past.'
      },
      {
        title: 'Old Manali and the Solang road',
        description: 'Apple orchards, cafés in wooden houses, and the climb towards Rohtang when the pass is open.'
      },
      {
        title: 'Monasteries at altitude',
        description: 'Key, Dhankar and Tabo in Spiti — some of the oldest continuously used monasteries in the Himalaya.'
      },
      {
        title: 'Walkable trails for every level',
        description: 'From a two-hour forest walk in Shoja to the multi-day Hampta Pass crossing.'
      }
    ],
    experiences: [
      'Riverside stay in the Tirthan valley',
      'Great Himalayan National Park guided day trek',
      'Sunrise at Jalori Pass and the walk to Serolsar Lake',
      'Spiti circuit via Kinnaur with monastery stays',
      'Paragliding at Bir Billing'
    ],
    travelTips: [
      'Night buses and taxis from Delhi save a day, but book a seat on the left for the valley views.',
      'For Spiti, build in two nights at moderate altitude before you cross 4,000m.',
      'Mountain roads run on daylight. We plan driving days to finish before dark.',
      'Cash still matters in smaller villages — ATMs thin out past Kaza and Sangla.'
    ],
    faqs: [
      {
        question: 'Shimla, Manali or somewhere quieter?',
        answer:
          'If it is your first trip, Manali gives you the best mix of access and scenery. If you want quiet, we would point you to Tirthan, Shoja or Jibhi instead — same forest, a fraction of the traffic.'
      },
      {
        question: 'When is Rohtang Pass open?',
        answer:
          'Usually May to early November, subject to weather and a daily permit quota. The Atal Tunnel keeps Lahaul accessible for much of the year even when the pass is shut.'
      },
      {
        question: 'Is Spiti suitable for first-time high-altitude travellers?',
        answer:
          'Yes, with a paced itinerary. We route via Kinnaur so you gain altitude gradually, and we keep oxygen in the vehicle throughout.'
      },
      {
        question: 'Can Himachal be done as a long weekend?',
        answer:
          'Shimla, Bir, Kasol and Tirthan all work as three- to four-day trips from Delhi or Chandigarh. Spiti does not — plan nine days or more.'
      }
    ],
    featured: true,
    seo: {
      title: 'Himachal Pradesh Travel Guide — Tours, Best Time to Visit & Trips',
      description:
        'Plan a Himachal Pradesh trip with Pravaah: Manali, Tirthan, Parvati valley and the Spiti circuit, with seasons, trek options and custom itineraries.'
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
    slug: 'northeast-india',
    name: 'Northeast India',
    state: 'Meghalaya, Assam & Nagaland',
    region: 'northeast-india',
    tagline: 'Living roots and river islands',
    description:
      'Waterfall country in Meghalaya, tea estates along the Brahmaputra and some of the least-travelled roads in India.',
    overview: [
      'The northeast is where India gets genuinely remote. Meghalaya alone holds the wettest places on earth, root bridges grown across rivers, and limestone caves that go on for kilometres.',
      'Most first trips combine Meghalaya with Assam: Shillong and Cherrapunji for the gorges and waterfalls, then Kaziranga for rhino country and a tea estate on the way back. Roads are slow, distances deceptive, and the payoff is that you will barely see another itinerary like yours.'
    ],
    image: 'photo-1470071459604-3b5ec3a7fe05',
    heroImage: 'photo-1470071459604-3b5ec3a7fe05',
    gallery: [
      'photo-1433086966358-54859d0ed716',
      'photo-1469474968028-56623f02e42e',
      'photo-1447752875215-b2761acb3c5d',
      'photo-1441974231531-c6227db76b6e'
    ],
    categories: ['Adventure', 'Wildlife', 'Mountains', 'Family'],
    bestTimeToVisit: 'October to April',
    idealDuration: '7 – 10 days',
    seasons: [
      {
        window: 'October – November',
        label: 'Clearest months',
        description: 'Rain has stopped, waterfalls are still full and visibility across the gorges is at its best.'
      },
      {
        window: 'December – February',
        label: 'Cool and dry',
        description: 'Comfortable days, cold nights and the best window for Kaziranga safaris.'
      },
      {
        window: 'March – April',
        label: 'Spring',
        description: 'Orchids in bloom, warm afternoons and thinner crowds before the rains return.'
      },
      {
        window: 'May – September',
        label: 'Monsoon',
        description: 'Extraordinary rainfall in Cherrapunji. Landslides are frequent and many treks are unsafe.'
      }
    ],
    whyVisit: [
      {
        title: 'Living root bridges',
        description: 'Ficus roots trained across streams over decades — the double-decker at Nongriat is a full day of walking.'
      },
      {
        title: 'Kaziranga',
        description: 'Grassland and one of the densest populations of one-horned rhino anywhere, best seen at first light.'
      },
      {
        title: 'Mawlynnong and the clean villages',
        description: 'Khasi villages built around bamboo waste systems, communal gardens and genuine local hospitality.'
      },
      {
        title: 'Majuli',
        description: 'The river island on the Brahmaputra, with satras, mask-makers and almost no traffic.'
      }
    ],
    experiences: [
      'Trek to the double-decker living root bridge at Nongriat',
      'Dawn jeep safari in Kaziranga National Park',
      'Kayak or boat on the turquoise Umngot river at Dawki',
      'Tea estate stay and factory walk near Jorhat',
      'Mask-making workshop on Majuli island'
    ],
    travelTips: [
      'Inner Line Permits are required for Arunachal Pradesh — we arrange these in advance.',
      'Roads are slow. Assume an average of 35–40 km/h when planning a day.',
      'The Nongriat descent is roughly 3,000 steps each way. Good shoes are not optional.',
      'Carry cash. Card acceptance drops off quickly outside Shillong and Guwahati.'
    ],
    faqs: [
      {
        question: 'How do we get to the northeast?',
        answer:
          'Guwahati is the main gateway, with direct flights from Delhi, Kolkata, Mumbai and Bengaluru. Shillong is a three-hour drive from the airport.'
      },
      {
        question: 'Is the root bridge trek difficult?',
        answer:
          'It is a steep stepped descent and climb, around five to six hours round trip. Manageable at a steady pace if you are reasonably fit, but not suitable for weak knees.'
      },
      {
        question: 'Which permits do we need?',
        answer:
          'Meghalaya and Assam need none for Indian citizens. Arunachal Pradesh requires an Inner Line Permit, and foreign nationals need a Protected Area Permit — both handled by us.'
      },
      {
        question: 'Can Kaziranga and Meghalaya be combined?',
        answer:
          'Yes, and it is the trip we recommend most. Seven days covers Shillong, Cherrapunji, Dawki and two nights at Kaziranga comfortably.'
      }
    ],
    featured: true,
    seo: {
      title: 'Northeast India Travel Guide — Meghalaya, Assam & Best Time to Visit',
      description:
        'Plan a Northeast India trip with Pravaah: living root bridges, Cherrapunji waterfalls, Dawki, Kaziranga safaris and Majuli island.'
    }
  }
]

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug)

export const destinationsByRegion = (region: string) =>
  region === 'india' ? destinations : destinations.filter((d) => d.region === region)

export const featuredDestinations = destinations.filter((d) => d.featured)
