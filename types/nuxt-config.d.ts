import type { NitroConfig } from 'nitropack/types'

/**
 * Nuxt 3.17 + nitropack 2.12 ship without the `nitro` key on `NuxtConfig`
 * (the schema omits it and nothing re-adds it), so `nuxt.config.ts` fails
 * typecheck even though the option is read correctly at build time.
 */
declare module '@nuxt/schema' {
  interface NuxtConfig {
    nitro?: NitroConfig
  }
}

declare module 'nuxt/schema' {
  interface NuxtConfig {
    nitro?: NitroConfig
  }
}

export {}
