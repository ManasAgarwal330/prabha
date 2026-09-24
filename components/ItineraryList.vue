<script setup lang="ts">
import { BedDouble, UtensilsCrossed } from 'lucide-vue-next'
import type { ItineraryDay } from '~/types'

/** Day-by-day plan as a timeline: a gradient rail, a numbered node and a card per day. */
defineProps<{ days: ItineraryDay[] }>()
</script>

<template>
  <ol class="relative space-y-4">
    <span
      class="absolute bottom-6 left-[1.1rem] top-6 w-px bg-gradient-to-b from-brand via-brand-indigo to-brand-cyan/10"
      aria-hidden="true"
    />
    <li v-for="day in days" :key="day.day" class="relative pl-14">
      <span
        class="icon-tile absolute left-0 top-5 h-9 w-9 rounded-xl font-mono text-[0.7rem] font-medium"
        aria-hidden="true"
      >
        {{ String(day.day).padStart(2, '0') }}
      </span>

      <div class="surface-card glow-card p-5 shadow-soft sm:p-6">
        <p class="font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] text-accent">Day {{ day.day }}</p>
        <h3 class="mt-1.5 font-display text-lg leading-snug sm:text-xl">{{ day.title }}</h3>
        <p class="mt-2 max-w-prose text-[0.95rem] leading-relaxed text-ink-muted">{{ day.description }}</p>

        <div v-if="day.stay || day.meals" class="mt-4 flex flex-wrap gap-2">
          <span
            v-if="day.stay"
            class="inline-flex items-center gap-1.5 rounded-pill border border-hairline bg-canvas-alt px-3 py-1 text-xs text-ink-soft"
          >
            <BedDouble class="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            {{ day.stay }}
          </span>
          <span
            v-if="day.meals"
            class="inline-flex items-center gap-1.5 rounded-pill border border-hairline bg-canvas-alt px-3 py-1 text-xs text-ink-soft"
          >
            <UtensilsCrossed class="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            {{ day.meals }}
          </span>
        </div>
      </div>
    </li>
  </ol>
</template>
