import type { Tour } from '~/types'

/**
 * Dummy pricing for launch. Prices are "starting from", per person, on twin sharing.
 * Replace `price` values here when real rates are confirmed — nothing else changes.
 */
export const tours: Tour[] = [
  {
    slug: 'magical-kashmir',
    title: 'Magical Kashmir',
    destinationSlug: 'kashmir',
    destination: 'Kashmir',
    duration: '7 Days / 6 Nights',
    nights: 6,
    days: 7,
    price: 24999,
    image: 'photo-1501785888041-af3ef285b470',
    gallery: [
      'photo-1598091383021-15ddea10925d',
      'photo-1476514525535-07fb3b4ae5f1',
      'photo-1544735716-392fe2489ffa',
      'photo-1626621341517-bbf3d9990a23'
    ],
    description:
      'Srinagar, Gulmarg, Pahalgam and Sonamarg at a pace that leaves room for the valley to happen to you.',
    overview: [
      'This is the classic Kashmir circuit, planned so you are never in the car for more than four hours and always somewhere worth waking up in. Two nights in Srinagar bracket the trip — one on a houseboat, one on land — with the meadows in between.',
      'We keep mornings free at Gulmarg and Pahalgam because that is when the light is best and the crowds have not yet arrived, and we build in a full unstructured day so you can follow whatever you found on day three.'
    ],
    themes: ['Mountains', 'Honeymoon', 'Family'],
    highlights: [
      'A night on a cedar houseboat on Dal Lake',
      'Gondola to Apharwat Peak, above the treeline in Gulmarg',
      'Aru and Betaab valleys on foot from Pahalgam',
      'The Sonamarg road and the walk towards Thajiwas glacier',
      'Saffron fields at Pampore and the Mughal gardens of Srinagar'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Srinagar — Dal Lake',
        description:
          'Met at the airport and driven to your houseboat. The afternoon is a shikara ride through the floating gardens, ending at the Mughal gardens for sunset.',
        stay: 'Deluxe houseboat, Dal Lake',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Srinagar — Gulmarg',
        description:
          'A two-hour drive through rice fields and willow to the meadow at Gulmarg. Gondola to the first stage, then the walk along the ridge if the weather is open.',
        stay: 'Resort, Gulmarg',
        meals: 'Breakfast, dinner'
      },
      {
        day: 3,
        title: 'Gulmarg at your own pace',
        description:
          'A free day. Ride to Apharwat Peak, walk the pine loop to Strawberry Valley, or simply sit out on the meadow. Skiing and snowboarding can be arranged in season.',
        stay: 'Resort, Gulmarg',
        meals: 'Breakfast, dinner'
      },
      {
        day: 4,
        title: 'Gulmarg — Pahalgam',
        description:
          'The long, pretty drive south via Pampore, stopping at the saffron fields and a walnut-wood workshop before arriving at the Lidder river.',
        stay: 'Riverside hotel, Pahalgam',
        meals: 'Breakfast, dinner'
      },
      {
        day: 5,
        title: 'Aru, Betaab and Chandanwari',
        description:
          'A full day in the three valleys above Pahalgam, with a guided walk in Aru and time by the river at Betaab.',
        stay: 'Riverside hotel, Pahalgam',
        meals: 'Breakfast, dinner'
      },
      {
        day: 6,
        title: 'Pahalgam — Sonamarg — Srinagar',
        description:
          'North to the meadow of gold. A walk towards Thajiwas glacier, then down to Srinagar for the last night on land.',
        stay: 'Boutique hotel, Srinagar',
        meals: 'Breakfast'
      },
      {
        day: 7,
        title: 'Srinagar old city — Departure',
        description:
          'A morning walk through the old city — the Jamia Masjid, the copper bazaar and a papier-mâché studio — before the transfer to the airport.',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Six nights of accommodation, including one night on a houseboat',
      'Daily breakfast and dinner as listed',
      'Private vehicle with driver for all transfers and sightseeing',
      'Airport pickup and drop in Srinagar',
      'Local guide for Srinagar old city and Aru valley walks',
      'All applicable state taxes and toll charges'
    ],
    exclusions: [
      'Flights to and from Srinagar',
      'Gondola tickets in Gulmarg and pony rides',
      'Lunches and any meals not specified',
      'Travel insurance and personal expenses',
      'Anything not listed under inclusions'
    ],
    importantInfo: [
      'Carry a government photo ID for all travellers — it is checked along the highway.',
      'Gondola operations depend on weather and can be suspended at short notice.',
      'Vehicles are not permitted beyond Chandanwari; ponies and local taxis cover the last stretch.',
      'Evenings are cold from October onwards, even when afternoons are warm.'
    ],
    bestTimeToTravel: 'March to October; December to February for snow',
    groupSize: 'Private departures, 2 – 12 travellers',
    popular: true,
    seo: {
      title: 'Magical Kashmir Tour — 7 Days in Srinagar, Gulmarg & Pahalgam',
      description:
        'A 7-day Kashmir itinerary from Pravaah covering Dal Lake houseboats, Gulmarg, Pahalgam and Sonamarg. Starting from ₹24,999 per person.'
    }
  },

  {
    slug: 'himachal-hill-trail',
    title: 'Himachal Hill Trail',
    destinationSlug: 'himachal-pradesh',
    destination: 'Himachal Pradesh',
    duration: '6 Days / 5 Nights',
    nights: 5,
    days: 6,
    price: 21499,
    image: 'photo-1609920658906-8223bd289001',
    gallery: [
      'photo-1418065460487-3e41a6c84dc5',
      'photo-1506905925346-21bda4d32df4',
      'photo-1533240332313-0db49b459ad6',
      'photo-1504280390367-361c6d9f38f4'
    ],
    description:
      'Shimla, the Tirthan valley and Manali — forest, river and orchard, without the usual hill-station rush.',
    overview: [
      'Most Himachal packages spend their days on the highway. This one does the opposite: three bases, two nights each, and walking wherever walking is better than driving.',
      'Tirthan is the reason to take this route. It is a river valley inside the Great Himalayan National Park buffer, with trout in the water and almost no traffic, and it makes the jump from Shimla to Manali feel like a journey instead of a transfer.'
    ],
    themes: ['Mountains', 'Adventure', 'Weekend'],
    highlights: [
      'The Kalka–Shimla toy train through 100 tunnels',
      'Two nights on the river in the Tirthan valley',
      'Guided day walk in the Great Himalayan National Park buffer',
      'Jalori Pass and the forest trail to Serolsar Lake',
      'Old Manali, the orchards and the Solang road'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Shimla',
        description:
          'Pickup from Chandigarh and the climb to Shimla. Evening on the Ridge and a walk down Mall Road as the lights come on.',
        stay: 'Colonial-era hotel, Shimla',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Shimla — Tirthan Valley',
        description:
          'Morning at Jakhu and the Viceregal Lodge, then the drive into Kullu district and down to the Tirthan river.',
        stay: 'Riverside lodge, Tirthan',
        meals: 'Breakfast, dinner'
      },
      {
        day: 3,
        title: 'Great Himalayan National Park',
        description:
          'A guided walk from Gushaini into the park buffer — oak and deodar forest, river crossings and a packed lunch on the bank.',
        stay: 'Riverside lodge, Tirthan',
        meals: 'All meals'
      },
      {
        day: 4,
        title: 'Jalori Pass — Manali',
        description:
          'Over Jalori Pass at 3,120m with the short walk to Serolsar Lake, then down the Beas valley to Manali.',
        stay: 'Boutique hotel, Old Manali',
        meals: 'Breakfast, dinner'
      },
      {
        day: 5,
        title: 'Manali and the Solang road',
        description:
          'Hadimba temple and the old village in the morning, Solang and the Atal Tunnel viewpoint in the afternoon. Free evening in the cafés of Old Manali.',
        stay: 'Boutique hotel, Old Manali',
        meals: 'Breakfast'
      },
      {
        day: 6,
        title: 'Departure',
        description: 'Transfer to Bhuntar airport or an overnight coach to Delhi, depending on your onward plan.',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Five nights of accommodation across three valleys',
      'Daily breakfast, plus dinners and one full-board day as listed',
      'Private vehicle with a hill-experienced driver throughout',
      'Forest department guide and permits for the GHNP buffer walk',
      'Pickup from Chandigarh and drop to Bhuntar or Manali coach stand'
    ],
    exclusions: [
      'Toy train tickets, subject to availability',
      'Adventure activities such as rafting, paragliding and zorbing',
      'Lunches other than the trek day',
      'Travel insurance and personal expenses'
    ],
    importantInfo: [
      'Jalori Pass closes during heavy snow, usually January to March. We reroute via Aut when it does.',
      'The GHNP walk covers 8–10km on uneven ground; trekking shoes are required.',
      'Rohtang Pass needs a separate permit and quota, arranged on request at extra cost.',
      'Mobile coverage is limited in Tirthan — Jio and BSNL work best.'
    ],
    bestTimeToTravel: 'March to June, and September to November',
    groupSize: 'Private departures, 2 – 10 travellers',
    popular: true,
    seo: {
      title: 'Himachal Hill Trail — 6-Day Shimla, Tirthan & Manali Tour',
      description:
        'A 6-day Himachal itinerary from Pravaah covering Shimla, the Tirthan valley, Jalori Pass and Manali. Starting from ₹21,499 per person.'
    }
  },

  {
    slug: 'royal-rajasthan',
    title: 'Royal Rajasthan',
    destinationSlug: 'rajasthan',
    destination: 'Rajasthan',
    duration: '8 Days / 7 Nights',
    nights: 7,
    days: 8,
    price: 38999,
    image: 'photo-1599661046289-e31897846e41',
    gallery: [
      'photo-1477587458883-47145ed94245',
      'photo-1548013146-72479768bada',
      'photo-1566073771259-6a8506099945',
      'photo-1524492412937-b28074a5d7da'
    ],
    description:
      'Jaipur, Jodhpur and Udaipur with heritage stays, working craft studios and forts visited before the crowds.',
    overview: [
      'Three cities, three characters, and enough time in each to see them at the hours that matter. Forts open at eight and we are there at eight.',
      'Between the cities we stop where the craft is actually made — a block-printing family in Bagru, a blue pottery studio in Jaipur — rather than at the showrooms most tours are routed through.'
    ],
    themes: ['Heritage', 'Family', 'Honeymoon'],
    highlights: [
      'Amber Fort at opening time, ahead of the coaches',
      'Block printing with a Bagru family workshop',
      'Mehrangarh Fort and the blue lanes below it',
      'Two nights in restored heritage properties',
      'Sunset boat across Lake Pichola in Udaipur'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Jaipur',
        description:
          'Airport pickup and check-in at a heritage haveli. Evening at Hawa Mahal and a walk through the pink-city bazaars.',
        stay: 'Heritage haveli, Jaipur',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Amber, Jantar Mantar and the City Palace',
        description:
          'An early start at Amber Fort, then Jantar Mantar and the City Palace museum. Afternoon free for the markets.',
        stay: 'Heritage haveli, Jaipur',
        meals: 'Breakfast'
      },
      {
        day: 3,
        title: 'Bagru craft day — Jaipur',
        description:
          'Out to Bagru for a half-day block-printing workshop with a printing family, back via a blue pottery studio in the city.',
        stay: 'Heritage haveli, Jaipur',
        meals: 'Breakfast, lunch'
      },
      {
        day: 4,
        title: 'Jaipur — Jodhpur',
        description:
          'The drive west across the Aravallis, with a stop at the Pushkar lake and temple town if time allows.',
        stay: 'Boutique hotel, old Jodhpur',
        meals: 'Breakfast, dinner'
      },
      {
        day: 5,
        title: 'Mehrangarh and the blue city',
        description:
          'Mehrangarh Fort from the ramparts down, then a guided walk through the blue lanes, ending at the step well for lunch.',
        stay: 'Boutique hotel, old Jodhpur',
        meals: 'Breakfast'
      },
      {
        day: 6,
        title: 'Jodhpur — Ranakpur — Udaipur',
        description:
          'South via the marble Jain temple complex at Ranakpur, arriving at Lake Pichola in the late afternoon.',
        stay: 'Lakeside hotel, Udaipur',
        meals: 'Breakfast, dinner'
      },
      {
        day: 7,
        title: 'Udaipur',
        description:
          'City Palace and the Crystal Gallery in the morning, Saheliyon ki Bari after lunch, and a boat on the lake at sunset.',
        stay: 'Lakeside hotel, Udaipur',
        meals: 'Breakfast'
      },
      {
        day: 8,
        title: 'Departure',
        description: 'A slow morning by the lake before the transfer to Udaipur airport.',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Seven nights in heritage and boutique properties',
      'Daily breakfast, with dinners and one lunch as listed',
      'Air-conditioned vehicle with driver throughout the circuit',
      'English-speaking local guides in Jaipur, Jodhpur and Udaipur',
      'Block printing workshop fee and materials',
      'Airport transfers in Jaipur and Udaipur'
    ],
    exclusions: [
      'Flights into Jaipur and out of Udaipur',
      'Monument entry fees and camera charges',
      'Lake Pichola boat tickets',
      'Lunches other than the craft day',
      'Travel insurance and personal expenses'
    ],
    importantInfo: [
      'Monument entry is paid directly at the gate so you only pay for what you visit.',
      'Amber Fort elephant rides are not included — we use the jeep or the walking path.',
      'Shoulders and knees should be covered for temple visits at Ranakpur.',
      'April to June is very hot; we shift sightseeing to early morning and evening in those months.'
    ],
    bestTimeToTravel: 'October to March',
    groupSize: 'Private departures, 2 – 14 travellers',
    popular: true,
    seo: {
      title: 'Royal Rajasthan Tour — 8 Days in Jaipur, Jodhpur & Udaipur',
      description:
        'An 8-day Rajasthan itinerary from Pravaah with heritage stays, Amber and Mehrangarh forts, craft workshops and Lake Pichola. From ₹38,999 per person.'
    }
  },

  {
    slug: 'kerala-backwaters-and-hills',
    title: 'Kerala Backwaters & Hills',
    destinationSlug: 'kerala',
    destination: 'Kerala',
    duration: '6 Days / 5 Nights',
    nights: 5,
    days: 6,
    price: 27499,
    image: 'photo-1602216056096-3b40cc0c9944',
    gallery: [
      'photo-1593693411515-c20261bcad6e',
      'photo-1544084944-15269ec7b5a0',
      'photo-1454391304352-2bf4678b1a7a',
      'photo-1433086966358-54859d0ed716'
    ],
    description:
      'Fort Kochi, a night on the Alleppey backwaters and the tea hills of Munnar — short drives, long meals.',
    overview: [
      'The classic Kerala arc, done in the order that makes sense: coast first, water second, hills last, so the trip gets quieter and cooler as it goes.',
      'We use a smaller houseboat than most operators so it can leave the main channel for the narrow canals, and we book the Munnar stay on an estate rather than in town.'
    ],
    themes: ['Honeymoon', 'Family', 'Beaches'],
    highlights: [
      'A night on a private houseboat through the Alleppey canals',
      'Tea estate walk and tasting above Munnar',
      'Fort Kochi heritage walk and the Chinese fishing nets',
      'Kathakali performance with a backstage make-up session',
      'Spice plantation visit on the way down from the hills'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Kochi — Fort Kochi',
        description:
          'Transfer from Kochi airport to Fort Kochi. Evening heritage walk past the fishing nets, the Dutch cemetery and St Francis Church.',
        stay: 'Heritage homestay, Fort Kochi',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Kochi — Alleppey — houseboat',
        description:
          'Morning at the spice market and Mattancherry, then south to board your houseboat at midday. Lunch cooked on deck as you cruise into the canals.',
        stay: 'Private houseboat, Alleppey',
        meals: 'All meals'
      },
      {
        day: 3,
        title: 'Alleppey — Munnar',
        description:
          'Disembark after breakfast and climb into the Western Ghats, stopping at Cheeyappara falls as the tea terraces begin.',
        stay: 'Tea estate bungalow, Munnar',
        meals: 'Breakfast, dinner'
      },
      {
        day: 4,
        title: 'Munnar tea country',
        description:
          'A walk through the estate with a plucker, the tea museum and factory, then Top Station for the late-afternoon view across the valley.',
        stay: 'Tea estate bungalow, Munnar',
        meals: 'Breakfast, dinner'
      },
      {
        day: 5,
        title: 'Munnar — Kochi',
        description:
          'Down through the spice plantations with a guided walk, arriving in Kochi in time for an evening Kathakali performance.',
        stay: 'Boutique hotel, Kochi',
        meals: 'Breakfast'
      },
      {
        day: 6,
        title: 'Departure',
        description: 'Free morning for coffee and the antique shops of Jew Town, then the airport transfer.',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Five nights including one on a private houseboat',
      'Daily breakfast, all meals on the houseboat, dinners as listed',
      'Private vehicle with driver for the full circuit',
      'Fort Kochi heritage walk with a local guide',
      'Tea estate walk and factory visit',
      'Airport transfers in Kochi'
    ],
    exclusions: [
      'Flights to and from Kochi',
      'Kathakali and Kalaripayattu show tickets',
      'Ayurvedic treatments',
      'Lunches on non-houseboat days',
      'Travel insurance and personal expenses'
    ],
    importantInfo: [
      'Houseboats must moor by sunset under state regulations — boarding is at noon.',
      'Munnar drops to 10°C at night in winter; carry a jacket even in summer.',
      'Houseboat kitchens can handle vegetarian, Jain and allergy requirements with prior notice.',
      'The hill road has around 30 hairpin bends — mention motion sickness when booking.'
    ],
    bestTimeToTravel: 'September to March',
    groupSize: 'Private departures, 2 – 8 travellers',
    popular: true,
    seo: {
      title: 'Kerala Backwaters & Hills — 6-Day Kochi, Alleppey & Munnar Tour',
      description:
        'A 6-day Kerala itinerary from Pravaah with a private Alleppey houseboat, Munnar tea estate stay and Fort Kochi. From ₹27,499 per person.'
    }
  },

  {
    slug: 'goa-coastal-escape',
    title: 'Goa Coastal Escape',
    destinationSlug: 'goa',
    destination: 'Goa',
    duration: '5 Days / 4 Nights',
    nights: 4,
    days: 5,
    price: 18999,
    image: 'photo-1519046904884-53103b34b206',
    gallery: [
      'photo-1512343879784-a960bf40e7f2',
      'photo-1507525428034-b723cf961d3e',
      'photo-1505118380757-91f5f5632de0',
      'photo-1502680390469-be75c86b636f'
    ],
    description:
      'South Goa sands, a Portuguese-era interior and a cooking afternoon in a family kitchen — the slow version.',
    overview: [
      'Built around the quieter south coast, with one day inland for the part of Goa that has nothing to do with the beach.',
      'Nothing here starts early. The plan leaves the middle of every day open, and the fixed points are a heritage walk, a cooking class and a sunset cruise.'
    ],
    themes: ['Beaches', 'Weekend', 'Honeymoon'],
    highlights: [
      'Four nights on the quiet southern coast',
      'Goan home-cooking afternoon with a local family',
      'Heritage walk through Fontainhas and Old Goa',
      'Sunset dolphin cruise on the Mandovi',
      'Optional day trip to Dudhsagar Falls and a spice plantation'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Goa — south coast',
        description:
          'Transfer from Dabolim or Mopa to your beach stay near Agonda. The rest of the day is yours.',
        stay: 'Beach resort, South Goa',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Beaches and a cooking afternoon',
        description:
          'A slow morning on the sand, then a Goan cooking class — xacuti, prawn balchão and poie — with a family in Cortalim.',
        stay: 'Beach resort, South Goa',
        meals: 'Breakfast, lunch'
      },
      {
        day: 3,
        title: 'Old Goa and Panjim',
        description:
          'North for the basilica and cathedrals of Old Goa, a walk through the painted lanes of Fontainhas, and a sunset cruise on the Mandovi.',
        stay: 'Beach resort, South Goa',
        meals: 'Breakfast'
      },
      {
        day: 4,
        title: 'Free day or Dudhsagar',
        description:
          'Nothing scheduled. Add the Dudhsagar Falls and spice plantation day trip, take a surf lesson, or stay exactly where you are.',
        stay: 'Beach resort, South Goa',
        meals: 'Breakfast, dinner'
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Late checkout where available, then the airport transfer.',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Four nights at a south-coast beach property',
      'Daily breakfast, with meals as listed',
      'Airport transfers and the Old Goa sightseeing day',
      'Goan cooking class with ingredients',
      'Heritage walk with a local guide'
    ],
    exclusions: [
      'Flights to and from Goa',
      'Dudhsagar jeep safari and spice plantation entry',
      'Water sports, scooter hire and fuel',
      'Alcohol and personal expenses',
      'Travel insurance'
    ],
    importantInfo: [
      'Dudhsagar closes during heavy monsoon and jeep permits are capped daily.',
      'Scooter hire requires a valid driving licence; helmets are mandatory.',
      'Beach shacks operate roughly October to May only.',
      'Mopa airport is about two hours from the south coast — allow for it on departure day.'
    ],
    bestTimeToTravel: 'November to February',
    groupSize: 'Private departures, 2 – 10 travellers',
    popular: false,
    seo: {
      title: 'Goa Coastal Escape — 5-Day South Goa Beach & Heritage Tour',
      description:
        'A 5-day Goa itinerary from Pravaah with quiet southern beaches, a Goan cooking class, Old Goa heritage and a sunset cruise. From ₹18,999 per person.'
    }
  },

  {
    slug: 'meghalaya-and-kaziranga',
    title: 'Meghalaya & Kaziranga',
    destinationSlug: 'northeast-india',
    destination: 'Northeast India',
    duration: '7 Days / 6 Nights',
    nights: 6,
    days: 7,
    price: 34999,
    image: 'photo-1433086966358-54859d0ed716',
    gallery: [
      'photo-1470071459604-3b5ec3a7fe05',
      'photo-1469474968028-56623f02e42e',
      'photo-1516426122078-c23e76319801',
      'photo-1441974231531-c6227db76b6e'
    ],
    description:
      'Root bridges and waterfall gorges in Meghalaya, then the grasslands of Kaziranga at first light.',
    overview: [
      'The two halves of this trip could not be more different: limestone, rain and forest in Meghalaya, then flat elephant grass and rhino country along the Brahmaputra.',
      'We put Kaziranga at the end so the trip finishes on two dawn safaris, and we keep a full rest day after the Nongriat descent, because the climb back up deserves one.'
    ],
    themes: ['Adventure', 'Wildlife', 'Mountains'],
    highlights: [
      'Trek to the double-decker living root bridge at Nongriat',
      'Seven Sisters and Nohkalikai falls above the Cherrapunji gorge',
      'Boat on the clear Umngot river at Dawki',
      'Two dawn jeep safaris in Kaziranga National Park',
      'A working tea estate on the road back to Guwahati'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Guwahati — Shillong',
        description:
          'Pickup at Guwahati and the three-hour climb to Shillong, stopping at Umiam Lake. Evening in Police Bazaar.',
        stay: 'Boutique hotel, Shillong',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Cherrapunji gorge country',
        description:
          'South to Sohra — Nohkalikai falls, the Seven Sisters viewpoint and Mawsmai cave, ending at a stay on the gorge rim.',
        stay: 'Gorge-view lodge, Cherrapunji',
        meals: 'Breakfast, dinner'
      },
      {
        day: 3,
        title: 'Nongriat root bridge trek',
        description:
          'An early start for the 3,000-step descent to the double-decker root bridge, a swim in the rock pools and the long climb back.',
        stay: 'Gorge-view lodge, Cherrapunji',
        meals: 'Breakfast, packed lunch, dinner'
      },
      {
        day: 4,
        title: 'Dawki, Mawlynnong — Shillong',
        description:
          'The turquoise Umngot at Dawki with a short boat ride, then Mawlynnong village and its sky-walk before returning to Shillong.',
        stay: 'Boutique hotel, Shillong',
        meals: 'Breakfast'
      },
      {
        day: 5,
        title: 'Shillong — Kaziranga',
        description:
          'The long drive east into Assam, arriving at your lodge on the edge of the park by late afternoon.',
        stay: 'Forest lodge, Kaziranga',
        meals: 'Breakfast, dinner'
      },
      {
        day: 6,
        title: 'Kaziranga safaris',
        description:
          'A dawn jeep safari in the central range, a slow afternoon, and a second safari in the western range at golden hour.',
        stay: 'Forest lodge, Kaziranga',
        meals: 'All meals'
      },
      {
        day: 7,
        title: 'Tea estate — Guwahati departure',
        description:
          'A final morning safari option, then the drive back with a tea estate and factory stop before the airport.',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Six nights of accommodation across Meghalaya and Assam',
      'Daily breakfast, dinners and full board at Kaziranga as listed',
      'Private vehicle with a driver who knows the hill roads',
      'Local guide for the Nongriat trek',
      'Two jeep safaris with park entry and guide fees at Kaziranga',
      'Guwahati airport pickup and drop'
    ],
    exclusions: [
      'Flights to and from Guwahati',
      'Umngot river boat charges at Dawki',
      'Additional safaris and camera fees',
      'Lunches other than those listed',
      'Travel insurance and personal expenses'
    ],
    importantInfo: [
      'The Nongriat trek is roughly 6km round trip on steep stone steps and takes five to six hours.',
      'Kaziranga is closed to visitors from mid-May to late October for the monsoon.',
      'Safari slots are allotted by the forest department and cannot always be guaranteed by range.',
      'Carry cash — card acceptance is limited outside Shillong and Guwahati.'
    ],
    bestTimeToTravel: 'November to April',
    groupSize: 'Private departures, 2 – 8 travellers',
    popular: true,
    seo: {
      title: 'Meghalaya & Kaziranga Tour — 7 Days in Northeast India',
      description:
        'A 7-day Northeast India itinerary from Pravaah with living root bridges, Cherrapunji, Dawki and two Kaziranga safaris. From ₹34,999 per person.'
    }
  },

  {
    slug: 'spiti-valley-expedition',
    title: 'Spiti Valley Expedition',
    destinationSlug: 'himachal-pradesh',
    destination: 'Himachal Pradesh',
    duration: '9 Days / 8 Nights',
    nights: 8,
    days: 9,
    price: 42999,
    image: 'photo-1544735716-392fe2489ffa',
    gallery: [
      'photo-1626621341517-bbf3d9990a23',
      'photo-1506905925346-21bda4d32df4',
      'photo-1533240332313-0db49b459ad6',
      'photo-1519681393784-d120267933ba'
    ],
    description:
      'The cold desert circuit through Kinnaur to Kaza — monasteries, homestays and a night under a very clear sky.',
    overview: [
      'Spiti is a commitment: nine days, high passes and a road that is a road only by agreement. It is also the most extraordinary landscape in the Indian Himalaya.',
      'We climb via Kinnaur rather than over Rohtang, so altitude is gained in stages, and we stay in village homestays at Langza and Demul where the money goes directly to the households hosting you.'
    ],
    themes: ['Adventure', 'Mountains'],
    highlights: [
      'The Kinnaur road along the Sutlej and Baspa valleys',
      'Key, Dhankar and Tabo monasteries',
      'Homestay nights at Langza and Demul above 4,000m',
      'Chandratal lake when the Kunzum road is open',
      'Some of the darkest night skies in the country'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Shimla — Sarahan',
        description:
          'Pickup at Shimla and the drive along the Sutlej to Sarahan, with the Bhimakali temple in the evening.',
        stay: 'Hotel, Sarahan',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Sarahan — Chitkul',
        description:
          'Into Kinnaur and up the Baspa valley to Chitkul, the last village before the border.',
        stay: 'Guesthouse, Chitkul',
        meals: 'Breakfast, dinner'
      },
      {
        day: 3,
        title: 'Chitkul — Kalpa — Nako',
        description:
          'Kalpa for the Kinner Kailash range at sunrise, then the dry country beyond Pooh to the lake village of Nako at 3,660m.',
        stay: 'Guesthouse, Nako',
        meals: 'Breakfast, dinner'
      },
      {
        day: 4,
        title: 'Nako — Tabo — Dhankar',
        description:
          'Gue monastery, the thousand-year-old murals at Tabo, and the cliff monastery at Dhankar with the lake walk above it.',
        stay: 'Monastery guesthouse, Dhankar',
        meals: 'Breakfast, dinner'
      },
      {
        day: 5,
        title: 'Pin Valley — Kaza',
        description:
          'A day in the Pin valley national park, then across to Kaza, the administrative centre of Spiti.',
        stay: 'Hotel, Kaza',
        meals: 'Breakfast, dinner'
      },
      {
        day: 6,
        title: 'Key, Kibber and Langza',
        description:
          'Key monastery in the morning, Kibber and the Chicham bridge after lunch, and the night in a homestay at Langza under the Buddha statue.',
        stay: 'Village homestay, Langza',
        meals: 'All meals'
      },
      {
        day: 7,
        title: 'Komic, Hikkim and Demul',
        description:
          'The highest village with a motorable road, the world’s highest post office at Hikkim, and a second homestay night at Demul.',
        stay: 'Village homestay, Demul',
        meals: 'All meals'
      },
      {
        day: 8,
        title: 'Kunzum La — Chandratal — Manali',
        description:
          'Over Kunzum Pass at 4,590m to Chandratal, then the long descent through Lahaul and the Atal Tunnel to Manali.',
        stay: 'Hotel, Manali',
        meals: 'Breakfast'
      },
      {
        day: 9,
        title: 'Departure',
        description: 'Transfer to Bhuntar airport or the Manali coach stand.',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Eight nights including two village homestays',
      'Daily breakfast and dinner, full board on homestay days',
      'Sturdy 4x4 vehicle with a Spiti-experienced driver',
      'Inner line permits where required',
      'Oxygen cylinder and first-aid kit carried throughout',
      'Pickup at Shimla and drop at Manali or Bhuntar'
    ],
    exclusions: [
      'Travel to Shimla and from Manali',
      'Monastery donations and camera fees',
      'Lunches on non-homestay days',
      'Any evacuation or medical costs',
      'Travel insurance and personal expenses'
    ],
    importantInfo: [
      'The full circuit needs the Kunzum road open, usually June to October. Outside that window we run it as a return trip via Kinnaur.',
      'You will sleep above 4,000m on two nights. Travellers with heart or respiratory conditions should consult a doctor first.',
      'Homestays are simple and warm — shared bathrooms and no running hot water on some nights.',
      'Mobile coverage exists only in Kaza, on BSNL and Jio. Plan to be offline for days at a time.'
    ],
    bestTimeToTravel: 'June to October for the full circuit',
    groupSize: 'Private and small group, 2 – 8 travellers',
    popular: false,
    seo: {
      title: 'Spiti Valley Expedition — 9-Day Kinnaur to Kaza Circuit',
      description:
        'A 9-day Spiti itinerary from Pravaah via Kinnaur, with Key, Dhankar and Tabo monasteries, village homestays and Chandratal. From ₹42,999 per person.'
    }
  },

  {
    slug: 'golden-triangle',
    title: 'Golden Triangle',
    destinationSlug: 'rajasthan',
    destination: 'Delhi · Agra · Jaipur',
    duration: '5 Days / 4 Nights',
    nights: 4,
    days: 5,
    price: 19999,
    image: 'photo-1548013146-72479768bada',
    gallery: [
      'photo-1524492412937-b28074a5d7da',
      'photo-1587474260584-136574528ed5',
      'photo-1477587458883-47145ed94245',
      'photo-1599661046289-e31897846e41'
    ],
    description:
      'Delhi, Agra and Jaipur in five days — the standard first trip to India, planned around the light and the queues.',
    overview: [
      'Three cities, two of the most visited monuments on earth, and a lot of people trying to see them at the same time. The entire value of this itinerary is in the timing.',
      'Sunrise at the Taj, Amber at opening, Old Delhi on foot before the traffic builds. Everything else is flexible.'
    ],
    themes: ['Heritage', 'Family'],
    highlights: [
      'Sunrise at the Taj Mahal, before the day tours arrive',
      'A guided walk and rickshaw ride through Old Delhi',
      'Amber Fort at opening time',
      'Fatehpur Sikri on the road between Agra and Jaipur',
      'A Jaipur bazaar evening with street food'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrive Delhi',
        description:
          'Airport pickup and check-in. Afternoon at Humayun’s Tomb and Qutub Minar, with India Gate on the drive back.',
        stay: 'Hotel, New Delhi',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Old Delhi — Agra',
        description:
          'A morning walk through Chandni Chowk and Jama Masjid by rickshaw, then the expressway to Agra and Mehtab Bagh at sunset.',
        stay: 'Hotel, Agra',
        meals: 'Breakfast, dinner'
      },
      {
        day: 3,
        title: 'Taj Mahal sunrise — Jaipur',
        description:
          'At the east gate for opening, then Agra Fort after breakfast and the drive to Jaipur via Fatehpur Sikri.',
        stay: 'Heritage hotel, Jaipur',
        meals: 'Breakfast, dinner'
      },
      {
        day: 4,
        title: 'Jaipur',
        description:
          'Amber Fort at opening, then Jantar Mantar, Hawa Mahal and the City Palace. Evening in the bazaars around Johari.',
        stay: 'Heritage hotel, Jaipur',
        meals: 'Breakfast'
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Transfer to Jaipur airport, or a road transfer back to Delhi for international connections.',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Four nights of accommodation across the three cities',
      'Daily breakfast and dinners as listed',
      'Air-conditioned vehicle with driver throughout',
      'Local guides in Delhi, Agra and Jaipur',
      'Old Delhi rickshaw ride',
      'Airport transfers at both ends'
    ],
    exclusions: [
      'International and domestic flights',
      'Monument entry fees, including the Taj Mahal',
      'Lunches and beverages',
      'Tips and personal expenses',
      'Travel insurance'
    ],
    importantInfo: [
      'The Taj Mahal is closed on Fridays — we plan the route around your travel dates.',
      'Monument tickets are timed; sunrise entry means a 5:30am start in summer.',
      'The Delhi–Agra and Agra–Jaipur drives are around three and four hours respectively.',
      'Large bags, tripods and food are not permitted inside the Taj complex.'
    ],
    bestTimeToTravel: 'October to March',
    groupSize: 'Private departures, 2 – 14 travellers',
    popular: false,
    seo: {
      title: 'Golden Triangle Tour — 5 Days in Delhi, Agra & Jaipur',
      description:
        'A 5-day Golden Triangle itinerary from Pravaah with a Taj Mahal sunrise, Old Delhi walk, Fatehpur Sikri and Amber Fort. From ₹19,999 per person.'
    }
  }
]

export const getTour = (slug: string) => tours.find((t) => t.slug === slug)

export const popularTours = tours.filter((t) => t.popular)

export const toursByDestination = (destinationSlug: string) =>
  tours.filter((t) => t.destinationSlug === destinationSlug)

/** ₹24,999 */
export const formatPrice = (value: number) => `₹${value.toLocaleString('en-IN')}`
