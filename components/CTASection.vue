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
    secondaryLabel: 'Explore experiences',
    secondaryTo: '/experiences'
  }
)
</script>

<template>
  <section class="container-pravaah py-16 sm:py-20 lg:py-24">
    <div class="reveal relative overflow-hidden rounded-card shadow-lift">
      <AppImage
        :src="image"
        alt=""
        :ratio="16 / 9"
        sizes="(min-width: 1280px) 1200px, 100vw"
        :zoom="false"
        class="absolute inset-0 h-full w-full"
      />
      <div class="absolute inset-0 bg-gradient-to-br from-pine-deep/90 via-pine/75 to-charcoal/80" aria-hidden="true" />
      <div class="absolute inset-0 grain opacity-40" aria-hidden="true" />

      <div class="relative px-6 py-20 text-center sm:px-10 sm:py-24 lg:py-28">
        <p class="eyebrow mb-5 justify-center text-saffron-light">Start your journey</p>
        <h2 class="mx-auto max-w-2xl text-display-lg tracking-[-0.02em] text-ivory-bright">{{ title }}</h2>
        <p class="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ivory-bright/80 sm:text-lg">
          {{ body }}
        </p>
        <div class="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NuxtLink :to="primaryTo" class="btn-light w-full sm:w-auto">{{ primaryLabel }}</NuxtLink>
          <NuxtLink
            :to="secondaryTo"
            class="btn w-full border border-ivory-bright/40 text-ivory-bright backdrop-blur-sm hover:border-ivory-bright hover:bg-ivory-bright/10 sm:w-auto"
          >
            {{ secondaryLabel }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
