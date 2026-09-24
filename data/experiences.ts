import type { Listing } from '~/types'

/**
 * Experiences — journeys built around one thing worth doing: a base camp, a trek,
 * a 4x4 route, a festival, a pilgrimage or a remote valley.
 * Day-by-day plans are indicative; the team confirms routes against season and conditions.
 */
export const experiences: Listing[] = [
  {
    slug: 'bankatiya-base-camp',
    section: 'experiences',
    category: 'adventure',
    title: 'Bankatiya Base Camp',
    location: 'Kumaon Himalaya, beyond Munsiyari',
    destinationSlug: 'uttarakhand',
    tagline: 'A night among the high peaks',
    description:
      'Walk into a Himalayan base camp, sleep under the glaciers and wake up surrounded by snow peaks — fully guided and supported.',
    overview: [
      'Bankatiya is a high camp in the Kumaon Himalaya, reached on foot through forest, meadow and moraine from the roadhead beyond Munsiyari. There are no buildings and no signal — just tents, a kitchen, and a ring of snow peaks that turn gold at sunset.',
      'This is our base camp experience for people who want the feeling of being high in the mountains without committing to a full expedition. We keep the walking days manageable, handle the camp, the food and the logistics, and give you time at the top to actually take it in. If it gets under your skin, the full Bankatiya Base Camp Trek is waiting.'
    ],
    image: 'photo-1510312305653-8ed496efae75',
    gallery: [
      'photo-1626621341517-bbf3d9990a23',
      'photo-1486911278844-a81c5267e227',
      'photo-1519681393784-d120267933ba',
      'photo-1504280390367-361c6d9f38f4'
    ],
    facts: [
      { label: 'Duration', value: '5 – 6 days ex Munsiyari' },
      { label: 'Level', value: 'Moderate' },
      { label: 'Starts from', value: 'Munsiyari' },
      { label: 'Season', value: 'May – June, Sep – Oct' }
    ],
    highlights: [
      'A night at a high Himalayan camp with snow peaks all around',
      'Forest, meadow and glacier landscapes in a single walk',
      'Experienced local guides, cooks and support staff',
      'Stargazing far from any light',
      'Time to acclimatise built into the plan'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Munsiyari — briefing and gear check',
        description: 'Meet your guide, go over the route and kit, and take an easy acclimatisation walk around town.',
        stay: 'Homestay, Munsiyari',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Drive to the roadhead, walk to the first camp',
        description: 'A short drive, then a gentle first day on foot through forest and village fields.',
        stay: 'Camp',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 3,
        title: 'Up to Bankatiya',
        description: 'The trail climbs into open meadows and the big peaks come into view. Arrive at camp by afternoon.',
        stay: 'Camp',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 4,
        title: 'A day at base camp',
        description: 'Explore around camp with your guide, walk towards the glacier if conditions allow, and rest.',
        stay: 'Camp',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 5,
        title: 'Walk out',
        description: 'Retrace the route down to the roadhead and drive back to Munsiyari for a hot shower.',
        stay: 'Homestay, Munsiyari',
        meals: 'Breakfast, lunch, dinner'
      }
    ],
    inclusions: [
      'Local trek leader and support staff',
      'Tents, sleeping bags and mats',
      'All meals on the trail',
      'Permits and forest fees where applicable',
      'Transfers between Munsiyari and the roadhead'
    ],
    goodToKnow: [
      'You should be comfortable walking 5 – 7 hours a day on uneven ground.',
      'We share a kit list on booking. Good boots matter more than anything else.',
      'Weather in the high Himalaya can change plans — your guide has the final call on safety.',
      'Exact camp altitudes and route details are confirmed in your pre-departure briefing.'
    ],
    bestTime: 'May to June and September to October',
    featured: true,
    seo: {
      title: 'Bankatiya Base Camp Experience — Guided Himalayan Camp from Munsiyari',
      description:
        'A guided base camp experience at Bankatiya in the Kumaon Himalaya: forest and meadow trails, a night among the snow peaks, and full camp support.'
    }
  },

  {
    slug: 'nanda-ashtami-yatra-munsiyari',
    section: 'experiences',
    category: 'culture-heritage',
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
    image: 'photo-1589136777351-fdc9c9cab193',
    gallery: [
      'photo-1622308644420-b20142dc993c',
      'photo-1506905925346-21bda4d32df4',
      'photo-1464822759023-fed622ff2c3b',
      'photo-1486911278844-a81c5267e227'
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
    image: 'photo-1464822759023-fed622ff2c3b',
    gallery: [
      'photo-1609920658906-8223bd289001',
      'photo-1561361058-c24cecae35ca',
      'photo-1626621341517-bbf3d9990a23',
      'photo-1533240332313-0db49b459ad6'
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
      'The confluences of the Alaknanda and Bhagirathi on the way home',
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
        description: 'From Gaurikund, walk, ride or fly up to Kedarnath. Evening aarti at the temple.',
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
      'Opening and closing dates are announced each year, usually around late April and Diwali.',
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
    slug: 'hornbill-festival-nagaland',
    section: 'experiences',
    category: 'culture-heritage',
    title: 'Hornbill Festival, Nagaland',
    location: 'Kisama, near Kohima',
    destinationSlug: 'northeast-india',
    tagline: 'The festival of festivals',
    description:
      'Ten days in December when the Naga tribes gather at Kisama — dance, song, food and craft, with village visits around it.',
    overview: [
      'Every year from 1 to 10 December, the Naga Heritage Village at Kisama, just outside Kohima, hosts the Hornbill Festival. Each tribe has its own morung, and the days fill with traditional dances, songs, games, food and craft from across Nagaland.',
      'We plan the festival days so you see the best of the programme without the crush, and add the places around it that make the trip: Khonoma, the green village that turned its hunting grounds into a sanctuary; Kohima\'s history and markets; and, for the energetic, the walk into the Dzükou valley.'
    ],
    image: 'photo-1622308644420-b20142dc993c',
    gallery: [
      'photo-1470071459604-3b5ec3a7fe05',
      'photo-1459749411175-04bf5292ceea',
      'photo-1469474968028-56623f02e42e',
      'photo-1441974231531-c6227db76b6e'
    ],
    facts: [
      { label: 'Duration', value: '5 – 6 days ex Dimapur' },
      { label: 'Level', value: 'Easy' },
      { label: 'Starts from', value: 'Dimapur' },
      { label: 'When', value: '1 – 10 December' }
    ],
    highlights: [
      'Two days at the Hornbill Festival at the Naga Heritage Village, Kisama',
      'A village visit to Khonoma',
      'The Kohima War Cemetery and the town\'s old market',
      'Naga food — smoked pork, bamboo shoot and the local chillies',
      'Optional day walk into the Dzükou valley'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Dimapur to Kohima',
        description: 'A drive up into the hills, with the evening free to settle in.',
        stay: 'Kohima',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Hornbill Festival',
        description: 'A full day at Kisama — the morungs, the dances and the food stalls.',
        stay: 'Kohima',
        meals: 'Breakfast, dinner'
      },
      {
        day: 3,
        title: 'Khonoma village',
        description: 'Walk through the terraced fields and stone lanes of Khonoma with a local guide.',
        stay: 'Kohima or Khonoma homestay',
        meals: 'Breakfast, dinner'
      },
      {
        day: 4,
        title: 'Festival day two',
        description: 'Back at Kisama for a second day, and the Kohima night market in the evening.',
        stay: 'Kohima',
        meals: 'Breakfast, dinner'
      },
      {
        day: 5,
        title: 'Kohima to Dimapur',
        description: 'The War Cemetery in the morning, then down to Dimapur for onward travel.',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Stays in Kohima and a village homestay',
      'Private vehicle and driver',
      'Local guide at the festival and in Khonoma',
      'Breakfast and dinner daily',
      'Inner Line Permit assistance'
    ],
    goodToKnow: [
      'Indian travellers need an Inner Line Permit for Nagaland. We arrange it — carry ID.',
      'Stays around Kohima book out months ahead for the festival. Plan early.',
      'December evenings are cold in the hills. Pack warm layers.',
      'Always ask before photographing people, especially outside the festival grounds.'
    ],
    bestTime: '1 – 10 December',
    seo: {
      title: 'Hornbill Festival Nagaland — Festival Trip with Khonoma & Kohima',
      description:
        'Experience the Hornbill Festival at Kisama, Nagaland, with Pravaah: two festival days, Khonoma village, Kohima and Inner Line Permit assistance.'
    }
  },

  {
    slug: 'cherry-blossom-music-festival-shillong',
    section: 'experiences',
    category: 'culture-heritage',
    title: 'Cherry Blossom Music Festival, Shillong',
    location: 'Shillong, Meghalaya',
    destinationSlug: 'northeast-india',
    tagline: 'Pink hills and live music',
    description:
      'Autumn in Shillong, when the Himalayan cherry trees bloom pink and the city fills with music — with Sohra and the root bridges alongside.',
    overview: [
      'Every November, the Himalayan cherry trees around Shillong come into bloom and turn the hills pink. The city — long called the rock capital of India — celebrates with the Cherry Blossom Festival: concerts, food, local craft and a weekend when everyone seems to be outdoors.',
      'We build the trip around the festival days and add the Meghalaya everyone should see once: the gorges and waterfalls of Sohra, a living root bridge, the clear water at Dawki, and a village stay in the Khasi hills.'
    ],
    image: 'photo-1522383225653-ed111181a951',
    gallery: [
      'photo-1459749411175-04bf5292ceea',
      'photo-1470229722913-7c0e2dbbafd3',
      'photo-1433086966358-54859d0ed716',
      'photo-1470071459604-3b5ec3a7fe05'
    ],
    facts: [
      { label: 'Duration', value: '5 days ex Guwahati' },
      { label: 'Level', value: 'Easy' },
      { label: 'Starts from', value: 'Guwahati' },
      { label: 'When', value: 'November' }
    ],
    highlights: [
      'The Cherry Blossom Festival concerts and food stalls in Shillong',
      'Cherry trees in bloom across the city and the Khasi hills',
      'Sohra\'s waterfalls and a walk to a living root bridge',
      'The clear waters of the Umngot river at Dawki',
      'Khasi food and a local guide who knows the music scene'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Guwahati to Shillong',
        description: 'Up into the hills via Umiam lake. Evening at leisure in Police Bazaar.',
        stay: 'Shillong',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Festival day',
        description: 'The cherry blossoms around town and the festival programme through the evening.',
        stay: 'Shillong',
        meals: 'Breakfast'
      },
      {
        day: 3,
        title: 'Sohra',
        description: 'Waterfalls, gorges and the walk down to a living root bridge.',
        stay: 'Sohra',
        meals: 'Breakfast, dinner'
      },
      {
        day: 4,
        title: 'Dawki and back to Shillong',
        description: 'A morning on the Umngot river and Mawlynnong village, then festival night two.',
        stay: 'Shillong',
        meals: 'Breakfast'
      },
      {
        day: 5,
        title: 'Shillong to Guwahati',
        description: 'Back down to Guwahati for your onward journey.',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Stays in Shillong and Sohra',
      'Private vehicle and driver',
      'Local guide for Sohra and Dawki',
      'Daily breakfast'
    ],
    goodToKnow: [
      'Festival tickets and line-ups are announced each year — we will confirm what is included in your quote.',
      'Bloom timing depends on the weather. Mid-November is usually the most reliable window.',
      'The root bridge walks involve many steps. Take your time on the way back up.',
      'Evenings are cool. Bring a warm layer for the outdoor concerts.'
    ],
    bestTime: 'November',
    seo: {
      title: 'Shillong Cherry Blossom Festival — Music, Blossoms & Meghalaya',
      description:
        'Plan a trip to the Shillong Cherry Blossom Festival with Pravaah: festival days, cherry blossoms, Sohra, living root bridges and Dawki.'
    }
  },

  {
    slug: 'holi-pushkar',
    section: 'experiences',
    category: 'culture-heritage',
    title: 'Holi @ Pushkar',
    location: 'Pushkar, Rajasthan',
    destinationSlug: 'rajasthan',
    tagline: 'The festival of colours in a holy lake town',
    description:
      'Celebrate Holi in the lanes and squares of Pushkar — colour, music and a sacred lake town at its most joyful.',
    overview: [
      'Pushkar is one of the oldest towns in India, built around a sacred lake ringed with ghats and temples. For most of the year it is calm and devotional. On Holi, it becomes one of the most colourful places in the country.',
      'We plan Holi here with care: a stay close enough to the action, a local host who knows where to be and when, time to step out of the crowd when you want to, and the quieter side of Pushkar around it — sunrise at the Savitri temple, the Brahma temple and evenings at the ghats.'
    ],
    image: 'photo-1603262110263-fb0112e7cc33',
    gallery: [
      'photo-1551972873-b7e8754e8e26',
      'photo-1599661046289-e31897846e41',
      'photo-1477587458883-47145ed94245',
      'photo-1524492412937-b28074a5d7da'
    ],
    facts: [
      { label: 'Duration', value: '3 – 4 days ex Jaipur' },
      { label: 'Level', value: 'Easy' },
      { label: 'Starts from', value: 'Jaipur or Ajmer' },
      { label: 'When', value: 'Holi (February – March)' }
    ],
    highlights: [
      'Holi celebrations in the heart of Pushkar with a local host',
      'Holika Dahan, the bonfire on the evening before Holi',
      'Sunrise walk to the Savitri temple above the lake',
      'The Brahma temple and the evening aarti at the ghats',
      'A stay chosen for easy access and a quiet retreat'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Jaipur to Pushkar',
        description: 'A drive of around three hours. Evening at the ghats and Holika Dahan if the dates align.',
        stay: 'Pushkar',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Holi',
        description: 'A morning of colour and music in town with your host, then a slow afternoon to recover.',
        stay: 'Pushkar',
        meals: 'Breakfast, dinner'
      },
      {
        day: 3,
        title: 'Temples and the desert edge',
        description: 'Savitri temple at sunrise, the Brahma temple, and an evening on the dunes outside town.',
        stay: 'Pushkar',
        meals: 'Breakfast, dinner'
      },
      {
        day: 4,
        title: 'Back to Jaipur',
        description: 'Return to Jaipur, or carry on to Jodhpur or Udaipur.',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Stay in Pushkar',
      'Private vehicle from Jaipur and back',
      'Local host for Holi day',
      'Organic colours for the celebrations',
      'Breakfast and dinner daily'
    ],
    goodToKnow: [
      'Holi dates follow the lunar calendar — we confirm them when you enquire.',
      'Pushkar is a holy town: meat, eggs and alcohol are not served in town.',
      'Wear old clothes, protect your eyes and phone, and oil your hair and skin beforehand.',
      'Crowds can get boisterous. Your host will help you enjoy it and step away when you want.'
    ],
    bestTime: 'Holi, usually in March',
    seo: {
      title: 'Holi in Pushkar — Festival of Colours Experience in Rajasthan',
      description:
        'Celebrate Holi in Pushkar with Pravaah: a local host, a well-placed stay, Holika Dahan, Savitri temple at sunrise and the Pushkar ghats.'
    }
  },

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
    image: 'photo-1486911278844-a81c5267e227',
    gallery: [
      'photo-1589136777351-fdc9c9cab193',
      'photo-1501555088652-021faa106b9b',
      'photo-1519681393784-d120267933ba',
      'photo-1544084944-15269ec7b5a0'
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
      'Darma is an inner-line area. We need ID documents in advance to arrange permits.',
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
    image: 'photo-1501555088652-021faa106b9b',
    gallery: [
      'photo-1464822759023-fed622ff2c3b',
      'photo-1626621341517-bbf3d9990a23',
      'photo-1533240332313-0db49b459ad6',
      'photo-1504280390367-361c6d9f38f4'
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
      'Johar is an inner-line area. We need ID documents in advance for permits.',
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
      'A high, dry valley beyond Joshimath with Bhotia villages, the Dhauliganga, and the ice cave of Timmersain Mahadev.',
    overview: [
      'Beyond Joshimath, the road follows the Dhauliganga river into the Niti valley, climbing from pine forest into a stark, high landscape that feels closer to Ladakh than to the rest of Garhwal. Niti, the last village, sits just short of the Tibetan border.',
      'The valley is home to the Bhotia communities of Malari, Gamshali and Niti, who still migrate with the seasons. We stay with local families, walk to the cave of Timmersain Mahadev with its natural ice lingam, and spend time in villages that very few travellers ever see.'
    ],
    image: 'photo-1455156218388-5e61b526818b',
    gallery: [
      'photo-1544084944-15269ec7b5a0',
      'photo-1464822759023-fed622ff2c3b',
      'photo-1519681393784-d120267933ba',
      'photo-1533240332313-0db49b459ad6'
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
      'The walk to Timmersain Mahadev and its ice lingam',
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
        'Explore the Niti valley with Pravaah: Bhotia village homestays in Malari and Niti, the Dhauliganga, and the ice cave of Timmersain Mahadev.'
    }
  },

  {
    slug: 'bankatiya-base-camp-trek',
    section: 'experiences',
    category: 'treks',
    title: 'Bankatiya Base Camp Trek',
    location: 'Kumaon Himalaya, beyond Munsiyari',
    destinationSlug: 'uttarakhand',
    tagline: 'A full base camp trek in the Kumaon high country',
    description:
      'A complete, well-paced trek to Bankatiya base camp — forest, meadow and moraine, with time to acclimatise and explore the glaciers.',
    overview: [
      'The Bankatiya trek takes you from the last villages beyond Munsiyari up into the high country of the Kumaon Himalaya — through rhododendron and birch forest, across open meadows and finally onto the moraine below the snow peaks.',
      'Unlike our shorter base camp experience, this is a full expedition: more days on the trail, proper acclimatisation, and time at the top to explore towards the glaciers with your guide. Camps, cooks, porters and permits are all taken care of; you bring the legs and the curiosity.'
    ],
    image: 'photo-1551632811-561732d1e306',
    gallery: [
      'photo-1510312305653-8ed496efae75',
      'photo-1626621341517-bbf3d9990a23',
      'photo-1486911278844-a81c5267e227',
      'photo-1519681393784-d120267933ba'
    ],
    facts: [
      { label: 'Duration', value: '8 – 9 days ex Munsiyari' },
      { label: 'Difficulty', value: 'Moderate to challenging' },
      { label: 'Start point', value: 'Munsiyari' },
      { label: 'Season', value: 'May – June, Sep – Oct' }
    ],
    highlights: [
      'A complete Himalayan base camp trek with acclimatisation built in',
      'Rhododendron forest, alpine meadows and glacial moraine',
      'An exploration day towards the glaciers from base camp',
      'Experienced local trek leaders, cooks and porters',
      'Small groups, or private departures on request'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Munsiyari',
        description: 'Arrival, gear check and briefing with your trek leader.',
        stay: 'Homestay, Munsiyari',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Roadhead to first camp',
        description: 'Drive to the start of the trail and walk into the forest.',
        stay: 'Camp',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 3,
        title: 'Through the forest',
        description: 'A steady climb through mixed forest to a clearing camp.',
        stay: 'Camp',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 4,
        title: 'Into the meadows',
        description: 'The trees thin out and the high peaks open up ahead.',
        stay: 'Camp',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 5,
        title: 'Acclimatisation day',
        description: 'A short hike higher and back down to camp to help your body adjust.',
        stay: 'Camp',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 6,
        title: 'Bankatiya base camp',
        description: 'Across the moraine to base camp, surrounded by snow and ice.',
        stay: 'Base camp',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 7,
        title: 'Glacier exploration',
        description: 'Explore towards the glaciers with your leader, then begin the descent.',
        stay: 'Camp',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 8,
        title: 'Walk out to Munsiyari',
        description: 'Down to the roadhead and back to Munsiyari for a celebration dinner.',
        stay: 'Homestay, Munsiyari',
        meals: 'Breakfast, lunch, dinner'
      }
    ],
    inclusions: [
      'Certified trek leader and local support staff',
      'All camping equipment — tents, sleeping bags, mats, kitchen and toilet tents',
      'All meals on the trek',
      'Permits and forest fees',
      'First-aid kit and oxygen cylinder',
      'Transfers between Munsiyari and the roadhead'
    ],
    goodToKnow: [
      'You should be able to walk 6 – 8 hours a day with a light daypack.',
      'Start training at least six weeks ahead — stairs, long walks and cardio.',
      'Weather and trail conditions decide the final route. Your leader has the last word on safety.',
      'Exact camp names and altitudes are confirmed in your pre-departure pack.'
    ],
    bestTime: 'May to June and September to October',
    seo: {
      title: 'Bankatiya Base Camp Trek — Guided Himalayan Trek from Munsiyari',
      description:
        'Trek to Bankatiya base camp in the Kumaon Himalaya with Pravaah: an 8 – 9 day fully supported expedition with acclimatisation and glacier exploration.'
    }
  },

  {
    slug: 'panchachuli-base-camp-trek',
    section: 'experiences',
    category: 'treks',
    title: 'Panchachuli Base Camp Trek',
    location: 'Darma valley, Pithoragarh district',
    destinationSlug: 'uttarakhand',
    tagline: 'To the foot of the five peaks',
    description:
      'Walk up through the villages of the Darma valley to the base of the Panchachuli peaks and their glaciers.',
    overview: [
      'The five summits of Panchachuli are the defining view of eastern Kumaon. Most people see them from Munsiyari, across the valley. This trek takes you round to the other side, up the Darma valley, to stand right at their feet.',
      'The route begins in the Rung villages of Dugtu and Dantu, where we stay with local families, before heading up through birch forest and meadow to the Panchachuli glacier. It is one of the most rewarding treks in Uttarakhand for the effort involved — and it comes with the bonus of time in one of its most interesting valleys.'
    ],
    image: 'photo-1533130061792-64b345e4a833',
    gallery: [
      'photo-1486911278844-a81c5267e227',
      'photo-1551632811-561732d1e306',
      'photo-1504280390367-361c6d9f38f4',
      'photo-1589136777351-fdc9c9cab193'
    ],
    facts: [
      { label: 'Duration', value: '7 – 8 days ex Dharchula' },
      { label: 'Difficulty', value: 'Moderate' },
      { label: 'Start point', value: 'Dharchula' },
      { label: 'Season', value: 'May – June, Sep – Oct' }
    ],
    highlights: [
      'Close-up views of the five Panchachuli peaks',
      'The Panchachuli glacier and its moraine',
      'Village homestays in Dugtu and Dantu',
      'Birch forest and high meadows of the Darma valley',
      'Inner Line Permits and full support arranged'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Dharchula',
        description: 'Arrive, complete permit formalities and meet the team.',
        stay: 'Dharchula',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Drive to Dugtu',
        description: 'Up the Darma valley to the village of Dugtu.',
        stay: 'Homestay, Dugtu',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 3,
        title: 'Acclimatisation in the villages',
        description: 'Walk between Dugtu and Dantu and let your body adjust.',
        stay: 'Homestay',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 4,
        title: 'Towards the glacier',
        description: 'Through birch forest and meadow to camp below Panchachuli.',
        stay: 'Camp',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 5,
        title: 'Panchachuli base camp',
        description: 'A morning at the glacier and the base of the peaks, then back to camp.',
        stay: 'Camp',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 6,
        title: 'Back to Dugtu',
        description: 'Descend to the village for a last night with your hosts.',
        stay: 'Homestay, Dugtu',
        meals: 'Breakfast, lunch, dinner'
      },
      {
        day: 7,
        title: 'Drive to Dharchula',
        description: 'Down the valley to Dharchula.',
        stay: 'Dharchula',
        meals: 'Breakfast, dinner'
      }
    ],
    inclusions: [
      'Trek leader and local support staff',
      'Village homestays, camps and a hotel in Dharchula',
      'All meals during the trek',
      'Inner Line Permit assistance',
      'Camping equipment and first-aid kit',
      'Local transfers in the valley'
    ],
    goodToKnow: [
      'Darma is an inner-line area. Share ID documents early so permits can be arranged.',
      'Roads into the valley are prone to landslides — we keep a buffer day.',
      'Homestays are simple and warm. Camps are fully supported.',
      'Exact camp locations are confirmed in your pre-departure briefing.'
    ],
    bestTime: 'May to June and September to October',
    featured: true,
    seo: {
      title: 'Panchachuli Base Camp Trek — Darma Valley, Uttarakhand',
      description:
        'Trek to Panchachuli base camp through the Darma valley with Pravaah: village homestays in Dugtu and Dantu, the Panchachuli glacier and full support.'
    }
  },

  {
    slug: 'khaliya-top-trek',
    section: 'experiences',
    category: 'treks',
    title: 'Khaliya Top Trek',
    location: 'Munsiyari, Pithoragarh district',
    destinationSlug: 'uttarakhand',
    tagline: 'The best view in Kumaon, in two days',
    description:
      'A short, rewarding trek from Munsiyari to the meadow of Khaliya Top, with a sweeping view of Panchachuli and the high Himalaya.',
    overview: [
      'Khaliya Top is a high alpine meadow above Munsiyari, at roughly 3,500 m, and one of the finest viewpoints in the Kumaon Himalaya. From the top, Panchachuli, Rajrambha, Nanda Devi and a long line of snow peaks spread out across the horizon.',
      'The trail climbs through rhododendron and oak forest before breaking out onto open grassland. It is short enough for a first trek and beautiful enough that experienced walkers come back to it. We camp near the top so you are there for both sunset and sunrise.'
    ],
    image: 'photo-1626621341517-bbf3d9990a23',
    gallery: [
      'photo-1506905925346-21bda4d32df4',
      'photo-1501555088652-021faa106b9b',
      'photo-1519681393784-d120267933ba',
      'photo-1504280390367-361c6d9f38f4'
    ],
    facts: [
      { label: 'Duration', value: '2 days, 1 night ex Munsiyari' },
      { label: 'Difficulty', value: 'Easy to moderate' },
      { label: 'Start point', value: 'Munsiyari' },
      { label: 'Season', value: 'Mar – Jun, Sep – Dec' }
    ],
    highlights: [
      'Panoramic views of Panchachuli, Rajrambha and Nanda Devi',
      'Rhododendron forest in bloom in spring',
      'Sunset and sunrise from a high meadow camp',
      'A perfect first Himalayan trek',
      'Snow on the meadow in winter'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Munsiyari to Khaliya',
        description: 'A short drive to the trailhead, then a steady climb through forest to camp near the top.',
        stay: 'Camp',
        meals: 'Lunch, dinner'
      },
      {
        day: 2,
        title: 'Sunrise and descent',
        description: 'Up to the top for sunrise over the peaks, then back down to Munsiyari by afternoon.',
        meals: 'Breakfast, lunch'
      }
    ],
    inclusions: [
      'Trek guide and support staff',
      'Tents, sleeping bags and mats',
      'Meals on the trek',
      'Forest entry fees',
      'Trailhead transfers from Munsiyari'
    ],
    goodToKnow: [
      'Good for fit beginners and families with active teenagers.',
      'It is cold at the top in every season — pack a down jacket.',
      'In winter the upper trail is under snow. Microspikes are provided when needed.',
      'Combine it with a stay at Panchachuli Earth in Munsiyari.'
    ],
    bestTime: 'March to June and September to December',
    seo: {
      title: 'Khaliya Top Trek — Short Himalayan Trek from Munsiyari',
      description:
        'Trek to Khaliya Top from Munsiyari with Pravaah: a 2-day trek to a high meadow with views of Panchachuli, Rajrambha and Nanda Devi.'
    }
  },

  {
    slug: 'johar-valley-expedition',
    section: 'experiences',
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
    image: 'photo-1464822759023-fed622ff2c3b',
    gallery: [
      'photo-1516426122078-c23e76319801',
      'photo-1501555088652-021faa106b9b',
      'photo-1609920658906-8223bd289001',
      'photo-1533240332313-0db49b459ad6'
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
      'Johar is an inner-line area. Share ID documents early.',
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
    section: 'experiences',
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
    image: 'photo-1544084944-15269ec7b5a0',
    gallery: [
      'photo-1516426122078-c23e76319801',
      'photo-1486911278844-a81c5267e227',
      'photo-1589136777351-fdc9c9cab193',
      'photo-1519681393784-d120267933ba'
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
    section: 'experiences',
    category: 'off-road',
    title: 'Niti Valley Expedition',
    location: 'Joshimath to Niti',
    destinationSlug: 'uttarakhand',
    tagline: 'A high desert road in Garhwal',
    description:
      'Drive from Joshimath up the Dhauliganga into the stark high valley of Niti, near the Tibetan border.',
    overview: [
      'The road from Joshimath to Niti is one of the most dramatic in Garhwal. It follows the Dhauliganga through narrow gorges, past Tapovan and Malari, and out into a high, dry valley that looks more like Ladakh than the green hills below.',
      'Our 4x4 expedition takes the road slowly, with stops in the Bhotia villages, a walk to the ice cave of Timmersain Mahadev, and nights in local homestays. It can be combined with Badrinath and Mana for a longer Garhwal journey.'
    ],
    image: 'photo-1455156218388-5e61b526818b',
    gallery: [
      'photo-1516426122078-c23e76319801',
      'photo-1544084944-15269ec7b5a0',
      'photo-1464822759023-fed622ff2c3b',
      'photo-1519681393784-d120267933ba'
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
      'Timmersain Mahadev ice cave',
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
    section: 'experiences',
    category: 'culture-heritage',
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
    image: 'photo-1609920658906-8223bd289001',
    gallery: [
      'photo-1561361058-c24cecae35ca',
      'photo-1571536802807-30451e3955d8',
      'photo-1506126613408-eca07ce68773',
      'photo-1626621341517-bbf3d9990a23'
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
