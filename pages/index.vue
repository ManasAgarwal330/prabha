<script setup lang="ts">
import { ArrowRight, ArrowDown, ArrowUpRight, MapPin, Star, Sparkles } from 'lucide-vue-next'
import type { ArticleSummary, ListingSummary, Testimonial } from '~/types'

const HERO_IMAGE = 'photo-1506905925346-21bda4d32df4'
const STORY_IMAGE = 'photo-1501555088652-021faa106b9b'

const site = useSettings()
const { brandStory, howItWorks, valueProps } = site
const { sections, destinations } = useSiteBundle()

const [{ data: featured }, { data: articles }, { data: testimonialData }] = await Promise.all([
  useFetch<ListingSummary[]>('/api/listings', { key: 'listings:featured', query: { featured: 'true' }, getCachedData: cachedForVisit }),
  useFetch<ArticleSummary[]>('/api/articles', { key: 'articles', getCachedData: cachedForVisit }),
  useFetch<Testimonial[]>('/api/testimonials', { key: 'testimonials', getCachedData: cachedForVisit })
])

/** Split so each word can ride up from behind its own mask. */
const headlineWords = site.heroHeadline.split(' ')

/**
 * The trip-brief box in the hero. Whatever is typed travels to Plan My Trip
 * and pre-fills the enquiry, so the first message is already written.
 */
const brief = ref('')
const briefSuggestions = [
  'A slow week in the Kumaon hills with my parents…',
  'Our first Himalayan trek, sometime in October…',
  'Dev Deepawali on the Varanasi ghats in November…',
  'A quiet cottage near Jim Corbett for a long weekend…'
]
/** The same ideas, short enough to fit the narrower box on phones without being cut off. */
const briefSuggestionsShort = [
  'Kumaon hills with my parents…',
  'First Himalayan trek in October…',
  'Dev Deepawali in Varanasi…',
  'Corbett cottage, long weekend…'
]
const suggestionIndex = ref(0)
const narrow = ref(false)
const briefPlaceholder = computed(() => (narrow.value ? briefSuggestionsShort : briefSuggestions)[suggestionIndex.value])
let suggestionTimer: ReturnType<typeof setInterval> | undefined
let narrowQuery: MediaQueryList | undefined
const onNarrowChange = () => {
  narrow.value = Boolean(narrowQuery?.matches)
}

onMounted(() => {
  narrowQuery = window.matchMedia('(max-width: 639.98px)')
  onNarrowChange()
  narrowQuery.addEventListener('change', onNarrowChange)
  suggestionTimer = setInterval(() => {
    suggestionIndex.value = (suggestionIndex.value + 1) % briefSuggestions.length
  }, 3200)
})
onBeforeUnmount(() => {
  clearInterval(suggestionTimer)
  narrowQuery?.removeEventListener('change', onNarrowChange)
})

const startPlanning = () => {
  const text = brief.value.trim()
  navigateTo({ path: '/plan-my-trip', query: text ? { brief: text } : {}, hash: '#enquiry' })
}

const featuredIn = (key: string) => (featured.value ?? []).filter((listing) => listing.section === key)

const gridDestinations = destinations.slice(0, 6)
const featuredStays = computed(() => featuredIn('stays').slice(0, 3))
/** A mix of the big trips: expeditions first, topped up with experiences. */
const featuredJourneys = computed(() => [...featuredIn('expeditions'), ...featuredIn('experiences')].slice(0, 3))
const stories = computed(() => (articles.value ?? []).slice(0, 3))
const testimonials = computed(() => testimonialData.value ?? [])

/** The four offering tabs, shown as the first thing under the hero. */
const pillars = sections.map((section) => ({
  section,
  count: section.listingCount,
  categories: section.categories.filter((category) => category.listingCount > 0)
}))

definePageMeta({ hero: true })

// Brand first, then what it offers; the other brand names (ThePravaah, Pravaah India…)
// are carried by the structured data in useJsonLd.
usePageSeo({
  title: `${site.name} | Curated Mountain Travel Experiences`,
  description: `${site.name} curates unique mountain travel experiences, stays and journeys across the Himalayas, designed for travellers who want to experience the mountains differently.`,
  path: '/',
  image: HERO_IMAGE
})
</script>

