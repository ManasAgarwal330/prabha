import type { Article } from '~/types'

/**
 * Travel stories. Stored as typed blocks so the renderer stays semantic and
 * dependency-free — a Markdown or CMS source can replace this file later.
 */
export const articles: Article[] = [
  {
    slug: '10-places-in-kashmir-you-shouldnt-miss',
    title: "10 Places in Kashmir You Shouldn't Miss",
    excerpt:
      'Beyond the standard Srinagar–Gulmarg–Pahalgam loop: the meadows, workshops and roads that make a week in the valley feel like a month.',
    category: 'Destination Guide',
    coverImage: 'photo-1476514525535-07fb3b4ae5f1',
    author: 'Pravaah Travel Studio',
    publishedAt: '2026-08-28',
    readingTime: 7,
    body: [
      {
        type: 'paragraph',
        text: 'Almost every Kashmir itinerary runs the same three stops in the same order. It is a good route — that is why everyone uses it — but a week in the valley has room for more than three places, and the additions are usually the ones people remember.'
      },
      { type: 'heading', text: '1. Dal Lake, before seven in the morning' },
      {
        type: 'paragraph',
        text: 'The lake does two entirely different things depending on the hour. By ten it is a tourist attraction. At six it is a working neighbourhood: the floating vegetable market trading from boat to boat, kitchens lit on the houseboats, mist sitting on the water until the sun clears the ridge. Ask your host the night before and they will wake you.'
      },
      { type: 'heading', text: '2. Gulmarg, past the gondola' },
      {
        type: 'paragraph',
        text: 'Most visitors ride to the first stage of the gondola and come straight back down. Walk instead — the pine loop towards Strawberry Valley takes about ninety minutes and leaves the crowd behind within ten.'
      },
      { type: 'heading', text: '3. Aru Valley' },
      {
        type: 'paragraph',
        text: 'Twelve kilometres above Pahalgam, and the point at which the Lidder stops being a river you look at and becomes one you can hear from your room. It is also the trailhead for Lidderwat and Tarsar Marsar if you have the days.'
      },
      { type: 'heading', text: '4. Yusmarg' },
      {
        type: 'paragraph',
        text: 'A meadow an hour from Srinagar that somehow stayed off the main circuit. Shepherds, horses, a walk to the Doodh Ganga and very little else. Go on a weekday.'
      },
      { type: 'heading', text: '5. Pampore in October' },
      {
        type: 'paragraph',
        text: 'The saffron fields flower for roughly two weeks in late October. The harvest happens at dawn, by hand, and the growers are generally happy to explain what they are doing if you buy from them directly.'
      },
      { type: 'heading', text: '6. The old city of Srinagar' },
      {
        type: 'paragraph',
        text: 'Downtown Srinagar is the part of the city that the valley actually lives in. The wooden Jamia Masjid, the copper bazaar where every pot is still beaten by hand, and bakeries turning out girda before sunrise.'
      },
      { type: 'heading', text: '7. Sonamarg and Thajiwas' },
      {
        type: 'paragraph',
        text: 'The drive itself is the attraction — the Sindh river the whole way up. The short walk to the Thajiwas glacier snout is manageable for most people, and ponies are available for the rest.'
      },
      { type: 'heading', text: '8. A papier-mâché workshop' },
      {
        type: 'paragraph',
        text: 'Two or three families still do the full process by hand. An hour in a workshop will change how you look at everything in the souvenir shops afterwards.'
      },
      { type: 'heading', text: '9. Doodhpathri' },
      {
        type: 'paragraph',
        text: 'The valley of milk, named for water that runs white over the rocks. Barely developed, almost entirely local on weekdays, and only forty kilometres from Srinagar.'
      },
      { type: 'heading', text: '10. A wazwan, properly' },
      {
        type: 'paragraph',
        text: 'Not the hotel buffet version. A wazwan is a sequence, served on a shared plate, and it takes a couple of hours. Ask to be taken somewhere that cooks it for weddings.'
      },
      {
        type: 'quote',
        text: 'The valley rewards the traveller who leaves one whole day unplanned. Something always turns up on day three.'
      },
      {
        type: 'paragraph',
        text: 'If you are working out when to go: April and May for blossom, June to August for the meadows, October for the saffron and the chinars, and January for snow.'
      }
    ],
    seo: {
      title: "10 Places in Kashmir You Shouldn't Miss — Pravaah Journals",
      description:
        'Ten places in Kashmir worth building an itinerary around, from dawn on Dal Lake to the saffron harvest at Pampore and the meadows at Yusmarg.'
    }
  },

  {
    slug: 'a-first-timers-guide-to-rajasthan',
    title: "A First-Timer's Guide to Rajasthan",
    excerpt:
      'How to sequence the cities, when to visit the forts, and the one decision that makes the biggest difference to a first Rajasthan trip.',
    category: 'Travel Tips',
    coverImage: 'photo-1477587458883-47145ed94245',
    author: 'Pravaah Travel Studio',
    publishedAt: '2026-08-12',
    readingTime: 6,
    body: [
      {
        type: 'paragraph',
        text: 'Rajasthan is the easiest state in India to plan badly. The distances look short on a map, the list of forts is long, and it is tempting to try and see all of it. Most first trips would be better with two fewer cities and two more days.'
      },
      { type: 'heading', text: 'Pick three cities, not six' },
      {
        type: 'paragraph',
        text: 'Jaipur, Jodhpur and Udaipur over eight days is the route we recommend most. Each one is genuinely different — Jaipur is commercial and busy, Jodhpur is vertical and blue, Udaipur is soft and built around water — and the drives between them are manageable.'
      },
      {
        type: 'paragraph',
        text: 'Add Jaisalmer only if you specifically want the desert, and only if you have ten days. It is a long way west and doubles back on itself.'
      },
      { type: 'heading', text: 'The single decision that matters most' },
      {
        type: 'paragraph',
        text: 'Visit monuments at opening time. Amber Fort at eight in the morning and Amber Fort at eleven are not the same place. The heat arrives with the coaches, and both are avoidable if you are willing to have breakfast afterwards instead of before.'
      },
      { type: 'heading', text: 'Where to stay' },
      {
        type: 'paragraph',
        text: 'Rajasthan is one of the few places where the hotel is part of the itinerary. A restored haveli in Jodhpur or a small lakeside property in Udaipur will shape the trip more than an extra monument would. Mid-range heritage stays start far below palace-hotel prices.'
      },
      { type: 'heading', text: 'Getting between cities' },
      {
        type: 'list',
        items: [
          'Jaipur to Jodhpur: about five hours by road, or six by train.',
          'Jodhpur to Udaipur: five hours, with the Ranakpur temple complex on the way.',
          'Udaipur to Jaipur: seven hours by road — fly or take the overnight train instead.',
          'Ranthambore sits between Jaipur and Agra and adds two nights for a safari.'
        ]
      },
      { type: 'heading', text: 'When to go' },
      {
        type: 'paragraph',
        text: 'October to March, without much argument. December and January are the most comfortable, though desert nights get genuinely cold. March is a quieter, cheaper alternative if you can handle warm afternoons. April to June is very hot, and we would only plan short heritage-hotel stays in that window.'
      },
      { type: 'heading', text: 'Buy from the makers' },
      {
        type: 'paragraph',
        text: 'Ask to visit workshops instead of showrooms. Block printing in Bagru, blue pottery in Jaipur, and the mirror-work villages outside Jodhpur all take visitors, and what you pay goes to the person who made the thing.'
      },
      {
        type: 'quote',
        text: 'Three cities, eight days, early mornings. Everything else about a Rajasthan trip is negotiable.'
      }
    ],
    seo: {
      title: "A First-Timer's Guide to Rajasthan — Pravaah Journals",
      description:
        'How to plan a first Rajasthan trip: which three cities to choose, when to visit the forts, where to stay and how to get between Jaipur, Jodhpur and Udaipur.'
    }
  },

  {
    slug: 'best-time-to-visit-himachal-pradesh',
    title: 'Best Time to Visit Himachal Pradesh',
    excerpt:
      'A month-by-month look at the passes, the rain and the snow — and why the right answer depends entirely on which Himachal you mean.',
    category: 'Seasons',
    coverImage: 'photo-1418065460487-3e41a6c84dc5',
    author: 'Pravaah Travel Studio',
    publishedAt: '2026-07-19',
    readingTime: 5,
    body: [
      {
        type: 'paragraph',
        text: 'There is no single best time to visit Himachal, because Himachal is two states pretending to be one. The green, forested side and the high cold desert are on opposite schedules, and a month that is perfect for one can be impossible for the other.'
      },
      { type: 'heading', text: 'March to June — the reliable window' },
      {
        type: 'paragraph',
        text: 'Rhododendron in the lower hills, snow still visible on the high passes, and comfortable days almost everywhere below 3,000m. This is the easiest time to travel and, unsurprisingly, the busiest. Book Manali and Shimla stays well ahead for May and June.'
      },
      { type: 'heading', text: 'July and August — monsoon' },
      {
        type: 'paragraph',
        text: 'The green side gets a lot of rain and a real risk of landslides. Roads close, sometimes for days. But Spiti sits in the rain shadow behind the main range and stays dry, which makes the monsoon the single best time for the cold desert.'
      },
      {
        type: 'quote',
        text: 'If you want Spiti, go in the monsoon. If you want Manali, do not.'
      },
      { type: 'heading', text: 'September to November — the clearest skies' },
      {
        type: 'paragraph',
        text: 'Our favourite months. The rain has stopped, the dust has settled, and visibility across the ranges is the best of the year. Trekking conditions are ideal through October, and the crowds thin out after the first week of that month.'
      },
      { type: 'heading', text: 'December to February — snow' },
      {
        type: 'paragraph',
        text: 'Manali, Narkanda and Kufri get reliable snow. Solang runs winter sport. The trade-off is access: Rohtang is shut, the Kunzum road to Spiti closes entirely, and a heavy fall can hold you in place for a day or two.'
      },
      { type: 'heading', text: 'Quick answers' },
      {
        type: 'list',
        items: [
          'First trip, want it easy: April, May or October.',
          'Spiti and the cold desert: June to September.',
          'Snow: late December to February.',
          'Trekking: May, June, September and October.',
          'Fewest people and best rates: late February or late November.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Whatever month you pick, plan mountain driving to finish before dark and keep a buffer day at the end. Himachal roads are reliable right up until they are not.'
      }
    ],
    seo: {
      title: 'Best Time to Visit Himachal Pradesh — Month by Month',
      description:
        'A month-by-month guide to visiting Himachal Pradesh, covering the monsoon, snow season, high pass openings and the best months for Spiti and trekking.'
    }
  },

  {
    slug: 'hidden-gems-of-northeast-india',
    title: 'Hidden Gems of Northeast India',
    excerpt:
      'Root bridges, a river island and the clearest water in the country — eight places in the northeast that still feel genuinely undiscovered.',
    category: 'Destination Guide',
    coverImage: 'photo-1469474968028-56623f02e42e',
    author: 'Pravaah Travel Studio',
    publishedAt: '2026-06-30',
    readingTime: 8,
    body: [
      {
        type: 'paragraph',
        text: 'The northeast absorbs a fraction of India’s tourism, and most of that goes to a handful of viewpoints around Shillong. Drive two hours in any direction from there and the itineraries stop overlapping entirely.'
      },
      { type: 'heading', text: 'Nongriat' },
      {
        type: 'paragraph',
        text: 'The double-decker living root bridge is the photograph everyone has seen. What the photograph does not convey is the 3,000 steps down, the suspension bridges over the gorge, and the rock pools at the bottom that are the actual reason to stay a night rather than turn around.'
      },
      { type: 'heading', text: 'Dawki and the Umngot' },
      {
        type: 'paragraph',
        text: 'In the dry months the river runs so clear that boats appear to float above the riverbed. Go early — by mid-morning in season there is a queue of boats doing the same stretch.'
      },
      { type: 'heading', text: 'Mawlynnong' },
      {
        type: 'paragraph',
        text: 'Billed as the cleanest village in Asia, which undersells it. The interesting part is the system: bamboo bins on every path, communal composting and a village committee that has run it for decades.'
      },
      { type: 'heading', text: 'Majuli' },
      {
        type: 'paragraph',
        text: 'A river island on the Brahmaputra, reached by ferry, with satras that have been centres of Vaishnavite art for four hundred years. Mask-makers still work here. There is almost no traffic.'
      },
      { type: 'heading', text: 'Ziro Valley' },
      {
        type: 'paragraph',
        text: 'Apatani rice fields in Arunachal Pradesh, flat and green and ringed by pine hills. It needs an Inner Line Permit and a long drive, and it is worth both.'
      },
      { type: 'heading', text: 'Kaziranga at dawn' },
      {
        type: 'paragraph',
        text: 'Not a hidden gem, but frequently done wrong. Take the first safari slot of the morning in the central range, when the grass is still wet and the rhinos are out in the open.'
      },
      { type: 'heading', text: 'The tea estates around Jorhat' },
      {
        type: 'paragraph',
        text: 'Several colonial-era planter bungalows now take guests. Long verandahs, a factory walk and a genuinely good excuse to do nothing for two days on the way back to Guwahati.'
      },
      { type: 'heading', text: 'Mawphlang sacred grove' },
      {
        type: 'paragraph',
        text: 'A forest that has been protected by Khasi custom for centuries — nothing may be removed from it, not even a fallen leaf. The local guides explain the system far better than any signboard.'
      },
      { type: 'heading', text: 'Practical notes' },
      {
        type: 'list',
        items: [
          'Guwahati is the gateway; Shillong is three hours from the airport.',
          'Assume 35–40 km/h when planning driving days. The roads are slow.',
          'Arunachal Pradesh needs an Inner Line Permit, arranged in advance.',
          'October to April is the travel window. The monsoon here is extraordinary and largely impassable.',
          'Carry cash beyond Shillong and Guwahati.'
        ]
      }
    ],
    seo: {
      title: 'Hidden Gems of Northeast India — Meghalaya, Assam & Arunachal',
      description:
        'Eight places worth travelling for in Northeast India: Nongriat root bridges, Dawki, Majuli, Ziro Valley, Kaziranga and the tea estates near Jorhat.'
    }
  },

  {
    slug: 'what-to-pack-for-the-himalaya',
    title: 'What to Pack for the Himalaya',
    excerpt:
      'A layering system that works from Manali to Spiti, plus the four things most travellers forget and regret at 4,000 metres.',
    category: 'Travel Tips',
    coverImage: 'photo-1533240332313-0db49b459ad6',
    author: 'Pravaah Travel Studio',
    publishedAt: '2026-05-15',
    readingTime: 4,
    body: [
      {
        type: 'paragraph',
        text: 'The mistake is almost always the same: one very heavy jacket and nothing underneath it. Himalayan days swing thirty degrees between noon and midnight, and a single thick layer can only be on or off.'
      },
      { type: 'heading', text: 'The three-layer system' },
      {
        type: 'list',
        items: [
          'Base: two merino or synthetic thermal sets. Not cotton — it holds sweat and then chills you.',
          'Mid: a fleece and a light down or synthetic jacket. Both compress to almost nothing.',
          'Outer: a windproof, waterproof shell with a hood. This is the layer worth spending money on.'
        ]
      },
      {
        type: 'paragraph',
        text: 'Together these handle everything from a warm afternoon in Manali to a night at Langza, and each piece is useful on its own.'
      },
      { type: 'heading', text: 'The four things people forget' },
      {
        type: 'list',
        items: [
          'Sunglasses with real UV protection. Snow and altitude together will hurt your eyes within an hour.',
          'High-factor sunscreen and lip balm. The sun at 4,000m is not the sun you know.',
          'A power bank. Village homestays have limited solar and the charging window is short.',
          'Any prescription medication in your day bag, not the boot of the car.'
        ]
      },
      { type: 'heading', text: 'Footwear' },
      {
        type: 'paragraph',
        text: 'One pair of broken-in walking shoes with ankle support, and one pair of anything comfortable for the evening. Do not bring new boots on a trip that involves a descent — Nongriat and the Spiti village walks will find every pressure point.'
      },
      { type: 'heading', text: 'Altitude' },
      {
        type: 'paragraph',
        text: 'If your route crosses 3,500m, gain height in stages, drink far more water than feels necessary, and mention any heart or respiratory condition when you book. We carry oxygen on the high-altitude circuits as standard, but pacing the itinerary correctly matters more than the cylinder does.'
      },
      {
        type: 'quote',
        text: 'Pack layers you can add and remove in thirty seconds. Everything else is detail.'
      }
    ],
    seo: {
      title: 'What to Pack for the Himalaya — Layering, Footwear & Altitude',
      description:
        'A practical Himalaya packing guide: a three-layer clothing system, the four things travellers forget, footwear advice and how to handle altitude.'
    }
  }
]

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug)

export const sortedArticles = [...articles].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
)

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
