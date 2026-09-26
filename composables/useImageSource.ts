import type { ImageRef } from '~/types'

/**
 * Central image resolver. Three kinds of ref:
 *
 * - `photo-…` — an Unsplash photo id, resized on their CDN with `auto=format`
 *   so browsers get AVIF/WebP automatically.
 * - `/images/<section>/<slug>/<name>` (no extension) — our own photographs,
 *   pre-resized by `npm run images` into `<name>-640.webp`, `-1280`, `-1920`
 *   and a `-placeholder.webp`. Cropping to a ratio is left to `object-cover`.
 * - Any other path, e.g. `/images/kashmir.jpg` — served as-is.
 */
const UNSPLASH_BASE = 'https://images.unsplash.com/'

const isRemote = (ref: ImageRef) => ref.startsWith('photo-')

/** Keep in sync with `WIDTHS` in scripts/optimize-images.mjs. */
const LOCAL_WIDTHS = [640, 1280, 1920]

const isLocalSet = (ref: ImageRef) => ref.startsWith('/images/') && !/\.[a-z0-9]+$/i.test(ref)

/** The smallest pre-built width that covers the request, or the largest there is. */
const localUrl = (ref: ImageRef, width: number) =>
  `${ref}-${LOCAL_WIDTHS.find((w) => w >= width) ?? LOCAL_WIDTHS[LOCAL_WIDTHS.length - 1]}.webp`

/** Widths we actually ask the CDN for. Kept short so the srcset stays small. */
export const IMAGE_WIDTHS = [400, 640, 900, 1200, 1600, 2000]

export interface ImageOptions {
  width?: number
  /** Aspect ratio as width / height. When set, the CDN crops to it. */
  ratio?: number
  quality?: number
}

export const buildImageUrl = (ref: ImageRef, options: ImageOptions = {}): string => {
  if (isLocalSet(ref)) return localUrl(ref, options.width ?? 1200)
  if (!isRemote(ref)) return ref

  const { width = 1200, ratio, quality = 72 } = options
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    w: String(width),
    q: String(quality)
  })

  if (ratio) params.set('h', String(Math.round(width / ratio)))

  return `${UNSPLASH_BASE}${ref}?${params.toString()}`
}

export const buildSrcSet = (ref: ImageRef, options: ImageOptions = {}): string | undefined => {
  if (isLocalSet(ref)) return LOCAL_WIDTHS.map((width) => `${ref}-${width}.webp ${width}w`).join(', ')
  if (!isRemote(ref)) return undefined

  return IMAGE_WIDTHS.map((width) => `${buildImageUrl(ref, { ...options, width })} ${width}w`).join(', ')
}

/** A 20px blur-up placeholder, inlined as the background of the media wrapper. */
export const buildPlaceholder = (ref: ImageRef): string | undefined => {
  if (isLocalSet(ref)) return `${ref}-placeholder.webp`
  if (!isRemote(ref)) return undefined
  return buildImageUrl(ref, { width: 20, quality: 30 })
}
