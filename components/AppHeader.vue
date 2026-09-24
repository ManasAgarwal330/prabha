<script setup lang="ts">
import { ArrowRight, ChevronDown, Instagram, Menu, Phone, Sparkles, X } from 'lucide-vue-next'
import { primaryNav, site } from '~/data/site'

const route = useRoute()
const overlay = useHeaderOverlayState()

const scrolled = ref(false)
const menuOpen = ref(false)
/** Index of the desktop dropdown currently open, if any. */
const openDropdown = ref<number | null>(null)
/** Index of the expanded tab in the mobile menu. */
const mobileExpanded = ref<number | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)

/** Full-bleed photo that sits faintly behind the mobile menu. */
const MENU_IMAGE = 'photo-1506905925346-21bda4d32df4'

/** Transparent only at the very top of a page that asked for an overlay header. */
const transparent = computed(() => overlay.value && !scrolled.value && !menuOpen.value)

/** Active when on the tab's page or any page beneath it. */
const isActive = (to: string) => route.path === to || route.path.startsWith(`${to}/`)

const closeDropdownOnFocusOut = (event: FocusEvent) => {
  const next = event.relatedTarget as Node | null
  if (!next || !(event.currentTarget as HTMLElement).contains(next)) openDropdown.value = null
}

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

watch(menuOpen, async (open) => {
  if (import.meta.server) return
  document.body.style.overflow = open ? 'hidden' : ''
  if (!open) return
  // Open on the tab you are currently in, so its categories are one tap away.
  const current = primaryNav.findIndex((item) => isActive(item.to))
  mobileExpanded.value = current === -1 ? null : current
  await nextTick()
  closeButton.value?.focus()
})

const toggleMobile = (index: number) => {
  mobileExpanded.value = mobileExpanded.value === index ? null : index
}

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
    openDropdown.value = null
  }
)

