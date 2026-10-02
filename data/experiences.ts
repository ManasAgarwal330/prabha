import type { Listing } from '~/types'

/**
 * Experiences — journeys built around one thing worth doing: a river, a safari,
 * a flight or a pilgrimage.
 * Day-by-day plans are indicative; the team confirms routes against season and conditions.
 */
export const experiences: Listing[] = [
  {
    slug: 'rishikesh-white-water-rafting',
    section: 'experiences',
    category: 'river-rafting',
    title: 'Rishikesh White Water Rafting',
    location: 'Shivpuri to Rishikesh, Ganga',
    destinationSlug: 'uttarakhand',
    tagline: 'The Ganga, the fast way',
    description:
      'A guided white water run down the Ganga from Shivpuri to Rishikesh — named rapids, a cliff-jump stop and a riverside camp if you want to stay the night.',
    overview: [
      'Above Rishikesh the Ganga is still a mountain river — cold, green and fast, squeezed between forested ridges. The stretch from Shivpuri down to Rishikesh is the classic run, around 16 km of grade II and III rapids with names like Roller Coaster, Golf Course and Club House, broken up by long calm pools where you can drift and swim.',
      'We raft with certified river guides and operators we know personally, with proper safety kit, a briefing on the bank and a safety kayaker on the water. Make it a half-day on the river, or stay the night at a riverside camp on the white-sand beaches upstream and raft in the morning when the river is quiet.'
    ],
    image: 'photo-1530866495561-507c9faab2ed',
    gallery: [
      'photo-1572963912807-a3609ed653c3',
      'photo-1720819029162-8500607ae232',
      'photo-1487730116645-74489c95b41b',
      'photo-1709623868300-e3b78cad10e1'
    ],
    facts: [
      { label: 'Duration', value: 'Half day, or 2 days with a riverside camp' },
      { label: 'Level', value: 'Easy to moderate — grade II–III rapids' },
      { label: 'Starts from', value: 'Rishikesh' },
      { label: 'Season', value: 'Oct – Jun' }
    ],
    highlights: [
      'The 16 km Shivpuri–Rishikesh run, the classic Ganga stretch',
      'Named rapids — Roller Coaster, Golf Course and Club House',
      'Body-surfing in the calm pools and a cliff-jump stop',
      'Certified river guides and a safety kayaker on every run',
      'An optional night at a riverside camp on a white-sand beach'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Rishikesh to the riverside camp',
        description:
          'Drive upstream to camp on the Ganga beach. Afternoon at leisure by the river, a bonfire in the evening and dinner under the stars.',
        stay: 'Riverside camp, Shivpuri',
        meals: 'Lunch, dinner'
      },
      {
        day: 2,
        title: 'Shivpuri to Rishikesh on the river',
        description:
          'A safety briefing on the bank, then the run down to Rishikesh — rapids, swims and the cliff jump — finishing near Ram Jhula by early afternoon.',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Rafting with certified river guides, Shivpuri to Rishikesh',
      'Helmets, life jackets, paddles and a safety kayaker',
      'Transfers between Rishikesh and the put-in point',
      'Riverside camp stay with meals, if you choose the overnight plan'
    ],
    goodToKnow: [
      'Rafters must be at least 14 years old and comfortable in water — you do not need to be able to swim, but it helps.',
      'Rafting on the Ganga stops during the monsoon, usually from July to mid-September.',
      'Wear quick-dry clothes and secure footwear. Leave phones and valuables in the vehicle.',
      'Pair it with a stay at The Cozy BnB in Rishikesh, or the Flow with the Ganga expedition.'
    ],
    bestTime: 'October to June; March to May for the warmest water',
    featured: true,
    seo: {
      title: 'Rishikesh White Water Rafting — Shivpuri to Rishikesh on the Ganga',
      description:
        'Raft the Ganga from Shivpuri to Rishikesh with Pravaah: grade II–III rapids, certified guides, safety kayakers and an optional riverside camp.'
    }
  },

  {
    slug: 'jim-corbett-safari',
    section: 'experiences',
    category: 'safari',
    title: 'Jim Corbett Safari',
    location: 'Jim Corbett National Park, Ramnagar',
    destinationSlug: 'uttarakhand',
    tagline: 'Tiger country at the foot of the Himalaya',
    description:
      'Jeep safaris into India’s oldest national park — sal forest, grassland and the Ramganga river, with tigers, elephants and more than 600 kinds of bird.',
    overview: [
      'Corbett is India’s oldest national park, set up in 1936 in the foothills where the plains meet the Kumaon hills. Sal forest, open grassland called chaurs and the wide bed of the Ramganga river make it one of the best places in the country to see wild elephants, and one of the strongholds of the Bengal tiger.',
      'The park is split into zones — Bijrani, Jhirna, Dhela, Durgadevi, Garjia and Dhikala, the grassland heart of the park — and each runs its own morning and afternoon safaris. We book the permits as soon as they open, choose the zones for the season, and pair the safaris with a stay near Ramnagar so the early starts are easy.'
    ],
    image: 'photo-1561731216-c3a4d99437d5',
    gallery: [
      'photo-1549366021-9f761d450615',
      'photo-1516426122078-c23e76319801',
      'photo-1441974231531-c6227db76b6e',
      'photo-1447752875215-b2761acb3c5d'
    ],
    facts: [
      { label: 'Duration', value: '2 days, 1 night or longer' },
      { label: 'Level', value: 'Easy' },
      { label: 'Starts from', value: 'Ramnagar' },
      { label: 'Season', value: 'Nov – Jun' }
    ],
    highlights: [
      'Morning and afternoon jeep safaris with a naturalist',
      'Zones chosen for the season — Bijrani, Jhirna, Dhela or Dhikala',
      'Wild elephants, deer, crocodiles on the Ramganga and, with luck, a tiger',
      'Over 600 bird species, from hornbills to fishing eagles',
      'Safari permits booked the day they open'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive in Ramnagar, afternoon safari',
        description:
          'Check in near the park, then an afternoon jeep safari into your first zone as the animals come out to the water.',
        stay: 'Near Ramnagar',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Morning safari',
        description:
          'Out at the gate before sunrise for the best light and the most activity. Back for a late breakfast before you head home, or stay on for more drives.',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Safari permits for the chosen zones',
      'Private jeep with driver and park-registered naturalist',
      'A stay near Ramnagar, if you choose the overnight plan',
      'Help choosing the zones for the season'
    ],
    goodToKnow: [
      'Permits are limited and open in advance — the sooner you book, the better the choice of zones.',
      'Dhikala is open roughly mid-November to mid-June; Jhirna and Dhela are open all year.',
      'Tiger sightings are never guaranteed. The forest is worth it either way.',
      'Wear muted colours, carry a warm layer for winter mornings and keep voices low in the park.',
      'Combine it with a stay at Hriday Bhoomi or Ekaant, near the park.'
    ],
    bestTime: 'November to June; March to May for the best tiger sightings',
    featured: true,
    seo: {
      title: 'Jim Corbett Safari — Jeep Safaris in Bijrani, Jhirna & Dhikala',
      description:
        'Plan a Jim Corbett safari with Pravaah: jeep safaris with a naturalist, permits for Bijrani, Jhirna, Dhela and Dhikala, and stays near Ramnagar.'
    }
  },

  {
    slug: 'jaisalmer-desert-safari-camping',
    section: 'experiences',
    category: 'safari',
    title: 'Jaisalmer Desert Safari with Camping',
    location: 'Thar desert, Jaisalmer',
    destinationSlug: 'rajasthan',
    tagline: 'Camels, dunes and a night under the desert sky',
    description:
      'A camel safari into the Thar from Jaisalmer, sunset on the dunes, folk music by the fire and a night at a desert camp.',
    overview: [
      'Jaisalmer rises out of the Thar desert like a sandcastle — a living fort of golden sandstone, with havelis carved as finely as lace. Beyond it, the desert opens out into scrub, villages and the rolling dunes around Sam and Khuri.',
      'We pair a day in the golden city with a night in the desert: a camel ride out to the dunes for sunset, Rajasthani folk music and dinner around the fire, and a camp far enough from the crowds that the stars come out properly. You wake to the desert at dawn before heading back to Jaisalmer.'
    ],
    image: 'photo-1452022582947-b521d8779ab6',
    gallery: [
      'photo-1473580044384-7ba9967e16a0',
      'photo-1542401886-65d6c61db217',
      'photo-1517824806704-9040b037703b',
      'photo-1599661046289-e31897846e41'
    ],
    facts: [
      { label: 'Duration', value: '3 days, 2 nights ex Jaisalmer' },
      { label: 'Level', value: 'Easy' },
      { label: 'Starts from', value: 'Jaisalmer' },
      { label: 'Season', value: 'Oct – Mar' }
    ],
    highlights: [
      'Camel safari to the dunes for sunset',
      'A night at a desert camp with folk music and a bonfire',
      'Stargazing far from city lights',
      'Jaisalmer Fort, Patwon ki Haveli and Gadisar lake',
      'The abandoned village of Kuldhara on the way to the dunes'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Jaisalmer — the golden city',
        description:
          'Arrive and explore the living fort, the Jain temples and the carved havelis of Patwon ki Haveli, then sunset at Gadisar lake.',
        stay: 'Jaisalmer',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Into the desert',
        description:
          'Drive out past Kuldhara to the dunes, then a camel safari for sunset. Folk music, dinner by the fire and a night at the desert camp.',
        stay: 'Desert camp',
        meals: 'Breakfast, dinner'
      },
      {
        day: 3,
        title: 'Desert sunrise and back',
        description: 'Sunrise over the dunes and breakfast at camp before the drive back to Jaisalmer.',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'A night in Jaisalmer and a night at the desert camp',
      'Camel safari on the dunes',
      'Folk music and bonfire evening at camp',
      'Private vehicle for sightseeing and desert transfers',
      'Breakfast and dinner daily'
    ],
    goodToKnow: [
      'Desert nights are cold from November to February — bring a warm layer.',
      'Days are hot well into October and from March on. Plan outdoor time for mornings and evenings.',
      'Camps range from simple tents to luxury Swiss tents — we match the camp to your trip.',
      'Jaisalmer is a long way from anywhere: fly in, or take the overnight train from Delhi or Jaipur.'
    ],
    bestTime: 'October to March',
    seo: {
      title: 'Jaisalmer Desert Safari with Camping — Camel Safari & Desert Camp',
      description:
        'Jaisalmer desert safari with Pravaah: a camel ride to the dunes at sunset, a night at a desert camp with folk music, and the golden fort of Jaisalmer.'
    }
  },

  {
    slug: 'paragliding-naukuchiatal',
    section: 'experiences',
    category: 'paragliding',
    title: 'Paragliding at Naukuchiatal',
    location: 'Naukuchiatal, Nainital district',
    destinationSlug: 'uttarakhand',
    tagline: 'Fly over the lake of nine corners',
    description:
      'A tandem paragliding flight above Naukuchiatal with a certified pilot — forest ridges, the lake below and the Kumaon hills all around.',
    overview: [
      'Naukuchiatal, the lake of nine corners, sits a few kilometres beyond Bhimtal in the Kumaon lake country. It is quieter and greener than Nainital, and the ridge above it is one of the best places in Uttarakhand for a first paragliding flight.',
      'You fly tandem with a certified pilot, so there is nothing to learn beforehand — just a short briefing at the take-off point, a few running steps and then the lake, the forest and the hills opening out below you. Flights last roughly 10 to 20 minutes depending on the wind, and land close to the lake shore.'
    ],
    image: 'photo-1601024445121-e5b82f020549',
    gallery: [
      'photo-1610715936287-6c2ad208cdbf',
      'photo-1506905925346-21bda4d32df4',
      'photo-1464822759023-fed622ff2c3b',
      'photo-1596394516093-501ba68a0ba6'
    ],
    facts: [
      { label: 'Duration', value: 'Half day — 10 to 20 minutes in the air' },
      { label: 'Level', value: 'Easy — no experience needed' },
      { label: 'Starts from', value: 'Naukuchiatal' },
      { label: 'Season', value: 'Oct – Jun' }
    ],
    highlights: [
      'A tandem flight with a certified pilot',
      'Views over Naukuchiatal, Bhimtal and the forested ridges',
      'No experience needed — a short briefing is all it takes',
      'Optional GoPro video of your flight',
      'Easy to combine with a lake-country stay'
    ],
    inclusions: [
      'Tandem paragliding flight with a certified pilot',
      'Harness, helmet and safety equipment',
      'Transfer from Naukuchiatal to the take-off point',
      'Flight video, on request'
    ],
    goodToKnow: [
      'Flights depend entirely on the wind and weather — your pilot decides when it is safe to fly.',
      'Mornings usually have the steadiest conditions. We build in some flexibility on the day.',
      'There is a weight limit for tandem flights, usually around 100 kg — we confirm it when you book.',
      'Paragliding pauses during the monsoon, roughly July to September.',
      'Stay at Har Shikhar in Bhimtal or by the lakes in Nainital to make a weekend of it.'
    ],
    bestTime: 'October to June',
    seo: {
      title: 'Paragliding at Naukuchiatal — Tandem Flights near Bhimtal & Nainital',
      description:
        'Go paragliding at Naukuchiatal with Pravaah: a tandem flight with a certified pilot over the lake of nine corners in the Kumaon hills.'
    }
  },

  {
    slug: 'char-dham-yatra-uttarakhand',
    section: 'experiences',
    category: 'culture-heritage',
    title: 'Char Dham Yatra, Uttarakhand',
    location: 'Garhwal Himalaya',
    destinationSlug: 'uttarakhand',
    tagline: 'Four shrines, one journey',
    description:
      'Yamunotri, Gangotri, Kedarnath and Badrinath — the great Himalayan pilgrimage, planned at a pace that leaves room for the journey.',
    overview: [
      'The Char Dham are the four shrines at the sources of the Himalayan rivers: Yamunotri, Gangotri, Kedarnath and Badrinath. For many families it is the journey of a lifetime, and it deserves to be planned like one.',
      'We take care of the parts that make it hard — registrations, realistic driving days, the right stays near each shrine, ponies or palkis where needed, and helicopter options for Kedarnath if you want them. You focus on the darshan, the rivers and the mountains around you.'
    ],
    image: 'photo-1759262988017-199c93bacb6d',
    gallery: [
      'photo-1729915190998-bf7fdfea8bef',
      'photo-1630307357687-8222c5ac88dd',
      'photo-1735817984411-af719b6836c0',
      'photo-1687511741630-18fe16e8ed7e'
    ],
    facts: [
      { label: 'Duration', value: '10 – 11 days ex Haridwar' },
      { label: 'Level', value: 'Moderate — two walks' },
      { label: 'Starts from', value: 'Haridwar or Rishikesh' },
      { label: 'Season', value: 'May – June, Sep – Oct' }
    ],
    highlights: [
      'Darshan at all four shrines in the traditional order',
      'The walk (or pony ride) to Kedarnath, with helicopter options',
      'Mana, the last village before the Tibetan border, near Badrinath',
      'Devprayag, where the Alaknanda and Bhagirathi meet to become the Ganga, on the way home',
      'Registrations, stays and drivers handled end to end'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Haridwar to Barkot',
        description: 'An early start into the hills, via Mussoorie, to the base for Yamunotri.',
        stay: 'Barkot',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Yamunotri',
        description: 'Drive to Janki Chatti and walk or ride up to Yamunotri temple, then return to Barkot.',
        stay: 'Barkot',
        meals: 'Breakfast, dinner'
      },
      {
        day: 3,
        title: 'Barkot to Uttarkashi',
        description: 'A gentler day along the rivers, with the Kashi Vishwanath temple in Uttarkashi in the evening.',
        stay: 'Uttarkashi',
        meals: 'Breakfast, dinner'
      },
      {
        day: 4,
        title: 'Gangotri',
        description: 'Up the Bhagirathi valley through Harsil to Gangotri for darshan, then back to Uttarkashi.',
        stay: 'Uttarkashi',
        meals: 'Breakfast, dinner'
      },
      {
        day: 5,
        title: 'Uttarkashi to Guptkashi',
        description: 'A long mountain drive across to the Mandakini valley.',
        stay: 'Guptkashi or Sitapur',
        meals: 'Breakfast, dinner'
      },
      {
        day: 6,
        title: 'Up to Kedarnath',
        description: 'Walk or ride up from Gaurikund, or fly in from the Phata, Sersi or Guptkashi helipads. Evening aarti at the temple.',
        stay: 'Kedarnath',
        meals: 'Breakfast, dinner'
      },
      {
        day: 7,
        title: 'Kedarnath darshan and descent',
        description: 'Early morning darshan, then down to Gaurikund and on to Guptkashi.',
        stay: 'Guptkashi or Sitapur',
        meals: 'Breakfast, dinner'
      },
      {
        day: 8,
        title: 'Guptkashi to Badrinath',
        description: 'Along the Alaknanda valley via Joshimath to Badrinath.',
        stay: 'Badrinath',
        meals: 'Breakfast, dinner'
      },
      {
        day: 9,
        title: 'Badrinath and Mana',
        description: 'Morning darshan and Tapt Kund, a visit to Mana village, then drive down towards Rudraprayag.',
        stay: 'Rudraprayag or Srinagar',
        meals: 'Breakfast, dinner'
      },
      {
        day: 10,
        title: 'Back to Rishikesh or Haridwar',
        description: 'Via Devprayag, where the Alaknanda and Bhagirathi meet to become the Ganga.',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Private vehicle with an experienced hill driver',
      'Hotel stays near each shrine',
      'Breakfast and dinner daily',
      'Yatra registration assistance',
      'Pony, palki or helicopter bookings on request'
    ],
    goodToKnow: [
      'Registration for the yatra is mandatory. Share ID details for every traveller when you book.',
      'Opening and closing dates are announced each year — the shrines usually open in late April or early May and close around Diwali, with Badrinath closing a few weeks later in November.',
      'Kedarnath is a long walk at altitude. A medical check-up is sensible for older travellers.',
      'We avoid the peak weeks where we can and keep a buffer day for weather.'
    ],
    bestTime: 'May to June and September to October',
    featured: true,
    seo: {
      title: 'Char Dham Yatra Uttarakhand — Yamunotri, Gangotri, Kedarnath & Badrinath',
      description:
        'A well-paced Char Dham yatra with Pravaah: all four shrines, private vehicle, stays near each temple, registration help and Kedarnath helicopter options.'
    }
  },

  {
    slug: 'adi-kailash-yatra',
    section: 'experiences',
    category: 'culture-heritage',
    title: 'Adi Kailash Yatra',
    location: 'Vyas valley, Pithoragarh district',
    destinationSlug: 'uttarakhand',
    tagline: 'Om Parvat and Adi Kailash, on the old Kailash route',
    description:
      'A pilgrimage up the Kali valley to Gunji, Om Parvat and Jolingkong, at the foot of Adi Kailash — with the permits, stays and acclimatisation taken care of.',
    overview: [
      'Adi Kailash, also called Chhota Kailash, rises above the Vyas valley in the far east of Kumaon, close to the borders with Tibet and Nepal. Revered as an abode of Shiva, it sits on the old route pilgrims took to Mount Kailash, and Om Parvat nearby carries the shape of "Om" in snow on its face.',
      'The new road now reaches Jolingkong, below Parvati Sarovar and the Adi Kailash peak, so the yatra no longer needs days of walking. We plan it carefully all the same: Inner Line Permits and medical checks in Dharchula, nights in Gunji to acclimatise, early starts for the clearest views of Om Parvat and Adi Kailash, and a stop at Kalapani and the Vyas villages on the way.'
    ],
    image: 'photo-1605649487212-47bdab064df7',
    gallery: [
      'photo-1668005163654-0f8b38a75030',
      'photo-1519681393784-d120267933ba',
      'photo-1683700912945-1cc17effa0bb',
      'photo-1668005151025-1f3f7eeb8131'
    ],
    facts: [
      { label: 'Duration', value: '8 days, 7 nights ex Haldwani' },
      { label: 'Level', value: 'Moderate — high altitude' },
      { label: 'Starts from', value: 'Haldwani or Kathgodam' },
      { label: 'Season', value: 'May – Jun, Sep – Oct' }
    ],
    highlights: [
      'Darshan of Adi Kailash and Parvati Sarovar from Jolingkong',
      'Om Parvat from Nabhidhang, with the Kali river below',
      'Kalapani temple, the source of the Kali',
      'The Vyas valley villages of Gunji, Kuti and Nabi',
      'Inner Line Permits and medical checks arranged in Dharchula'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Haldwani to Dharchula',
        description:
          'A long, scenic drive through Almora and Pithoragarh to Dharchula on the Kali river, the border town where the yatra begins.',
        stay: 'Dharchula',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Permits in Dharchula',
        description:
          'Medical check-up and Inner Line Permit formalities at the SDM office, then an easy afternoon walking the market and the bridge to Nepal.',
        stay: 'Dharchula',
        meals: 'Breakfast, dinner'
      },
      {
        day: 3,
        title: 'Dharchula to Gunji',
        description:
          'By 4×4 up the Kali valley past Tawaghat, Lakhanpur and Budhi to Gunji, the meeting point of the Kuti and Kali valleys.',
        stay: 'Homestay, Gunji',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 4,
        title: 'Om Parvat',
        description:
          'An early start to Kalapani and on to Nabhidhang for Om Parvat in the morning light, then back to Gunji to acclimatise.',
        stay: 'Homestay, Gunji',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 5,
        title: 'Adi Kailash and Parvati Sarovar',
        description:
          'Through Kuti village to Jolingkong for darshan of Adi Kailash and Parvati Sarovar, with time at the Shiva temple before returning to Gunji.',
        stay: 'Homestay, Gunji',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 6,
        title: 'Gunji to Dharchula',
        description: 'Back down the Kali valley to Dharchula for a hot shower and a well-earned rest.',
        stay: 'Dharchula',
        meals: 'Breakfast, dinner'
      },
      {
        day: 7,
        title: 'Dharchula to Pithoragarh or Almora',
        description: 'Break the long drive home with a night in the hills on the way.',
        stay: 'Pithoragarh or Almora',
        meals: 'Breakfast, dinner'
      },
      {
        day: 8,
        title: 'Return to Haldwani',
        description: 'The final drive down to Haldwani, where the yatra ends.',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Inner Line Permit and medical check assistance in Dharchula',
      'Private vehicle from Haldwani and back, and 4×4 beyond Dharchula',
      'Hotels in Dharchula and on the return, homestays in Gunji',
      'All meals in the Vyas valley',
      'A local coordinator throughout the yatra',
      'First-aid kit and oxygen cylinder'
    ],
    goodToKnow: [
      'The route reaches over 4,500 m at Jolingkong. Acclimatisation days in Gunji are built in, and are not optional.',
      'Indian citizens need an Inner Line Permit and a medical certificate — share ID documents and health details early.',
      'The yatra is not open to foreign nationals.',
      'Landslides on the Kali valley road can cause delays — keep a buffer day if you can.',
      'Stays in Gunji are simple homestays. Nights are cold even in summer.'
    ],
    bestTime: 'May to June and September to October',
    seo: {
      title: 'Adi Kailash Yatra — Om Parvat, Jolingkong & Parvati Sarovar',
      description:
        'Plan the Adi Kailash yatra with Pravaah: an 8-day journey from Haldwani via Dharchula and Gunji to Om Parvat, Adi Kailash and Parvati Sarovar, with permits arranged.'
    }
  }
]

