<script setup lang="ts">
import { scroll } from 'motion'

/**
 * Paragraphs whose words light up one after another as they scroll through the
 * viewport. After Motion's Scroll Word Reveal (21st.dev/@motiondotdev/components/motion-scroll-word-reveal).
 *
 * motion's `scroll()` writes a single `--p` (0 → 1) on the wrapper; each word's
 * opacity is worked out in CSS from its index, so a scroll frame costs one style
 * write however long the text is. Without JavaScript, or under reduced motion,
 * `--p` stays at 1 and the text is simply there.
 */
const props = defineProps<{ paragraphs: string[] }>()

const words = computed(() => {
  let index = 0
  return props.paragraphs.map((paragraph) => paragraph.split(/\s+/).filter(Boolean).map((word) => ({ word, index: index++ })))
})
const total = computed(() => words.value.reduce((count, paragraph) => count + paragraph.length, 0))

const root = ref<HTMLElement | null>(null)
let stop: VoidFunction | undefined

onMounted(() => {
  const el = root.value
  if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  stop = scroll((progress: number) => el.style.setProperty('--p', progress.toFixed(4)), {
    target: el,
    // Starts as the text rises past the lower part of the screen, done by the middle.
    offset: ['start 0.85', 'end 0.5']
  })
})

onBeforeUnmount(() => stop?.())
</script>

<template>
  <div ref="root" class="word-reveal" :style="{ '--n': total }">
    <p v-for="(paragraph, p) in words" :key="p">
      <template v-for="(item, w) in paragraph" :key="w">
        <span class="word-reveal-word" :style="{ '--i': item.index }">{{ item.word }}</span>{{ ' ' }}
      </template>
    </p>
  </div>
</template>

<style scoped>
.word-reveal {
  --p: 1;
}

/* Each word fades in across the span of four words, so the light moves through the
   text like a wave instead of switching word by word. */
.word-reveal-word {
  opacity: clamp(0.16, calc((var(--p) * (var(--n) + 4) - var(--i)) / 4), 1);
  transition: opacity 0.15s linear;
}
</style>
