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
    featured: true,
    seo: {
      title: 'Bankatiya Base Camp Trek — Guided Himalayan Trek from Munsiyari',
      description:
        'Trek to Bankatiya base camp in the Kumaon Himalaya with Pravaah: an 8 – 9 day fully supported expedition with acclimatisation and glacier exploration.'
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
    section: 'expeditions',
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
      title: 'Flow with the Ganga — Gangotri to Haridwar River Expedition',
      description:
        'Follow the Ganga from Gaumukh to Haridwar with Pravaah: Gangotri, Harsil, Devprayag, rafting above Rishikesh and the Haridwar aarti.'
    }
  }
]
