import type { RouterConfig } from '@nuxt/schema'
import type { RouteLocationNormalized } from 'vue-router'
import { START_LOCATION } from 'vue-router'

/** Height of the fixed header once the page has scrolled (`h-16`). */
const HEADER_HEIGHT = 64
/** Breathing room kept between the header and content when the block is too tall to centre. */
const GAP = 16

/** Document offset from layout, ignoring transforms — `.reveal` cards sit translated until they animate in. */
const documentTop = (el: HTMLElement) => {
  let top = 0
  let node: HTMLElement | null = el
  while (node) {
    top += node.offsetTop
    node = node.offsetParent as HTMLElement | null
  }
  return top
}

/**
 * Where to scroll for a category link like `/stays#camps-glamping`.
 *
 * The focus block runs from the section's heading to the bottom of its first
 * card, and is centred in the space below the header. When it is taller than
 * the screen, its top is aligned just under the header instead. Either way the
 * page never stops with a sliver of the previous section showing above.
 */
const hashTop = (hash: string): number | null => {
  const section = document.getElementById(decodeURIComponent(hash.slice(1)))
  if (!section) return null

  const sectionTop = documentTop(section)
  const blockStart = sectionTop + (Number.parseFloat(getComputedStyle(section).paddingTop) || 0)
  const firstCard = section.querySelector<HTMLElement>('.grid > *')
  const blockEnd = firstCard ? documentTop(firstCard) + firstCard.offsetHeight : sectionTop + section.offsetHeight

  const available = window.innerHeight - HEADER_HEIGHT
  const blockHeight = blockEnd - blockStart

  const top =
    blockHeight <= available - GAP * 2
      ? blockStart + blockHeight / 2 - (HEADER_HEIGHT + available / 2)
      : blockStart - HEADER_HEIGHT - GAP

  return Math.max(0, Math.round(Math.max(top, sectionTop - HEADER_HEIGHT)))
}

const position = (to: RouteLocationNormalized, behavior: ScrollBehavior) => {
  const top = to.hash ? hashTop(to.hash) : 0
  return top === null ? { el: to.hash, behavior } : { left: 0, top, behavior }
}

/** Nuxt's default scroll behaviour, with hash targets centred instead of pinned to the top. */
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp()

    if (to.path === from.path) {
      if (to.hash) return position(to, 'smooth')
      if (from.hash) return { left: 0, top: 0 }
      return false
    }

    const hookToWait = nuxtApp._runningTransition ? 'page:transition:finish' : 'page:loading:end'

    return new Promise((resolve) => {
      const resolvePosition = () => resolve(savedPosition ?? position(to, 'instant'))

      if (from === START_LOCATION) {
        resolvePosition()
        return
      }
      nuxtApp.hooks.hookOnce(hookToWait, () => {
        requestAnimationFrame(resolvePosition)
      })
    })
  }
}
