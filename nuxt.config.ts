// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://pravaah-travel.netlify.app'

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

  runtimeConfig: {
    public: {
      siteUrl
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
        { rel: 'preconnect', href: 'https://images.unsplash.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@400;500;600&display=swap'
        }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#F5EFE4' },
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

  // Fully static output — deploys to Netlify free tier as plain files.
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml', '/robots.txt'],
      failOnError: false
    }
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
