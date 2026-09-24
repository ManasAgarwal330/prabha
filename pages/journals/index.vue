<script setup lang="ts">
import { articles, formatDate, sortedArticles } from '~/data/blog'

const categories = ['All', ...Array.from(new Set(articles.map((article) => article.category)))]
const activeCategory = ref('All')

const [lead, ...rest] = sortedArticles

const filtered = computed(() =>
  activeCategory.value === 'All'
    ? sortedArticles
    : sortedArticles.filter((article) => article.category === activeCategory.value)
)

usePageSeo({
  title: 'Journals — Travel Stories, Guides & Notes from the Road',
  description:
    'Travel stories, destination guides and practical notes from the Pravaah studio — the Himalaya, Rajasthan and the northeast.',
  path: '/journals',
  image: 'photo-1476514525535-07fb3b4ae5f1'
})

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Journals', path: '/journals' }
]

definePageMeta({ hero: true })

useJsonLd(breadcrumbLd(crumbs))
</script>

<template>
  <div>
    <PageHero
      image="photo-1501555088652-021faa106b9b"
      alt="A traveller looking out across a green Himalayan valley"
      eyebrow="Journals"
      title="Notes from the road."
      intro="Travel stories, guides, seasons and the practical detail we would want before booking a trip ourselves. Written by the people who plan them."
      :crumbs="crumbs"
    />

    <!-- Lead article -->
    <section v-if="lead && activeCategory === 'All'" class="container-pravaah pt-16 lg:pt-20">
      <div class="reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <NuxtLink :to="`/journals/${lead.slug}`" class="block overflow-hidden rounded-card" tabindex="-1" aria-hidden="true">
          <AppImage
            :src="lead.coverImage"
            :alt="lead.title"
            :ratio="4 / 3"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </NuxtLink>

        <div>
          <p class="eyebrow text-accent">{{ lead.category }}</p>
          <h2 class="mt-4 text-display-md">
            <NuxtLink :to="`/journals/${lead.slug}`" class="transition-colors hover:text-accent">
              {{ lead.title }}
            </NuxtLink>
          </h2>
          <p class="mt-5 max-w-prose text-[1.0625rem] leading-relaxed text-ink-muted">
            {{ lead.excerpt }}
          </p>
          <p class="mt-6 text-xs text-ink-muted">
            <time :datetime="lead.publishedAt">{{ formatDate(lead.publishedAt) }}</time>
            · {{ lead.readingTime }} min read
          </p>
          <NuxtLink :to="`/journals/${lead.slug}`" class="btn-secondary mt-8">Read the story</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Travel stories -->
    <section id="travel-stories" class="container-pravaah scroll-mt-24 pb-14 pt-16 lg:pb-16">
      <h2 class="sr-only">Travel stories</h2>
      <div class="flex flex-wrap gap-2 border-y border-hairline py-5" role="group" aria-label="Filter stories by category">
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          class="rounded-pill border px-4 py-2 text-xs font-medium transition-colors"
          :class="
            activeCategory === category
              ? 'border-forest bg-forest text-ivory-bright'
              : 'border-hairline text-ink-soft hover:border-ink/40'
          "
          :aria-pressed="activeCategory === category"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <div class="mt-12 grid gap-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        <div v-for="article in activeCategory === 'All' ? rest : filtered" :key="article.slug">
          <BlogCard :article="article" />
        </div>
      </div>
    </section>

    <CTASection
      title="Reading is the easy part."
      body="When you are ready to turn one of these into an actual trip, we are here."
      image="photo-1469474968028-56623f02e42e"
      secondary-label="Browse destinations"
      secondary-to="/destinations"
    />
  </div>
</template>
