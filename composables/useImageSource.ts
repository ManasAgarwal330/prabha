import type { ImageRef } from '~/types'

/**
 * Central image resolver. Images live in Azure Blob Storage as pre-resized sets:
 * `<path>-640.webp`, `-1280.webp`, `-1920.webp` and `-placeholder.webp`, made by
 * `npm run images` and uploaded by `npm run images:upload`.
 *
 * Refs, as stored in the database:
 * - `stays/<slug>/cover` — a set in Storage (the normal case for new images)
 * - `photo-…` — an Unsplash photo id. The upload script copies every one into
 *   Storage under `library/photo-…`, so these resolve there too.
 * - `/images/<section>/<slug>/<name>` — a set that also sits in /public; uploaded
 *   to Storage under the same path without the `/images/` prefix.
 * Any of them may end in `@x,y` (0–1 fractions) to keep that point in frame when cropped.
 *
 * With NUXT_PUBLIC_IMAGE_BASE_URL set, everything is served from Storage. Without
 * it (before the upload), Unsplash photos come from Unsplash's CDN and sets from /public.
 */
const UNSPLASH_BASE = 'https://images.unsplash.com/'

/** Keep in sync with `WIDTHS` in scripts/optimize-images.mjs. */
const SET_WIDTHS = [640, 1280, 1920]

/** Widths we ask Unsplash for. Kept short so the srcset stays small. */
const UNSPLASH_WIDTHS = [400, 640, 900, 1200, 1600, 2000]

export interface ImageOptions {
  width?: number
  /** Aspect ratio as width / height. Unsplash crops to it; sets are cropped by `object-cover`. */
  ratio?: number
  quality?: number
  /** NUXT_PUBLIC_IMAGE_BASE_URL — pass `useRuntimeConfig().public.imageBaseUrl`. */
  base?: string
}

type Resolved =
  | { kind: 'set'; prefix: string; focus?: string }
  | { kind: 'unsplash'; id: string; focus?: string }
  | { kind: 'file'; url: string }

const hasExtension = (path: string) => /\.[a-z0-9]{2,5}$/i.test(path)

const resolve = (ref: ImageRef, base = ''): Resolved => {
  if (/^(https?:)?\/\//.test(ref) || hasExtension(ref)) return { kind: 'file', url: ref }

  const [path, focus] = ref.split('@')
  const storage = base.replace(/\/$/, '')

  if (path.startsWith('photo-')) {
    return storage ? { kind: 'set', prefix: `${storage}/library/${path}`, focus } : { kind: 'unsplash', id: path, focus }
  }
  if (path.startsWith('library/photo-') && !storage) {
    return { kind: 'unsplash', id: path.slice('library/'.length), focus }
  }

  const relative = path.replace(/^\/?(images\/)?/, '')
  return { kind: 'set', prefix: storage ? `${storage}/${relative}` : `/images/${relative}`, focus }
}

/** The smallest pre-built width that covers the request, or the largest there is. */
const setWidth = (width: number) => SET_WIDTHS.find((w) => w >= width) ?? SET_WIDTHS[SET_WIDTHS.length - 1]

const unsplashUrl = (id: string, focus: string | undefined, { width = 1200, ratio, quality = 72 }: ImageOptions) => {
  const params = new URLSearchParams({ auto: 'format', fit: 'crop', w: String(width), q: String(quality) })
  if (ratio) params.set('h', String(Math.round(width / ratio)))
  if (focus) {
    const [x, y] = focus.split(',')
    params.set('crop', 'focalpoint')
    params.set('fp-x', x)
    params.set('fp-y', y)
  }
  return `${UNSPLASH_BASE}${id}?${params.toString()}`
}

export const buildImageUrl = (ref: ImageRef, options: ImageOptions = {}): string => {
  const image = resolve(ref, options.base)
  if (image.kind === 'file') return image.url
  if (image.kind === 'unsplash') return unsplashUrl(image.id, image.focus, options)
  return `${image.prefix}-${setWidth(options.width ?? 1200)}.webp`
}

export const buildSrcSet = (ref: ImageRef, options: ImageOptions = {}): string | undefined => {
  const image = resolve(ref, options.base)
  if (image.kind === 'file') return undefined
  if (image.kind === 'set') return SET_WIDTHS.map((width) => `${image.prefix}-${width}.webp ${width}w`).join(', ')
  return UNSPLASH_WIDTHS.map((width) => `${unsplashUrl(image.id, image.focus, { ...options, width })} ${width}w`).join(', ')
}

/** A tiny blur-up placeholder, shown behind the image while it loads. */
export const buildPlaceholder = (ref: ImageRef, base?: string): string | undefined => {
  const image = resolve(ref, base)
  if (image.kind === 'file') return undefined
  if (image.kind === 'set') return `${image.prefix}-placeholder.webp`
  return unsplashUrl(image.id, image.focus, { width: 20, quality: 30 })
}

/**
 * Where to anchor a set when `object-cover` crops it, from the ref's `@x,y`.
 * (Unsplash crops on its own CDN, so it needs nothing here.)
 */
export const buildObjectPosition = (ref: ImageRef, base?: string): string | undefined => {
  const image = resolve(ref, base)
  if (image.kind !== 'set' || !image.focus) return undefined
  const [x, y] = image.focus.split(',').map(Number)
  return `${Math.round(x * 100)}% ${Math.round(y * 100)}%`
}
