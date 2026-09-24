<script setup lang="ts">
const overlay = useHeaderOverlayState()

useScrollReveal()
</script>

<template>
  <div class="flex min-h-screen flex-col bg-canvas">
    <div class="scroll-progress" aria-hidden="true" />

    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-pill focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:text-white"
    >
      Skip to content
    </a>

    <AppHeader />

    <main id="main" class="flex-1" :class="overlay ? '' : 'pt-20'">
      <slot />
    </main>

    <AppFooter />
    <WhatsAppButton />
  </div>
</template>
