<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

/**
 * A row of cards. On phones it becomes a swipeable rail showing one whole card
 * at a time, with arrows over it and dots under it so it is obvious there is
 * more to the right. From `sm` up the wrapper disappears (`display: contents`)
 * and the classes passed in (usually a grid) lay the cards out as before.
 */
defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{ label?: string }>(), { label: 'cards' })

const rail = ref<HTMLElement | null>(null)
const count = ref(0)
const index = ref(0)
/** The right arrow nudges until the visitor first moves the rail. */
const touched = ref(false)
let frame = 0

/** The card nearest the left edge decides which dot is lit. */
const update = () => {
  const el = rail.value
  if (!el) return
  const cards = [...el.children] as HTMLElement[]
  count.value = cards.length
  if (cards.length < 2) return
  const step = cards[1]!.offsetLeft - cards[0]!.offsetLeft
  index.value = step > 0 ? Math.min(cards.length - 1, Math.round(el.scrollLeft / step)) : 0
}

const onScroll = () => {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(update)
}

const scrollToCard = (target: number) => {
  const el = rail.value
  const first = el?.children[0] as HTMLElement | undefined
  const card = el?.children[target] as HTMLElement | undefined
  if (!el || !first || !card) return
  touched.value = true
  el.scrollTo({ left: card.offsetLeft - first.offsetLeft, behavior: 'smooth' })
}

onMounted(() => {
  update()
  window.addEventListener('resize', onScroll, { passive: true })
})
onUpdated(update)
onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  window.removeEventListener('resize', onScroll)
})
</script>

<template>
  <div class="relative sm:contents">
    <div ref="rail" v-bind="$attrs" class="rail" @scroll.passive="onScroll" @pointerdown="touched = true">
      <slot />
    </div>

    <template v-if="count > 1">
      <!-- Arrows over the rail, phones only. -->
      <button
        v-show="index > 0"
        type="button"
        class="rail-arrow -left-2 sm:hidden"
        :aria-label="`Previous ${props.label}`"
        @click="scrollToCard(index - 1)"
      >
        <ChevronLeft class="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        v-show="index < count - 1"
        type="button"
        class="rail-arrow -right-2 sm:hidden"
        :class="touched ? '' : 'animate-nudge'"
        :aria-label="`Next ${props.label}`"
        @click="scrollToCard(index + 1)"
      >
        <ChevronRight class="h-5 w-5" aria-hidden="true" />
      </button>

      <!-- Position dots and a count, phones only. -->
      <div class="mt-4 flex items-center justify-center gap-3 sm:hidden">
        <div class="flex items-center gap-1.5">
          <button
            v-for="n in count"
            :key="n"
            type="button"
            class="h-1.5 rounded-full transition-all duration-300 ease-editorial"
            :class="n - 1 === index ? 'w-6 bg-accent' : 'w-1.5 bg-ink/20'"
            :aria-label="`Show ${props.label} ${n} of ${count}`"
            :aria-current="n - 1 === index ? 'true' : undefined"
            @click="scrollToCard(n - 1)"
          />
        </div>
        <span class="font-mono text-[0.65rem] tracking-[0.1em] text-ink-muted" aria-hidden="true">
          {{ index + 1 }} / {{ count }}
        </span>
      </div>
    </template>
  </div>
</template>
