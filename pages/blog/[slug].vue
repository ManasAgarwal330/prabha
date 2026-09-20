<script setup lang="ts">
import { formatDate, getArticle, sortedArticles } from '~/data/blog'

const route = useRoute()
const slug = computed(() => String(route.params.slug))

const article = computed(() => getArticle(slug.value))

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Story not found', fatal: true })
}

const current = article.value!
const related = sortedArticles.filter((a) => a.slug !== current.slug).slice(0, 3)

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Travel Stories', path: '/blog' },
  { name: current.title, path: `/blog/${current.slug}` }
]

usePageSeo({
  title: current.seo.title,
  description: current.seo.description,
  path: `/blog/${current.slug}`,
  image: current.coverImage,
  type: 'article',
  publishedAt: current.publishedAt
})

useJsonLd(articleLd(current), breadcrumbLd(crumbs))
</script>

<template>
  <article>
    <header class="container-prabha pb-10 pt-16 lg:pt-20">
      <Breadcrumbs :items="crumbs" />

      <div class="mx-auto mt-8 max-w-3xl text-center">
        <p class="eyebrow text-clay">{{ current.category }}</p>
        <h1 class="mt-5 text-display-lg">{{ current.title }}</h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-muted">{{ current.excerpt }}</p>
        <p class="mt-7 text-xs text-charcoal-muted">
          {{ current.author }} ·
          <time :datetime="current.publishedAt">{{ formatDate(current.publishedAt) }}</time>
          · {{ current.readingTime }} min read
        </p>
      </div>
    </header>

    <div class="container-prabha">
      <div class="overflow-hidden rounded-card">
        <AppImage
          :src="current.coverImage"
          :alt="current.title"
          :ratio="16 / 9"
          sizes="(min-width: 1280px) 1200px, 100vw"
          priority
          :zoom="false"
        />
      </div>
    </div>

    <div class="container-prabha py-16 lg:py-20">
      <div class="mx-auto max-w-prose">
        <template v-for="(block, index) in current.body" :key="index">
          <h2 v-if="block.type === 'heading'" class="mt-12 text-display-sm first:mt-0">
            {{ block.text }}
          </h2>

          <p
            v-else-if="block.type === 'paragraph'"
            class="mt-5 text-[1.0625rem] leading-[1.8] text-charcoal-soft"
          >
            {{ block.text }}
          </p>

          <ul v-else-if="block.type === 'list'" class="mt-6 space-y-2.5 pl-5">
            <li
              v-for="item in block.items"
              :key="item"
              class="list-disc text-[1.0625rem] leading-[1.75] text-charcoal-soft marker:text-clay"
            >
              {{ item }}
            </li>
          </ul>

          <blockquote
            v-else-if="block.type === 'quote'"
            class="my-10 border-l-2 border-clay pl-6 font-display text-xl leading-relaxed text-charcoal"
          >
            {{ block.text }}
          </blockquote>
        </template>

        <div class="mt-14 border-t border-line pt-8">
          <p class="text-sm leading-relaxed text-charcoal-muted">
            Written by the {{ current.author }} team. If this raised a question about planning your own trip,
            <NuxtLink to="/plan-my-trip" class="link-underline font-medium text-forest">ask us directly</NuxtLink>
            — we answer whether or not you book.
          </p>
        </div>
      </div>
    </div>

    <section class="border-t border-line bg-ivory-deep py-20 lg:py-24">
      <div class="container-prabha">
        <SectionHeading eyebrow="Keep reading" title="More notes from the road." />
        <div class="mt-12 grid gap-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          <div
            v-for="(item, index) in related"
            :key="item.slug"
            class="reveal"
            :style="{ transitionDelay: `${index * 80}ms` }"
          >
            <BlogCard :article="item" />
          </div>
        </div>
      </div>
    </section>

    <CTASection />
  </article>
</template>
