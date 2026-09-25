<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    body?: string
    image?: string
    primaryLabel?: string
    primaryTo?: string
    secondaryLabel?: string
    secondaryTo?: string
  }>(),
  {
    title: 'Your next story starts here.',
    body: "Tell us where you want to go. We'll help you figure out the rest.",
    image: 'photo-1493246507139-91e8fad9978e',
    primaryLabel: 'Plan My Trip',
    primaryTo: '/plan-my-trip',
    secondaryLabel: 'About Pravaah',
    secondaryTo: '/#about'
  }
)
</script>

<template>
  <section class="container-pravaah py-16 sm:py-20 lg:py-24">
    <div class="reveal relative overflow-hidden rounded-card shadow-glow-lg">
      <AppImage
        :src="image"
        alt=""
        :ratio="16 / 9"
        sizes="(min-width: 1280px) 1200px, 100vw"
        :zoom="false"
        class="absolute inset-0 h-full w-full"
      />
      <div class="absolute inset-0 bg-gradient-to-br from-pine-deep/95 via-brand-deep/75 to-brand-teal/70" aria-hidden="true" />
      <div class="bg-grid-photo pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        class="pointer-events-none absolute -left-24 -top-24 h-80 w-80 animate-aurora rounded-full bg-brand-lime/25 blur-[100px]"
        aria-hidden="true"
      />
      <div class="absolute inset-0 grain opacity-40" aria-hidden="true" />

      <div class="relative px-6 py-20 text-center sm:px-10 sm:py-24 lg:py-28">
        <p class="mb-6 flex justify-center">
          <span class="chip border-white/15 bg-white/[0.08] text-white/90"><span class="chip-dot" aria-hidden="true" />Start your journey</span>
        </p>
        <h2 class="text-gradient-light mx-auto max-w-2xl pb-1 text-display-lg">{{ title }}</h2>
        <p class="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          {{ body }}
        </p>
        <div class="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NuxtLink :to="primaryTo" class="btn-light w-full sm:w-auto">{{ primaryLabel }}</NuxtLink>
          <NuxtLink
            :to="secondaryTo"
            class="btn w-full border border-white/40 text-white backdrop-blur-sm hover:border-white hover:bg-white/10 sm:w-auto"
          >
            {{ secondaryLabel }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
