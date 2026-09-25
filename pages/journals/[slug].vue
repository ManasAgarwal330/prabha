<script setup lang="ts">
import { Check, Quote, Sparkles } from 'lucide-vue-next'
import { formatDate, getArticle, sortedArticles } from '~/data/blog'

const route = useRoute()
const slug = computed(() => String(route.params.slug))

const article = computed(() => getArticle(slug.value))

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Story not found', fatal: true })
}

const current = article.value!
/** The opening paragraph is set as a larger lead. */
const leadIndex = current.body.findIndex((block) => block.type === 'paragraph')
const related = sortedArticles.filter((a) => a.slug !== current.slug).slice(0, 3)

const crumbs = [
  { name: 'Home', path: '/' },
  { name: 'Journals', path: '/journals' },
  { name: current.title, path: `/journals/${current.slug}` }
]

usePageSeo({
  title: current.seo.title,
  description: current.seo.description,
  path: `/journals/${current.slug}`,
  image: current.coverImage,
  type: 'article',
  publishedAt: current.publishedAt
})

useJsonLd(articleLd(current), breadcrumbLd(crumbs))
</script>

<template>
  <article>
    <header class="relative pb-10 pt-16 lg:pt-20">
      <div class="bg-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div class="container-pravaah">
      <Breadcrumbs :items="crumbs" />

      <div class="mx-auto mt-8 max-w-3xl text-center">
        <p class="flex justify-center"><span class="chip"><span class="chip-dot" aria-hidden="true" />{{ current.category }}</span></p>
        <h1 class="mt-6 text-display-lg">{{ current.title }}</h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">{{ current.excerpt }}</p>
        <p class="mt-8 flex flex-wrap items-center justify-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink-muted">
          <span class="rounded-pill border border-hairline bg-surface px-3 py-1.5">{{ current.author }}</span>
          <span class="rounded-pill border border-hairline bg-surface px-3 py-1.5">
            <time :datetime="current.publishedAt">{{ formatDate(current.publishedAt) }}</time>
          </span>
          <span class="rounded-pill border border-hairline bg-surface px-3 py-1.5">{{ current.readingTime }} min read</span>
        </p>
      </div>
      </div>
    </header>

    <div class="container-pravaah">
      <div class="overflow-hidden rounded-card shadow-lift ring-1 ring-hairline">
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

    <div class="container-pravaah py-16 lg:py-20">
      <div class="mx-auto max-w-prose">
        <template v-for="(block, index) in current.body" :key="index">
          <h2 v-if="block.type === 'heading'" class="mt-14 flex items-start gap-3 text-display-sm first:mt-0">
            <span class="mt-2 h-6 w-1 shrink-0 rounded-full bg-gradient-to-b from-brand to-brand-lime" aria-hidden="true" />
            {{ block.text }}
          </h2>

          <p
            v-else-if="block.type === 'paragraph'"
            :class="
              index === leadIndex
                ? 'text-xl leading-relaxed text-ink first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-accent'
                : 'mt-5 text-[1.0625rem] leading-[1.8] text-ink-soft'
            "
          >
            {{ block.text }}
          </p>

          <ul v-else-if="block.type === 'list'" class="mt-6 space-y-3 rounded-card border border-hairline bg-surface p-6 shadow-soft">
            <li
              v-for="item in block.items"
              :key="item"
              class="flex gap-3 text-[1.0125rem] leading-[1.7] text-ink-soft"
            >
              <span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-teal text-white">
                <Check class="h-3 w-3" aria-hidden="true" />
              </span>
              {{ item }}
            </li>
          </ul>

          <blockquote
            v-else-if="block.type === 'quote'"
            class="relative my-12 overflow-hidden rounded-card border border-accent/20 bg-gradient-to-br from-brand/[0.08] via-surface to-brand-lime/[0.08] px-7 py-8 shadow-soft sm:px-10"
          >
            <Quote class="absolute right-6 top-5 h-14 w-14 text-accent/15" aria-hidden="true" />
            <p class="text-gradient relative font-display text-2xl font-medium leading-snug">{{ block.text }}</p>
          </blockquote>
        </template>

        <div class="mt-14 flex gap-4 rounded-card border border-hairline bg-canvas-alt p-6">
          <span class="icon-tile h-10 w-10 shrink-0 rounded-xl"><Sparkles class="h-4 w-4" aria-hidden="true" /></span>
          <p class="text-sm leading-relaxed text-ink-muted">
            Written by the {{ current.author }} team. If this raised a question about planning your own trip,
            <NuxtLink to="/plan-my-trip" class="link-underline font-medium text-link">ask us directly</NuxtLink>
            — we answer whether or not you book.
          </p>
        </div>
      </div>
    </div>

    <section class="section-dark py-20 lg:py-24">
      <div class="container-pravaah">
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
