<script setup lang="ts">
import { ChevronLeft, ChevronRight, RotateCcw, X, ZoomIn, ZoomOut } from 'lucide-vue-next'
import { buildImageUrl, buildSrcSet } from '~/composables/useImageSource'
import type { ImageRef } from '~/types'

/**
 * Full-screen photo viewer. Each photo is shown whole (never cropped) at the
 * largest size available, and can be zoomed and moved around:
 * - buttons, the mouse wheel, double-click / double-tap, or pinching on a phone;
 * - drag to move a zoomed photo; swipe or the arrows to change photo.
 * Keyboard: ← → to change, + − 0 to zoom, Escape to close.
 */
const props = defineProps<{
  images: ImageRef[]
  label: string
}>()

const open = defineModel<boolean>('open', { default: false })
const index = defineModel<number>('index', { default: 0 })

const MIN_SCALE = 1
const MAX_SCALE = 4
const STEP = 0.5

const base = useRuntimeConfig().public.imageBaseUrl
const uid = useId()
const stage = ref<HTMLElement | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)
const thumbs = ref<HTMLElement | null>(null)

const scale = ref(1)
const x = ref(0)
const y = ref(0)
/** Off while a finger or the mouse is moving the photo, so it follows without lag. */
const animate = ref(true)

const count = computed(() => props.images.length)
const zoomed = computed(() => scale.value > 1.01)
const current = computed(() => props.images[index.value]!)

const resetZoom = () => {
  scale.value = 1
  x.value = 0
  y.value = 0
}

/** Keeps a zoomed photo from being dragged off-screen. */
const clamp = () => {
  const el = stage.value
  if (!el) return
  const maxX = ((scale.value - 1) * el.clientWidth) / 2
  const maxY = ((scale.value - 1) * el.clientHeight) / 2
  x.value = Math.max(-maxX, Math.min(maxX, x.value))
  y.value = Math.max(-maxY, Math.min(maxY, y.value))
}

/** Zooms towards a point on screen (the pointer, or the centre for the buttons). */
const zoomTo = (next: number, originX?: number, originY?: number) => {
  const el = stage.value
  const target = Math.max(MIN_SCALE, Math.min(MAX_SCALE, next))
  if (el && originX !== undefined && originY !== undefined) {
    const rect = el.getBoundingClientRect()
    const px = originX - rect.left - rect.width / 2
    const py = originY - rect.top - rect.height / 2
    const ratio = target / scale.value
    x.value = px - (px - x.value) * ratio
    y.value = py - (py - y.value) * ratio
  }
  scale.value = target
  if (target === 1) resetZoom()
  clamp()
}

const zoomIn = () => zoomTo(scale.value + STEP)
const zoomOut = () => zoomTo(scale.value - STEP)

const go = (to: number) => {
  if (!count.value) return
  index.value = (to + count.value) % count.value
}
const next = () => go(index.value + 1)
const prev = () => go(index.value - 1)

watch(index, () => {
  resetZoom()
  nextTick(() =>
    thumbs.value?.children[index.value]?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  )
})

