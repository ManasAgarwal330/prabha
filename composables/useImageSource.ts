import type { ImageRef } from '~/types'

/**
 * Central image resolver.
 *
 * Today every image is an Unsplash photo id, resized on their CDN with
 * `auto=format` so browsers get AVIF/WebP automatically. To move to self-hosted
 * images later, drop files into `public/images/` and reference them as
 * `/images/kashmir.jpg` — `isRemote` below routes them without any component change.
 */
const UNSPLASH_BASE = 'https://images.unsplash.com/'

const isRemote = (ref: ImageRef) => ref.startsWith('photo-')

/** Widths we actually ask the CDN for. Kept short so the srcset stays small. */
export const IMAGE_WIDTHS = [400, 640, 900, 1200, 1600, 2000]

export interface ImageOptions {
  width?: number
  /** Aspect ratio as width / height. When set, the CDN crops to it. */
  ratio?: number
  quality?: number
}

export const buildImageUrl = (ref: ImageRef, options: ImageOptions = {}): string => {
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
  if (!isRemote(ref)) return undefined

  return IMAGE_WIDTHS.map((width) => `${buildImageUrl(ref, { ...options, width })} ${width}w`).join(', ')
}

/** A 20px blur-up placeholder, inlined as the background of the media wrapper. */
export const buildPlaceholder = (ref: ImageRef): string | undefined => {
  if (!isRemote(ref)) return undefined
  return buildImageUrl(ref, { width: 20, quality: 30 })
}
