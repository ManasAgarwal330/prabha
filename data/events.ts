import type { Listing } from '~/types'

/** Events — festivals, yatras and hosted retreats on fixed dates. */
export const events: Listing[] = [
  {
    slug: 'shama-base-camp-nature-retreat',
    section: 'events',
    category: 'wellness-retreats',
    title: 'Shama Base Camp Nature Retreat',
    location: 'Shama, Bageshwar district',
    destinationSlug: 'uttarakhand',
    tagline: 'Slow down in the Kumaon forest',
    description:
      'A small-group wellness retreat at a base camp in Shama — yoga, forest walks, simple food and nights under the stars.',
    overview: [
      'Shama is a quiet village in the Bageshwar hills of Kumaon, surrounded by pine and oak forest and far from any town. It is the kind of place where the loudest thing in the morning is a stream.',
      'The retreat is designed to help you reset. Mornings begin with yoga and breathwork, days are spent on gentle forest walks and in village life, meals are fresh and local, and evenings end around the fire or under a very dark sky. There is no pressure to do anything — the programme is an invitation, not a timetable.'
    ],
    image: 'photo-1545389336-cf090694435e',
    gallery: [
      'photo-1504280390367-361c6d9f38f4',
      'photo-1544161515-4ab6ce6db874',
      'photo-1418065460487-3e41a6c84dc5',
      'photo-1478131143081-80f7f84ca84d'
    ],
    facts: [
      { label: 'Duration', value: '4 days, 3 nights' },
      { label: 'Format', value: 'Small-group retreat' },
      { label: 'When', value: 'Fixed dates in spring & autumn' },
      { label: 'Group size', value: 'Up to 12 guests' }
    ],
    highlights: [
      'Daily yoga, breathwork and guided meditation',
      'Forest walks and forest-bathing sessions',
      'Fresh, local, mostly vegetarian meals',
      'Campfire evenings and stargazing',
      'A digital-light environment with time to rest'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive and settle in',
        description: 'Arrive at base camp in the afternoon, a gentle walk, and an opening circle by the fire.',
        stay: 'Shama base camp',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Forest day',
        description: 'Morning yoga, a guided forest walk and an unhurried afternoon.',
        stay: 'Shama base camp',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 3,
        title: 'Village and river',
        description: 'Yoga at sunrise, a walk to the village and the river, and stargazing after dinner.',
        stay: 'Shama base camp',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 4,
        title: 'Closing',
        description: 'A final morning practice, a closing circle and departure after brunch.',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Three nights at Shama base camp',
      'All meals during the retreat',
      'Daily yoga, meditation and guided walks',
      'Retreat host throughout'
    ],
    goodToKnow: [
      'Suitable for all levels, including complete beginners to yoga.',
      'Shama is a long drive from Kathgodam — we can arrange transfers or an overnight stop on the way.',
      'Accommodation is in comfortable tents or cottages; details are confirmed with your booking.',
      'Upcoming dates are shared on enquiry. Private retreats for groups can be arranged.'
    ],
    bestTime: 'March to June and September to November',
    featured: true,
    seo: {
      title: 'Shama Base Camp Nature Retreat — Wellness Retreat in Kumaon',
      description:
        'Join the Shama Base Camp nature retreat with Pravaah: yoga, forest walks, local food and stargazing in the Bageshwar hills of Kumaon.'
    }
  },

  {
    slug: 'nanda-ashtami-yatra-munsiyari',
    section: 'events',
    category: 'time-specific-events',
    title: 'Nanda Ashtami Yatra',
    location: 'Munsiyari, Pithoragarh district',
    destinationSlug: 'uttarakhand',
    tagline: 'The hills celebrate their goddess',
    description:
      'Join the Nanda Devi celebrations in Munsiyari — processions, folk songs and a village festival in the shadow of the peaks.',
    overview: [
      'Nanda Devi is the presiding goddess of Kumaon and Garhwal, and the mountain that carries her name watches over the whole region. Each year around Nanda Ashtami, in late summer, villages across the hills celebrate her with fairs, processions and music.',
      'In Munsiyari the festival centres on the Nanda Devi temple on the ridge above town. We plan the days so you are there for the rituals and the gatherings, with a local host to explain what is happening and why — and time around it for the tribal heritage museum, the weavers of Darkot and the view of Panchachuli.'
    ],
    image: 'photo-1683700916507-93d49889bacc',
    gallery: [
      'photo-1683700915265-83e12dac8024',
      'photo-1683700912111-7f5b392d54d4',
      'photo-1683700912945-1cc17effa0bb',
      'photo-1683700916029-5fb9b2197a2e'
    ],
    facts: [
      { label: 'Duration', value: '4 – 5 days ex Munsiyari' },
      { label: 'Level', value: 'Easy' },
      { label: 'Starts from', value: 'Munsiyari' },
      { label: 'When', value: 'Around Nanda Ashtami (Aug – Sep)' }
    ],
    highlights: [
      'The Nanda Devi festival at the temple above Munsiyari',
      'Kumaoni folk music and dance, with a local host to explain it',
      'The Munsiyari tribal heritage museum and the story of the Johar valley',
      'A village walk to Darkot for its hand-woven shawls',
      'Sunrise over the Panchachuli peaks'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive in Munsiyari',
        description: 'Settle in, meet your host and take an evening walk for your first look at Panchachuli.',
        stay: 'Homestay, Munsiyari',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Heritage and villages',
        description: 'Visit the tribal heritage museum, then walk to Darkot to meet the weavers.',
        stay: 'Homestay, Munsiyari',
        meals: 'Breakfast, dinner'
      },
      {
        day: 3,
        title: 'Nanda Ashtami',
        description: 'Spend the day at the Nanda Devi temple for the festival, the rituals and the gathering.',
        stay: 'Homestay, Munsiyari',
        meals: 'Breakfast, dinner'
      },
      {
        day: 4,
        title: 'Festival day two and departure',
        description: 'Catch the closing celebrations before heading down, or stay on for Khaliya Top.',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Homestay accommodation in Munsiyari',
      'Breakfast and dinner daily',
      'Local host and guide throughout',
      'Museum and village visits'
    ],
    goodToKnow: [
      'Festival dates follow the Hindu calendar and change every year — we confirm them when you enquire.',
      'This is a religious occasion. Dress modestly and ask before photographing rituals.',
      'Late summer is the tail of the monsoon. Keep a buffer day for the drive in and out.',
      'Extend with Khaliya Top or the Johar valley if you have more days.'
    ],
    bestTime: 'Around Nanda Ashtami, usually late August or September',
    seo: {
      title: 'Nanda Ashtami Yatra in Munsiyari — Kumaon Festival Experience',
      description:
        'Experience the Nanda Devi festival at Nanda Ashtami in Munsiyari, Uttarakhand, with a local host, village visits and views of Panchachuli.'
    }
  },

  {
    slug: 'holi-vrindavan-barsana',
    section: 'events',
    category: 'time-specific-events',
    title: 'Holi in Vrindavan & Barsana',
    location: 'Braj, Mathura district',
    tagline: 'A week of colour in the land of Krishna',
    description:
      'Lathmar Holi in Barsana and Nandgaon, flowers and colour at the temples of Vrindavan, and Holi day in Mathura — the festival where it began.',
    overview: [
      'Nowhere celebrates Holi like Braj, the country of Krishna’s childhood around Mathura. Here the festival is not a single day but a week of it, moving from village to village — starting with Lathmar Holi in Barsana, where the women of Radha’s village drive off the men of Nandgaon with sticks, and the return match in Nandgaon the next day.',
      'In Vrindavan the temples take over: phoolon wali Holi, played with flower petals at the Banke Bihari temple, and colour in the lanes around it. We time the trip around the Barsana and Vrindavan days, with a local host who knows where to stand, when to go in and when to step out of the crowd, and a comfortable stay to come back to.'
    ],
    image: 'photo-1603228254119-e6a4d095dc59',
    gallery: [
      'photo-1663154048558-2510385fee89',
      'photo-1591661585188-04fce214708d',
      'photo-1606293926075-69a00dbfde81',
      'photo-1576487248805-cf45f6bcc67f'
    ],
    facts: [
      { label: 'Duration', value: '4 days, 3 nights ex Delhi' },
      { label: 'Level', value: 'Easy' },
      { label: 'Starts from', value: 'Delhi' },
      { label: 'When', value: 'Holi week (February – March)' }
    ],
    highlights: [
      'Lathmar Holi in Barsana, and the return celebrations in Nandgaon',
      'Phoolon wali Holi with flower petals at the Banke Bihari temple, Vrindavan',
      'Holi day in Mathura, at the birthplace of Krishna',
      'A local host for every celebration, who knows when to step in and when to step back',
      'A well-placed stay in Vrindavan with a quiet room to return to'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Delhi to Vrindavan',
        description:
          'A drive of around three hours down the Yamuna Expressway. Settle in, then an evening walk to the ghats and the aarti at Keshi Ghat.',
        stay: 'Vrindavan'
      },
      {
        day: 2,
        title: 'Lathmar Holi in Barsana',
        description:
          'A morning drive to Barsana and the Radha Rani temple on the hill, then Lathmar Holi in the lanes below with your host. Back to Vrindavan for a slow evening.',
        stay: 'Vrindavan'
      },
      {
        day: 3,
        title: 'Vrindavan — flowers and colour',
        description:
          'Phoolon wali Holi at the Banke Bihari temple, colour in the lanes around it, and the ISKCON and Prem Mandir temples once the crowds thin out.',
        stay: 'Vrindavan'
      },
      {
        day: 4,
        title: 'Mathura and back to Delhi',
        description:
          'Shri Krishna Janmabhoomi and the Vishram Ghat in Mathura, then the drive back to Delhi — or on to Agra if you have another day.'
      }
    ],
    inclusions: [
      'Three nights in Vrindavan',
      'Private vehicle from Delhi and back',
      'Local host for the Barsana and Vrindavan celebrations',
      'Organic colours for the celebrations',
      'Breakfast and dinner daily'
    ],
    goodToKnow: [
      'Holi in Braj runs for about a week and follows the lunar calendar — we confirm the Barsana, Nandgaon and Vrindavan dates when you enquire.',
      'Vrindavan and Mathura are holy towns: meat, eggs and alcohol are not served.',
      'Wear old clothes, protect your eyes and phone, and oil your hair and skin beforehand.',
      'The crowds in Barsana and at Banke Bihari are intense. Your host will help you enjoy it and step away when you want.',
      'Agra is about an hour from Mathura — easy to add a night and the Taj Mahal at sunrise.'
    ],
    bestTime: 'Holi week, usually in March',
    seo: {
      title: 'Holi in Vrindavan & Barsana — Lathmar Holi & Braj Festival Trip',
      description:
        'Celebrate Holi in Braj with Pravaah: Lathmar Holi in Barsana and Nandgaon, phoolon wali Holi at Banke Bihari in Vrindavan and Holi in Mathura, ex Delhi.'
    }
  },

  {
    slug: 'butter-festival-dayara-bugyal',
    section: 'events',
    category: 'time-specific-events',
    title: 'Butter Festival at Dayara Bugyal',
    location: 'Dayara Bugyal, Uttarkashi district',
    destinationSlug: 'uttarakhand',
    tagline: 'Holi with butter and buttermilk on a Himalayan meadow',
    description:
      'Andhud, the butter festival, on the high meadow of Dayara Bugyal — the villages of Raithal give thanks for the summer by playing Holi with butter and buttermilk.',
    overview: [
      'Every August, as the herds come down from their summer grazing, the people of Raithal and the villages around it climb to Dayara Bugyal — one of the most beautiful high meadows in Garhwal — to thank the mountain deities for the season. They celebrate Andhud, the butter festival, by playing Holi with fresh butter, milk and buttermilk instead of colour.',
      'We make it a short trek: a drive from Dehradun to Raithal, a walk up through oak and rhododendron forest to camp near the meadow, and the festival itself with the villagers, with folk songs, dances and the snow peaks of the Gangotri range on the horizon.'
    ],
    image: 'photo-1464822759023-fed622ff2c3b',
    gallery: [
      'photo-1506905925346-21bda4d32df4',
      'photo-1455156218388-5e61b526818b',
      'photo-1683700912945-1cc17effa0bb',
      'photo-1519681393784-d120267933ba'
    ],
    facts: [
      { label: 'Duration', value: '4 days, 3 nights ex Dehradun' },
      { label: 'Level', value: 'Easy to moderate trek' },
      { label: 'Starts from', value: 'Dehradun' },
      { label: 'When', value: 'Mid-August (Bhadrapada Sankranti)' }
    ],
    highlights: [
      'Andhud — Holi played with butter, milk and buttermilk on a Himalayan meadow',
      'Folk songs and dances with the villagers of Raithal',
      'Dayara Bugyal, one of the finest high meadows in Garhwal',
      'A short trek through oak and rhododendron forest',
      'Views across to the Gangotri range on clear mornings'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Dehradun to Raithal',
        description:
          'A long, scenic drive via Uttarkashi along the Bhagirathi to Raithal, a village of old wooden houses at the foot of the trail.',
        stay: 'Homestay, Raithal'
      },
      {
        day: 2,
        title: 'Raithal to Dayara Bugyal',
        description:
          'A steady climb through oak and rhododendron forest to the edge of the meadow. Afternoon to settle into camp and watch the light change on the peaks.',
        stay: 'Camp, Dayara Bugyal'
      },
      {
        day: 3,
        title: 'The Butter Festival',
        description:
          'Join the villagers on the meadow for Andhud — prayers to the mountain deities, then Holi with butter and buttermilk, folk songs and dances. Walk back down to Raithal in the afternoon.',
        stay: 'Homestay, Raithal'
      },
      {
        day: 4,
        title: 'Raithal to Dehradun',
        description: 'After breakfast, drive back down the valley to Dehradun.'
      }
    ],
    inclusions: [
      'Trek guide and local support staff',
      'Two nights in a Raithal homestay and a night in camp at Dayara',
      'Tents, sleeping bags and mats',
      'All meals during the trek',
      'Road transfers from Dehradun and back',
      'Forest entry fees'
    ],
    goodToKnow: [
      'The festival date follows the local calendar and usually falls in mid-August — we confirm it when you enquire.',
      'August is the tail of the monsoon. Expect rain on the drive and keep a buffer day if you can.',
      'The trek is short but steady. Comfortable for anyone used to a few hours of uphill walking.',
      'This is the villagers’ celebration — join in when invited, and ask before photographing rituals.'
    ],
    bestTime: 'Mid-August, for the festival',
    seo: {
      title: 'Butter Festival at Dayara Bugyal — Andhud Festival Trek from Dehradun',
      description:
        'Join Andhud, the Butter Festival, at Dayara Bugyal with Pravaah: a short trek from Raithal, a night on the meadow and Holi with butter and buttermilk.'
    }
  },

  {
    slug: 'dev-deepawali-varanasi',
    section: 'events',
    category: 'time-specific-events',
    title: 'Dev Deepawali in Varanasi',
    location: 'Varanasi, Uttar Pradesh',
    tagline: 'The night the gods come down to the Ganga',
    description:
      'On the full moon of Kartik, every ghat in Varanasi is lit with diyas — watch it from the river, then join the Ganga aarti at Dashashwamedh.',
    overview: [
      'Dev Deepawali, the Diwali of the gods, falls on Kartik Purnima, fifteen days after Diwali. As the sun sets, more than a million earthen lamps are lit along the ghats of Varanasi, and the whole crescent of the riverfront glows from Raj Ghat to Assi.',
      'The best way to see it is from the water. We book a boat for the evening so you can drift past the ghats as they light up, then bring you in for the Ganga aarti at Dashashwamedh. Around it, there is time for the old city at dawn, the lanes and temples, and a morning at Sarnath, where the Buddha gave his first sermon.'
    ],
    image: 'photo-1561361058-c24cecae35ca',
    gallery: [
      'photo-1571536802807-30451e3955d8',
      'photo-1572963912807-a3609ed653c3',
      'photo-1709623868300-e3b78cad10e1',
      'photo-1720819029162-8500607ae232'
    ],
    facts: [
      { label: 'Duration', value: '3 days, 2 nights ex Varanasi' },
      { label: 'Level', value: 'Easy' },
      { label: 'Starts from', value: 'Varanasi' },
      { label: 'When', value: 'Kartik Purnima (November)' }
    ],
    highlights: [
      'The ghats lit with diyas on Dev Deepawali, seen from a private boat',
      'The Ganga aarti at Dashashwamedh Ghat',
      'A sunrise boat ride along the ghats',
      'A walk through the lanes of the old city with a local guide',
      'Sarnath, where the Buddha gave his first sermon'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive in Varanasi',
        description:
          'Check in close to the ghats. In the evening, the Ganga aarti at Dashashwamedh Ghat to set the scene.',
        stay: 'Varanasi'
      },
      {
        day: 2,
        title: 'Dev Deepawali',
        description:
          'A sunrise boat ride along the ghats and a walk through the old city lanes. In the evening, board your boat as the diyas are lit along the riverfront, drift past the ghats as they glow, and come ashore for the festival aarti.',
        stay: 'Varanasi'
      },
      {
        day: 3,
        title: 'Sarnath and departure',
        description: 'A morning at Sarnath — the stupa, the museum and the deer park — before your onward journey.'
      }
    ],
    inclusions: [
      'Two nights in Varanasi, close to the ghats',
      'Private boat for the Dev Deepawali evening',
      'Sunrise boat ride along the ghats',
      'Local guide for the old city and Sarnath',
      'Airport or station transfers',
      'Breakfast daily'
    ],
    goodToKnow: [
      'Dev Deepawali falls on Kartik Purnima and the date changes every year — we confirm it when you enquire.',
      'Boats and riverside rooms sell out months ahead. Enquire early.',
      'The ghats are extremely crowded on the night. Stay with your guide and keep valuables to a minimum.',
      'Dress modestly for the temples and ask before photographing rituals or cremation ghats.'
    ],
    bestTime: 'Kartik Purnima, usually in November',
    seo: {
      title: 'Dev Deepawali in Varanasi — Festival of Lights on the Ganga',
      description:
        'Experience Dev Deepawali in Varanasi with Pravaah: the ghats lit with diyas from a private boat, Ganga aarti at Dashashwamedh, a sunrise boat ride and Sarnath.'
    }
  },

  {
    slug: 'family-celebrations',
    section: 'events',
    category: 'family-celebrations',
    title: 'Family Celebrations',
    location: 'Any Pravaah stay',
    tagline: 'Birthdays, anniversaries and reunions, somewhere worth the journey',
    description:
      'Bring the family together at a Pravaah stay of your choosing — we plan the rooms, the meals, the decorations and the days around the occasion.',
    overview: [
      'Some occasions deserve more than a restaurant booking. A milestone birthday, a wedding anniversary, a family reunion or a small pre-wedding get-together is better in the hills, with everyone under one roof and nowhere else to be.',
      'Choose any of our stays — a full resort like Dharohar Retreat in Mukteshwar or Hriday Bhoomi near Jim Corbett, a private house like Nirvaana Mansion in Hartola, a forest setting like Guldaar Valley in Kosi, or a lakeside base like Naini Retreat in Nainital — and we take care of the rest: rooms for every generation, the celebration dinner, decorations, a cake, music, and outings planned for the days around it.'
    ],
    image: 'photo-1511795409834-ef04bbd61622',
    gallery: [
      '/images/stays/dharohar-retreat-satkhol/cover',
      '/images/stays/nirvaana-mansion-hartola/cover',
      '/images/stays/guldaar-valley-kosi/cover',
      'photo-1464207687429-7505649dae38'
    ],
    facts: [
      { label: 'Format', value: 'Private, hosted celebration' },
      { label: 'Where', value: 'Any Pravaah stay' },
      { label: 'Group size', value: '8 – 60 guests' },
      { label: 'Duration', value: 'Usually 2 – 3 nights' }
    ],
    highlights: [
      'Your choice of stay, from full resorts to a private mansion',
      'A celebration dinner, decorations and a cake arranged for you',
      'Rooms matched to every generation, from grandparents to toddlers',
      'Outings for the days around it — nature walks, temples, lakes and safaris',
      'One point of contact from the first call to the last checkout'
    ],
    inclusions: [
      'Stay at your chosen property, with rooms allocated for the group',
      'Celebration dinner and setup',
      'Decorations and cake',
      'A host on the day',
      'Help with transfers and local outings'
    ],
    goodToKnow: [
      'Tell us the occasion, the date and the group size — we will suggest the stays that fit.',
      'Long weekends and the summer holidays book up first. Enquire two to three months ahead.',
      'Larger groups may be best at a full resort, or by taking over a smaller property entirely.',
      'Rates depend on the stay, the season and the group — we confirm them with your quote.'
    ],
    bestTime: 'Year-round — we match the stay to the season',
    seo: {
      title: 'Family Celebrations in the Hills — Birthdays, Anniversaries & Reunions',
      description:
        'Plan a family celebration at a Pravaah stay of your choice: birthdays, anniversaries and reunions in Mukteshwar, Jim Corbett, Hartola, Kosi or Nainital.'
    }
  },

  {
    slug: 'corporate-retreats',
    section: 'events',
    category: 'corporate-retreats',
    title: 'Corporate Retreats',
    location: 'Any Pravaah stay',
    tagline: 'Offsites in the hills, planned around your agenda',
    description:
      'Take the team out of the office to a Pravaah stay of your choosing — meeting space, team activities and the logistics handled end to end.',
    overview: [
      'A good offsite needs distance from the office, enough comfort to work and enough to do in the evenings that people actually talk to each other. The Kumaon hills are close enough to Delhi to reach in a day and far enough that nobody will be popping back in.',
      'Choose any of our stays — Hriday Bhoomi near Jim Corbett and Dharohar Retreat in Mukteshwar for larger teams with full resort facilities, or Glampinn Woods in Sonapani and Moksha Retreat in Kasar Devi for a smaller leadership group. We plan the sessions around your agenda and fill the rest with team activities: forest walks, a jungle safari, a bonfire evening or a day on the lake.'
    ],
    image: '/images/stays/hriday-bhoomi-jim-corbett/cover',
    gallery: [
      'photo-1517457373958-b7bdd4587205',
      '/images/stays/dharohar-retreat-satkhol/gallery-01',
      '/images/stays/glampinn-woods-sonapani/cover',
      'photo-1596394516093-501ba68a0ba6'
    ],
    facts: [
      { label: 'Format', value: 'Private team offsite' },
      { label: 'Where', value: 'Any Pravaah stay' },
      { label: 'Group size', value: '10 – 80 guests' },
      { label: 'Duration', value: 'Usually 2 – 4 nights' }
    ],
    highlights: [
      'Your choice of stay, from full resorts to an exclusive-use retreat',
      'Meeting space, projector and connectivity arranged',
      'Team activities — safaris, forest walks, bonfires and lake days',
      'Group transfers from Delhi, Kathgodam or Pantnagar',
      'One coordinator for the whole trip'
    ],
    inclusions: [
      'Stay at your chosen property, with rooms allocated for the team',
      'Meeting space and basic AV setup',
      'All meals, with a team dinner',
      'Planned team activities',
      'Group transfers on request'
    ],
    goodToKnow: [
      'Share your agenda, dates and headcount — we will suggest the stays and activities that fit.',
      'Mobile signal and Wi-Fi vary between properties. Tell us how connected you need to be.',
      'Weekday offsites are easier to book and often better value than weekends.',
      'Rates depend on the stay, the season and the group — we confirm them with your quote.'
    ],
    bestTime: 'Year-round — March to June and September to December are the most comfortable',
    seo: {
      title: 'Corporate Retreats in the Hills — Team Offsites in Kumaon',
      description:
        'Plan a corporate retreat at a Pravaah stay of your choice: team offsites near Jim Corbett, Mukteshwar, Sonapani and Kasar Devi with meeting space and activities.'
    }
  },

  {
    slug: 'group-getaways',
    section: 'events',
    category: 'group-getaways',
    title: 'Group Getaways',
    location: 'Any Pravaah stay',
    tagline: 'One trip, one group, everything taken care of',
    description:
      'A trip for friends, college reunions and larger groups at a Pravaah stay of your choosing — stays, transport and plans sorted.',
    overview: [
      'Planning a trip for a big group usually means one person doing all the work. Let it be us. Tell us who is coming, roughly when, and what kind of trip it is — a long weekend of doing very little, or a few days packed with things to do.',
      'Choose any of our stays — glamping at Glampinn Woods in Sonapani, a forest valley at Guldaar Valley in Kosi, a lakeside base at Naini Retreat in Nainital, or a hilltop at Moksha Retreat in Kasar Devi — and we sort out the rooms, the transport, the meals and the plans: treks, rafting, safaris, bonfires and a night under the stars.'
    ],
    image: 'photo-1529156069898-49953e39b3ac',
    gallery: [
      'photo-1487730116645-74489c95b41b',
      '/images/stays/glampinn-woods-sonapani/cover',
      'photo-1464207687429-7505649dae38',
      '/images/stays/guldaar-valley-kosi/cover'
    ],
    facts: [
      { label: 'Format', value: 'Private group trip' },
      { label: 'Where', value: 'Any Pravaah stay' },
      { label: 'Group size', value: '6 – 40 guests' },
      { label: 'Duration', value: 'Usually 2 – 4 nights' }
    ],
    highlights: [
      'Your choice of stay, from glamping to a lakeside hotel',
      'Transport for the whole group from Delhi or Kathgodam',
      'Activities planned in — treks, rafting, safaris and bonfires',
      'Shared spaces for the evenings together',
      'One booking and one point of contact for everyone'
    ],
    inclusions: [
      'Stay at your chosen property, with rooms allocated for the group',
      'Group transfers on request',
      'Meals as per the plan',
      'Planned activities and a bonfire evening',
      'A coordinator reachable through the trip'
    ],
    goodToKnow: [
      'Tell us the group size, the dates and the vibe — we will suggest the stays that fit.',
      'Weekends and long weekends book up quickly. Enquire early for larger groups.',
      'We can split rooms and costs per person to make it easier to collect payments.',
      'Rates depend on the stay, the season and the group — we confirm them with your quote.'
    ],
    bestTime: 'Year-round — we match the stay to the season',
    seo: {
      title: 'Group Getaways — Trips for Friends & Large Groups in the Hills',
      description:
        'Plan a group getaway at a Pravaah stay of your choice: glamping in Sonapani, Guldaar Valley in Kosi, Nainital or Kasar Devi, with transport and activities sorted.'
    }
  }
]
