<script setup lang="ts">
import { CalendarDays, ChevronRight, X } from 'lucide-vue-next'

/**
 * Travel dates on phones and tablets: one field that opens a bottom sheet with a
 * scrolling month calendar. Tap the first day, then the last. Nothing is written
 * back until "Confirm dates", and that needs both days, so the dates stay mandatory.
 * Desktop keeps the two native date inputs in ContactForm.
 */
const props = defineProps<{
  /** Earliest selectable day, `YYYY-MM-DD`. Empty until mounted. */
  min: string
  invalid?: boolean
  describedby?: string
  id: string
}>()

const from = defineModel<string>('from', { required: true })
const to = defineModel<string>('to', { required: true })
const emit = defineEmits<{ change: [] }>()

const MONTHS_AHEAD = 18
const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const open = ref(false)
const draftFrom = ref('')
const draftTo = ref('')
const sheet = ref<HTMLElement | null>(null)
const scroller = ref<HTMLElement | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)
const trigger = ref<HTMLButtonElement | null>(null)
let previousOverflow = ''

const pad = (n: number) => String(n).padStart(2, '0')
const iso = (y: number, m: number, d: number) => `${y}-${pad(m + 1)}-${pad(d)}`
const parse = (value: string) => {
  const [y, m, d] = value.split('-').map(Number)
  return new Date(y!, m! - 1, d!)
}

const short = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short' })
const long = new Intl.DateTimeFormat('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
const monthName = new Intl.DateTimeFormat('en-IN', { month: 'long', year: 'numeric' })

const fmtShort = (value: string) => (value ? short.format(parse(value)) : '')
const fmtLong = (value: string) => (value ? long.format(parse(value)) : '')

const nights = (start: string, end: string) => Math.round((parse(end).getTime() - parse(start).getTime()) / 86_400_000)
const tripLength = (start: string, end: string) => {
  const n = nights(start, end)
  return n === 0 ? 'Day trip' : `${n} ${n === 1 ? 'night' : 'nights'}`
}

/** What the closed field shows. */
const summary = computed(() => {
  if (from.value && to.value) return `${fmtShort(from.value)} → ${fmtShort(to.value)}`
  if (from.value) return `${fmtShort(from.value)} → choose end date`
  return ''
})

/** Twelve-plus months from the current one, each padded to start on Sunday. */
const months = computed(() => {
  const start = props.min ? parse(props.min) : new Date()
  return Array.from({ length: MONTHS_AHEAD }, (_, offset) => {
    const first = new Date(start.getFullYear(), start.getMonth() + offset, 1)
    const y = first.getFullYear()
    const m = first.getMonth()
    const days = new Date(y, m + 1, 0).getDate()
    return {
      key: `${y}-${m}`,
      label: monthName.format(first),
      blanks: first.getDay(),
      days: Array.from({ length: days }, (_, i) => ({ day: i + 1, iso: iso(y, m, i + 1) }))
    }
  })
})

const isDisabled = (day: string) => Boolean(props.min) && day < props.min
const isStart = (day: string) => day === draftFrom.value
const isEnd = (day: string) => day === draftTo.value
const inRange = (day: string) => Boolean(draftFrom.value && draftTo.value) && day > draftFrom.value && day < draftTo.value
const hasRange = computed(() => Boolean(draftFrom.value && draftTo.value && draftTo.value > draftFrom.value))

const step = computed(() => (!draftFrom.value ? 'start' : !draftTo.value ? 'end' : 'done'))
const hint = computed(() =>
  step.value === 'start'
    ? 'Tap the day you would like to start.'
    : step.value === 'end'
      ? 'Now tap the day your trip ends.'
      : tripLength(draftFrom.value, draftTo.value)
)

/** First tap sets the start; the next sets the end, or restarts if it is earlier. */
const pick = (day: string) => {
  if (isDisabled(day)) return
  if (!draftFrom.value || draftTo.value || day < draftFrom.value) {
    draftFrom.value = day
    draftTo.value = ''
  } else {
    draftTo.value = day
  }
}

const show = async () => {
  draftFrom.value = from.value
  draftTo.value = to.value
  previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  open.value = true
  await nextTick()
  closeButton.value?.focus({ preventScroll: true })
  // Open on the month already chosen, so changing a date is one tap away.
  if (draftFrom.value) {
    const [y, m] = draftFrom.value.split('-').map(Number)
    scroller.value?.querySelector<HTMLElement>(`[data-month="${y}-${m! - 1}"]`)?.scrollIntoView({ block: 'start' })
  }
}

const hide = () => {
  open.value = false
  document.body.style.overflow = previousOverflow
  trigger.value?.focus({ preventScroll: true })
}

const confirm = () => {
  if (!draftFrom.value || !draftTo.value) return
  from.value = draftFrom.value
  to.value = draftTo.value
  hide()
  emit('change')
}

const clear = () => {
  draftFrom.value = ''
  draftTo.value = ''
}

onBeforeUnmount(() => {
  if (open.value) document.body.style.overflow = previousOverflow
})

/** Escape closes; Tab stays inside the sheet. */
const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    event.preventDefault()
    event.stopPropagation()
    hide()
    return
  }
  if (event.key !== 'Tab' || !sheet.value) return
  const focusable = [...sheet.value.querySelectorAll<HTMLElement>('button:not([disabled])')]
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

