<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
import { primaryNav, site } from '~/data/site'

const route = useRoute()
const overlay = useHeaderOverlayState()

const scrolled = ref(false)
const menuOpen = ref(false)

/** Transparent only at the very top of a page that asked for an overlay header. */
const transparent = computed(() => overlay.value && !scrolled.value && !menuOpen.value)

const onScroll = () => {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.removeProperty('overflow')
})

watch(menuOpen, (open) => {
  if (import.meta.server) return
  document.body.style.overflow = open ? 'hidden' : ''
})

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  }
)

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') menuOpen.value = false
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-editorial"
    :class="transparent ? 'bg-transparent' : 'border-b border-hairline bg-canvas/90 backdrop-blur-md'"
    @keydown="onKeydown"
  >
    <div class="container-prabha">
      <div
        class="flex items-center justify-between transition-all duration-500 ease-editorial"
        :class="scrolled ? 'h-16' : 'h-20'"
      >
        <NuxtLink
          to="/"
          class="shrink-0 rounded-sm transition-opacity hover:opacity-80"
          :aria-label="`${site.name} — home`"
        >
          <PrabhaLogo :tone="transparent ? 'inherit' : 'brand'" :class="transparent ? 'text-ivory-bright' : 'text-ink'" />
        </NuxtLink>

        <nav class="hidden items-center gap-8 lg:flex" aria-label="Primary">
          <NuxtLink
            v-for="item in primaryNav"
            :key="item.to"
            :to="item.to"
            class="link-underline text-sm font-medium transition-colors"
            :class="transparent ? 'text-ivory-bright/90 hover:text-ivory-bright' : 'text-ink-soft hover:text-ink'"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-3">
          <NuxtLink
            to="/plan-my-trip"
            class="hidden text-sm sm:inline-flex"
            :class="transparent ? 'btn btn-light' : 'btn-primary'"
          >
            Plan My Trip
          </NuxtLink>

          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-pill transition-colors lg:hidden"
            :class="transparent ? 'text-ivory-bright hover:bg-ivory-bright/15' : 'text-ink hover:bg-ink/5'"
            :aria-expanded="menuOpen"
            aria-controls="mobile-menu"
            :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
            @click="menuOpen = !menuOpen"
          >
            <X v-if="menuOpen" class="h-5 w-5" aria-hidden="true" />
            <Menu v-else class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-300 ease-editorial"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-200 ease-editorial"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="menuOpen"
        id="mobile-menu"
        class="border-t border-hairline bg-canvas lg:hidden"
      >
        <nav class="container-prabha flex flex-col py-6" aria-label="Mobile">
          <NuxtLink
            v-for="item in primaryNav"
            :key="item.to"
            :to="item.to"
            class="border-b border-hairline/70 py-4 font-display text-2xl text-ink transition-colors hover:text-accent"
          >
            {{ item.label }}
          </NuxtLink>
          <NuxtLink to="/plan-my-trip" class="btn-primary mt-6 w-full">Plan My Trip</NuxtLink>
          <a
            :href="`tel:${site.contact.phoneHref}`"
            class="mt-4 text-center text-sm text-ink-muted transition-colors hover:text-accent"
          >
            {{ site.contact.phoneDisplay }}
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>
