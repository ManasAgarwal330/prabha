/**
 * `v-tilt` — pointer-driven 3D tilt for image cards.
 *
 * Writes two CSS custom properties and lets CSS apply the transform, so the
 * work stays on the compositor. Reads are batched into one rAF per frame.
 * Disabled for coarse pointers (no hover to drive it) and reduced motion.
 */
const MAX_DEG = 7

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('tilt', {
    /**
     * Required even though the effect is client-only: the SSR renderer calls
     * this on every directive it meets, and a client-only registration makes it
     * throw on an undefined directive instead.
     */
    getSSRProps: () => ({}),

    mounted(el: HTMLElement) {
      const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
      const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!fine || still) return

      let frame = 0
      let rect: DOMRect | null = null

      const apply = (x: number, y: number) => {
        if (!rect) return
        const px = (x - rect.left) / rect.width - 0.5
        const py = (y - rect.top) / rect.height - 0.5
        el.style.setProperty('--tilt-y', `${px * MAX_DEG * 2}deg`)
        el.style.setProperty('--tilt-x', `${-py * MAX_DEG * 2}deg`)
      }

      const onEnter = () => {
        rect = el.getBoundingClientRect()
        el.classList.add('is-tilting')
      }

      const onMove = (event: PointerEvent) => {
        cancelAnimationFrame(frame)
        frame = requestAnimationFrame(() => apply(event.clientX, event.clientY))
      }

      const onLeave = () => {
        cancelAnimationFrame(frame)
        el.classList.remove('is-tilting')
        el.style.setProperty('--tilt-x', '0deg')
        el.style.setProperty('--tilt-y', '0deg')
      }

      el.dataset.tilt = ''
      el.addEventListener('pointerenter', onEnter)
      el.addEventListener('pointermove', onMove)
      el.addEventListener('pointerleave', onLeave)

      // Stash for teardown — directives get no closure on unmount.
      ;(el as any).__tilt = () => {
        cancelAnimationFrame(frame)
        el.removeEventListener('pointerenter', onEnter)
        el.removeEventListener('pointermove', onMove)
        el.removeEventListener('pointerleave', onLeave)
      }
    },

    unmounted(el: HTMLElement) {
      ;(el as any).__tilt?.()
      delete (el as any).__tilt
    }
  })
})
