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
  <div class="space-y-3">
    <details
      v-for="item in items"
      :key="item.question"
      class="surface-card group px-6 shadow-soft transition-all duration-300 ease-editorial open:border-accent/40 open:shadow-lift"
    >
      <summary
        class="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left transition-colors hover:text-accent [&::-webkit-details-marker]:hidden"
      >
        <h3 class="font-display text-base leading-snug sm:text-lg">{{ item.question }}</h3>
        <span
          class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-hairline text-ink-muted transition-all duration-300 ease-editorial group-open:rotate-45 group-open:border-transparent group-open:bg-gradient-to-br group-open:from-brand group-open:to-brand-indigo group-open:text-white"
          aria-hidden="true"
        >
          <Plus class="h-4 w-4" />
        </span>
      </summary>
      <p class="max-w-prose pb-6 text-[0.975rem] leading-relaxed text-ink-muted">
        {{ item.answer }}
      </p>
    </details>
  </div>
</template>
