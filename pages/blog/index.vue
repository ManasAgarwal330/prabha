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
  title: 'Travel Stories — Guides, Seasons & Notes from the Road',
  description:
    'Destination guides, season-by-season advice and practical travel notes from the Prabha studio — Kashmir, Himachal, Rajasthan, Kerala and the northeast.',
  path: '/blog',
  image: 'photo-1476514525535-07fb3b4ae5f1'
})

useJsonLd(
  breadcrumbLd([
    { name: 'Home', path: '/' },
    { name: 'Travel Stories', path: '/blog' }
  ])
)
</script>

<template>
  <div>
    <section class="container-prabha pb-12 pt-16 lg:pt-20">
      <Breadcrumbs
        :items="[
          { name: 'Home', path: '/' },
          { name: 'Travel Stories', path: '/blog' }
        ]"
      />

      <div class="mt-8 max-w-3xl">
        <p class="eyebrow mb-4">Travel stories</p>
        <h1 class="text-display-lg">Notes from the road.</h1>
        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
          Guides, seasons and the practical detail we would want before booking a trip ourselves. Written by the
          people who plan them.
        </p>
      </div>
    </section>

    <!-- Lead article -->
    <section v-if="lead && activeCategory === 'All'" class="container-prabha pb-16">
      <div class="reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <NuxtLink :to="`/blog/${lead.slug}`" class="block overflow-hidden rounded-card" tabindex="-1" aria-hidden="true">
          <AppImage
            :src="lead.coverImage"
            :alt="lead.title"
            :ratio="4 / 3"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </NuxtLink>

        <div>
          <p class="eyebrow text-accent">{{ lead.category }}</p>
          <h2 class="mt-4 text-display-md">
            <NuxtLink :to="`/blog/${lead.slug}`" class="transition-colors hover:text-accent">
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
          <NuxtLink :to="`/blog/${lead.slug}`" class="btn-secondary mt-8">Read the story</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Category filter -->
    <section class="container-prabha">
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
    </section>

    <!-- Grid -->
    <section class="container-prabha py-14 lg:py-16">
      <div class="grid gap-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
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
