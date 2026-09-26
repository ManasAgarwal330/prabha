/**
 * Turns full-size photographs into web-ready images for one listing.
 *
 *   npm run images -- "<source folder>" stays/dharohar-retreat-satkhol
 *   npm run images -- "<cover image>"   stays/dharohar-retreat-satkhol
 *
 * The source folder holds a `Cover Photo/` folder (one image — the hero and the
 * listing tile) and a `Gallery/` folder. Each photo is written to
 * `public/images/<section>/<slug>/` as WebP at the widths in `WIDTHS`, plus a tiny
 * blur-up placeholder. The printed refs go straight into `image` and `gallery`
 * in the data file; `composables/useImageSource.ts` expands them into a srcset.
 *
 * Given a single image instead of a folder, only the cover is replaced and the
 * gallery is left as it is.
 *
 * Originals stay out of the repo — only the resized copies are committed.
 */
import { existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'
import sharp from 'sharp'

/** Keep in sync with `LOCAL_WIDTHS` in composables/useImageSource.ts. */
const WIDTHS = [640, 1280, 1920]
const PLACEHOLDER_WIDTH = 24
const QUALITY = 78
const PHOTO = /\.(jpe?g|png|webp|avif|tiff?)$/i

const [source, target] = process.argv.slice(2)
if (!source || !target || !/^[a-z-]+\/[a-z0-9-]+$/.test(target)) {
  console.error('Usage: npm run images -- "<source folder or cover image>" <section>/<slug>')
  process.exit(1)
}

const photosIn = (dir) =>
  existsSync(dir)
    ? readdirSync(dir)
        .filter((name) => PHOTO.test(name))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
        .map((name) => join(dir, name))
    : []

const coverOnly = existsSync(source) && statSync(source).isFile()
if (coverOnly && !PHOTO.test(source)) {
  console.error(`"${source}" is not a photograph.`)
  process.exit(1)
}

const covers = coverOnly ? [source] : photosIn(join(source, 'Cover Photo'))
const gallery = coverOnly ? [] : photosIn(join(source, 'Gallery'))
if (covers.length !== 1) {
  console.error(`Expected exactly one image in "${join(source, 'Cover Photo')}", found ${covers.length}.`)
  process.exit(1)
}

const outDir = resolve('public/images', target)
if (coverOnly) {
  if (!existsSync(outDir)) {
    console.error(`No photos yet in public/images/${target} — run it on a full folder first.`)
    process.exit(1)
  }
} else {
  // Re-running on a folder replaces the set, so removed photos do not linger.
  rmSync(outDir, { recursive: true, force: true })
  mkdirSync(outDir, { recursive: true })
}

const write = async (file, name) => {
  // `rotate()` applies the camera's EXIF orientation before metadata is dropped.
  const image = sharp(file).rotate()
  for (const width of WIDTHS) {
    await image
      .clone()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(join(outDir, `${name}-${width}.webp`))
  }
  await image.clone().resize({ width: PLACEHOLDER_WIDTH }).webp({ quality: 40 }).toFile(join(outDir, `${name}-placeholder.webp`))
  return `/images/${target}/${name}`
}

const coverRef = await write(covers[0], 'cover')
const galleryRefs = []
for (const [index, file] of gallery.entries()) {
  galleryRefs.push(await write(file, `gallery-${String(index + 1).padStart(2, '0')}`))
}

console.log(`\nWrote ${1 + gallery.length} photos to public/images/${target}\n`)
console.log(`    image: '${coverRef}',`)
if (!coverOnly) {
  console.log('    gallery: [')
  console.log(galleryRefs.map((ref) => `      '${ref}'`).join(',\n'))
  console.log('    ],')
}
console.log('')
