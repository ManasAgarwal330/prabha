/**
 * Pages with a full-bleed dark hero let the header sit on top of the image
 * until the visitor scrolls. Declared per page with `definePageMeta({ hero: true })`.
 *
 * Route meta is resolved before render on both server and client, so the header
 * and the layout agree on the first paint — a reactive store set during page
 * setup would hydrate with a mismatch, because the layout renders first.
 */
export const useHeaderOverlayState = () => {
  const route = useRoute()
  return computed(() => route.meta.hero === true)
}
