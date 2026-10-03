<script setup lang="ts">
import { ChevronLeft, ChevronRight, Images } from 'lucide-vue-next'
import type { ImageRef } from '~/types'

/**
 * A listing's photographs: one large photo at a time (wide on desktop, a little
 * taller on phones) — swipe or use the arrows. The row holds the first few; the
 * last one says how many more there are. Tapping a photo, or "View all photos",
 * opens the full-screen viewer with every photo, where each can be zoomed.
 */
const props = defineProps<{
  images: ImageRef[]
  label: string
}>()

/** How many photos the row itself shows; the rest are in the viewer. */
const ROW_LIMIT = 5
/** Above this many photos the "View all photos" button appears. */
const VIEW_ALL_AFTER = 3

const track = ref<HTMLElement | null>(null)
const canPrev = ref(false)
const canNext = ref(false)
/** The photo in view, for the counter. */
const index = ref(0)
const viewerOpen = ref(false)
const viewerIndex = ref(0)
let frame = 0

const rowImages = computed(() => props.images.slice(0, ROW_LIMIT))
/** Photos only reachable in the viewer. */
const hiddenCount = computed(() => props.images.length - rowImages.value.length)

const update = () => {
  const el = track.value
  if (!el) return
  canPrev.value = el.scrollLeft > 4
  canNext.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 4
  const first = el.children[0] as HTMLElement | undefined
  const second = el.children[1] as HTMLElement | undefined
  const stepWidth = first && second ? second.offsetLeft - first.offsetLeft : el.clientWidth
  index.value = Math.min(rowImages.value.length - 1, Math.round(el.scrollLeft / stepWidth))
}

const onScroll = () => {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(update)
}

/** Moves by one photo. */
const step = (direction: 1 | -1) => {
  const el = track.value
  const first = el?.children[0] as HTMLElement | undefined
  const second = el?.children[1] as HTMLElement | undefined
  if (!el || !first) return
  const distance = second ? second.offsetLeft - first.offsetLeft : el.clientWidth
  el.scrollBy({ left: direction * distance, behavior: 'smooth' })
}

const openViewer = (at: number) => {
  viewerIndex.value = at
  viewerOpen.value = true
}

onMounted(() => {
  update()
  window.addEventListener('resize', onScroll, { passive: true })
})
onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  window.removeEventListener('resize', onScroll)
})
</script>

<template>
  <div class="relative">
    <div
      ref="track"
      class="no-bar flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain sm:gap-4"
      role="group"
      :aria-label="`Photographs of ${label}`"
      @scroll.passive="onScroll"
    >
      <button
        v-for="(image, i) in rowImages"
        :key="image"
        type="button"
        class="strip-item relative shrink-0 snap-start snap-always cursor-zoom-in overflow-hidden rounded-card shadow-soft"
        :aria-label="`Open photo ${i + 1} of ${images.length} full screen`"
        @click="openViewer(i)"
      >
        <AppImage
          :src="image"
          :alt="`${label} — photograph ${i + 1}`"
          :ratio="16 / 9"
          sizes="(min-width: 1280px) 1200px, 100vw"
          class="h-full w-full"
        />
        <!-- The last photo in the row points to the ones left for the viewer. -->
        <span
          v-if="hiddenCount > 0 && i === rowImages.length - 1"
          class="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/55 text-white"
        >
          <span class="font-display text-5xl font-semibold leading-none sm:text-6xl">+{{ hiddenCount }}</span>
          <span class="text-base font-medium sm:text-lg">more {{ hiddenCount === 1 ? 'photo' : 'photos' }}</span>
        </span>
      </button>
    </div>

    <span
      v-if="rowImages.length > 1"
      class="pointer-events-none absolute bottom-3 left-3 rounded-pill bg-pine-deep/55 px-3 py-1.5 font-mono text-[0.68rem] tracking-[0.1em] text-white backdrop-blur-md sm:bottom-4 sm:left-4"
      aria-live="polite"
    >
      {{ index + 1 }} / {{ rowImages.length }}
    </span>

    <button v-show="canPrev" type="button" class="strip-arrow left-3 sm:left-4" aria-label="Previous photo" @click="step(-1)">
      <ChevronLeft class="h-5 w-5" aria-hidden="true" />
    </button>
    <button v-show="canNext" type="button" class="strip-arrow right-3 sm:right-4" aria-label="Next photo" @click="step(1)">
      <ChevronRight class="h-5 w-5" aria-hidden="true" />
    </button>

    <button
      v-if="images.length > VIEW_ALL_AFTER"
      type="button"
      class="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-pill bg-white/95 px-4 py-2 text-xs font-medium text-pine shadow-lift transition-colors hover:bg-white sm:bottom-4 sm:right-4 sm:text-sm"
      @click="openViewer(0)"
    >
      <Images class="h-4 w-4" aria-hidden="true" />
      View all {{ images.length }} photos
    </button>

    <PhotoLightbox v-model:open="viewerOpen" v-model:index="viewerIndex" :images="images" :label="label" />
  </div>
</template>

<style scoped>
.no-bar {
  scrollbar-width: none;
}

.no-bar::-webkit-scrollbar {
  display: none;
}

/* One whole photo at a time: 4:3 on phones, a wide 16:9 from tablets up. */
.strip-item {
  flex-basis: 100%;
  aspect-ratio: 4 / 3;
}

@media (min-width: 640px) {
  .strip-item {
    aspect-ratio: 16 / 9;
  }
}

/* Round, see-through glass arrows, centred on the photos. */
.strip-arrow {
  position: absolute;
  top: 50%;
  z-index: 10;
  display: inline-flex;
  height: 3rem;
  width: 3rem;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid rgb(255 255 255 / 0.35);
  background: rgb(6 28 20 / 0.32);
  color: #fff;
  transform: translateY(-50%);
  backdrop-filter: blur(6px) saturate(140%);
  -webkit-backdrop-filter: blur(6px) saturate(140%);
  transition: background-color 0.2s ease;
}

.strip-arrow:hover {
  background: rgb(6 28 20 / 0.5);
}
</style>
