/**
 * Runs a TypeScript script outside Nuxt, with the same `~/` import alias and the
 * variables from `.env` loaded.
 *
 *   node scripts/run-ts.mjs scripts/db/setup.ts [args…]
 */
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { createJiti } from 'jiti'

try {
  process.loadEnvFile?.('.env')
} catch {
  // No .env — rely on variables already set in the shell.
}

const [script] = process.argv.slice(2)
if (!script) {
  console.error('Usage: node scripts/run-ts.mjs <script.ts> [args…]')
  process.exit(1)
}

const root = process.cwd()
const jiti = createJiti(pathToFileURL(resolve(root, 'scripts/run-ts.mjs')).href, { alias: { '~': root } })

try {
  await jiti.import(resolve(root, script))
} catch (error) {
  console.error(error)
  process.exit(1)
}