const onKeydown = (event: KeyboardEvent) => {
  if (event.key !== 'Escape') return
  menuOpen.value = false
  openDropdown.value = null
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-editorial"
    :class="transparent ? 'bg-transparent' : 'border-b border-hairline/80 bg-white/75 shadow-header backdrop-blur-xl backdrop-saturate-150'"
    @keydown="onKeydown"
  >
    <div class="container-pravaah">
      <div
        class="flex items-center justify-between transition-all duration-500 ease-editorial"
        :class="scrolled ? 'h-16' : 'h-20'"
      >
        <NuxtLink
          to="/"
          class="shrink-0 rounded-sm transition-opacity hover:opacity-80"
          :aria-label="`${site.name} — home`"
        >
          <PravaahLogo :tone="transparent ? 'light' : 'brand'" :size="scrolled ? 'sm' : 'md'" />
        </NuxtLink>

        <nav class="hidden items-center gap-1 lg:flex xl:gap-2" aria-label="Primary">
          <div
            v-for="(item, index) in primaryNav"
            :key="item.to"
            class="relative"
            @mouseenter="openDropdown = index"
            @mouseleave="openDropdown = null"
            @focusout="closeDropdownOnFocusOut"
          >
            <div
              class="flex items-center rounded-pill pl-3.5 pr-1.5 transition-colors"
              :class="[
                transparent ? 'hover:bg-white/10' : 'hover:bg-brand/[0.06]',
                isActive(item.to) ? (transparent ? 'bg-white/10' : 'bg-brand/[0.08]') : ''
              ]"
            >
              <NuxtLink
                :to="item.to"
                class="py-2 text-sm font-medium transition-colors"
                :class="[
                  transparent ? 'text-white/90 hover:text-white' : 'text-ink-soft hover:text-ink',
                  isActive(item.to) && !transparent ? 'text-accent' : ''
                ]"
                @focus="openDropdown = index"
              >
                {{ item.label }}
              </NuxtLink>
              <button
                v-if="item.children?.length"
                type="button"
                class="inline-flex h-6 w-5 items-center justify-center rounded-sm transition-colors"
                :class="transparent ? 'text-white/70 hover:text-white' : 'text-ink-muted hover:text-ink'"
                :aria-expanded="openDropdown === index"
                :aria-controls="`nav-menu-${index}`"
                :aria-label="`Show ${item.label} categories`"
                @click="openDropdown = index"
              >
                <ChevronDown
                  class="h-3.5 w-3.5 transition-transform duration-300 ease-editorial"
                  :class="openDropdown === index ? 'rotate-180' : ''"
                  aria-hidden="true"
                />
              </button>
            </div>

            <Transition
              enter-active-class="transition duration-200 ease-editorial"
              enter-from-class="opacity-0 translate-y-1"
              leave-active-class="transition duration-150 ease-editorial"
              leave-to-class="opacity-0 translate-y-1"
            >
              <!-- The top padding bridges the gap to the tab so the pointer can travel into the panel. -->
              <div
                v-if="item.children?.length && openDropdown === index"
                :id="`nav-menu-${index}`"
                class="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
              >
                <ul class="min-w-[15rem] rounded-2xl border border-hairline bg-white/90 p-2 shadow-lift backdrop-blur-xl">
                  <li v-for="child in item.children" :key="child.to">
                    <NuxtLink
                      :to="child.to"
                      class="block rounded-xl px-4 py-2.5 text-sm text-ink-soft transition-colors hover:bg-brand/[0.06] hover:text-accent"
                      @click="openDropdown = null"
                    >
                      {{ child.label }}
                    </NuxtLink>
                  </li>
                  <li class="mt-1 border-t border-hairline pt-1">
                    <NuxtLink
                      :to="item.to"
                      class="flex items-center justify-between gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-brand/[0.06]"
                      @click="openDropdown = null"
                    >
                      All {{ item.label.toLowerCase() }}
                      <ArrowRight class="h-3.5 w-3.5" aria-hidden="true" />
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </Transition>
          </div>
        </nav>

        <div class="flex items-center gap-3">
          <NuxtLink
            to="/plan-my-trip"
            class="hidden text-sm sm:inline-flex"
            :class="transparent ? 'btn btn-light' : 'btn-primary'"
          >
            <Sparkles class="h-4 w-4" aria-hidden="true" />
            Plan My Trip
          </NuxtLink>

          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-pill transition-colors lg:hidden"
            :class="transparent ? 'text-white hover:bg-white/15' : 'text-ink hover:bg-ink/5'"
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

    <!-- Teleported: the header's backdrop blur would otherwise clip a fixed overlay to the header box. -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-editorial"
        enter-from-class="opacity-0"
        leave-active-class="transition duration-200 ease-editorial"
        leave-to-class="opacity-0"
      >
        <div
          v-if="menuOpen"
          id="mobile-menu"
          class="section-dark fixed inset-0 z-[70] flex h-[100dvh] flex-col overflow-hidden lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          @keydown="onKeydown"
        >
          <div class="pointer-events-none absolute inset-0 -z-10 opacity-30" aria-hidden="true">
            <AppImage :src="MENU_IMAGE" alt="" :ratio="9 / 16" sizes="100vw" :zoom="false" class="h-full w-full" />
          </div>
          <div
            class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-canvas/80 via-canvas/95 to-canvas"
            aria-hidden="true"
          />

          <div class="container-pravaah flex h-16 shrink-0 items-center justify-between">
            <NuxtLink to="/" class="rounded-sm" :aria-label="`${site.name} — home`" @click="menuOpen = false">
              <PravaahLogo tone="light" size="sm" />
            </NuxtLink>
            <button
              ref="closeButton"
              type="button"
              class="inline-flex h-10 w-10 items-center justify-center rounded-pill border border-white/20 text-white transition-colors hover:bg-white/10"
              aria-label="Close menu"
              @click="menuOpen = false"
            >
              <X class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav class="container-pravaah flex-1 overflow-y-auto overscroll-contain pb-6 pt-4" aria-label="Mobile">
            <ul>
              <li
                v-for="(item, index) in primaryNav"
                :key="item.to"
                class="hero-fade border-b border-hairline"
                :style="{ animationDelay: `${0.05 + index * 0.05}s` }"
              >
                <div class="flex items-center justify-between gap-4">
                  <NuxtLink
                    :to="item.to"
                    class="flex-1 py-4 font-display text-[1.75rem] leading-tight transition-colors hover:text-accent"
                    :class="isActive(item.to) ? 'text-accent' : 'text-ink'"
                    @click="menuOpen = false"
                  >
                    {{ item.label }}
                  </NuxtLink>
                  <button
                    v-if="item.children?.length"
                    type="button"
                    class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-pill border border-hairline text-ink-soft transition-colors hover:text-ink"
                    :aria-expanded="mobileExpanded === index"
                    :aria-controls="`mobile-menu-${index}`"
                    :aria-label="`Show ${item.label} categories`"
                    @click="toggleMobile(index)"
                  >
                    <ChevronDown
                      class="h-4 w-4 transition-transform duration-300 ease-editorial"
                      :class="mobileExpanded === index ? 'rotate-180' : ''"
                      aria-hidden="true"
                    />
                  </button>
                </div>

                <!-- Animating grid rows 0fr → 1fr expands to the content's natural height. -->
                <div
                  v-if="item.children?.length"
                  :id="`mobile-menu-${index}`"
                  class="grid transition-[grid-template-rows] duration-300 ease-editorial"
                  :class="mobileExpanded === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
                  :inert="mobileExpanded !== index"
                >
                  <div class="overflow-hidden">
                    <ul class="grid grid-cols-2 gap-x-4 pb-4">
                      <li v-for="child in item.children" :key="child.to">
                        <NuxtLink
                          :to="child.to"
                          class="block py-2 text-[0.95rem] text-ink-soft transition-colors hover:text-accent"
                          @click="menuOpen = false"
                        >
                          {{ child.label }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          <div class="container-pravaah shrink-0 border-t border-hairline pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5">
            <NuxtLink to="/plan-my-trip" class="btn-primary w-full" @click="menuOpen = false">Plan My Trip</NuxtLink>
            <div class="mt-4 flex items-center justify-between gap-4 text-sm text-ink-muted">
              <a
                :href="`tel:${site.contact.phoneHref}`"
                class="inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                <Phone class="h-4 w-4" aria-hidden="true" />
                {{ site.contact.phoneDisplay }}
              </a>
              <a
                :href="site.social.instagram"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                <Instagram class="h-4 w-4" aria-hidden="true" />
                {{ site.social.instagramHandle }}
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>
