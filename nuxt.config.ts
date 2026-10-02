// https://nuxt.com/docs/api/configuration/nuxt-config
import { redirects } from './config/redirects'

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://pravaah-travel.netlify.app'
/** Public address of the Azure Blob Storage container holding the images (see composables/useImageSource.ts). */
const imageBaseUrl = (process.env.NUXT_PUBLIC_IMAGE_BASE_URL || '').replace(/\/$/, '')

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },

  modules: [],

  css: ['~/assets/css/main.css'],

  // Tailwind is wired through PostCSS directly rather than via @nuxtjs/tailwindcss:
  // that module's generated config imports @nuxt/kit, which Tailwind's CJS config
  // loader cannot evaluate (`Cannot use 'import.meta' outside a module`).
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  /**
   * Server-only values stay on the backend; only `public` reaches the browser.
   * Each can be set per environment with the env var named alongside it.
   */
  runtimeConfig: {
    /** NUXT_COSMOS_CONNECTION_STRING — from the Cosmos account's "Keys" page. */
    cosmosConnectionString: '',
    /** NUXT_COSMOS_DATABASE */
    cosmosDatabase: 'pravaah',
    /** NUXT_CONTENT_CACHE_SECONDS — how long content stays in memory between database reads. 0 = every request. */
    contentCacheSeconds: 60,
    public: {
      siteUrl,
      /** NUXT_PUBLIC_IMAGE_BASE_URL, e.g. https://<account>.blob.core.windows.net/images */
      imageBaseUrl
    }
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en-IN' },
      // Fallback for the client-rendered shells (404.html / 200.html).
      title: 'Pravaah — Curated stays, experiences & retreats',
      link: [
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/brand/favicon-48.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/brand/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        imageBaseUrl
          ? { rel: 'preconnect', href: new URL(imageBaseUrl).origin }
          : { rel: 'preconnect', href: 'https://images.unsplash.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap'
        }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#FAFDFB' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      script: [
        {
          // Gates the scroll-reveal styles so content is never hidden without JS.
          innerHTML: "document.documentElement.classList.add('js')",
          tagPosition: 'head'
        }
      ]
    }
  },

  // Server-rendered on every request from live database content. On Netlify the
  // pages and the /api backend run together as one Netlify Function (NITRO_PRESET=netlify).
  ssr: true,

  nitro: {
    // Set under `nitro` (same effect as top-level routeRules): the hoisted @nuxt/schema 4.x
    // that @nuxt/cli pulls in does not type the top-level key for Nuxt 3.
    routeRules: {
      // netlify.toml [[headers]] only reach static files, so server-rendered pages get theirs here.
      '/**': {
        headers: {
          'x-content-type-options': 'nosniff',
          'x-frame-options': 'SAMEORIGIN',
          'referrer-policy': 'strict-origin-when-cross-origin',
          'permissions-policy': 'geolocation=(), camera=(), microphone=()'
        }
      },
      ...redirects,
      // The API is never cached by browsers or the CDN — content freshness is handled
      // by the backend's own short cache (contentCacheSeconds).
      '/api/**': { headers: { 'cache-control': 'no-store' } }
    },
  },

  experimental: {
    payloadExtraction: true,
    inlineRouteRules: true
  },

  features: {
    // Keep the client bundle lean — no inline styles duplication.
    inlineStyles: false
  },

  typescript: {
    strict: true
  }
})