let previousOverflow = ''
let returnFocusTo: HTMLElement | null = null
watch(open, async (isOpen) => {
  if (isOpen) {
    returnFocusTo = document.activeElement as HTMLElement | null
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    resetZoom()
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
  const keys: Record<string, () => void> = {
    Escape: close,
    ArrowRight: next,
    ArrowLeft: prev,
    '+': zoomIn,
    '=': zoomIn,
    '-': zoomOut,
    '0': resetZoom
  }
  const action = keys[event.key]
  if (!action) return
  event.preventDefault()
  action()
}

const onWheel = (event: WheelEvent) => {
  event.preventDefault()
  zoomTo(scale.value * (event.deltaY < 0 ? 1.15 : 1 / 1.15), event.clientX, event.clientY)
}

const onDoubleClick = (event: MouseEvent) => {
  if (zoomed.value) resetZoom()
  else zoomTo(2.5, event.clientX, event.clientY)
}

/*
 * Pointer handling: one pointer drags (a zoomed photo) or swipes (between photos);
 * two pointers pinch. A quick second tap counts as a double-tap on touch screens.
 */
const pointers = new Map<number, { x: number; y: number }>()
let start = { x: 0, y: 0, tx: 0, ty: 0 }
let pinch = { distance: 0, scale: 1 }
let lastTap = 0

const distance = () => {
  const [a, b] = [...pointers.values()]
  return a && b ? Math.hypot(a.x - b.x, a.y - b.y) : 0
}

const onPointerDown = (event: PointerEvent) => {
  stage.value?.setPointerCapture(event.pointerId)
  pointers.set(event.pointerId, { x: event.clientX, y: event.clientY })
  animate.value = false
  if (pointers.size === 1) {
    start = { x: event.clientX, y: event.clientY, tx: x.value, ty: y.value }
    if (event.pointerType !== 'mouse') {
      const now = Date.now()
      if (now - lastTap < 300) {
        animate.value = true
        if (zoomed.value) resetZoom()
        else zoomTo(2.5, event.clientX, event.clientY)
        lastTap = 0
        return
      }
      lastTap = now
    }
  } else if (pointers.size === 2) {
    pinch = { distance: distance(), scale: scale.value }
  }
}

const onPointerMove = (event: PointerEvent) => {
  if (!pointers.has(event.pointerId)) return
  pointers.set(event.pointerId, { x: event.clientX, y: event.clientY })
  if (pointers.size === 2 && pinch.distance) {
    const [a, b] = [...pointers.values()]
    zoomTo(pinch.scale * (distance() / pinch.distance), (a!.x + b!.x) / 2, (a!.y + b!.y) / 2)
  } else if (pointers.size === 1 && zoomed.value) {
    x.value = start.tx + (event.clientX - start.x)
    y.value = start.ty + (event.clientY - start.y)
    clamp()
  }
}

const onPointerUp = (event: PointerEvent) => {
  if (!pointers.has(event.pointerId)) return
  pointers.delete(event.pointerId)
  animate.value = true
  if (pointers.size === 0 && !zoomed.value) {
    const dx = event.clientX - start.x
    const dy = event.clientY - start.y
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) (dx < 0 ? next : prev)()
  }
  if (pointers.size < 2) pinch = { distance: 0, scale: scale.value }
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
        class="fixed inset-0 z-[90] flex flex-col bg-black/85 text-white backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`${uid}-title`"
        @keydown="onKeydown"
      >
        <!-- Top bar -->
        <div class="flex shrink-0 items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div class="min-w-0">
            <h2 :id="`${uid}-title`" class="truncate font-display text-base sm:text-lg">{{ label }}</h2>
            <p class="font-mono text-[0.68rem] tracking-[0.12em] text-white/60" aria-live="polite">
              {{ index + 1 }} / {{ count }}
            </p>
          </div>
          <div class="flex shrink-0 items-center gap-1.5">
            <button type="button" class="lightbox-btn" :disabled="!zoomed" aria-label="Zoom out" @click="zoomOut">
              <ZoomOut class="h-5 w-5" aria-hidden="true" />
            </button>
            <span class="hidden w-12 text-center font-mono text-xs text-white/70 sm:inline" aria-hidden="true">
              {{ Math.round(scale * 100) }}%
            </span>
            <button type="button" class="lightbox-btn" :disabled="scale >= MAX_SCALE" aria-label="Zoom in" @click="zoomIn">
              <ZoomIn class="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" class="lightbox-btn" :disabled="!zoomed" aria-label="Reset zoom" @click="resetZoom">
              <RotateCcw class="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
            </button>
            <button ref="closeButton" type="button" class="lightbox-btn ml-2" aria-label="Close photos" @click="close">
              <X class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <!-- Photo -->
        <div
          ref="stage"
          class="relative min-h-0 flex-1 touch-none select-none overflow-hidden"
          :class="zoomed ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'"
          @wheel="onWheel"
          @dblclick="onDoubleClick"
          @pointerdown="onPointerDown"
          @pointermove="onPointerMove"
          @pointerup="onPointerUp"
          @pointercancel="onPointerUp"
        >
          <img
            :key="current"
            :src="buildImageUrl(current, { width: 1920, base })"
            :srcset="buildSrcSet(current, { base })"
            sizes="100vw"
            :alt="`${label} — photograph ${index + 1} of ${count}`"
            class="absolute inset-0 h-full w-full object-contain p-2 sm:p-6"
            :class="animate ? 'transition-transform duration-200 ease-out' : ''"
            :style="{ transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})` }"
            draggable="false"
          />

          <button
            v-if="count > 1"
            type="button"
            class="lightbox-btn lightbox-nav left-3 sm:left-6"
            aria-label="Previous photo"
            @click.stop="prev"
            @pointerdown.stop
            @dblclick.stop
          >
            <ChevronLeft class="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            v-if="count > 1"
            type="button"
            class="lightbox-btn lightbox-nav right-3 sm:right-6"
            aria-label="Next photo"
            @click.stop="next"
            @pointerdown.stop
            @dblclick.stop
          >
            <ChevronRight class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <!-- Thumbnails -->
        <div
          ref="thumbs"
          class="flex shrink-0 justify-start gap-2 overflow-x-auto px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 sm:justify-center sm:px-6"
          role="group"
          aria-label="All photos"
        >
          <button
            v-for="(image, i) in images"
            :key="image"
            type="button"
            class="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg ring-2 transition-all duration-200 sm:h-16 sm:w-24"
            :class="i === index ? 'opacity-100 ring-brand-light' : 'opacity-50 ring-transparent hover:opacity-80'"
            :aria-label="`Photo ${i + 1} of ${count}`"
            :aria-current="i === index ? 'true' : undefined"
            @click="go(i)"
          >
            <AppImage :src="image" alt="" :ratio="4 / 3" sizes="96px" :zoom="false" class="h-full w-full" />
          </button>
        </div>
        <p class="sr-only">Use the arrow keys to change photo, plus and minus to zoom, and Escape to close.</p>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.lightbox-btn {
  display: inline-flex;
  height: 2.5rem;
  width: 2.5rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid rgb(255 255 255 / 0.2);
  background: rgb(255 255 255 / 0.08);
  color: #fff;
  transition: background-color 0.2s ease, opacity 0.2s ease;
}

.lightbox-btn:hover:not(:disabled) {
  background: rgb(255 255 255 / 0.18);
}

.lightbox-btn:disabled {
  cursor: default;
  opacity: 0.35;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  z-index: 10;
  height: 3rem;
  width: 3rem;
  transform: translateY(-50%);
  background: rgb(0 0 0 / 0.45);
  backdrop-filter: blur(6px);
}
</style>
