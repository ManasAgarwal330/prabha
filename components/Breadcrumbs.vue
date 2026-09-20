<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'

defineProps<{
  items: { name: string; path: string }[]
  /** Use on dark hero backgrounds. */
  light?: boolean
}>()
</script>

<template>
  <nav aria-label="Breadcrumb">
    <ol class="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs" :class="light ? 'text-ivory-bright/75' : 'text-ink-muted'">
      <li v-for="(item, index) in items" :key="item.path" class="flex items-center gap-1.5">
        <NuxtLink
          v-if="index < items.length - 1"
          :to="item.path"
          class="transition-colors hover:text-accent"
          :class="light ? 'hover:text-ivory-bright' : ''"
        >
          {{ item.name }}
        </NuxtLink>
        <span v-else aria-current="page" :class="light ? 'text-ivory-bright' : 'text-ink'">{{ item.name }}</span>
        <ChevronRight v-if="index < items.length - 1" class="h-3 w-3 opacity-50" aria-hidden="true" />
      </li>
    </ol>
  </nav>
</template>
