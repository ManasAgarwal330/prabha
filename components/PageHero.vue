<script setup lang="ts">
import type { Crumb } from '~/composables/useJsonLd'
import type { ImageRef } from '~/types'

/**
 * Full-bleed photographic header for the top-level tabs. Pair it with
 * `definePageMeta({ hero: true })` so the header sits transparent on top.
 * The default slot renders under the intro — used for category chips.
 */
defineProps<{
  image: ImageRef
  alt: string
  eyebrow: string
  title: string
  intro?: string
  crumbs: Crumb[]
}>()
</script>

<template>
  <section class="relative isolate flex min-h-[68svh] items-end overflow-hidden">
    <!-- The slow push-in sits on a wrapper so it never fights the image's own transforms. -->
    <div class="absolute inset-0 animate-kenburns will-change-transform">
      <AppImage :src="image" :alt="alt" :ratio="16 / 9" sizes="100vw" priority :zoom="false" class="h-full w-full" />
    </div>
    <div class="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/45" aria-hidden="true" />
    <div class="absolute inset-0 bg-gradient-to-r from-pine-deep/60 via-transparent to-transparent" aria-hidden="true" />

    <div class="container-pravaah relative w-full pb-14 pt-32 lg:pb-20">
      <Breadcrumbs :items="crumbs" light />
      <p class="eyebrow mt-7 text-saffron-light">{{ eyebrow }}</p>
      <h1 class="mt-4 max-w-3xl text-display-lg text-ivory-bright text-shadow-hero">{{ title }}</h1>
      <p v-if="intro" class="mt-6 max-w-2xl text-lg leading-relaxed text-ivory-bright/85">{{ intro }}</p>
      <slot />
    </div>
  </section>
</template>
