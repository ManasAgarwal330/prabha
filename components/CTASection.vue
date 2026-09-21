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
    secondaryLabel: 'Browse journeys',
    secondaryTo: '/tours'
  }
)
</script>

<template>
  <section class="container-pravaah py-16 sm:py-20 lg:py-24">
    <div class="reveal relative overflow-hidden rounded-card">
      <AppImage
        :src="image"
        alt=""
        :ratio="16 / 9"
        sizes="(min-width: 1280px) 1200px, 100vw"
        :zoom="false"
        class="absolute inset-0 h-full w-full"
      />
      <div class="absolute inset-0 bg-charcoal/65" aria-hidden="true" />

      <div class="relative px-6 py-20 text-center sm:px-10 sm:py-24 lg:py-32">
        <h2 class="mx-auto max-w-2xl text-display-lg text-ivory-bright">{{ title }}</h2>
        <p class="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ivory-bright/80 sm:text-lg">
          {{ body }}
        </p>
        <div class="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NuxtLink :to="primaryTo" class="btn-light w-full sm:w-auto">{{ primaryLabel }}</NuxtLink>
          <NuxtLink
            :to="secondaryTo"
            class="btn w-full border border-ivory-bright/40 text-ivory-bright hover:border-ivory-bright hover:bg-ivory-bright/10 sm:w-auto"
          >
            {{ secondaryLabel }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
