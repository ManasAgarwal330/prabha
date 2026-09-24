import type { Listing } from '~/types'

/**
 * Experiences — shorter journeys built around one thing worth doing:
 * a base camp, a festival, a pilgrimage or a remote valley.
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
      'This is our base camp experience for people who want the feeling of being high in the mountains without committing to a full expedition. We keep the walking days manageable, handle the camp, the food and the logistics, and give you time at the top to actually take it in. If it gets under your skin, the longer Bankatiya expedition is waiting.'
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
  }
]
