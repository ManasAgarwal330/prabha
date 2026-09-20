<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import type { FaqItem } from '~/types'

/**
 * Native <details> elements — keyboard accessible and fully functional
 * before any JavaScript loads.
 */
defineProps<{ items: FaqItem[] }>()
</script>

<template>
  <div class="divide-y divide-line border-y border-line">
    <details v-for="item in items" :key="item.question" class="group">
      <summary
        class="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left transition-colors hover:text-clay [&::-webkit-details-marker]:hidden"
      >
        <h3 class="font-display text-lg leading-snug sm:text-xl">{{ item.question }}</h3>
        <Plus
          class="mt-1 h-5 w-5 shrink-0 text-charcoal-muted transition-transform duration-300 ease-editorial group-open:rotate-45"
          aria-hidden="true"
        />
      </summary>
      <p class="max-w-prose pb-7 text-[0.975rem] leading-relaxed text-charcoal-muted">
        {{ item.answer }}
      </p>
    </details>
  </div>
</template>
