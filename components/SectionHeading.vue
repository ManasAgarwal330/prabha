<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    intro?: string
    align?: 'left' | 'center'
    /** Renders as h1 on pages where this is the page title. */
    as?: 'h1' | 'h2'
  }>(),
  { align: 'left', as: 'h2' }
)
</script>

<template>
  <div class="reveal" :class="align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'">
    <p v-if="eyebrow" class="eyebrow mb-4">{{ eyebrow }}</p>
    <component :is="as" class="text-display-md">
      {{ title }}
    </component>
    <p v-if="intro" class="mt-5 text-lg leading-relaxed text-charcoal-muted">
      {{ intro }}
    </p>
  </div>
</template>
