<script setup lang="ts">
import { MapPin, X } from 'lucide-vue-next'
import type { MapLocation } from '~/types'

/**
 * A listing's map in a popup, opened from the map pin on its card, so the
 * visitor can see where a stay is without leaving the page. A bottom sheet on
 * phones and tablets, a centred window on desktop.
 */
const props = defineProps<{
  map: MapLocation
  title: string
  location: string
}>()

const open = defineModel<boolean>('open', { default: false })

const uid = useId()
const closeButton = ref<HTMLButtonElement | null>(null)
let returnFocusTo: HTMLElement | null = null
let previousOverflow = ''

watch(open, async (isOpen) => {
  if (isOpen) {
    returnFocusTo = document.activeElement as HTMLElement | null
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    await nextTick()
    closeButton.value?.focus({ preventScroll: true })
  } else {
    document.body.style.overflow = previousOverflow
    returnFocusTo?.focus?.({ preventScroll: true })
  }
})

onBeforeUnmount(() => {
  if (open.value) document.body.style.overflow = previousOverflow
})

const close = () => {
  open.value = false
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key !== 'Escape') return
  event.preventDefault()
  close()
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-300 ease-editorial sheet-m-enter-active"
      enter-from-class="opacity-0 sheet-m-enter-from"
      leave-active-class="transition-opacity duration-200 ease-editorial sheet-m-leave-active"
      leave-to-class="opacity-0 sheet-m-leave-to"
      :duration="{ enter: 450, leave: 260 }"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-[80] flex items-end justify-center lg:items-center lg:p-6"
        @keydown="onKeydown"
      >
        <div class="absolute inset-0 bg-pine-deep/60 backdrop-blur-sm" aria-hidden="true" @click="close" />

        <div
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`${uid}-title`"
          class="sheet-panel relative flex max-h-[92svh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[1.75rem] bg-surface shadow-lift lg:rounded-card"
        >
          <div class="flex justify-center pt-3 lg:hidden" aria-hidden="true">
            <span class="h-1.5 w-10 rounded-full bg-ink/15" />
          </div>

          <div class="flex items-start justify-between gap-4 px-5 pb-4 pt-3 sm:px-7 lg:pt-6">
            <div class="min-w-0">
              <p class="font-mono text-[0.62rem] font-medium uppercase tracking-[0.14em] text-accent">Location</p>
              <h2 :id="`${uid}-title`" class="mt-1 font-display text-xl leading-snug">{{ props.title }}</h2>
              <p class="mt-1 flex items-center gap-1.5 text-sm text-ink-muted">
                <MapPin class="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                {{ props.location }}
              </p>
            </div>
            <button
              ref="closeButton"
              type="button"
              class="flex h-9 w-9 shrink-0 items-center justify-center rounded-pill bg-canvas-alt text-ink-muted transition-colors hover:text-ink"
              aria-label="Close map"
              @click="close"
            >
              <X class="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div class="overflow-y-auto overscroll-contain px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-7 lg:pb-7">
            <ListingMap :map="map" :label="props.title" height-class="h-[52svh] lg:h-[26rem]" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
