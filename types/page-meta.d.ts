declare module '#app' {
  interface PageMeta {
    /** Renders the page under a transparent header — for full-bleed dark heroes. */
    hero?: boolean
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    hero?: boolean
  }
}

export {}
