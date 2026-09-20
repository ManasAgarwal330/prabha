<script setup lang="ts">
/**
 * Counts a numeric value up when it first scrolls into view.
 * Accepts strings like "40+" or "100%" and preserves the suffix.
 * Renders the final value on the server and for reduced-motion visitors, so the
 * number is never missing or wrong if the animation does not run.
 */
const props = withDefaults(defineProps<{ value: string; duration?: number }>(), { duration: 1600 })

const match = computed(() => props.value.match(/^(\d+)(.*)$/))
const target = computed(() => (match.value ? Number(match.value[1]) : 0))
const suffix = computed(() => (match.value ? match.value[2] : ''))

const display = ref(props.value)
const el = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!match.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  if (!('IntersectionObserver' in window) || !el.value) return

  display.value = `0${suffix.value}`

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((e) => e.isIntersecting)) return
      observer.disconnect()

      const start = performance.now()
      const step = (now: number) => {
        const t = Math.min((now - start) / props.duration, 1)
        // Ease-out cubic: fast first, settles on the number.
        const eased = 1 - Math.pow(1 - t, 3)
        display.value = `${Math.round(target.value * eased)}${suffix.value}`
        if (t < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    },
    { threshold: 0.4 }
  )

  observer.observe(el.value)
  onBeforeUnmount(() => observer.disconnect())
})
</script>

<template>
  <span ref="el">{{ display }}</span>
</template>
