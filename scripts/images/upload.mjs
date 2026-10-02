/**
 * Puts every image the site uses into Azure Blob Storage.
 *
 *   npm run images:upload              upload what is not there yet
 *   npm run images:upload -- --force   re-upload everything
 *
 * 1. Every file under public/images/ — new sets made by `npm run images` — under
 *    the same path without the `images/` prefix: stays/<slug>/cover-640.webp …
 *    Once uploaded they can be deleted locally; the folder is git-ignored.
 * 2. Every Unsplash photo the site refers to — in the Cosmos content and in pages/,
 *    components/, composables/ and layouts/ — downloaded once and turned
 *    into the same kind of set under library/<photo-id>-640.webp …
 *
 * Then set NUXT_PUBLIC_IMAGE_BASE_URL to the container URL this prints, and every
 * image on the site is served from Storage (composables/useImageSource.ts).
 *
 * Needs AZURE_STORAGE_CONNECTION_STRING in .env; AZURE_STORAGE_CONTAINER defaults to "images".
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { extname, join, relative, sep } from 'node:path'
import { BlobServiceClient } from '@azure/storage-blob'
import sharp from 'sharp'

try {
  process.loadEnvFile?.('.env')
} catch {
  // No .env — rely on variables already set in the shell.
}

/** Keep in sync with scripts/optimize-images.mjs and composables/useImageSource.ts. */
const WIDTHS = [640, 1280, 1920]
const PLACEHOLDER_WIDTH = 24
const QUALITY = 78
/** Images rarely change under the same name; a week of browser caching is a safe middle. */
const CACHE_CONTROL = 'public, max-age=604800'
const CONCURRENCY = 6

const force = process.argv.includes('--force')
const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING
const containerName = process.env.AZURE_STORAGE_CONTAINER || 'images'

if (!connectionString) {
  console.error('Set AZURE_STORAGE_CONNECTION_STRING in .env first (Storage account → Security + networking → Access keys).')
  process.exit(1)
}

const container = BlobServiceClient.fromConnectionString(connectionString).getContainerClient(containerName)
try {
  // Images are public website assets, so the container allows anonymous reads of blobs (not listing).
  await container.createIfNotExists({ access: 'blob' })
} catch (error) {
  if (error?.code !== 'PublicAccessNotPermitted') throw error
  await container.createIfNotExists()
  console.warn(
    'This storage account does not allow anonymous blob access, so the browser cannot load the images.\n' +
      'Enable it (Storage account → Configuration → "Allow Blob anonymous access"), then set the container\n' +
      `"${containerName}" access level to "Blob", or put Azure Front Door / CDN in front of it.`
  )
}

const contentTypes = { '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.avif': 'image/avif' }

const upload = async (name, data, contentType) => {
  const blob = container.getBlockBlobClient(name)
  if (!force && (await blob.exists())) return false
  await blob.uploadData(data, { blobHTTPHeaders: { blobContentType: contentType, blobCacheControl: CACHE_CONTROL } })
  return true
}

/** Runs `task` over `items`, a few at a time. */
const pool = async (items, task) => {
  let next = 0
  const worker = async () => {
    while (next < items.length) await task(items[next++])
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker))
}

// --- 1. Sets already in public/images
const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    return statSync(path).isDirectory() ? walk(path) : [path]
  })

// public/images only holds photos made by `npm run images` that are waiting to be uploaded;
// it is empty (or missing) once everything is in Storage.
const localFiles = existsSync('public/images')
  ? walk('public/images').filter((path) => contentTypes[extname(path).toLowerCase()])
  : []
let uploaded = 0
await pool(localFiles, async (path) => {
  const name = relative('public/images', path).split(sep).join('/')
  if (await upload(name, readFileSync(path), contentTypes[extname(path).toLowerCase()])) uploaded++
})
console.log(`public/images: ${uploaded} uploaded, ${localFiles.length - uploaded} already there.`)

// --- 2. Unsplash photos referenced anywhere
const PHOTO_ID = /photo-\d+-[0-9a-f]+/g
const sourceFiles = ['pages', 'components', 'composables', 'layouts'].flatMap((dir) =>
  walk(dir).filter((path) => /\.(ts|vue)$/.test(path))
)
const ids = new Set(sourceFiles.flatMap((path) => readFileSync(path, 'utf8').match(PHOTO_ID) ?? []))

if (process.env.NUXT_COSMOS_CONNECTION_STRING) {
  const { CosmosClient } = await import('@azure/cosmos')
  const database = new CosmosClient(process.env.NUXT_COSMOS_CONNECTION_STRING).database(
    process.env.NUXT_COSMOS_DATABASE || 'pravaah'
  )
  for (const id of ['listings', 'destinations', 'articles', 'siteContent']) {
    const { resources } = await database.container(id).items.readAll().fetchAll()
    for (const match of JSON.stringify(resources).match(PHOTO_ID) ?? []) ids.add(match)
  }
}

let converted = 0
let failed = 0
await pool([...ids], async (id) => {
  const prefix = `library/${id}`
  if (!force && (await container.getBlockBlobClient(`${prefix}-${WIDTHS.at(-1)}.webp`).exists())) return
  try {
    const response = await fetch(`https://images.unsplash.com/${id}?w=2400&q=90&fm=jpg`)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const original = Buffer.from(await response.arrayBuffer())
    for (const width of WIDTHS) {
      const data = await sharp(original).resize({ width, withoutEnlargement: true }).webp({ quality: QUALITY }).toBuffer()
      await upload(`${prefix}-${width}.webp`, data, 'image/webp')
    }
    const placeholder = await sharp(original).resize({ width: PLACEHOLDER_WIDTH }).webp({ quality: 50 }).toBuffer()
    await upload(`${prefix}-placeholder.webp`, placeholder, 'image/webp')
    converted++
  } catch (error) {
    failed++
    console.warn(`  could not copy ${id}: ${error.message}`)
  }
})
console.log(`Unsplash photos: ${ids.size} referenced, ${converted} copied now${failed ? `, ${failed} failed` : ''}.`)

console.log(`\nSet this in Netlify and .env to serve every image from Storage:\n  NUXT_PUBLIC_IMAGE_BASE_URL=${container.url}`)
