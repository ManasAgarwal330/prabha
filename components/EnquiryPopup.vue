<script setup lang="ts">
import { X } from 'lucide-vue-next'
import { getDestination } from '~/data/destinations'
import { getListing } from '~/data/listings'
import type { SectionKey } from '~/types'
import { ENQUIRED_KEY } from '~/composables/useEnquiry'

/**
 * The enquiry form as a popup, offered once a visit after 20 seconds on the site.
 *
 * - Only time with the tab in view counts towards the 20 seconds.
 * - It never opens over Plan My Trip or Contact, which already show the form;
 *   if the time runs out there, it waits until the visitor moves on.
 * - Closing it means "not now": it stays away for the rest of the visit.
 *   Once any enquiry has been sent, it stays away for good.
 */
const DELAY_SECONDS = 20
const SHOWN_KEY = 'pravaah:enquiry-popup-shown'
const PAGES_WITH_FORM = ['/plan-my-trip', '/contact']

const route = useRoute()
const open = ref(false)
const due = ref(false)
const dialog = ref<HTMLElement | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)
let returnFocusTo: HTMLElement | null = null
let timer: ReturnType<typeof setInterval> | undefined

const readStorage = (storage: () => Storage, key: string) => {
  try {
    return storage().getItem(key)
  } catch {
    return null
  }
}

const writeSession = (key: string) => {
  try {
    sessionStorage.setItem(key, '1')
  } catch {
    // Without storage it can only be shown once per page load, which is fine.
  }
}

const hasFormOnPage = computed(() => PAGES_WITH_FORM.includes(route.path))

/** Pre-selects the destination when the visitor is on a destination or listing page. */
const presetDestination = computed(() => {
  const [section, slug] = route.path.split('/').filter(Boolean)
  if (!slug) return ''
  if (section === 'destinations') return getDestination(slug)?.name ?? ''
  const listing = getListing(section as SectionKey, slug)
  return listing?.destinationSlug ? (getDestination(listing.destinationSlug)?.name ?? '') : ''
})

const show = () => {
  if (open.value || hasFormOnPage.value) return
  returnFocusTo = document.activeElement as HTMLElement | null
  open.value = true
  writeSession(SHOWN_KEY)
}

const close = () => {
  open.value = false
  due.value = false
}

onMounted(() => {
  if (readStorage(() => localStorage, ENQUIRED_KEY) || readStorage(() => sessionStorage, SHOWN_KEY)) return

  let seconds = 0
  timer = setInterval(() => {
    if (document.visibilityState !== 'visible') return
    seconds++
    if (seconds < DELAY_SECONDS) return
    clearInterval(timer)
    // Someone may have sent an enquiry from a page form in the meantime.
    if (readStorage(() => localStorage, ENQUIRED_KEY)) return
    due.value = true
    show()
  }, 1000)
})

// The time ran out on a page that already had the form: offer it on the next page instead.
watch(hasFormOnPage, (onFormPage) => {
  if (!onFormPage && due.value && !open.value && !readStorage(() => localStorage, ENQUIRED_KEY)) show()
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
      enter-active-class="transition-opacity duration-300 ease-editorial"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-200 ease-editorial"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6 lg:items-start lg:overflow-y-auto"
        @keydown="onKeydown"
      >
        <!--
          Phones get a bottom sheet that scrolls inside itself. From lg up the form is laid out
          three across so the whole dialog fits on screen with no inner scrollbar; on an unusually
          short window the backdrop scrolls instead.
        -->
        <div class="absolute inset-0 bg-pine-deep/60 backdrop-blur-sm" aria-hidden="true" @click="close" />

        <div
          ref="dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-popup-title"
          aria-describedby="enquiry-popup-intro"
          class="relative max-h-[92svh] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-t-card bg-surface p-6 shadow-lift sm:rounded-card sm:p-9 lg:my-auto lg:max-h-none lg:max-w-5xl lg:overflow-visible lg:px-10 lg:py-8"
        >
          <button
            ref="closeButton"
            type="button"
            class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-pill text-ink-muted transition-colors hover:bg-canvas-alt hover:text-ink"
            aria-label="Close"
            @click="close"
          >
            <X class="h-5 w-5" aria-hidden="true" />
          </button>

          <p class="font-mono text-[0.65rem] font-medium uppercase tracking-[0.14em] text-accent">Plan your journey</p>
          <h2 id="enquiry-popup-title" class="mt-2 pr-10 font-display text-2xl leading-snug sm:text-3xl lg:text-[1.75rem]">
            Tell us about the trip you have in mind.
          </h2>
          <p id="enquiry-popup-intro" class="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted">
            Share a few details and one of our trip designers will write back within one working day with a suggested
            route.
          </p>

          <ContactForm
            class="mt-6"
            compact
            :columns="3"
            :preset-destination="presetDestination"
            :source="`popup:${route.path}`"
            @submitted="due = false"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
