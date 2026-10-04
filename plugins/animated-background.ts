/**
 * `v-animated-background` — a highlight that slides between items as they are
 * hovered, focused or selected. A Vue port of Motion Primitives' AnimatedBackground
 * (https://motion-primitives.com/docs/animated-background), which is React-only.
 *
 * Goes on the container. Its items are the descendants carrying a `data-id`, or
 * with `items: 'children'` its direct children. One absolutely positioned element
 * is added behind them and moved with CSS transitions on a sampled spring curve,
 * so there is no animation library and no per-frame JavaScript.
 *
 * The item under the highlight gets `data-highlighted`, so its text can change
 * colour with Tailwind's `data-[highlighted]:` variant. An element marked
 * `data-animated-ignore` sends the highlight back to the selected item when hovered.
 *
 * Hover only follows fine pointers; on touch screens the highlight just marks the
 * selected item. Reduced motion is handled by the global rule in main.css.
 */
export interface AnimatedBackgroundOptions {
  /** `data-id` of the selected item — where the highlight rests. */
  value?: string | null
  /** Follow the pointer and keyboard focus, not just the selected item. */
  hover?: boolean
  /** Classes for the highlight itself: colour, radius, shadow. */
  class?: string
  /** Which elements count as items. */
  items?: 'data-id' | 'children'
  /** How far the highlight reaches past each item, in px: one value or [x, y]. */
  spread?: number | [number, number]
}

interface State {
  options: AnimatedBackgroundOptions
  highlight: HTMLElement
  /** The item the highlight is on, if it is showing. */
  current: HTMLElement | null
  hovered: HTMLElement | null
  /** Geometry last applied, so re-renders and DOM churn never restart a slide in progress. */
  placed: string
  frame: number
  teardown: () => void
}

/**
 * A damped spring sampled into CSS `linear()` — the same feel as Motion's
 * `{ type: 'spring', bounce }`. Time runs in units of 1/ω₀ until it has settled.
 */
const springEasing = (bounce: number, steps = 48) => {
  const zeta = 1 - bounce
  const damped = Math.sqrt(1 - zeta * zeta)
  const settle = 8
  const points: number[] = []
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * settle
    const value =
      i === steps ? 1 : 1 - Math.exp(-zeta * t) * (Math.cos(damped * t) + (zeta / damped) * Math.sin(damped * t))
    points.push(Math.round(value * 1000) / 1000)
  }
  return `linear(${points.join(', ')})`
}

const DURATION = 0.55
const FADE = 'opacity 0.25s ease'

const states = new WeakMap<HTMLElement, State>()

