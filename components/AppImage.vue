<script setup lang="ts">
import { buildImageUrl, buildSrcSet, buildPlaceholder } from '~/composables/useImageSource'
import type { ImageRef } from '~/types'

/**
 * The only place the site renders an <img>.
 * Emits a responsive srcset, reserves layout space to keep CLS at zero, and
 * blurs up from a 20px placeholder while the full image loads.
 */
const props = withDefaults(
  defineProps<{
    src: ImageRef
    alt: string
    /** width / height */
    ratio?: number
    sizes?: string
    /** Skips lazy-loading and raises fetch priority. Use for the LCP image only. */
    priority?: boolean
    quality?: number
    /** Enables the hover zoom on the parent `.media-zoom` class. */
    zoom?: boolean
    rounded?: boolean
  }>(),
  {
    ratio: 3 / 2,
    sizes: '100vw',
    priority: false,
    quality: 72,
    zoom: true,
    rounded: false
  }
)

defineOptions({ inheritAttrs: false })

const attrs = useAttrs()

const width = computed(() => (props.priority ? 1800 : 1200))
const height = computed(() => Math.round(width.value / props.ratio))

const src = computed(() =>
  buildImageUrl(props.src, { width: width.value, ratio: props.ratio, quality: props.quality })
)
const srcset = computed(() => buildSrcSet(props.src, { ratio: props.ratio, quality: props.quality }))
const placeholder = computed(() => buildPlaceholder(props.src))

const imgEl = ref<HTMLImageElement | null>(null)
const loaded = ref(props.priority)

const onLoad = () => {
  loaded.value = true
}

onMounted(() => {
  // Images served from the HTTP cache can finish before the listener attaches.
  if (imgEl.value?.complete) loaded.value = true
})
</script>

<template>
  <div
    class="media"
    :class="[attrs.class, zoom ? 'media-zoom' : '', rounded ? 'rounded-card' : '']"
    :style="{
      aspectRatio: String(ratio),
      backgroundImage: placeholder && !loaded ? `url(${placeholder})` : undefined,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }"
  >
    <img
      ref="imgEl"
      :src="src"
      :srcset="srcset"
      :sizes="sizes"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="priority ? 'eager' : 'lazy'"
      :fetchpriority="priority ? 'high' : 'auto'"
      decoding="async"
      class="transition-opacity duration-700 ease-editorial"
      :class="loaded ? 'opacity-100' : 'opacity-0'"
      @load="onLoad"
    />
  </div>
</template>