/**
 * Offbeat Experiences — hidden for now. Nothing reads this list, so these pages
 * are not built; move the entries back into `experiences` to show them again.
 */
export const hiddenOffbeatExperiences: Listing[] = [
  {
    slug: 'darma-valley',
    section: 'experiences',
    category: 'offbeat',
    title: 'Darma Valley',
    location: 'Dharchula, Pithoragarh district',
    destinationSlug: 'uttarakhand',
    tagline: 'Villages beneath Panchachuli',
    description:
      'Stone villages, the Dhauliganga river and the east face of Panchachuli — a village-stay journey into one of Kumaon\'s border valleys.',
    overview: [
      'The Darma valley runs north from Dharchula towards the Tibetan border, following the Dhauliganga river past a string of stone-and-timber villages. It is home to the Rung community, who have lived and traded here for centuries, moving up in summer and down in winter.',
      'This journey is about the villages and the people. We stay in homestays in Dugtu and Dantu, walk up towards the Panchachuli glaciers, share meals with our hosts and learn a little about a way of life that is changing fast. It is remote, simple and unforgettable.'
    ],
    image: 'photo-1668005143681-f1283afaa6b1',
    gallery: [
      'photo-1668005163654-0f8b38a75030',
      'photo-1668005151025-1f3f7eeb8131',
      'photo-1668005146935-2ee772a652f7',
      'photo-1668005183835-d902fde910e1'
    ],
    facts: [
      { label: 'Duration', value: '6 – 7 days ex Dharchula' },
      { label: 'Level', value: 'Easy to moderate' },
      { label: 'Starts from', value: 'Dharchula' },
      { label: 'Season', value: 'May – June, Sep – Oct' }
    ],
    highlights: [
      'Homestays in the Rung villages of Dugtu and Dantu',
      'A walk towards the Panchachuli glaciers',
      'The Dhauliganga valley and its high meadows',
      'Local food, stories and traditions with your hosts',
      'Inner Line Permits arranged'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Dharchula',
        description: 'Arrive on the Kali river, complete permit formalities and meet your guide.',
        stay: 'Dharchula',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Into the Darma valley',
        description: 'Drive up the Dhauliganga valley to Dugtu and settle into a village homestay.',
        stay: 'Homestay, Dugtu',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 3,
        title: 'Village life',
        description: 'Walk between Dugtu and Dantu with your host, and learn about Rung traditions.',
        stay: 'Homestay, Dugtu or Dantu',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 4,
        title: 'Towards Panchachuli',
        description: 'A day walk up towards the Panchachuli glaciers and back.',
        stay: 'Homestay',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 5,
        title: 'Up the valley',
        description: 'Explore further villages along the Dhauliganga as conditions allow.',
        stay: 'Homestay',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 6,
        title: 'Back to Dharchula',
        description: 'Drive down the valley for a last evening by the Kali river.',
        stay: 'Dharchula',
        meals: 'Breakfast, dinner'
      }
    ],
    inclusions: [
      'Village homestays and a hotel in Dharchula',
      'All meals in the valley',
      'Local guide',
      'Inner Line Permit assistance',
      'Local transfers in suitable vehicles'
    ],
    goodToKnow: [
      'Darma is a border area: ITBP checkposts register every visitor, and we arrange any permit needed from the SDM office in Dharchula — share ID documents early.',
      'Homestays are simple — shared bathrooms and bucket hot water are common.',
      'There is little or no mobile network in the upper valley.',
      'Roads here are affected by landslides. We keep buffer time in the plan.'
    ],
    bestTime: 'May to June and September to October',
    seo: {
      title: 'Darma Valley — Offbeat Village Journey in Kumaon, Uttarakhand',
      description:
        'An offbeat Darma valley experience with Pravaah: Rung village homestays in Dugtu and Dantu, the Dhauliganga and walks towards the Panchachuli glaciers.'
    }
  },

  {
    slug: 'johar-valley',
    section: 'experiences',
    category: 'offbeat',
    title: 'Johar Valley',
    location: 'Munsiyari, Pithoragarh district',
    destinationSlug: 'uttarakhand',
    tagline: 'The old salt road to Tibet',
    description:
      'Follow the Gori Ganga into the Johar valley — the old trade route to Tibet, with abandoned stone villages and glaciers at its head.',
    overview: [
      'For centuries the Johar valley was a highway. Johari traders walked their goats and yaks up the Gori Ganga gorge from Munsiyari to the high villages of Martoli and Milam, and over the passes into Tibet to trade salt, wool and grain.',
      'That trade ended in 1962, and many of the high villages now stand empty for most of the year. This journey follows the old route with local guides whose families come from the valley: gorges and waterfalls, deserted stone villages full of stories, and the Milam glacier at the top.'
    ],
    image: 'photo-1683700914015-92be0e442390',
    gallery: [
      'photo-1683700915164-65ab1f89dd1a',
      'photo-1608942025318-1191eeade556',
      'photo-1683700912111-7f5b392d54d4',
      'photo-1621269759351-0f3f95239966'
    ],
    facts: [
      { label: 'Duration', value: '7 – 9 days ex Munsiyari' },
      { label: 'Level', value: 'Moderate' },
      { label: 'Starts from', value: 'Munsiyari' },
      { label: 'Season', value: 'June, Sep – Oct' }
    ],
    highlights: [
      'The old Indo-Tibetan trade route along the Gori Ganga',
      'The stone villages of Martoli and Milam',
      'The Milam glacier at the head of the valley',
      'Guides from Johari families, with the stories to match',
      'The Munsiyari tribal heritage museum before you set off'
    ],
    inclusions: [
      'Local guide from the valley',
      'Camps and homestays along the route',
      'All meals in the valley',
      'Inner Line Permit assistance',
      'Porter or mule support for luggage'
    ],
    goodToKnow: [
      'Johar is a border area with ITBP checkposts — carry government photo ID. Permit rules change often, so we confirm the current requirements before you travel.',
      'Road construction is changing how far you can drive each season — we plan with the latest conditions.',
      'Expect long walking days and simple camps in the upper valley.',
      'A detailed day-by-day plan is shared once we know your dates and fitness.'
    ],
    bestTime: 'June and September to October',
    seo: {
      title: 'Johar Valley — Offbeat Journey to Milam from Munsiyari',
      description:
        'Travel the old trade route of the Johar valley with Pravaah: Martoli and Milam villages, the Gori Ganga gorge and the Milam glacier.'
    }
  },

  {
    slug: 'niti-valley',
    section: 'experiences',
    category: 'offbeat',
    title: 'Niti Valley',
    location: 'Joshimath, Chamoli district',
    destinationSlug: 'uttarakhand',
    tagline: 'The last villages before Tibet',
    description:
      'A high, dry valley beyond Joshimath with Bhotia villages, the Dhauliganga, and the cave shrine of Timmersain Mahadev.',
    overview: [
      'Beyond Joshimath, the road follows the Dhauliganga river into the Niti valley, climbing from pine forest into a stark, high landscape that feels closer to Ladakh than to the rest of Garhwal. Niti, the last village, sits just short of the Tibetan border.',
      'The valley is home to the Bhotia communities of Malari, Gamshali and Niti, who still migrate with the seasons. We stay with local families, walk to the cave shrine of Timmersain Mahadev, where an ice lingam forms in winter and early spring, and spend time in villages that very few travellers ever see.'
    ],
    image: 'photo-1579095220823-a2833d440ee1',
    gallery: [
      'photo-1713446016389-ebafd8870601',
      'photo-1607271308378-7ea0b9a84da6',
      'photo-1707307471824-cc78806de52e',
      'photo-1626401313580-122d6c192c82'
    ],
    facts: [
      { label: 'Duration', value: '5 – 6 days ex Joshimath' },
      { label: 'Level', value: 'Easy to moderate' },
      { label: 'Starts from', value: 'Joshimath' },
      { label: 'Season', value: 'May – October' }
    ],
    highlights: [
      'The stark, high landscape of the upper Dhauliganga',
      'Homestays in the Bhotia villages of the valley',
      'The walk to the Timmersain Mahadev cave shrine (the ice lingam is usually seen only until May)',
      'Malari and its traditional stone houses',
      'Inner Line Permits arranged'
    ],
    inclusions: [
      'Homestays and guesthouses in the valley',
      'All meals in the valley',
      'Local guide',
      'Inner Line Permit assistance',
      'Transfers from Joshimath'
    ],
    goodToKnow: [
      'Niti is an inner-line area close to the border. Permits and ID checks are part of the trip.',
      'The villages are largely empty in winter, when families move down the valley.',
      'Altitude is significant in the upper valley. We build in time to adjust.',
      'A detailed day-by-day plan is shared once we know your dates.'
    ],
    bestTime: 'May to October',
    seo: {
      title: 'Niti Valley — Offbeat Journey beyond Joshimath, Uttarakhand',
      description:
        'Explore the Niti valley with Pravaah: Bhotia village homestays in Malari and Niti, the Dhauliganga, and the cave shrine of Timmersain Mahadev.'
    }
  }
]
