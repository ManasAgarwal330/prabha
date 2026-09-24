import type { Listing } from '~/types'

/**
 * Stays. Rates depend on season and room category, so no prices are published —
 * every detail page routes to an enquiry instead.
 */
export const stays: Listing[] = [
  {
    slug: 'pi-palace-bhimtal',
    section: 'stays',
    category: 'hotels-resorts',
    title: 'Pi Palace, Bhimtal',
    location: 'Bhimtal, Nainital district',
    destinationSlug: 'uttarakhand',
    tagline: 'A lakeside base in the Kumaon lake country',
    description:
      'A comfortable hotel stay in Bhimtal — the quieter lake next door to Nainital, and an easy first stop in the Kumaon hills.',
    overview: [
      'Bhimtal is the lake town people pass through on the way to Nainital and wish they had stayed in instead. The lake is larger, the promenade is calmer, and the hills around it are a patchwork of forest, orchards and old stone houses.',
      'Pi Palace gives you a comfortable, full-service base for exploring it. Spend the mornings on the water, drive out to Sattal, Naukuchiatal and Nainital for the day, and come back to a room you do not have to think about. It is the stay we suggest for families, for first visits to the mountains, and for anyone who wants the hills without the effort.'
    ],
    image: 'photo-1508672019048-805c876b67e2',
    gallery: [
      'photo-1445019980597-93fa8acb246c',
      'photo-1566073771259-6a8506099945',
      'photo-1496417263034-38ec4f0b665a',
      'photo-1597074866923-dc0589150358'
    ],
    facts: [
      { label: 'Setting', value: 'Lakeside hill town' },
      { label: 'Best for', value: 'Families & couples' },
      { label: 'Ideal stay', value: '2 – 3 nights' },
      { label: 'Getting there', value: 'About 1 hr from Kathgodam' }
    ],
    highlights: [
      'Walking distance of Bhimtal lake, with boating and the island aquarium',
      'Day trips to Sattal, Naukuchiatal and Nainital without changing hotels',
      'An easy first night in the hills after the train or the drive from Delhi',
      'In-house dining and a team that can arrange drivers and local guides'
    ],
    goodToKnow: [
      'Room categories, meal plans and rates vary by season — we confirm the details with your quote.',
      'Weekends and school holidays fill quickly. Book early for May, June and October.',
      'Evenings are cool even in summer. Pack a warm layer.',
      'Pair it with a night or two in Hartola or Sonapani for the high-Himalaya views.'
    ],
    bestTime: 'March to June and September to December',
    featured: true,
    seo: {
      title: 'Pi Palace, Bhimtal — Lakeside Hotel Stay in Kumaon',
      description:
        'Stay at Pi Palace in Bhimtal with Pravaah: a comfortable hotel base by the lake for exploring Sattal, Naukuchiatal and Nainital.'
    }
  },

  {
    slug: 'scenic-solitude-hartola',
    section: 'stays',
    category: 'villas-homestays',
    title: 'Scenic Solitude, Hartola',
    location: 'Hartola, near Mukteshwar',
    destinationSlug: 'uttarakhand',
    tagline: 'Orchards, silence and the Himalaya at the window',
    description:
      'A quiet homestay in the orchard village of Hartola, with long views to the snow peaks and nothing on the schedule.',
    overview: [
      'Hartola sits on a ridge near Mukteshwar, surrounded by apple, plum and apricot orchards and oak forest. On a clear morning the whole snow range lines up across the horizon — Trishul, Nanda Devi and the peaks beyond.',
      'Scenic Solitude is built for exactly what the name says. Home-cooked Kumaoni meals, a sunny verandah, forest walks to neighbouring villages, and evenings that end early because there is no reason for them not to. It is the stay we recommend when someone tells us they just need to switch off.'
    ],
    image: 'photo-1499696010180-025ef6e1a8f9',
    gallery: [
      'photo-1418065460487-3e41a6c84dc5',
      'photo-1506905925346-21bda4d32df4',
      'photo-1464207687429-7505649dae38',
      'photo-1519681393784-d120267933ba'
    ],
    facts: [
      { label: 'Setting', value: 'Orchard village, around 2,000 m' },
      { label: 'Best for', value: 'Couples & slow travellers' },
      { label: 'Ideal stay', value: '3 – 4 nights' },
      { label: 'Getting there', value: 'About 3 hrs from Kathgodam' }
    ],
    highlights: [
      'Wide views of the snow range on clear mornings',
      'Home-cooked Kumaoni food made with produce from the village',
      'Orchard and forest walks straight from the door',
      'Easy outings to Mukteshwar temple and the Chauli ki Jali cliffs'
    ],
    goodToKnow: [
      'The last stretch of road is narrow and winding — we arrange drivers who know it.',
      'Winters are properly cold and it can snow. Rooms are heated, but pack for it.',
      'Mobile signal is patchy. Consider it part of the appeal.',
      'Orchards are in blossom in March and April, and fruit season runs from June to September.'
    ],
    bestTime: 'Year-round; October to February for the clearest views',
    featured: true,
    seo: {
      title: 'Scenic Solitude, Hartola — Orchard Homestay near Mukteshwar',
      description:
        'A quiet homestay in Hartola, near Mukteshwar, with Himalayan views, orchards and home-cooked Kumaoni food. Book with Pravaah.'
    }
  },

  {
    slug: 'ethereal-hartola',
    section: 'stays',
    category: 'villas-homestays',
    title: 'Ethereal, Hartola',
    location: 'Hartola, near Mukteshwar',
    destinationSlug: 'uttarakhand',
    tagline: 'A cottage in the clouds',
    description:
      'A cosy cottage stay on the Hartola ridge — for misty mornings, clear starry nights and long unhurried days.',
    overview: [
      'Some days in Hartola start inside a cloud. By mid-morning it lifts off the ridge and the oak forest, the orchards and, eventually, the high peaks come out one by one. Ethereal is a stay that is built around that daily reveal.',
      'Expect warm, simple rooms, meals cooked in the house, and a host happy to point you towards the best walks and viewpoints. It works beautifully in winter, when the air is at its clearest and the night sky is at its darkest — bring a book and let the days take care of themselves.'
    ],
    image: 'photo-1510798831971-661eb04b3739',
    gallery: [
      'photo-1533240332313-0db49b459ad6',
      'photo-1519681393784-d120267933ba',
      'photo-1418065460487-3e41a6c84dc5',
      'photo-1506905925346-21bda4d32df4'
    ],
    facts: [
      { label: 'Setting', value: 'Forested ridge, around 2,000 m' },
      { label: 'Best for', value: 'Couples, writers, winter trips' },
      { label: 'Ideal stay', value: '2 – 4 nights' },
      { label: 'Getting there', value: 'About 3 hrs from Kathgodam' }
    ],
    highlights: [
      'Clear, dark skies — some of the best stargazing in Kumaon',
      'Morning cloud rolling off the ridge and the peaks appearing behind it',
      'Short forest walks to viewpoints and nearby villages',
      'Warm rooms and house-cooked meals after a cold day outside'
    ],
    goodToKnow: [
      'December to February can bring snow. We will warn you if the road needs chains or a 4x4.',
      'Combine it with Scenic Solitude or Glampinn Woods for a longer Kumaon circuit.',
      'The nearest ATMs and pharmacies are in Mukteshwar or Bhowali — carry some cash.',
      'Room details and meal plans are confirmed with your quote.'
    ],
    bestTime: 'Year-round; winter for snow and stars',
    seo: {
      title: 'Ethereal, Hartola — Cottage Stay in the Kumaon Hills',
      description:
        'Stay at Ethereal in Hartola, near Mukteshwar: a cosy cottage with forest walks, Himalayan views and dark winter skies. Book with Pravaah.'
    }
  },

  {
    slug: 'panchachuli-earth-munsiyari',
    section: 'stays',
    category: 'villas-homestays',
    title: 'Panchachuli Earth, Munsiyari',
    location: 'Munsiyari, Pithoragarh district',
    destinationSlug: 'uttarakhand',
    tagline: 'Five peaks across the valley',
    description:
      'A homestay in Munsiyari looking straight across at the five Panchachuli peaks — and the gateway to the Johar valley.',
    overview: [
      'Munsiyari sits at around 2,200 m at the head of the road into the Johar valley, and it has one of the great views in the Indian Himalaya: the five summits of Panchachuli filling the skyline across the Gori Ganga gorge.',
      'Panchachuli Earth puts you right in front of it. Wake up to the peaks turning pink, walk down to the Nanda Devi temple and the tribal heritage museum, visit the weavers in Darkot, and use the stay as your base for Khaliya Top and the high valleys beyond. The hosts are local, and the food is too.'
    ],
    image: 'photo-1622308644420-b20142dc993c',
    gallery: [
      'photo-1486911278844-a81c5267e227',
      'photo-1506905925346-21bda4d32df4',
      'photo-1501555088652-021faa106b9b',
      'photo-1626621341517-bbf3d9990a23'
    ],
    facts: [
      { label: 'Setting', value: 'Mountain town, around 2,200 m' },
      { label: 'Best for', value: 'Trekkers & mountain lovers' },
      { label: 'Ideal stay', value: '3 – 5 nights' },
      { label: 'Getting there', value: 'A long day from Kathgodam' }
    ],
    highlights: [
      'Direct views of the Panchachuli massif from the property',
      'Base for the Khaliya Top trek and the Johar valley',
      'Village walks to Darkot for hand-woven shawls and rugs',
      'Kumaoni and Johari home cooking'
    ],
    goodToKnow: [
      'Munsiyari is a long drive. We usually break the journey at Chaukori, Birthi or Bhimtal.',
      'Clouds tend to build by noon — the clearest views are at sunrise.',
      'Winter brings snow and occasional road closures. Build in a buffer day.',
      'Mobile coverage is limited; the property will share what works best.'
    ],
    bestTime: 'March to June and September to December',
    featured: true,
    seo: {
      title: 'Panchachuli Earth, Munsiyari — Homestay with Panchachuli Views',
      description:
        'Stay at Panchachuli Earth in Munsiyari: Himalayan views of the Panchachuli peaks, local food, and a base for Khaliya Top and the Johar valley.'
    }
  },

  {
    slug: 'the-cozy-bnb-rishikesh',
    section: 'stays',
    category: 'villas-homestays',
    title: 'The Cozy BnB, Rishikesh',
    location: 'Rishikesh',
    destinationSlug: 'uttarakhand',
    tagline: 'A calm corner in the yoga capital',
    description:
      'A warm, homely bed and breakfast in Rishikesh — close to the river, away from the noise, and easy on the budget.',
    overview: [
      'Rishikesh is where the Ganga leaves the mountains, and it pulls in yoga students, pilgrims, rafters and people who just want to sit by the river for a few days. It can also be loud and busy, which is why where you sleep matters.',
      'The Cozy BnB is a small, friendly place to come back to. Mornings start with breakfast and a plan for the day — a yoga class, the ghats, a walk across the bridges or a rafting run from Shivpuri — and end with the evening aarti on the river. It is also the natural start or finish for Flow with the Ganga and the Char Dham yatra.'
    ],
    image: 'photo-1609920658906-8223bd289001',
    gallery: [
      'photo-1506126613408-eca07ce68773',
      'photo-1545389336-cf090694435e',
      'photo-1496417263034-38ec4f0b665a',
      'photo-1571536802807-30451e3955d8'
    ],
    facts: [
      { label: 'Setting', value: 'River town' },
      { label: 'Best for', value: 'Solo travellers & yoga trips' },
      { label: 'Ideal stay', value: '2 – 4 nights' },
      { label: 'Getting there', value: 'About 45 min from Dehradun airport' }
    ],
    highlights: [
      'Homely rooms and breakfast with hosts who know the town',
      'Easy access to the ghats and the evening Ganga aarti',
      'Help booking yoga classes, rafting and day hikes',
      'A good base before or after the Char Dham and Flow with the Ganga'
    ],
    goodToKnow: [
      'Rishikesh is a vegetarian, alcohol-free town in its central areas.',
      'Rafting usually runs from September to June and pauses for the monsoon.',
      'Summer afternoons are hot. Plan the outdoors for early and late in the day.',
      'Room and breakfast details are confirmed with your quote.'
    ],
    bestTime: 'September to April',
    seo: {
      title: 'The Cozy BnB, Rishikesh — Homely Bed & Breakfast by the Ganga',
      description:
        'Stay at The Cozy BnB in Rishikesh: a friendly bed and breakfast close to the ghats, with help arranging yoga, rafting and the Ganga aarti.'
    }
  },

  {
    slug: 'glampinn-woods-sonapani',
    section: 'stays',
    category: 'camps-glamping',
    title: 'Glampinn Woods, Sonapani',
    location: 'Sonapani, near Mukteshwar',
    destinationSlug: 'uttarakhand',
    tagline: 'Proper beds, a forest and a campfire',
    description:
      'Glamping in the woods near Mukteshwar — comfortable tents, campfire evenings and Himalayan views through the trees.',
    overview: [
      'Sonapani is a small settlement tucked into the forested ridges near Satkhol and Mukteshwar, with oak and pine all around and the snow range visible on clear days.',
      'Glampinn Woods is the easiest way to sleep outdoors without giving anything up. The tents have real beds and attached comforts, dinner is cooked over the fire, and the only sounds at night are the forest ones. Days go on birding walks, village trails and doing very little in a hammock. It is a favourite for couples, friends and families with children who have never camped before.'
    ],
    image: 'photo-1487730116645-74489c95b41b',
    gallery: [
      'photo-1504280390367-361c6d9f38f4',
      'photo-1478131143081-80f7f84ca84d',
      'photo-1519681393784-d120267933ba',
      'photo-1441974231531-c6227db76b6e'
    ],
    facts: [
      { label: 'Setting', value: 'Oak and pine forest' },
      { label: 'Best for', value: 'Friends, couples & families' },
      { label: 'Ideal stay', value: '2 nights' },
      { label: 'Getting there', value: 'About 3 hrs from Kathgodam' }
    ],
    highlights: [
      'Furnished tents with proper beds in the middle of the forest',
      'Campfire dinners and clear night skies',
      'Guided birding and village walks through the woods',
      'Close to Mukteshwar, Satkhol and the Hartola orchards'
    ],
    goodToKnow: [
      'Nights are cold for most of the year. Bring a fleece and a warm hat.',
      'In the monsoon (July – August) the forest is lush but trails can be slippery.',
      'Pack a torch and closed shoes for getting around after dark.',
      'Tent types and meal plans are confirmed with your quote.'
    ],
    bestTime: 'March to June and September to December',
    featured: true,
    seo: {
      title: 'Glampinn Woods, Sonapani — Glamping near Mukteshwar',
      description:
        'Glamping at Glampinn Woods in Sonapani, near Mukteshwar: furnished tents, campfire evenings, forest walks and Himalayan views. Book with Pravaah.'
    }
  },

  {
    slug: 'guldaar-valley-kosi',
    section: 'stays',
    category: 'experiential-stays',
    title: 'Guldaar Valley, Kosi',
    location: 'Kosi valley, Almora district',
    destinationSlug: 'uttarakhand',
    tagline: 'Leopard country on the Kosi river',
    description:
      'An experiential stay in the Kosi river valley near Almora — river walks, forest trails and the wild side of Kumaon.',
    overview: [
      'Guldaar is the Kumaoni word for leopard, and the forests of the Kosi valley are very much their territory. The river runs clear over stones below pine-covered slopes, and the villages along it still farm terraces the way they always have.',
      'Guldaar Valley is a stay built around the landscape. Walk the river with a local naturalist, look for birds and tracks on the forest trails, visit the ancient Katarmal Sun Temple on the hill above, and eat what the valley grows. It is a place for people who want to learn a little about where they are, not just look at it.'
    ],
    image: 'photo-1469474968028-56623f02e42e',
    gallery: [
      'photo-1447752875215-b2761acb3c5d',
      'photo-1609920658906-8223bd289001',
      'photo-1478131143081-80f7f84ca84d',
      'photo-1441974231531-c6227db76b6e'
    ],
    facts: [
      { label: 'Setting', value: 'River valley and forest' },
      { label: 'Best for', value: 'Nature lovers & families' },
      { label: 'Ideal stay', value: '2 – 3 nights' },
      { label: 'Getting there', value: 'About 3 hrs from Kathgodam' }
    ],
    highlights: [
      'Guided river and forest walks with a local naturalist',
      'Birding along the Kosi, with a chance of wildlife signs on the trails',
      'The Katarmal Sun Temple, one of the oldest in Kumaon',
      'Village visits and seasonal, locally grown food'
    ],
    goodToKnow: [
      'Wildlife sightings are never guaranteed — the forest is not a zoo.',
      'Almora town, Kasar Devi and Binsar are all within an easy drive.',
      'The river is cold and fast in places. Swim only where your guide says it is safe.',
      'Activities and meal plans are confirmed with your quote.'
    ],
    bestTime: 'October to June',
    seo: {
      title: 'Guldaar Valley, Kosi — Experiential Nature Stay near Almora',
      description:
        'An experiential stay at Guldaar Valley on the Kosi river near Almora: forest and river walks, birding, Katarmal Sun Temple and local food.'
    }
  },

  {
    slug: 'ekaant-organic-farm-stay-chakulwa',
    section: 'stays',
    category: 'experiential-stays',
    title: 'Ekaant — The Organic Farm Stay, Chakulwa',
    location: 'Chakulwa, Kumaon foothills',
    destinationSlug: 'uttarakhand',
    tagline: 'Solitude, soil and slow food',
    description:
      'An organic farm stay in the Kumaon foothills — pick your dinner, learn to cook it and sleep somewhere truly quiet.',
    overview: [
      'Ekaant means solitude, and it is an honest name. The farm sits in the foothills of Kumaon, away from the main roads, with fields, fruit trees and a kitchen garden that decides what is for dinner.',
      'Guests are welcome to join in as much or as little as they like — harvesting, milking, making bread or ghee, or cooking a Kumaoni meal with the family. The rest of the time is for walks, a book and long evenings outdoors. It is a wonderful stay for families with children, and for anyone who wants to reconnect with where food actually comes from.'
    ],
    image: 'photo-1500382017468-9049fed747ef',
    gallery: [
      'photo-1589136777351-fdc9c9cab193',
      'photo-1464207687429-7505649dae38',
      'photo-1631452180519-c014fe946bc7',
      'photo-1469474968028-56623f02e42e'
    ],
    facts: [
      { label: 'Setting', value: 'Working organic farm' },
      { label: 'Best for', value: 'Families & food lovers' },
      { label: 'Ideal stay', value: '2 – 3 nights' },
      { label: 'Getting there', value: 'Close to Kathgodam and Bhimtal' }
    ],
    highlights: [
      'Farm-to-table meals from the fields and kitchen garden',
      'Hands-on farm activities for adults and children',
      'Kumaoni cooking sessions with the family',
      'Real quiet — no traffic, no crowds'
    ],
    goodToKnow: [
      'This is a working farm. Expect roosters at dawn and a few muddy paths.',
      'Meals are seasonal and mostly vegetarian. Tell us about any dietary needs in advance.',
      'It pairs well with Pi Palace, Bhimtal, for a family trip that mixes comfort and countryside.',
      'Activities and room details are confirmed with your quote.'
    ],
    bestTime: 'Year-round; October to April is most comfortable',
    seo: {
      title: 'Ekaant Organic Farm Stay, Chakulwa — Farm Stay in Kumaon',
      description:
        'Stay at Ekaant, an organic farm in Chakulwa in the Kumaon foothills: farm-to-table food, hands-on farm activities and complete quiet.'
    }
  }
]
