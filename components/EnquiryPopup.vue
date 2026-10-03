<script setup lang="ts">
import { X } from 'lucide-vue-next'

/**
 * The enquiry form as a popup, offered on every full page load (open or refresh)
 * after 15 seconds on the site. Moving between pages inside the site does not
 * restart the count, so it comes up at most once per load.
 *
 * - Only time with the tab in view counts towards the 15 seconds.
 * - It never opens over Plan My Trip or Contact, which already show the form;
 *   if the time runs out there, it waits until the visitor moves on.
 */
const DELAY_SECONDS = 15
const PAGES_WITH_FORM = ['/plan-my-trip', '/contact']

const route = useRoute()
const { destinations } = useSiteBundle()
const enquiryContext = useEnquiryContext()
const open = ref(false)
const due = ref(false)
const dialog = ref<HTMLElement | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)
let returnFocusTo: HTMLElement | null = null
let timer: ReturnType<typeof setInterval> | undefined

const hasFormOnPage = computed(() => PAGES_WITH_FORM.includes(route.path))

/**
 * Pre-selects the destination when the visitor is on a destination or listing page.
 * Listing pages say which destination they belong to through useEnquiryContext().
 */
const presetDestination = computed(() => {
  if (enquiryContext.value?.path === route.path) return enquiryContext.value.destination
  const [section, slug] = route.path.split('/').filter(Boolean)
  if (section !== 'destinations' || !slug) return ''
  return destinations.find((d) => d.slug === slug)?.name ?? ''
})

const show = () => {
  if (open.value || hasFormOnPage.value) return
  returnFocusTo = document.activeElement as HTMLElement | null
  open.value = true
}

const close = () => {
  open.value = false
  due.value = false
}

onMounted(() => {
  let seconds = 0
  timer = setInterval(() => {
    if (document.visibilityState !== 'visible') return
    seconds++
    if (seconds < DELAY_SECONDS) return
    clearInterval(timer)
    due.value = true
    show()
  }, 1000)
})

// The time ran out on a page that already had the form: offer it on the next page instead.
watch(hasFormOnPage, (onFormPage) => {
  if (!onFormPage && due.value && !open.value) show()
})

watch(open, async (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
  if (isOpen) {
    await nextTick()
    closeButton.value?.focus()
  } else {
    returnFocusTo?.focus?.()
  }
})

onBeforeUnmount(() => {
  clearInterval(timer)
  document.body.style.removeProperty('overflow')
})

/** Phones: drag the sheet's header down to dismiss it, like a native sheet. */
let dragStart: number | null = null
const dragOffset = ref(0)
const onDragStart = (event: TouchEvent) => {
  dragStart = event.touches[0]?.clientY ?? null
}
const onDragMove = (event: TouchEvent) => {
  if (dragStart === null) return
  dragOffset.value = Math.max(0, (event.touches[0]?.clientY ?? dragStart) - dragStart)
}
const onDragEnd = () => {
  if (dragOffset.value > 120) close()
  dragStart = null
  dragOffset.value = 0
}

/** Escape closes; Tab and Shift+Tab stay inside the dialog. */
const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    event.preventDefault()
    close()
    return
  }
  if (event.key !== 'Tab' || !dialog.value) return
  const focusable = [
    ...dialog.value.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input, select, textarea')
  ].filter((el) => el.offsetParent !== null)
  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  if (!first || !last) return
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
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
        class="fixed inset-0 z-[70] flex items-end justify-center lg:items-start lg:overflow-y-auto lg:p-6"
        @keydown="onKeydown"
      >
        <!--
          Phones and tablets get a bottom sheet that slides up: the title and close button stay
          pinned while the form scrolls beneath them, and dragging the header down dismisses it.
          From lg up the form is laid out three across so the whole dialog fits on screen with no
          inner scrollbar; on an unusually short window the backdrop scrolls instead.
        -->
        <div class="absolute inset-0 bg-pine-deep/60 backdrop-blur-sm" aria-hidden="true" @click="close" />

        <div
          ref="dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-popup-title"
          aria-describedby="enquiry-popup-intro"
          class="sheet-panel relative flex max-h-[92svh] w-full max-w-2xl flex-col overflow-hidden rounded-t-[1.75rem] bg-surface shadow-lift lg:my-auto lg:block lg:max-h-none lg:max-w-5xl lg:overflow-visible lg:rounded-card lg:px-10 lg:py-8"
          :style="dragOffset ? { transform: `translateY(${dragOffset}px)`, transition: 'none' } : undefined"
        >
          <button
            ref="closeButton"
            type="button"
            class="absolute right-4 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-pill bg-canvas-alt text-ink-muted transition-colors hover:bg-canvas-alt hover:text-ink lg:top-4 lg:h-10 lg:w-10 lg:bg-transparent lg:hover:bg-canvas-alt"
            aria-label="Close"
            @click="close"
          >
            <X class="h-5 w-5" aria-hidden="true" />
          </button>

          <div
            class="shrink-0 touch-none border-b border-hairline px-5 pb-4 sm:px-8 lg:touch-auto lg:border-0 lg:p-0"
            @touchstart.passive="onDragStart"
            @touchmove.passive="onDragMove"
            @touchend="onDragEnd"
          >
            <div class="flex justify-center pb-2 pt-3 lg:hidden" aria-hidden="true">
              <span class="h-1.5 w-10 rounded-full bg-ink/15" />
            </div>
            <p class="font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] text-accent">Plan your journey</p>
            <h2
              id="enquiry-popup-title"
              class="mt-1.5 pr-12 font-display text-[1.375rem] leading-snug sm:text-3xl lg:mt-2 lg:pr-10 lg:text-[1.75rem]"
            >
              Tell us about the trip you have in mind.
            </h2>
            <p id="enquiry-popup-intro" class="mt-1.5 max-w-xl text-[0.8125rem] leading-relaxed text-ink-muted lg:mt-2 lg:text-[0.875rem]">
              Share a few details and one of our trip designers will write back within one working day with a suggested
              route.
            </p>
          </div>

          <div
            class="flex-1 overflow-y-auto overscroll-contain px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-5 sm:px-8 lg:overflow-visible lg:p-0"
          >
            <ContactForm
              class="lg:mt-6"
              compact
              :columns="3"
              :preset-destination="presetDestination"
              :source="`popup:${route.path}`"
              @submitted="due = false"
            />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