export default defineNuxtPlugin((nuxtApp) => {
  let easing = 'cubic-bezier(0.34, 1.3, 0.64, 1)'
  let canHover = false
  if (import.meta.client) {
    if (CSS.supports('transition-timing-function', 'linear(0, 1)')) easing = springEasing(0.25)
    canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  }
  const move = ['transform', 'width', 'height'].map((property) => `${property} ${DURATION}s ${easing}`).join(', ')

  const spreadOf = (options: AnimatedBackgroundOptions): [number, number] => {
    const spread = options.spread ?? 0
    return Array.isArray(spread) ? spread : [spread, spread]
  }

  const itemFrom = (container: HTMLElement, state: State, target: EventTarget | null): HTMLElement | null => {
    if (!(target instanceof Element) || target === state.highlight) return null
    if (state.options.items === 'children') {
      let node: Element | null = target
      while (node && node.parentElement !== container) node = node.parentElement
      return node instanceof HTMLElement && node !== state.highlight ? node : null
    }
    const item = target.closest<HTMLElement>('[data-id]')
    return item && ownedBy(item, container) ? item : null
  }

  /**
   * An item belongs to the nearest animated container above it. Without this, the
   * header's tab pill would also chase the links in a dropdown nested inside the nav.
   */
  const ownedBy = (item: HTMLElement, container: HTMLElement) =>
    item !== container && item.parentElement?.closest('[data-animated]') === container

  const itemById = (container: HTMLElement, id: string) =>
    [...container.querySelectorAll<HTMLElement>(`[data-id="${CSS.escape(id)}"]`)].find((item) =>
      ownedBy(item, container)
    ) ?? null

  /**
   * Position from layout offsets rather than bounding boxes, so a card that is
   * mid-tilt or lifted on hover does not drag the highlight along with its transform.
   */
  const offsetWithin = (item: HTMLElement, container: HTMLElement) => {
    let x = 0
    let y = 0
    let node: HTMLElement = item
    while (node !== container) {
      x += node.offsetLeft
      y += node.offsetTop
      const parent = node.offsetParent as HTMLElement | null
      if (!parent || (parent !== container && !container.contains(parent))) {
        const box = item.getBoundingClientRect()
        const frame = container.getBoundingClientRect()
        return {
          x: box.left - frame.left - container.clientLeft + container.scrollLeft,
          y: box.top - frame.top - container.clientTop + container.scrollTop
        }
      }
      if (parent !== container) {
        x += parent.clientLeft
        y += parent.clientTop
      }
      node = parent
    }
    return { x, y }
  }

  const place = (container: HTMLElement, state: State, item: HTMLElement, mode: 'slide' | 'instant') => {
    const { highlight } = state
    const [spreadX, spreadY] = spreadOf(state.options)
    const { x, y } = offsetWithin(item, container)
    const transform = `translate3d(${x - spreadX}px, ${y - spreadY}px, 0)`
    const width = `${item.offsetWidth + spreadX * 2}px`
    const height = `${item.offsetHeight + spreadY * 2}px`
    const geometry = `${transform} ${width} ${height}`
    if (state.current === item && state.placed === geometry) return
    state.placed = geometry
    const appearing = !state.current

    // Appearing: fade in where it lands, never slide in from a stale spot.
    // Re-measuring (and the first paint of a selected item): just be there.
    if (mode === 'instant') highlight.style.transition = 'none'
    else if (appearing) highlight.style.transition = FADE
    highlight.style.transform = transform
    highlight.style.width = width
    highlight.style.height = height
    if (appearing || mode === 'instant') void highlight.offsetWidth
    highlight.style.transition = `${move}, ${FADE}`
    highlight.style.opacity = '1'

    if (state.current !== item) {
      state.current?.removeAttribute('data-highlighted')
      item.setAttribute('data-highlighted', '')
    }
    state.current = item
  }

  const sync = (container: HTMLElement, mode: 'slide' | 'instant' = 'slide') => {
    const state = states.get(container)
    if (!state) return
    if (state.hovered && !container.contains(state.hovered)) state.hovered = null
    const { value } = state.options
    const target = state.hovered ?? (value ? itemById(container, value) : null)
    if (target && target.offsetParent !== null) {
      place(container, state, target, mode)
      return
    }
    state.highlight.style.opacity = '0'
    state.current?.removeAttribute('data-highlighted')
    state.current = null
  }

  nuxtApp.vueApp.directive<HTMLElement, AnimatedBackgroundOptions | undefined>('animated-background', {
    /** Client-only effect; the SSR renderer still needs an entry for every directive it meets. */
    getSSRProps: () => ({}),

    mounted(container, binding) {
      const options = binding.value ?? {}
      const highlight = document.createElement('div')
      highlight.dataset.animatedBackground = ''
      highlight.setAttribute('aria-hidden', 'true')
      highlight.className = options.class ?? ''
      Object.assign(highlight.style, {
        position: 'absolute',
        left: '0',
        top: '0',
        margin: '0',
        zIndex: '-1',
        pointerEvents: 'none',
        opacity: '0',
        transition: FADE
      })

      if (getComputedStyle(container).position === 'static') container.style.position = 'relative'
      // Lets the highlight sit behind the items but still in front of the container's own background.
      container.style.isolation = 'isolate'
      // Lets server-rendered fallbacks (e.g. a selected tab's own background) step aside: `[[data-animated]_&]:`.
      container.dataset.animated = ''
      container.appendChild(highlight)

      const state: State = { options, highlight, current: null, hovered: null, placed: '', frame: 0, teardown: () => {} }
      states.set(container, state)

      const hover = (item: HTMLElement | null) => {
        if (state.hovered === item) return
        state.hovered = item
        sync(container)
      }

      const onPointerOver = (event: PointerEvent) => {
        if (!state.options.hover || !canHover) return
        const item = itemFrom(container, state, event.target)
        if (item) hover(item)
        // Gaps between items keep the highlight where it is; marked elements send it home.
        else if ((event.target as Element).closest?.('[data-animated-ignore]')) hover(null)
      }
      const onPointerLeave = () => hover(null)
      const onFocusIn = (event: FocusEvent) => {
        if (!state.options.hover || !(event.target as Element).matches(':focus-visible')) return
        hover(itemFrom(container, state, event.target))
      }
      const onFocusOut = (event: FocusEvent) => {
        if (!container.contains(event.relatedTarget as Node | null)) hover(null)
      }

      // Re-measure when the layout shifts (resizes, filtered lists, late fonts).
      const remeasure = () => {
        cancelAnimationFrame(state.frame)
        state.frame = requestAnimationFrame(() => sync(container, 'instant'))
      }
      const resize = new ResizeObserver(remeasure)
      resize.observe(container)
      const mutations = new MutationObserver((records) => {
        if (records.some((record) => [...record.addedNodes, ...record.removedNodes].some((node) => node !== highlight))) {
          remeasure()
        }
      })
      mutations.observe(container, { childList: true, subtree: true })

      container.addEventListener('pointerover', onPointerOver)
      container.addEventListener('pointerleave', onPointerLeave)
      container.addEventListener('focusin', onFocusIn)
      container.addEventListener('focusout', onFocusOut)

      state.teardown = () => {
        cancelAnimationFrame(state.frame)
        resize.disconnect()
        mutations.disconnect()
        container.removeEventListener('pointerover', onPointerOver)
        container.removeEventListener('pointerleave', onPointerLeave)
        container.removeEventListener('focusin', onFocusIn)
        container.removeEventListener('focusout', onFocusOut)
        // `data-animated` stays: an element leaving through a <Transition> must keep its items to itself.
        highlight.remove()
      }

      sync(container, 'instant')
    },

    updated(container, binding) {
      const state = states.get(container)
      if (!state) return
      state.options = binding.value ?? {}
      const className = state.options.class ?? ''
      if (state.highlight.className !== className) state.highlight.className = className
      sync(container)
    },

    beforeUnmount(container) {
      states.get(container)?.teardown()
      states.delete(container)
    }
  })
})
