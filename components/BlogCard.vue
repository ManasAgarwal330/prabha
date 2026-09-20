<script setup lang="ts">
import { formatDate } from '~/data/blog'
import type { Article } from '~/types'

withDefaults(
  defineProps<{
    article: Article
    sizes?: string
    featured?: boolean
  }>(),
  { sizes: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw', featured: false }
)
</script>

<template>
  <article class="group relative flex h-full flex-col">
    <NuxtLink :to="`/blog/${article.slug}`" class="block overflow-hidden rounded-card" tabindex="-1" aria-hidden="true">
      <AppImage
        :src="article.coverImage"
        :alt="article.title"
        :ratio="featured ? 16 / 9 : 3 / 2"
        :sizes="sizes"
      />
    </NuxtLink>

    <div class="flex flex-1 flex-col pt-5">
      <p class="eyebrow text-accent">{{ article.category }}</p>

      <h3 class="mt-3 font-display leading-snug" :class="featured ? 'text-display-sm' : 'text-xl'">
        <NuxtLink :to="`/blog/${article.slug}`" class="transition-colors hover:text-accent">
          <span class="absolute inset-0" />
          {{ article.title }}
        </NuxtLink>
      </h3>

      <p class="mt-3 text-sm leading-relaxed text-ink-muted" :class="featured ? '' : 'line-clamp-3'">
        {{ article.excerpt }}
      </p>

      <p class="mt-5 text-xs text-ink-muted">
        <time :datetime="article.publishedAt">{{ formatDate(article.publishedAt) }}</time>
        · {{ article.readingTime }} min read
      </p>
    </div>
  </article>
</template>
