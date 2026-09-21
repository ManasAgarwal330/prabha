<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const isNotFound = computed(() => props.error?.statusCode === 404)

useHead({ title: isNotFound.value ? 'Page not found' : 'Something went wrong' })
</script>

<template>
  <div class="flex min-h-screen flex-col bg-canvas">
    <AppHeader />

    <main class="flex flex-1 items-center pt-20">
      <div class="container-pravaah py-24 text-center">
        <p class="eyebrow mb-5">{{ error?.statusCode || 500 }}</p>
        <h1 class="mx-auto max-w-2xl text-display-lg">
          {{ isNotFound ? 'This route does not exist — yet.' : 'Something went wrong on our side.' }}
        </h1>
        <p class="mx-auto mt-5 max-w-md leading-relaxed text-ink-muted">
          {{
            isNotFound
              ? 'The page you were looking for has moved or never existed. The journeys below are a good place to restart.'
              : 'Please try again in a moment. If it keeps happening, write to us and we will sort it out.'
          }}
        </p>
        <div class="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NuxtLink to="/" class="btn-primary" @click="clearError">Back to home</NuxtLink>
          <NuxtLink to="/destinations" class="btn-secondary" @click="clearError">Browse destinations</NuxtLink>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>
