import type { Listing } from '~/types'

/**
 * Stays. Rates depend on season and room category, so no prices are published —
 * every detail page routes to an enquiry instead.
 */
export const stays: Listing[] = [
  {
    slug: 'dharohar-retreat-satkhol',
    section: 'stays',
    category: 'hotels-resorts',
    title: 'Dharohar Retreat, Mukteshwar',
    location: 'Satkhol, near Mukteshwar',
    destinationSlug: 'uttarakhand',
    tagline: 'Kumaoni character above an oak and pine valley',
    description:
      'A hillside resort in Satkhol, built in the Kumaoni style, looking out over a wide valley of oak and pine towards the Himalaya.',
    overview: [
      'Satkhol is a small hamlet in the Nainital hills, a short drive from Mukteshwar, where the road runs along a ridge of oak and pine and the snow peaks of Kumaon and Garhwal fill the horizon on clear days.',
      'Dharohar — "heritage" — is built in the traditional Kumaoni architectural style and makes the most of that view. Rooms range from comfortable superior rooms to family suites and a Kumaoni suite, with the premium rooms adding balconies, fireplaces and jacuzzis. Meals are served in the Dhara Kumaoni Cafe or out on the lawn, and every stay includes a guided nature walk. It is an easy, comfortable choice for families and couples who want the quiet of the hills with a full resort around them.'
    ],
    image: '/images/stays/dharohar-retreat-satkhol/cover',
    gallery: [
      '/images/stays/dharohar-retreat-satkhol/gallery-05',
      '/images/stays/dharohar-retreat-satkhol/gallery-06',
      '/images/stays/dharohar-retreat-satkhol/gallery-01',
      '/images/stays/dharohar-retreat-satkhol/gallery-02',
      '/images/stays/dharohar-retreat-satkhol/gallery-04',
      '/images/stays/dharohar-retreat-satkhol/gallery-03'
    ],
    facts: [
      { label: 'Setting', value: 'Oak and pine valley' },
      { label: 'Best for', value: 'Families & couples' },
      { label: 'Ideal stay', value: '2 – 3 nights' },
      { label: 'Getting there', value: 'About 3 hrs from Kathgodam' }
    ],
    highlights: [
      'Valley and Himalayan views across oak and pine forest',
      'Traditional Kumaoni architecture, with suites that have fireplaces and jacuzzis',
      'Breakfast included, and a complimentary guided nature walk',
      'The Dhara Kumaoni Cafe, with indoor and lawn seating',
      'A children\'s play area, and a sunset point about a kilometre away'
    ],
    goodToKnow: [
      'Room categories include superior rooms, family rooms and suites, a Kumaoni suite and a presidential room — we match the room to your group.',
      'The Dhokaney waterfall walk and Mukteshwar temple are both close by.',
      'Winters are cold and can bring snow. Rooms with fireplaces book up first.',
      'Rates and availability are confirmed with your quote.'
    ],
    bestTime: 'Year-round; October to February for the clearest views',
    featured: true,
    seo: {
      title: 'Dharohar Retreat, Mukteshwar — Kumaoni Resort in Satkhol',
      description:
        'Stay at Dharohar Retreat in Satkhol, near Mukteshwar: Kumaoni-style rooms and suites, valley and Himalayan views, nature walks and the Dhara Kumaoni Cafe.'
    }
  },

  {
    slug: 'moksha-retreat-kasar-devi',
    section: 'stays',
    category: 'hotels-resorts',
    title: 'Moksha Retreat, Kasar Devi',
    location: 'Kasar Devi, near Almora',
    destinationSlug: 'uttarakhand',
    tagline: 'A quiet ridge above Almora, made for slowing down',
    description:
      'A peaceful retreat on the Kasar Devi ridge above Almora — pine forest, Himalayan views and the calm the hill has drawn seekers to for a century.',
    overview: [
      'Kasar Devi is a pine-covered ridge a few kilometres above Almora, crowned by a small hilltop temple to the goddess. Swami Vivekananda meditated here, and through the twentieth century the ridge drew writers, artists and seekers looking for somewhere quiet to think. On clear days the snow range runs across the whole northern horizon.',
      'Moksha Retreat is built for that same stillness. Mornings begin with the view and a walk up to the temple, days go on forest trails, Almora\'s old bazaar and the Bright End Corner sunset point, and evenings end early and unhurried. It is the stay we suggest for couples and anyone who wants a few days to properly switch off.'
    ],
    image: 'photo-1596394516093-501ba68a0ba6',
    gallery: [
      'photo-1582719478250-c89cae4dc85b',
      'photo-1519681393784-d120267933ba',
      'photo-1506905925346-21bda4d32df4',
      'photo-1496417263034-38ec4f0b665a'
    ],
    facts: [
      { label: 'Setting', value: 'Pine ridge above Almora' },
      { label: 'Best for', value: 'Couples & slow travellers' },
      { label: 'Ideal stay', value: '2 – 4 nights' },
      { label: 'Getting there', value: 'About 3.5 hrs from Kathgodam' }
    ],
    highlights: [
      'Himalayan views across the Almora hills on clear mornings',
      'A short walk to the hilltop Kasar Devi temple',
      'Pine forest trails and quiet village walks from the door',
      'Easy outings to Almora bazaar, Katarmal Sun Temple and Binsar'
    ],
    goodToKnow: [
      'The ridge is peaceful by design — expect early nights and very little traffic.',
      'Winters are cold and clear, with the best mountain views from October to February.',
      'Almora town is about 20 minutes away for ATMs, pharmacies and the market.',
      'Room categories, meal plans and rates are confirmed with your quote.'
    ],
    bestTime: 'Year-round; October to February for the clearest views',
    seo: {
      title: 'Moksha Retreat, Kasar Devi — Peaceful Stay near Almora',
      description:
        'Stay at Moksha Retreat on the Kasar Devi ridge near Almora: Himalayan views, pine forest walks, the Kasar Devi temple and quiet, unhurried days.'
    }
  },

  {
    slug: 'hriday-bhoomi-jim-corbett',
    section: 'stays',
    category: 'hotels-resorts',
    title: 'Hriday Bhoomi, Jim Corbett',
    location: 'Dhela, Jim Corbett',
    destinationSlug: 'uttarakhand',
    tagline: 'Luxury cottages and a villa at the edge of the forest',
    description:
      'Private cottages and a five-bedroom villa in Dhela, minutes from the Corbett safari gates — with a pool, a farm and the jungle all around.',
    overview: [
      'Hriday Bhoomi — "land of the heart" — sits in the small village of Dhela, on the edge of Jim Corbett National Park, about 13 km from Ramnagar. The last stretch in is a five-kilometre drive through the forest, and the Dhela safari gate, for the Dhela and Jhirna zones, is only minutes away.',
      'It blends the warmth of a homestay with the comforts of a resort: five independent cottages for couples and small families, and a five-bedroom private villa for larger families and groups. There is a swimming pool, an in-house restaurant and wide green lawns, and the property keeps a light footprint, with its own organic farm. Days go on jungle safaris and nature walks; evenings end with riverside dinners and a bonfire.'
    ],
    image: '/images/stays/hriday-bhoomi-jim-corbett/cover',
    gallery: [
      '/images/stays/hriday-bhoomi-jim-corbett/gallery-02',
      '/images/stays/hriday-bhoomi-jim-corbett/gallery-01',
      '/images/stays/hriday-bhoomi-jim-corbett/gallery-04',
      '/images/stays/hriday-bhoomi-jim-corbett/gallery-06',
      '/images/stays/hriday-bhoomi-jim-corbett/gallery-03',
      '/images/stays/hriday-bhoomi-jim-corbett/gallery-05'
    ],
    facts: [
      { label: 'Setting', value: 'Forest edge, Jim Corbett' },
      { label: 'Best for', value: 'Families, groups & wildlife lovers' },
      { label: 'Ideal stay', value: '2 – 3 nights' },
      { label: 'Getting there', value: 'About 13 km from Ramnagar' }
    ],
    highlights: [
      'Minutes from the Dhela gate for safaris in the Dhela and Jhirna zones',
      'Five independent cottages, plus a five-bedroom private villa for groups',
      'Swimming pool, in-house restaurant and landscaped lawns',
      'Guided nature walks, riverside dining and bonfire evenings',
      'Organic farm and a low-density, light-footprint layout'
    ],
    goodToKnow: [
      'Safari permits are limited and sell out early — we book them alongside the stay.',
      'Safari zones and timings are set by the park and change with the season. We confirm them for your dates.',
      'Ramnagar has direct trains from Delhi, and Pantnagar is the nearest airport.',
      'The villa suits large families and celebrations. Rates and availability are confirmed with your quote.'
    ],
    bestTime: 'October to June',
    featured: true,
    seo: {
      title: 'Hriday Bhoomi, Jim Corbett — Luxury Cottages & Villa near Dhela',
      description:
        'Stay at Hriday Bhoomi in Dhela, Jim Corbett: luxury cottages and a five-bedroom villa with a pool, minutes from the Dhela and Jhirna safari zones.'
    }
  },

  {
    slug: 'har-shikhar-bhimtal',
    section: 'stays',
    category: 'hotels-resorts',
    title: 'Har Shikhar, Bhimtal',
    location: 'Bhimtal, Nainital district',
    destinationSlug: 'uttarakhand',
    tagline: 'A hillside base in the Kumaon lake country',
    description:
      'A comfortable hotel stay in Bhimtal — the calmer lake next door to Nainital, and an easy first stop in the Kumaon hills.',
    overview: [
      'Bhimtal is the lake town people pass through on the way to Nainital and wish they had stayed in instead. The lake is larger, the promenade is calmer, and the hills around it are a patchwork of forest, orchards and old stone houses.',
      'Har Shikhar gives you a comfortable, full-service base for exploring it. Spend the mornings on the water, drive out to Sattal, Naukuchiatal and Nainital for the day, and come back to a room you do not have to think about. It is the stay we suggest for families, for first visits to the mountains, and for anyone who wants the hills without the effort.'
    ],
    image: 'photo-1445019980597-93fa8acb246c',
    gallery: [
      'photo-1578683010236-d716f9a3f461',
      'photo-1464822759023-fed622ff2c3b',
      'photo-1464207687429-7505649dae38',
      'photo-1519681393784-d120267933ba'
    ],
    facts: [
      { label: 'Setting', value: 'Lakeside hill town' },
      { label: 'Best for', value: 'Families & couples' },
      { label: 'Ideal stay', value: '2 – 3 nights' },
      { label: 'Getting there', value: 'About 1 hr from Kathgodam' }
    ],
    highlights: [
      'Close to Bhimtal lake, with boating and the island aquarium',
      'Day trips to Sattal, Naukuchiatal and Nainital without changing hotels',
      'An easy first night in the hills after the train or the drive from Delhi',
      'In-house dining and a team that can arrange drivers and local guides'
    ],
    goodToKnow: [
      'Room categories, meal plans and rates vary by season — we confirm the details with your quote.',
      'Weekends and school holidays fill quickly. Book early for May, June and October.',
      'Evenings are cool even in summer. Pack a warm layer.',
      'Pair it with paragliding at Naukuchiatal, ten minutes down the road.'
    ],
    bestTime: 'March to June and September to December',
    seo: {
      title: 'Har Shikhar, Bhimtal — Hotel Stay in the Kumaon Lake Country',
      description:
        'Stay at Har Shikhar in Bhimtal with Pravaah: a comfortable hotel base for exploring Bhimtal lake, Sattal, Naukuchiatal and Nainital.'
    }
  },

  {
    slug: 'naini-retreat-nainital',
    section: 'stays',
    category: 'hotels-resorts',
    title: 'Naini Retreat, Nainital',
    location: 'Ayarpatta, Nainital',
    destinationSlug: 'uttarakhand',
    tagline: 'Colonial charm on the slopes above Naini lake',
    description:
      'A heritage hotel in a quiet, wooded corner of Nainital — close enough to walk to the lake, far enough to hear the forest.',
    overview: [
      'Nainital grew up as a British hill station around a green, eye-shaped lake, and the best of its old character survives on the wooded slopes above the town, away from the bustle of the Mall Road.',
      'Naini Retreat sits on those slopes, in a heritage building with gardens, lawns and views down through the trees. Spend the days boating on the lake, riding the ropeway to Snow View, walking up to Tiffin Top or visiting the Naina Devi temple, then come back to a quiet, full-service hotel with the forest all around. It is a classic choice for families and couples alike.'
    ],
    image: 'photo-1510798831971-661eb04b3739',
    gallery: [
      'photo-1506905925346-21bda4d32df4',
      'photo-1582719478250-c89cae4dc85b',
      'photo-1578683010236-d716f9a3f461',
      'photo-1455156218388-5e61b526818b'
    ],
    facts: [
      { label: 'Setting', value: 'Wooded slopes above the lake' },
      { label: 'Best for', value: 'Families & couples' },
      { label: 'Ideal stay', value: '2 – 3 nights' },
      { label: 'Getting there', value: 'About 1.5 hrs from Kathgodam' }
    ],
    highlights: [
      'A heritage property in a quiet, forested part of Nainital',
      'Gardens and lawns with views through the trees',
      'Easy access to Naini lake, the Mall Road and the Naina Devi temple',
      'Day trips to Snow View, Tiffin Top, Bhimtal and Sattal'
    ],
    goodToKnow: [
      'Nainital is busy on weekends and in May and June — book well ahead for those dates.',
      'Traffic into town is restricted at peak times. We plan transfers around it.',
      'Winters are cold and can bring snow. Pack layers from October to March.',
      'Room categories, meal plans and rates are confirmed with your quote.'
    ],
    bestTime: 'March to June and September to December',
    featured: true,
    seo: {
      title: 'Naini Retreat, Nainital — Heritage Hotel above Naini Lake',
      description:
        'Stay at Naini Retreat in Nainital with Pravaah: a heritage hotel on the wooded slopes above the lake, close to the Mall Road, Snow View and Tiffin Top.'
    }
  },

  {
    slug: 'alka-the-lake-side-hotel-nainital',
    section: 'stays',
    category: 'hotels-resorts',
    title: 'Alka The Lake Side Hotel, Nainital',
    location: 'Mall Road, Nainital',
    destinationSlug: 'uttarakhand',
    tagline: 'Wake up to Naini lake outside the window',
    description:
      'A classic lakeside hotel on Nainital\'s Mall Road — step out of the door and you are on the promenade by the water.',
    overview: [
      'For most people, Nainital means the lake: boats drifting across the water, the hills rising steeply on every side and the Mall Road running along the shore, busy with cafés and shops from morning till late.',
      'Alka The Lake Side Hotel puts you right in the middle of it. Rooms look out over Naini lake, the boat club and the Naina Devi temple are a short walk along the promenade, and everything Nainital is known for — the ropeway, the Flats, the old bakeries and the Tibetan market — is on your doorstep. It is the stay for people who want to be in the heart of town, not above it.'
    ],
    image: 'photo-1610715936287-6c2ad208cdbf',
    gallery: [
      'photo-1578683010236-d716f9a3f461',
      'photo-1464207687429-7505649dae38',
      'photo-1455156218388-5e61b526818b',
      'photo-1519681393784-d120267933ba'
    ],
    facts: [
      { label: 'Setting', value: 'Lakefront, Mall Road' },
      { label: 'Best for', value: 'Families & first-time visitors' },
      { label: 'Ideal stay', value: '2 – 3 nights' },
      { label: 'Getting there', value: 'About 1.5 hrs from Kathgodam' }
    ],
    highlights: [
      'A lakefront location on the Mall Road',
      'Lake-view rooms looking across Naini lake',
      'Walking distance of the boat club, Naina Devi temple and the ropeway',
      'Cafés, bakeries and the Tibetan market right outside'
    ],
    goodToKnow: [
      'The Mall Road is lively until late, especially on weekends and in summer.',
      'Vehicle access to the Mall Road is restricted at peak hours. We plan arrivals around it.',
      'Lake-view rooms are limited and book up first — tell us early if you want one.',
      'Room categories, meal plans and rates are confirmed with your quote.'
    ],
    bestTime: 'March to June and September to December',
    seo: {
      title: 'Alka The Lake Side Hotel, Nainital — Lakefront Stay on the Mall Road',
      description:
        'Stay at Alka The Lake Side Hotel on Nainital\'s Mall Road with Pravaah: lake-view rooms, the promenade on your doorstep and easy walks to the boat club and Naina Devi temple.'
    }
  },

  {
    slug: 'nirvaana-mansion-hartola',
    section: 'stays',
    category: 'villas-homestays',
    title: 'Nirvaana Mansion, Hartola',
    location: 'Hartola, near Mukteshwar',
    destinationSlug: 'uttarakhand',
    tagline: 'Orchards, silence and the Himalaya at the window',
    description:
      'A quiet homestay in the orchard village of Hartola, with long views to the snow peaks and nothing on the schedule.',
    overview: [
      'Hartola sits on a ridge near Mukteshwar, surrounded by apple, plum and apricot orchards and oak forest. On a clear morning the whole snow range lines up across the horizon — Trishul, Nanda Devi and the peaks beyond.',
      'Nirvaana Mansion is built for exactly that kind of stillness. Home-cooked Kumaoni meals, a sunny verandah, forest walks to neighbouring villages, and evenings that end early because there is no reason for them not to. It is the stay we recommend when someone tells us they just need to switch off.'
    ],
    image: '/images/stays/nirvaana-mansion-hartola/cover',
    gallery: [
      '/images/stays/nirvaana-mansion-hartola/gallery-05',
      '/images/stays/nirvaana-mansion-hartola/gallery-01',
      '/images/stays/nirvaana-mansion-hartola/gallery-03',
      '/images/stays/nirvaana-mansion-hartola/gallery-02',
      '/images/stays/nirvaana-mansion-hartola/gallery-04'
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
      title: 'Nirvaana Mansion, Hartola — Orchard Stay near Mukteshwar',
      description:
        'Stay at Nirvaana Mansion in Hartola, near Mukteshwar, with Himalayan views, orchards and home-cooked Kumaoni food. Book with Pravaah.'
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
    image: '/images/stays/panchachuli-earth-munsiyari/cover',
    gallery: [
      '/images/stays/panchachuli-earth-munsiyari/gallery-01',
      '/images/stays/panchachuli-earth-munsiyari/gallery-05',
      '/images/stays/panchachuli-earth-munsiyari/gallery-02',
      '/images/stays/panchachuli-earth-munsiyari/gallery-03'
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
    image: '/images/stays/the-cozy-bnb-rishikesh/cover',
    gallery: [
      '/images/stays/the-cozy-bnb-rishikesh/gallery-06',
      '/images/stays/the-cozy-bnb-rishikesh/gallery-02',
      '/images/stays/the-cozy-bnb-rishikesh/gallery-03',
      '/images/stays/the-cozy-bnb-rishikesh/gallery-01',
      '/images/stays/the-cozy-bnb-rishikesh/gallery-04',
      '/images/stays/the-cozy-bnb-rishikesh/gallery-05'
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
      'Camping in the woods near Mukteshwar — comfortable tents, campfire evenings and Himalayan views through the trees.',
    overview: [
      'Sonapani is a small settlement tucked into the forested ridges near Satkhol and Mukteshwar, with oak and pine all around and the snow range visible on clear days.',
      'Glampinn Woods is the easiest way to sleep outdoors without giving anything up. The tents have real beds and attached comforts, dinner is cooked over the fire, and the only sounds at night are the forest ones. Days go on birding walks, village trails and doing very little in a hammock. It is a favourite for couples, friends and families with children who have never camped before.'
    ],
    image: '/images/stays/glampinn-woods-sonapani/cover',
    gallery: [
      '/images/stays/glampinn-woods-sonapani/gallery-02',
      '/images/stays/glampinn-woods-sonapani/gallery-04',
      '/images/stays/glampinn-woods-sonapani/gallery-01',
      '/images/stays/glampinn-woods-sonapani/gallery-05'
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
      title: 'Glampinn Woods, Sonapani — Camping near Mukteshwar',
      description:
        'Camping at Glampinn Woods in Sonapani, near Mukteshwar: furnished tents, campfire evenings, forest walks and Himalayan views. Book with Pravaah.'
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
    image: '/images/stays/guldaar-valley-kosi/cover',
    gallery: [
      '/images/stays/guldaar-valley-kosi/gallery-02',
      '/images/stays/guldaar-valley-kosi/gallery-05',
      '/images/stays/guldaar-valley-kosi/gallery-03',
      '/images/stays/guldaar-valley-kosi/gallery-04',
      '/images/stays/guldaar-valley-kosi/gallery-06'
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
    title: 'Ekaant — The Organic Farm Stay, Near Jim Corbett',
    location: 'Chakulwa, Kumaon foothills',
    destinationSlug: 'uttarakhand',
    tagline: 'Solitude, soil and slow food',
    description:
      'An organic farm stay in the Kumaon foothills — pick your dinner, learn to cook it and sleep somewhere truly quiet.',
    overview: [
      'Ekaant means solitude, and it is an honest name. The farm sits in the foothills of Kumaon, away from the main roads, with fields, fruit trees and a kitchen garden that decides what is for dinner.',
      'Guests are welcome to join in as much or as little as they like — harvesting, milking, making bread or ghee, or cooking a Kumaoni meal with the family. The rest of the time is for walks, a book and long evenings outdoors. It is a wonderful stay for families with children, and for anyone who wants to reconnect with where food actually comes from.'
    ],
    image: '/images/stays/ekaant-organic-farm-stay-chakulwa/cover',
    gallery: [
      '/images/stays/ekaant-organic-farm-stay-chakulwa/gallery-09',
      '/images/stays/ekaant-organic-farm-stay-chakulwa/gallery-02',
      '/images/stays/ekaant-organic-farm-stay-chakulwa/gallery-01',
      '/images/stays/ekaant-organic-farm-stay-chakulwa/gallery-06',
      '/images/stays/ekaant-organic-farm-stay-chakulwa/gallery-08',
      '/images/stays/ekaant-organic-farm-stay-chakulwa/gallery-04',
      '/images/stays/ekaant-organic-farm-stay-chakulwa/gallery-07',
      '/images/stays/ekaant-organic-farm-stay-chakulwa/gallery-05'
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
      'It pairs well with Har Shikhar, Bhimtal, for a family trip that mixes comfort and countryside.',
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
