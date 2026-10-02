import type { Listing } from '~/types'

/**
 * Expeditions — longer, fully supported journeys on foot, by 4x4 or along a river.
 * Day-by-day plans are indicative; the team confirms routes against season and conditions.
 */
export const expeditions: Listing[] = [
  {
    slug: 'bankatiya-base-camp-trek',
    section: 'expeditions',
    category: 'treks',
    title: 'Bankatiya Base Camp Trek',
    location: 'Johar valley, beyond Munsiyari',
    destinationSlug: 'uttarakhand',
    tagline: 'A short, rewarding trek into the remote Johar valley',
    description:
      'Four days from Haldwani to Bankatiya base camp — a 4×4 drive deep into the Johar valley, a night at Laspa and a full-day trek to base camp.',
    overview: [
      'Journey deep into the remote Johar Valley on a short yet rewarding Himalayan adventure to Bankatiya Base Camp. From the winding mountain roads of Kumaon to the remote village of Laspa, this experience combines scenic drives, high-altitude landscapes and an unforgettable day trek.',
      'Munsiyari, the gateway to the Johar Valley, is your base at both ends of the journey. From there a rugged 4×4 drive takes you to the campsite at Laspa, and the next morning you set out on foot for Bankatiya Base Camp before heading back down the valley the same day.'
    ],
    image: 'photo-1768383565166-0c17033a91df',
    gallery: [
      'photo-1683700914015-92be0e442390',
      'photo-1653732109859-cb688124de55',
      'photo-1608942025318-1191eeade556',
      'photo-1683700912945-1cc17effa0bb'
    ],
    facts: [
      { label: 'Duration', value: '4 days, 3 nights ex Haldwani' },
      { label: 'Difficulty', value: 'Moderate' },
      { label: 'Start point', value: 'Haldwani' },
      { label: 'Season', value: 'May – June, Sep – Oct' }
    ],
    highlights: [
      'A full-day trek from Laspa to Bankatiya Base Camp',
      'A rugged 4×4 drive deep into the remote Johar Valley',
      'A night at the campsite in Laspa village',
      'Scenic drives through the Kumaon Himalaya to Munsiyari',
      'Small groups, or private departures on request'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Haldwani to Munsiyari',
        description:
          'Begin your journey from Haldwani with a scenic drive through the Kumaon Himalayas. Arrive in Munsiyari, the gateway to the Johar Valley, and settle in for the evening.',
        stay: 'Munsiyari'
      },
      {
        day: 2,
        title: 'Munsiyari to Laspa',
        description:
          'After breakfast, embark on a rugged 4×4 drive towards Laspa Village, deep in the Johar Valley. Enjoy dramatic mountain scenery and the raw beauty of this remote Himalayan region before settling into the campsite.',
        stay: 'Laspa Campsite'
      },
      {
        day: 3,
        title: 'Laspa to Bankatiya Base Camp & Munsiyari',
        description:
          'Rise early for the highlight of the journey — a full-day trek from Laspa to Bankatiya Base Camp. Trek through pristine Himalayan terrain and soak in the spectacular mountain landscapes before descending back to Laspa. From here, drive back to Munsiyari by 4×4.',
        stay: 'Munsiyari'
      },
      {
        day: 4,
        title: 'Munsiyari to Haldwani',
        description:
          'After breakfast, begin the scenic drive back to Haldwani, bringing your Bankatiya Base Camp adventure to an end. Trip ends in Haldwani.'
      }
    ],
    inclusions: [
      'Trek guide and local support staff',
      'Road transfers from Haldwani to Munsiyari and back',
      '4×4 transfers between Munsiyari and Laspa',
      'Two nights in Munsiyari and a night at the Laspa campsite',
      'Permits and forest fees',
      'First-aid kit'
    ],
    goodToKnow: [
      'Day 3 is a long day — a full-day trek to base camp and back, followed by the drive to Munsiyari.',
      'Start training a few weeks ahead — stairs, long walks and cardio.',
      'Weather and trail conditions decide the final route. Your guide has the last word on safety.',
      'Exact timings and stays are confirmed in your pre-departure pack.'
    ],
    bestTime: 'May to June and September to October',
    seo: {
      title: 'Bankatiya Base Camp Trek — 4-Day Johar Valley Trek from Haldwani',
      description:
        'Trek to Bankatiya base camp in the Johar valley with Pravaah: a 4-day journey from Haldwani via Munsiyari, a 4×4 drive to Laspa and a full-day base camp trek.'
    }
  },

  {
    slug: 'panchachuli-base-camp-trek',
    section: 'expeditions',
    category: 'treks',
    title: 'Panchachuli Base Camp Trek',
    location: 'Darma valley, Pithoragarh district',
    destinationSlug: 'uttarakhand',
    tagline: 'To the foot of the five peaks',
    description:
      'Five days from Haldwani into the Darma valley — village homestays in Dantu and a day on foot to Panchachuli Base Camp and Zero Point.',
    overview: [
      'Venture deep into the remote Darma Valley on an unforgettable Himalayan adventure to the spectacular Panchachuli Base Camp. From the Indo-Nepal border town of Dharchula to traditional mountain villages and the magnificent Panchachuli peaks, this journey combines adventure, culture and breathtaking Himalayan landscapes.',
      'Most people see the five summits of Panchachuli from Munsiyari, across the valley. This journey takes you round to the other side, up the Darma valley by 4×4, to a homestay in Dantu village with the peaks in full view — and from there on foot to the base camp and Zero Point.'
    ],
    image: 'photo-1668005172181-9367f851109e',
    gallery: [
      'photo-1668005157353-c0790383ef7b',
      'photo-1668005118547-fe338e94e731',
      'photo-1668005146935-2ee772a652f7',
      'photo-1608497582272-627e105265ab'
    ],
    facts: [
      { label: 'Duration', value: '5 days, 4 nights ex Haldwani' },
      { label: 'Difficulty', value: 'Moderate' },
      { label: 'Start point', value: 'Haldwani' },
      { label: 'Season', value: 'May – June, Sep – Oct' }
    ],
    highlights: [
      'A day on foot to Panchachuli Base Camp and Zero Point',
      'Views of the Panchachuli peaks from your homestay in Dantu',
      'A scenic 4×4 drive into the remote Darma Valley',
      'Dugtu village and the mountain cafés of Dantu',
      'Evenings across the border in Nepal from Dharchula',
      'Inner Line Permits and full support arranged'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Haldwani to Dharchula',
        description:
          'Begin your journey from Haldwani and drive towards Dharchula, a picturesque border town nestled along the Kali River. In the evening, take a leisurely walk across the border to Nepal, explore the vibrant surroundings and experience the unique charm of this Himalayan frontier town.',
        stay: 'Dharchula'
      },
      {
        day: 2,
        title: 'Dharchula to Dantu Village',
        description:
          'After breakfast, embark on a scenic 4×4 drive into the remote Darma Valley towards Dantu Village. Check in to your comfortable homestay, with spectacular views of the Panchachuli peaks right from the village. Spend the evening on a gentle acclimatisation walk, exploring the beautiful surroundings.',
        stay: 'Dantu Village Homestay'
      },
      {
        day: 3,
        title: 'Panchachuli Base Camp & Zero Point | Dantu & Dugtu',
        description:
          'Rise early and set out for the Panchachuli Base Camp and Zero Point. Trek through the stunning landscapes of the Darma Valley, surrounded by dramatic Himalayan scenery and magnificent mountain peaks. Return to Dantu for lunch and spend the evening exploring the local mountain cafés. Later, visit Dugtu Village and experience the traditional charm and peaceful atmosphere of the valley.',
        stay: 'Dantu Village Homestay'
      },
      {
        day: 4,
        title: 'Dantu to Dharchula | Nepal Shopping',
        description:
          'After breakfast, bid farewell to the mountains of Darma Valley and drive back to Dharchula. Spend the evening exploring the local markets and enjoy some shopping across the border in Nepal.',
        stay: 'Dharchula'
      },
      {
        day: 5,
        title: 'Dharchula to Haldwani',
        description:
          'After breakfast, begin your scenic return journey from Dharchula to Haldwani, bringing your Panchachuli adventure to an end. Trip ends in Haldwani.'
      }
    ],
    inclusions: [
      'Trek guide and local support staff',
      'Road transfers from Haldwani to Dharchula and back',
      '4×4 transfers between Dharchula and Dantu',
      'Two nights in Dharchula and two nights in a Dantu village homestay',
      'Inner Line Permit assistance',
      'First-aid kit'
    ],
    goodToKnow: [
      'Darma is a border area: ITBP checkposts register every visitor, and we arrange any permit needed from the SDM office in Dharchula — share ID documents early.',
      'Roads into the valley are prone to landslides — keep a spare day at the end of your trip if you can.',
      'Homestays in Dantu are simple and warm.',
      'Exact timings and stays are confirmed in your pre-departure briefing.'
    ],
    bestTime: 'May to June and September to October',
    featured: true,
    seo: {
      title: 'Panchachuli Base Camp Trek — 5-Day Darma Valley Trek from Haldwani',
      description:
        'Trek to Panchachuli base camp and Zero Point with Pravaah: a 5-day journey from Haldwani via Dharchula, village homestays in Dantu and a visit to Dugtu.'
    }
  },

  {
    slug: 'khaliya-top-trek',
    section: 'expeditions',
    category: 'treks',
    title: 'Khaliya Top Trek',
    location: 'Munsiyari, Pithoragarh district',
    destinationSlug: 'uttarakhand',
    tagline: 'The best view in Kumaon, and a night under the stars',
    description:
      'Four days from Haldwani to Khaliya Top above Munsiyari — a trek through forest to base camp, a night under the stars and sunrise at Zero Point.',
    overview: [
      'Experience the spectacular landscapes of Kumaon on an adventure to Khaliya Top, one of Munsiyari’s most scenic high-altitude destinations. This journey combines a scenic Himalayan drive, an immersive mountain trek, a night under the stars and the cultural charm of Munsiyari.',
      'Khaliya Top is a high alpine meadow above Munsiyari, at roughly 3,500 m, and one of the finest viewpoints in the Kumaon Himalaya. From the top, Panchachuli, Rajrambha, Nanda Devi and a long line of snow peaks spread out across the horizon.'
    ],
    image: 'photo-1786339881390-96fba8883ff6',
    gallery: [
      'photo-1788004263255-9fc137e0cc41',
      'photo-1683700914859-27447d1b9b66',
      'photo-1683700912111-7f5b392d54d4',
      'photo-1683700912945-1cc17effa0bb'
    ],
    facts: [
      { label: 'Duration', value: '4 days, 3 nights ex Haldwani' },
      { label: 'Difficulty', value: 'Easy to moderate' },
      { label: 'Start point', value: 'Haldwani' },
      { label: 'Season', value: 'Mar – Jun, Sep – Dec' }
    ],
    highlights: [
      'Panoramic views of Panchachuli, Rajrambha and Nanda Devi from Zero Point',
      'A night under the stars at Khaliya Top Base Camp',
      'Forest and alpine meadow trails above Munsiyari',
      'Munsiyari market and the hot springs at Madkot',
      'A perfect first Himalayan trek'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Haldwani to Munsiyari',
        description:
          'Begin your journey from Haldwani with a scenic drive through the Kumaon Himalayas. Arrive in Munsiyari, the gateway to the Johar Valley, and settle in for the evening.',
        stay: 'Munsiyari'
      },
      {
        day: 2,
        title: 'Munsiyari to Khaliya Top Base Camp',
        description:
          'After breakfast, begin the trek from Munsiyari towards Khaliya Top Base Camp. Trek through beautiful forests and alpine landscapes as the trail gradually gains altitude. Arrive at the campsite and unwind amidst spectacular Himalayan surroundings.',
        stay: 'Khaliya Top Base Camp'
      },
      {
        day: 3,
        title: 'Khaliya Top Base Camp → Zero Point → Munsiyari',
        description:
          'Wake up early and set out towards Zero Point, the high point of the Khaliya Top trail. Enjoy panoramic views of the surrounding Himalayan peaks before descending back to the campsite. After breakfast, trek back to Munsiyari. Spend the evening exploring the local market and, if time permits, visit the natural hot-water springs at Madkot.',
        stay: 'Munsiyari'
      },
      {
        day: 4,
        title: 'Munsiyari to Haldwani',
        description:
          'Rise early and begin the scenic drive back to Haldwani, bringing your Khaliya Top adventure to an end. Trip ends in Haldwani.'
      }
    ],
    inclusions: [
      'Trek guide and support staff',
      'Road transfers from Haldwani to Munsiyari and back',
      'Two nights in Munsiyari and a night at Khaliya Top Base Camp',
      'Tents, sleeping bags and mats',
      'Meals on the trek',
      'Forest entry fees'
    ],
    goodToKnow: [
      'Good for fit beginners and families with active teenagers.',
      'It is cold at the top in every season — pack a down jacket.',
      'In winter the upper trail is under snow. Microspikes are provided when needed.',
      'Combine it with a stay at Panchachuli Earth in Munsiyari.'
    ],
    bestTime: 'March to June and September to December',
    seo: {
      title: 'Khaliya Top Trek — 4-Day Himalayan Trek from Haldwani via Munsiyari',
      description:
        'Trek to Khaliya Top with Pravaah: a 4-day journey from Haldwani via Munsiyari, a night at Khaliya Top Base Camp and sunrise views of Panchachuli, Rajrambha and Nanda Devi from Zero Point.'
    }
  },

  {
    slug: 'johar-valley-expedition',
    section: 'expeditions',
    category: 'off-road',
    title: 'Johar Valley Expedition',
    location: 'Munsiyari to Milam',
    destinationSlug: 'uttarakhand',
    tagline: 'By 4x4 up the old trade road',
    description:
      'A 4x4 expedition up the Gori Ganga into the Johar valley, as far as the new road reaches, with walks to the old villages beyond.',
    overview: [
      'The road into the Johar valley is one of the newest in the Himalaya, pushed up the Gori Ganga gorge towards Milam along a route traders once walked for weeks. Driving it is an adventure in itself — cliffs, waterfalls, river crossings and constantly changing surfaces.',
      'We run this expedition in capable 4x4s with drivers who know the valley, stopping at the old Johari villages, walking where the road ends, and camping or staying in homestays along the way. It is for travellers who want to reach the high valley without trekking all the way in.'
    ],
    image: 'photo-1621269759351-0f3f95239966',
    gallery: [
      'photo-1683700916507-93d49889bacc',
      'photo-1683700914859-27447d1b9b66',
      'photo-1683700912945-1cc17effa0bb',
      'photo-1608942025318-1191eeade556'
    ],
    facts: [
      { label: 'Duration', value: '6 – 7 days ex Munsiyari' },
      { label: 'Difficulty', value: 'Moderate — rough roads' },
      { label: 'Start point', value: 'Munsiyari' },
      { label: 'Season', value: 'June, Sep – Oct' }
    ],
    highlights: [
      'A 4x4 drive up the Gori Ganga gorge',
      'The old Johari villages of Martoli and Milam',
      'Walks to the Milam glacier where the road ends',
      'Experienced mountain drivers and local guides',
      'Camps and homestays along the route'
    ],
    inclusions: [
      '4x4 vehicles with experienced drivers',
      'Local guide from the valley',
      'Camps and homestays',
      'All meals in the valley',
      'Inner Line Permit assistance'
    ],
    goodToKnow: [
      'Road conditions change every season. We confirm the plan against the latest reports.',
      'Expect long, bumpy days — not suitable for travellers with back problems.',
      'Johar is a border area with ITBP checkposts — carry government photo ID. We confirm the current permit rules before you travel.',
      'A day-by-day plan is shared once we confirm your dates.'
    ],
    bestTime: 'June and September to October',
    seo: {
      title: 'Johar Valley 4x4 Expedition — Munsiyari to Milam',
      description:
        'A 4x4 expedition into the Johar valley with Pravaah: the Gori Ganga gorge, Martoli and Milam villages and walks to the Milam glacier.'
    }
  },

  {
    slug: 'darma-valley-expedition',
    section: 'expeditions',
    category: 'off-road',
    title: 'Darma Valley Expedition',
    location: 'Dharchula to the upper Darma valley',
    destinationSlug: 'uttarakhand',
    tagline: 'Deep into the Dhauliganga by 4x4',
    description:
      'A 4x4 journey from Dharchula up the Darma valley to its highest villages, with Panchachuli views and village stays along the way.',
    overview: [
      'The Darma valley road climbs from the Kali river at Dharchula up the Dhauliganga, past Dugtu and Dantu with their views of Panchachuli, and on towards the highest villages near the Tibetan border.',
      'Our expedition covers the whole valley in capable 4x4s, with stops for village walks, the Panchachuli viewpoints and the high meadows at the top. We stay in local homestays and camps and travel with a guide from the Rung community.'
    ],
    image: 'photo-1772082177577-54f617aee8f3',
    gallery: [
      'photo-1668005146935-2ee772a652f7',
      'photo-1668005163654-0f8b38a75030',
      'photo-1668005172181-9367f851109e',
      'photo-1668005151025-1f3f7eeb8131'
    ],
    facts: [
      { label: 'Duration', value: '5 – 6 days ex Dharchula' },
      { label: 'Difficulty', value: 'Moderate — rough roads' },
      { label: 'Start point', value: 'Dharchula' },
      { label: 'Season', value: 'May – June, Sep – Oct' }
    ],
    highlights: [
      'The full length of the Darma valley by 4x4',
      'Panchachuli views from Dugtu and Dantu',
      'The highest villages of the valley near the border',
      'Homestays with Rung families',
      'Inner Line Permits arranged'
    ],
    inclusions: [
      '4x4 vehicles with experienced drivers',
      'Local guide',
      'Homestays and camps',
      'All meals in the valley',
      'Inner Line Permit assistance'
    ],
    goodToKnow: [
      'Landslides can close the road for hours or days. We keep buffer time.',
      'Accommodation in the valley is simple.',
      'There is little or no mobile network beyond the lower valley.',
      'A day-by-day plan is shared once we confirm your dates.'
    ],
    bestTime: 'May to June and September to October',
    seo: {
      title: 'Darma Valley 4x4 Expedition — Dharchula, Uttarakhand',
      description:
        'A 4x4 expedition through the Darma valley with Pravaah: Panchachuli views, Rung village homestays and the high villages near the border.'
    }
  },

  {
    slug: 'niti-valley-expedition',
    section: 'expeditions',
    category: 'off-road',
    title: 'Niti Valley Expedition',
    location: 'Joshimath to Niti',
    destinationSlug: 'uttarakhand',
    tagline: 'A high desert road in Garhwal',
    description:
      'Drive from Joshimath up the Dhauliganga into the stark high valley of Niti, near the Tibetan border.',
    overview: [
      'The road from Joshimath to Niti is one of the most dramatic in Garhwal. It follows the Dhauliganga through narrow gorges, past Tapovan and Malari, and out into a high, dry valley that looks more like Ladakh than the green hills below.',
      'Our 4x4 expedition takes the road slowly, with stops in the Bhotia villages, a walk to the cave shrine of Timmersain Mahadev, and nights in local homestays. It can be combined with Badrinath and Mana for a longer Garhwal journey.'
    ],
    image: 'photo-1714224287885-efff750e5919',
    gallery: [
      'photo-1607271258380-16d84d1f967f',
      'photo-1579095220823-a2833d440ee1',
      'photo-1713446016389-ebafd8870601',
      'photo-1702127047573-36a11c318774'
    ],
    facts: [
      { label: 'Duration', value: '4 – 5 days ex Joshimath' },
      { label: 'Difficulty', value: 'Easy to moderate' },
      { label: 'Start point', value: 'Joshimath' },
      { label: 'Season', value: 'May – October' }
    ],
    highlights: [
      'The Dhauliganga gorge and the road to the border',
      'Malari, Gamshali and Niti villages',
      'The Timmersain Mahadev cave shrine',
      'Homestays with Bhotia families',
      'Easy to combine with Badrinath and Mana'
    ],
    inclusions: [
      '4x4 vehicle with an experienced driver',
      'Local guide',
      'Homestays and guesthouses',
      'All meals in the valley',
      'Inner Line Permit assistance'
    ],
    goodToKnow: [
      'The upper valley is at significant altitude. Take the first day easy.',
      'Permits and ID checks are part of the journey near the border.',
      'The valley is largely closed in winter.',
      'A day-by-day plan is shared once we confirm your dates.'
    ],
    bestTime: 'May to October',
    seo: {
      title: 'Niti Valley 4x4 Expedition — Joshimath to Niti, Uttarakhand',
      description:
        'A 4x4 expedition from Joshimath to the Niti valley with Pravaah: Malari, Niti village, Timmersain Mahadev and Bhotia homestays.'
    }
  },

  {
    slug: 'flow-with-the-ganga',
    section: 'expeditions',
    category: 'multi-day',
    title: 'Flow with the Ganga',
    location: 'Gangotri to Haridwar',
    destinationSlug: 'uttarakhand',
    tagline: 'From the glacier to the plains',
    description:
      'A multi-day journey following the Ganga from its source near Gangotri, through the Himalayan confluences, down to Rishikesh and Haridwar.',
    overview: [
      'Pravaah means flow, and this is the journey that gave us our name. It follows the Ganga from the glaciers above Gangotri, where the Bhagirathi begins, all the way down to the plains at Haridwar.',
      'Along the way you walk to Gaumukh, the snout of the Gangotri glacier; stay in the river towns of Harsil and Uttarkashi; stand at Devprayag, where the Bhagirathi and Alaknanda meet and the river finally becomes the Ganga; raft the rapids above Rishikesh; and end at the evening aarti in Haridwar. It is part pilgrimage, part adventure, and all river.'
    ],
    image: 'photo-1709623868300-e3b78cad10e1',
    gallery: [
      'photo-1572963912807-a3609ed653c3',
      'photo-1720819029162-8500607ae232',
      'photo-1718383537411-6f9e727ae0bb',
      'photo-1724432799555-6414c4a669b9'
    ],
    facts: [
      { label: 'Duration', value: '9 – 10 days ex Dehradun' },
      { label: 'Difficulty', value: 'Moderate' },
      { label: 'Start point', value: 'Dehradun' },
      { label: 'Season', value: 'May – June, Sep – Oct' }
    ],
    highlights: [
      'A walk to Gaumukh, the source of the Bhagirathi',
      'Harsil and the apple orchards of the upper valley',
      'Devprayag, where the Ganga is born from two rivers',
      'White-water rafting above Rishikesh',
      'The Ganga aarti at Har Ki Pauri, Haridwar'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Dehradun to Uttarkashi',
        description: 'Into the Bhagirathi valley.',
        stay: 'Uttarkashi',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Uttarkashi to Harsil',
        description: 'Up the valley to the orchards and deodar forest of Harsil.',
        stay: 'Harsil',
        meals: 'Breakfast, dinner'
      },
      {
        day: 3,
        title: 'Gangotri to Bhojbasa',
        description: 'Temple darshan at Gangotri, then walk up the valley to camp at Bhojbasa.',
        stay: 'Camp or guesthouse, Bhojbasa',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 4,
        title: 'Gaumukh',
        description: 'Early walk to the snout of the Gangotri glacier, then back down towards Gangotri.',
        stay: 'Gangotri',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 5,
        title: 'Gangotri to Uttarkashi',
        description: 'A slow drive down the valley, with hot springs at Gangnani on the way.',
        stay: 'Uttarkashi',
        meals: 'Breakfast, dinner'
      },
      {
        day: 6,
        title: 'Uttarkashi to Devprayag',
        description: 'Follow the Bhagirathi down to the confluence at Devprayag.',
        stay: 'Devprayag',
        meals: 'Breakfast, dinner'
      },
      {
        day: 7,
        title: 'Devprayag to Shivpuri',
        description: 'A riverside camp on the Ganga, with the afternoon on the water.',
        stay: 'River camp, Shivpuri',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 8,
        title: 'Raft to Rishikesh',
        description: 'Raft the rapids from Shivpuri down to Rishikesh, then the evening aarti.',
        stay: 'Rishikesh',
        meals: 'Breakfast, dinner'
      },
      {
        day: 9,
        title: 'Haridwar',
        description: 'The last stretch to Haridwar and the Ganga aarti at Har Ki Pauri.',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Private vehicle with an experienced hill driver',
      'Hotels, a river camp and a mountain guesthouse or camp',
      'Breakfast and dinner daily, all meals while trekking and camping',
      'Gaumukh permit and guide',
      'Rafting with a certified operator'
    ],
    goodToKnow: [
      'Gaumukh needs a permit with a limited daily quota. Book early.',
      'The Gaumukh walk is long and at altitude — around 18 km each way from Gangotri.',
      'Rafting usually pauses during the monsoon, roughly July to mid-September.',
      'Stays can be upgraded or kept simple — tell us how you like to travel.'
    ],
    bestTime: 'May to June and September to October',
    featured: true,
    seo: {
      title: 'Flow with the Ganga — Gangotri to Haridwar River Journey',
      description:
        'Follow the Ganga from Gaumukh to Haridwar with Pravaah: Gangotri, Harsil, Devprayag, rafting above Rishikesh and the Haridwar aarti.'
    }
  }
]
