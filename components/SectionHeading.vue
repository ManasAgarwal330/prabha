<script setup lang="ts">
const props = withDefaults(
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

/** The closing words of every heading carry the brand gradient — two words, or one on short titles. */
const titleParts = computed(() => {
  const words = props.title.trim().split(/\s+/)
  const tail = words.length >= 4 ? 2 : 1
  return { head: words.slice(0, -tail).join(' '), tail: words.slice(-tail).join(' ') }
})
</script>

<template>
  <div class="reveal" :class="align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'">
    <p v-if="eyebrow" class="mb-5" :class="align === 'center' ? 'flex justify-center' : ''">
      <span class="chip">
        <span class="chip-dot" aria-hidden="true" />
        {{ eyebrow }}
      </span>
    </p>
    <component :is="as" class="text-display-md">
      <template v-if="titleParts.head">{{ `${titleParts.head} ` }}</template>
      <span class="text-gradient">{{ titleParts.tail }}</span>
    </component>
    <p v-if="intro" class="mt-5 text-lg leading-relaxed text-ink-muted">
      {{ intro }}
    </p>
  </div>
</template>