/** Drag the handle down to dismiss, like a native sheet. */
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
  if (dragOffset.value > 110) hide()
  dragStart = null
  dragOffset.value = 0
}
</script>

<template>
  <div>
    <button
      :id="id"
      ref="trigger"
      type="button"
      class="flex min-h-[3.25rem] w-full items-center gap-3 rounded-xl border bg-surface px-4 py-3 text-left text-base transition-colors focus:border-link focus:outline-none focus:ring-1 focus:ring-link"
      :class="invalid ? 'border-accent' : 'border-hairline'"
      aria-haspopup="dialog"
      aria-required="true"
      :aria-invalid="invalid"
      :data-invalid="invalid"
      :aria-describedby="describedby"
      @click="show"
    >
      <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-link">
        <CalendarDays class="h-4 w-4" aria-hidden="true" />
      </span>
      <span class="min-w-0 flex-1">
        <span v-if="summary" class="block truncate text-ink">{{ summary }}</span>
        <span v-else class="block truncate text-ink-muted/70">Choose your travel dates</span>
        <span v-if="from && to" class="block text-xs text-ink-muted">{{ tripLength(from, to) }}</span>
      </span>
      <ChevronRight class="h-4 w-4 shrink-0 text-ink-muted" aria-hidden="true" />
    </button>

    <Teleport to="body">
      <Transition
        enter-active-class="sheet-enter-active"
        enter-from-class="sheet-enter-from"
        leave-active-class="sheet-leave-active"
        leave-to-class="sheet-leave-to"
        :duration="{ enter: 450, leave: 260 }"
      >
        <div v-if="open" class="fixed inset-0 z-[80] flex items-end justify-center" @keydown="onKeydown">
          <div class="sheet-backdrop absolute inset-0 bg-pine-deep/55 backdrop-blur-[2px]" aria-hidden="true" @click="hide" />

          <div
            ref="sheet"
            role="dialog"
            aria-modal="true"
            :aria-labelledby="`${id}-sheet-title`"
            class="sheet-panel relative flex h-[min(88svh,46rem)] w-full max-w-xl flex-col rounded-t-[1.75rem] bg-surface shadow-lift"
            :style="dragOffset ? { transform: `translateY(${dragOffset}px)`, transition: 'none' } : undefined"
          >
            <!-- Handle and header: the drag area. -->
            <div class="shrink-0 touch-none" @touchstart.passive="onDragStart" @touchmove.passive="onDragMove" @touchend="onDragEnd">
              <div class="flex justify-center pt-3">
                <span class="h-1.5 w-10 rounded-full bg-ink/15" aria-hidden="true" />
              </div>
              <div class="flex items-start justify-between gap-4 px-5 pt-3">
                <div>
                  <p class="font-mono text-[0.62rem] font-medium uppercase tracking-[0.14em] text-accent">Travel dates</p>
                  <h2 :id="`${id}-sheet-title`" class="mt-1 font-display text-xl leading-snug">When are you travelling?</h2>
                </div>
                <button
                  ref="closeButton"
                  type="button"
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-pill bg-canvas-alt text-ink-muted transition-colors hover:text-ink"
                  aria-label="Close calendar"
                  @click="hide"
                >
                  <X class="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <!-- Start and end at a glance; the one being picked next is lit. -->
              <div class="mt-4 grid grid-cols-2 gap-2 px-5">
                <div
                  class="rounded-xl border px-3.5 py-2.5 transition-colors"
                  :class="step === 'start' ? 'border-link bg-brand/[0.06]' : 'border-hairline'"
                >
                  <p class="text-[0.68rem] font-medium uppercase tracking-[0.1em] text-ink-muted">Start</p>
                  <p class="mt-0.5 truncate text-sm font-medium" :class="draftFrom ? 'text-ink' : 'text-ink-muted/60'">
                    {{ draftFrom ? fmtLong(draftFrom) : 'Add date' }}
                  </p>
                </div>
                <div
                  class="rounded-xl border px-3.5 py-2.5 transition-colors"
                  :class="step === 'end' ? 'border-link bg-brand/[0.06]' : 'border-hairline'"
                >
                  <p class="text-[0.68rem] font-medium uppercase tracking-[0.1em] text-ink-muted">End</p>
                  <p class="mt-0.5 truncate text-sm font-medium" :class="draftTo ? 'text-ink' : 'text-ink-muted/60'">
                    {{ draftTo ? fmtLong(draftTo) : 'Add date' }}
                  </p>
                </div>
              </div>
              <p class="px-5 pt-2.5 text-xs text-ink-muted" aria-live="polite">{{ hint }}</p>

              <div class="mt-3 grid grid-cols-7 border-b border-hairline px-3 pb-2 text-center">
                <span
                  v-for="(weekday, index) in WEEKDAYS"
                  :key="index"
                  class="text-[0.7rem] font-medium text-ink-muted"
                  aria-hidden="true"
                >{{ weekday }}</span>
              </div>
            </div>

            <!-- Months -->
            <div ref="scroller" class="flex-1 overflow-y-auto overscroll-contain px-3 pb-4">
              <section v-for="month in months" :key="month.key" :data-month="month.key" class="scroll-mt-1 pt-5">
                <h3 class="px-2 pb-2 font-display text-[0.95rem] font-medium">{{ month.label }}</h3>
                <div class="grid grid-cols-7 gap-y-1" role="group" :aria-label="month.label">
                  <span v-for="blank in month.blanks" :key="`b${blank}`" aria-hidden="true" />
                  <div
                    v-for="day in month.days"
                    :key="day.iso"
                    class="day-cell"
                    :class="{
                      'day-band': inRange(day.iso),
                      'day-band-start': hasRange && isStart(day.iso),
                      'day-band-end': hasRange && isEnd(day.iso)
                    }"
                  >
                    <button
                      type="button"
                      class="relative mx-auto flex h-10 w-10 items-center justify-center rounded-full text-sm transition-colors duration-150"
                      :class="
                        isStart(day.iso) || isEnd(day.iso)
                          ? 'bg-gradient-to-br from-brand to-brand-deep font-semibold text-white shadow-glow'
                          : isDisabled(day.iso)
                            ? 'cursor-not-allowed text-ink-muted/35'
                            : inRange(day.iso)
                              ? 'text-ink'
                              : 'text-ink hover:bg-canvas-alt active:bg-brand/10'
                      "
                      :disabled="isDisabled(day.iso)"
                      :aria-pressed="isStart(day.iso) || isEnd(day.iso)"
                      :aria-label="fmtLong(day.iso)"
                      @click="pick(day.iso)"
                    >
                      {{ day.day }}
                      <span
                        v-if="day.iso === min && !isStart(day.iso) && !isEnd(day.iso)"
                        class="absolute bottom-1 h-1 w-1 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </section>
            </div>

            <!-- Actions -->
            <div class="flex shrink-0 items-center gap-3 border-t border-hairline px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3.5">
              <button
                type="button"
                class="px-2 py-2 text-sm font-medium text-ink-muted underline-offset-4 transition-colors hover:text-ink disabled:opacity-40"
                :disabled="!draftFrom"
                @click="clear"
              >
                Clear
              </button>
              <button type="button" class="btn-primary ml-auto flex-1 disabled:opacity-50" :disabled="!draftFrom || !draftTo" @click="confirm">
                {{ draftFrom && draftTo ? `Confirm · ${fmtShort(draftFrom)} – ${fmtShort(draftTo)}` : 'Confirm dates' }}
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
/* The range band runs behind the day circles, half-width on the first and last day. */
.day-cell {
  position: relative;
}

.day-band::before,
.day-band-start::before,
.day-band-end::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  background: rgb(5 150 105 / 0.1);
}

.day-band::before {
  left: 0;
  right: 0;
}

.day-band-start::before {
  left: 50%;
  right: 0;
}

.day-band-end::before {
  left: 0;
  right: 50%;
}
</style>
