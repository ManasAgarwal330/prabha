<script setup lang="ts">
import { BedDouble, UtensilsCrossed } from 'lucide-vue-next'
import type { ItineraryDay } from '~/types'

defineProps<{ days: ItineraryDay[] }>()
</script>

<template>
  <ol class="relative border-l border-hairline pl-8 sm:pl-10">
    <li v-for="day in days" :key="day.day" class="relative pb-10 last:pb-0">
      <span
        class="absolute -left-[2.3rem] flex h-8 w-8 items-center justify-center rounded-xl border border-accent/30 bg-surface font-mono text-[0.68rem] font-medium text-accent shadow-soft sm:-left-[2.8rem]"
        aria-hidden="true"
      >
        {{ String(day.day).padStart(2, '0') }}
      </span>

      <h3 class="font-display text-xl leading-snug sm:text-2xl">
        <span class="sr-only">Day {{ day.day }}: </span>{{ day.title }}
      </h3>
      <p class="mt-2.5 max-w-prose leading-relaxed text-ink-muted">{{ day.description }}</p>

      <div v-if="day.stay || day.meals" class="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink-muted">
        <span v-if="day.stay" class="inline-flex items-center gap-1.5">
          <BedDouble class="h-3.5 w-3.5" aria-hidden="true" />
          {{ day.stay }}
        </span>
        <span v-if="day.meals" class="inline-flex items-center gap-1.5">
          <UtensilsCrossed class="h-3.5 w-3.5" aria-hidden="true" />
          {{ day.meals }}
        </span>
      </div>
    </li>
  </ol>
</template>
