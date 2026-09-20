/**
 * Adds `.is-visible` to `.reveal` elements as they enter the viewport.
 *
 * One shared IntersectionObserver for the whole app. New elements are picked up
 * by a MutationObserver rather than by watching the route: with an `out-in` page
 * transition the incoming page is not in the DOM yet when the route changes, so
 * a route-triggered rescan finds nothing and that page never reveals at all.
 *
 * No-op under `prefers-reduced-motion`, and everything is revealed outright if
 * IntersectionObserver is unavailable.
 */
export const useScrollReveal = () => {
  if (import.meta.server) return

  let observer: IntersectionObserver | null = null
  let mutations: MutationObserver | null = null
  let frame = 0

  const revealAll = () => {
    document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible), .reveal-media:not(.is-visible)').forEach((el) => {
      el.classList.add('is-visible')
    })
  }

  const scan = () => {
    if (!observer) {
      revealAll()
      return
    }
    document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible), .reveal-media:not(.is-visible)').forEach((el) => {
      observer!.observe(el)
    })
  }

  /** Coalesces the bursts of mutations that hydration and navigation produce. */
  const scheduleScan = () => {
    cancelAnimationFrame(frame)
    frame = requestAnimationFrame(scan)
  }

  onMounted(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced || !('IntersectionObserver' in window)) {
      revealAll()
      // Content added later must not stay hidden either.
      mutations = new MutationObserver(() => requestAnimationFrame(revealAll))
      mutations.observe(document.body, { childList: true, subtree: true })
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // `top < 0` covers elements the visitor has already scrolled past,
          // e.g. when the browser restores a scroll position on back-navigation.
          if (!entry.isIntersecting && entry.boundingClientRect.top > 0) return
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        })
      },
      // A fixed bottom inset, not a percentage: a percentage large enough to
      // feel right on a tall screen becomes a dead zone at the foot of the page
      // where an element can never satisfy the threshold.
      { rootMargin: '0px 0px -48px 0px', threshold: 0 }
    )

    scan()

    mutations = new MutationObserver(scheduleScan)
    mutations.observe(document.body, { childList: true, subtree: true })
  })

  onBeforeUnmount(() => {
    cancelAnimationFrame(frame)
    mutations?.disconnect()
    observer?.disconnect()
    mutations = null
    observer = null
  })
}
