/**
 * `v-spotlight` — a soft pool of light that follows the pointer across a card.
 * After Hossain Jahed's Spotlight Card (21st.dev/@jahed/components/spotlight-card).
 *
 * Writes the pointer position into two CSS custom properties, at most once a
 * frame; `.spotlight::before` in main.css paints the light. Fine pointers only,
 * and nothing at all under reduced motion.
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('spotlight', {
    getSSRProps: () => ({}),

    mounted(el: HTMLElement) {
      const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
      const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (!fine || still) return

      el.classList.add('spotlight')
      let frame = 0

      const onMove = (event: PointerEvent) => {
        cancelAnimationFrame(frame)
        frame = requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect()
          el.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
          el.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
        })
      }

      el.addEventListener('pointermove', onMove)
      ;(el as any).__spotlight = () => {
        cancelAnimationFrame(frame)
        el.removeEventListener('pointermove', onMove)
      }
    },

    unmounted(el: HTMLElement) {
      ;(el as any).__spotlight?.()
      delete (el as any).__spotlight
    }
  })
})
