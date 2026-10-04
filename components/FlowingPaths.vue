<script setup lang="ts">
/**
 * Slow, river-like lines drifting across a band — "pravaah" means flow.
 * After Kokonut UI's Background Paths (21st.dev/@kokonutd/components/background-paths),
 * rebuilt with SVG and CSS alone: each path is normalised to `pathLength="1"` and
 * a dash slides along it, so it renders on the server and costs no JavaScript.
 *
 * Decorative only: place it inside a positioned parent, behind the content.
 */
withDefaults(defineProps<{ count?: number }>(), { count: 28 })

/** Two mirrored fans of curves, as in the original. */
const fan = (count: number, position: 1 | -1) =>
  Array.from({ length: count }, (_, i) => {
    const x = (n: number) => n - i * 5 * position
    const y = (n: number) => n - i * 6
    return {
      d: `M${x(-380)} ${-(189 + i * 6)}C${x(-380)} ${-(189 + i * 6)} ${x(-312)} ${y(216)} ${x(152)} ${y(343)}C${x(616)} ${y(470)} ${x(684)} ${y(875)} ${x(684)} ${y(875)}`,
      width: 0.5 + i * 0.03,
      opacity: 0.08 + i * 0.022,
      // Deterministic, so the server and client agree on every value.
      duration: 22 + ((i * 7) % 11),
      delay: -((i * 13) % 29)
    }
  })
</script>

<template>
  <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <svg
      v-for="position in [1, -1] as const"
      :key="position"
      class="flowing-paths absolute inset-0 h-full w-full"
      viewBox="0 0 696 316"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <path
        v-for="(path, index) in fan(count, position)"
        :key="index"
        :d="path.d"
        pathLength="1"
        stroke="currentColor"
        :stroke-width="path.width"
        :stroke-opacity="path.opacity"
        :style="{ animationDuration: `${path.duration}s`, animationDelay: `${path.delay}s` }"
      />
    </svg>
  </div>
</template>

<style scoped>
/* A dash a little longer than half the path flows along it, end to end, forever. */
.flowing-paths path {
  stroke-dasharray: 0.55 0.45;
  animation: flow linear infinite;
}

@keyframes flow {
  from {
    stroke-dashoffset: 1;
  }
  to {
    stroke-dashoffset: -1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .flowing-paths path {
    animation: none;
    stroke-dasharray: none;
  }
}
</style>