<template>
  <div>
    <!-- Hero -->
    <!-- Full small-viewport height: at scroll 0 the image fills the screen with
         no strip of the next section showing. `svh` (not `vh`) so mobile browser
         chrome cannot leave a gap when the toolbar collapses. -->
    <section class="relative isolate flex min-h-[100svh] items-end overflow-hidden lg:items-center">
      <!-- The slow push-in sits on a wrapper so it never fights the image's own transforms. -->
      <div class="absolute inset-0 animate-kenburns will-change-transform">
        <AppImage
          :src="HERO_IMAGE"
          alt="First light over a Himalayan range above the clouds"
          :ratio="16 / 9"
          sizes="100vw"
          priority
          :zoom="false"
          class="h-full w-full"
        />
      </div>
      <div
        class="absolute inset-0 bg-gradient-to-t from-pine-deep via-pine-deep/55 to-pine/25"
        aria-hidden="true"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-pine-deep/85 via-pine-deep/25 to-transparent lg:bg-[radial-gradient(ellipse_55%_65%_at_50%_55%,rgba(6,28,20,0.75),transparent)]"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute -left-40 bottom-[-8rem] h-[34rem] w-[34rem] animate-aurora rounded-full bg-brand/30 blur-[110px]"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute -right-32 top-0 h-[26rem] w-[26rem] animate-aurora rounded-full bg-brand-teal/25 blur-[110px] [animation-delay:-7s]"
        aria-hidden="true"
      />

      <!-- Centred from laptop width up; left-aligned on phones, where a centred
           block of this much text is harder to read. -->
      <div class="container-pravaah relative w-full pb-24 pt-28 sm:pt-32 lg:pb-20 short:pb-10 short:pt-28 lg:text-center">
        <p class="hero-fade inline-flex items-center gap-2.5 rounded-pill border border-white/15 bg-white/[0.08] px-3.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-white/90 backdrop-blur-md" style="animation-delay: 0.1s">
          <span class="relative flex h-2 w-2" aria-hidden="true">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-lime opacity-60" />
            <span class="relative inline-flex h-2 w-2 rounded-full bg-brand-lime" />
          </span>
          <!-- "Custom" drops on phones so the pill stays on one line. -->
          <span>{{ site.name }} · <span class="hidden sm:inline">Custom</span> journeys across India</span>
          <span class="hidden items-center gap-1 text-white/80 sm:inline-flex">
            · <Star class="h-3 w-3 fill-brand-lime text-brand-lime" aria-hidden="true" /> Loved by slow travellers
          </span>
        </p>

        <h1 class="mt-6 max-w-4xl text-display-xl text-white text-shadow-hero short:mt-4 lg:mx-auto">
          <span v-for="(word, index) in headlineWords" :key="`${word}-${index}`" class="hero-mask mr-[0.24em] last:mr-0">
            <span class="hero-word" :style="{ animationDelay: `${0.25 + index * 0.09}s` }">
              <!-- The last word carries the glow; its shadow would muddy gradient-clipped text. -->
              <span
                v-if="index === headlineWords.length - 1"
                class="text-gradient-light [text-shadow:none]"
              >{{ word }}</span>
              <template v-else>{{ word }}</template>
            </span>
          </span>
        </h1>

        <p
          class="hero-fade mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg short:mt-4 short:max-w-2xl lg:mx-auto"
          style="animation-delay: 0.62s"
        >
          Handpicked stays, Himalayan expeditions, festivals and retreats — thoughtfully crafted journeys across India, designed around the way you want to travel.
        </p>

        <!-- On phones "About Pravaah" leads, then the trip brief, then the popular
             picks. From `sm` up the brief comes first and the link row sits under it;
             the row is `contents` below `sm` so its two halves can be ordered apart. -->
        <div class="mt-8 flex flex-col gap-4 sm:mt-9 sm:gap-5 short:mt-6 short:gap-4 lg:items-center">
        <!-- Trip brief: type the trip you have in mind, and it pre-fills Plan My Trip. -->
        <form
          class="hero-fade glass-panel group order-2 flex max-w-2xl flex-col gap-2 rounded-[1.4rem] border border-white/15 p-2 shadow-glow-lg transition-colors focus-within:border-brand-light/60 sm:order-1 sm:flex-row sm:items-center lg:w-full lg:text-left"
          style="animation-delay: 0.74s"
          role="search"
          aria-label="Describe your trip"
          @submit.prevent="startPlanning"
        >
          <label for="trip-brief" class="sr-only">Describe the trip you have in mind</label>
          <span class="flex flex-1 items-center gap-3 pl-3">
            <Sparkles class="h-5 w-5 shrink-0 text-brand-lime" aria-hidden="true" />
            <input
              id="trip-brief"
              v-model="brief"
              type="text"
              autocomplete="off"
              :placeholder="briefPlaceholder"
              class="w-full bg-transparent py-3 text-[1rem] text-white lg:text-[0.95rem] placeholder:text-white/50 focus:outline-none"
            />
          </span>
          <button type="submit" class="btn-primary w-full px-6 py-3.5 sm:w-auto">
            Plan My Trip
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </button>
        </form>

        <div class="contents sm:order-2 sm:flex sm:flex-wrap sm:items-center sm:gap-3 lg:justify-center">
          <NuxtLink
            to="/#about"
            class="btn-light hero-fade group order-1 self-start px-6 py-3 sm:order-none"
            style="animation-delay: 0.68s"
          >
            About Pravaah
            <ArrowRight
              class="h-4 w-4 transition-transform duration-300 ease-editorial group-hover:translate-x-1"
              aria-hidden="true"
            />
          </NuxtLink>

          <!-- Phones put the label on its own line so every pick fits whole. -->
          <div class="hero-fade order-3 flex flex-wrap items-center gap-2 sm:order-none sm:gap-3" style="animation-delay: 0.8s">
            <span class="ml-1 inline-flex shrink-0 basis-full items-center gap-1.5 whitespace-nowrap text-xs text-white/70 sm:basis-auto"><MapPin class="h-3.5 w-3.5" aria-hidden="true" /> Popular:</span>
            <NuxtLink to="/destinations/uttarakhand" class="shrink-0 whitespace-nowrap rounded-pill border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm transition-colors hover:border-brand-light/70 hover:text-white">Uttarakhand</NuxtLink>
            <NuxtLink to="/events/dev-deepawali-varanasi" class="shrink-0 whitespace-nowrap rounded-pill border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm transition-colors hover:border-brand-light/70 hover:text-white">Dev Deepawali</NuxtLink>
            <NuxtLink to="/expeditions/khaliya-top-trek" class="shrink-0 whitespace-nowrap rounded-pill border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm transition-colors hover:border-brand-light/70 hover:text-white">Khaliya Top</NuxtLink>
          </div>
        </div>
        </div>

        <dl
          class="hero-fade mt-8 grid max-w-2xl grid-cols-3 sm:mt-10 gap-3 sm:gap-4 short:mt-6 lg:mx-auto"
          style="animation-delay: 0.86s"
        >
          <div v-for="stat in brandStory.stats" :key="stat.label" class="glass-panel rounded-2xl border border-white/10 px-3 py-4 sm:px-5 short:py-3">
            <dt class="sr-only">{{ stat.label }}</dt>
            <dd>
              <span class="text-gradient-light block font-display text-2xl font-semibold sm:text-3xl">
                <CountUp :value="stat.value" />
              </span>
              <span class="mt-1 block break-words font-mono text-[0.56rem] uppercase leading-snug tracking-[0.04em] text-white/60 sm:text-[0.62rem] sm:tracking-[0.1em]">{{ stat.label }}</span>
            </dd>
          </div>
        </dl>

        <a href="#explore" class="hero-fade mt-10 hidden items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white sm:inline-flex short:hidden" style="animation-delay: 0.95s">
          Scroll to explore
          <ArrowDown class="h-4 w-4 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>

    <!-- What we offer -->
    <section id="explore" class="relative scroll-mt-20 py-14 sm:py-20 lg:py-28">
      <div class="container-pravaah">
      <SectionHeading
        eyebrow="Explore Pravaah"
        title="Stay, explore, go further — or simply slow down."
        intro="Four ways to travel with us. Every one of them is planned around the people and places we know best."
      />

      <CardRail label="ways to travel" class="mt-8 sm:mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        <NuxtLink
          v-for="(pillar, index) in pillars"
          :key="pillar.section.key"
          :to="pillar.section.path"
          v-tilt
          class="reveal glow-card group relative block h-[24rem] sm:h-[26rem] overflow-hidden rounded-card shadow-soft"
          :style="{ transitionDelay: `${index * 70}ms` }"
        >
          <AppImage
            :src="pillar.section.heroImage"
            :alt="pillar.section.name"
            :ratio="3 / 4"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            class="h-full w-full"
          />
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-pine/90 via-pine/45 to-pine/5"
            aria-hidden="true"
          />
          <div class="absolute inset-x-0 bottom-0 p-6 text-white">
            <p class="font-mono text-[0.68rem] font-medium uppercase tracking-[0.14em] text-brand-lime">
              {{ pillar.count }} {{ pillar.count === 1 ? pillar.section.singular : `${pillar.section.singular}s` }}
            </p>
            <h3 class="mt-2 font-display text-3xl tracking-[-0.015em]">
              <span class="sweep">{{ pillar.section.name }}</span>
            </h3>
            <ul class="mt-3 space-y-1 text-xs text-white/80">
              <li v-for="category in pillar.categories" :key="category.slug">{{ category.name }}</li>
            </ul>
            <span class="mt-5 inline-flex items-center gap-1.5 border-t border-white/20 pt-4 text-xs font-medium">
              Explore {{ pillar.section.name.toLowerCase() }}
              <ArrowUpRight
                class="h-4 w-4 transition-transform duration-300 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </NuxtLink>
      </CardRail>
      </div>
    </section>

    <!-- Featured stays -->
    <section class="section-dark py-14 sm:py-20 lg:py-28">
      <div class="container-pravaah">
        <div class="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Handpicked stays"
            title="Places worth the journey on their own."
            intro="Lakeside hotels, orchard homestays, camping in the woods and farm stays — every one run by people we know."
          />
          <NuxtLink to="/stays" class="btn-ghost link-underline reveal shrink-0">
            All stays
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
        </div>

        <CardRail label="stay" class="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          <div
            v-for="(listing, index) in featuredStays"
            :key="listing.slug"
            class="reveal"
            :style="{ transitionDelay: `${index * 80}ms` }"
          >
            <ListingCard :listing="listing" />
          </div>
        </CardRail>
      </div>
    </section>

    <!-- Featured destinations -->
    <section id="destinations" class="container-pravaah scroll-mt-20 py-14 sm:py-20 lg:py-28">
      <div class="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Where to go"
          title="From the Kumaon Himalaya to the Rajasthan desert."
          intro="The Himalaya, the desert, the backwaters and the islands — a small number of places we know deeply rather than thinly across the whole country."
        />
        <NuxtLink to="/destinations" class="btn-ghost link-underline reveal shrink-0">
          All destinations
          <ArrowRight class="h-4 w-4" aria-hidden="true" />
        </NuxtLink>
      </div>

      <CardRail label="destination"
        class="mt-8 sm:mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[repeat(3,15rem)] lg:gap-5"
      >
        <div
          v-for="(destination, index) in gridDestinations"
          :key="destination.slug"
          class="reveal h-80 min-w-0 sm:h-72 lg:h-full"
          :class="index === 0 ? 'sm:col-span-2 lg:row-span-2 lg:h-full' : ''"
          :style="{ transitionDelay: `${Math.min(index, 4) * 70}ms` }"
        >
          <DestinationCard
            :destination="destination"
            :size="index === 0 ? 'feature' : 'compact'"
            :sizes="index === 0 ? '(min-width: 1024px) 66vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'"
          />
        </div>
      </CardRail>
    </section>

    <!-- Brand story — the "About Pravaah" buttons land here -->
    <section id="about" class="scroll-mt-20 border-y border-hairline bg-canvas-alt py-14 sm:py-20 lg:py-28">
      <div class="container-pravaah grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div class="relative order-2 lg:order-1">
          <div class="reveal-media overflow-hidden rounded-card shadow-lift">
            <AppImage
              :src="STORY_IMAGE"
              alt="A traveller looking out across a green valley in the Indian Himalaya"
              :ratio="4 / 5"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
          <!-- Floating glass stat card over the photograph. -->
          <div class="glass-panel absolute -bottom-6 left-4 right-4 grid grid-cols-3 gap-2 rounded-2xl border border-white/40 bg-white/70 p-4 shadow-lift sm:left-auto sm:right-6 sm:w-[22rem]">
            <div v-for="stat in brandStory.stats" :key="stat.label" class="text-center">
              <p class="text-gradient font-display text-2xl font-semibold">{{ stat.value }}</p>
              <p class="mt-0.5 font-mono text-[0.55rem] uppercase leading-tight tracking-[0.06em] text-ink-muted">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2">
          <SectionHeading :eyebrow="brandStory.eyebrow" :title="brandStory.title" />
          <div class="reveal mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            <p v-for="paragraph in brandStory.body" :key="paragraph">{{ paragraph }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Expeditions & experiences -->
    <section class="section-dark py-14 sm:py-20 lg:py-28">
      <div class="container-pravaah">
        <div class="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Expeditions & experiences"
            title="Base camps, border valleys and the source of the Ganga."
            intro="Fully supported treks, 4x4 journeys and river expeditions — planned and led by people who know the ground."
          />
          <NuxtLink to="/expeditions" class="btn-ghost link-underline reveal shrink-0">
            All expeditions
            <ArrowRight class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
        </div>

        <CardRail label="journey" class="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          <div
            v-for="(listing, index) in featuredJourneys"
            :key="`${listing.section}-${listing.slug}`"
            class="reveal"
            :style="{ transitionDelay: `${index * 80}ms` }"
          >
            <ListingCard :listing="listing" />
          </div>
        </CardRail>
      </div>
    </section>

    <!-- Why Pravaah -->
    <section class="container-pravaah py-14 sm:py-20 lg:py-28">
      <SectionHeading
        eyebrow="Why Pravaah"
        title="A small studio, built around the parts of travel that matter."
        intro="No queues, no generic packages — just people who know these roads and plan like it matters."
      />

      <CardRail label="reason" class="mt-8 sm:mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        <div
          v-for="(value, index) in valueProps"
          :key="value.title"
          class="reveal surface-card card-lift glow-card group p-6 shadow-soft sm:p-7"
          :style="{ transitionDelay: `${index * 70}ms` }"
        >
          <span class="icon-tile">
            <component :is="resolveIcon(value.icon)" class="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 class="mt-6 font-display text-xl">{{ value.title }}</h3>
          <p class="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{{ value.description }}</p>
        </div>
      </CardRail>
    </section>

    <!-- How it works -->
    <section class="section-forest py-14 sm:py-20 lg:py-28">
      <div class="container-pravaah">
        <div class="reveal max-w-3xl">
          <p class="chip mb-5"><span class="chip-dot" aria-hidden="true" />How it works</p>
          <h2 class="text-display-md">Three steps, and then you are travelling.</h2>
        </div>

        <ol class="mt-8 sm:mt-14 grid gap-8 sm:grid-cols-3 sm:gap-8">
          <li
            v-for="(step, index) in howItWorks"
            :key="step.number"
            class="reveal border-t border-hairline pt-6"
            :style="{ transitionDelay: `${index * 90}ms` }"
          >
            <span class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/25 bg-white/10 font-mono text-sm text-white backdrop-blur-md">{{ step.number }}</span>
            <h3 class="mt-4 font-display text-2xl">{{ step.title }}</h3>
            <p class="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{{ step.description }}</p>
          </li>
        </ol>

        <NuxtLink to="/plan-my-trip" class="btn-primary reveal mt-12">
          Start planning
          <ArrowRight class="h-4 w-4" aria-hidden="true" />
        </NuxtLink>
      </div>
    </section>

    <!-- Journals -->
    <section class="container-pravaah py-14 sm:py-20 lg:py-28">
      <div class="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Journals"
          title="Notes from the road."
          intro="Guides, seasons and the practical detail we would want before booking a trip ourselves."
        />
        <NuxtLink to="/journals" class="btn-ghost link-underline reveal shrink-0">
          All stories
          <ArrowRight class="h-4 w-4" aria-hidden="true" />
        </NuxtLink>
      </div>

      <CardRail label="story" class="mt-8 sm:mt-12 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        <div
          v-for="(article, index) in stories"
          :key="article.slug"
          class="reveal"
          :style="{ transitionDelay: `${index * 80}ms` }"
        >
          <BlogCard :article="article" />
        </div>
      </CardRail>
    </section>

    <!-- Testimonials -->
    <section class="section-dark py-14 sm:py-20 lg:py-28">
      <div class="container-pravaah">
        <SectionHeading eyebrow="In their words" title="What travellers tell us afterwards." />

        <CardRail label="review" class="mt-8 sm:mt-14 grid gap-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.name"
            class="reveal"
            :style="{ transitionDelay: `${index * 70}ms` }"
          >
            <TestimonialCard :testimonial="testimonial" />
          </div>
        </CardRail>
      </div>
    </section>
  </div>
</template>
