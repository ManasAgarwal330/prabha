<script setup lang="ts">
import { ArrowRight, ChevronDown, Instagram, Menu, Phone, Sparkles, X } from 'lucide-vue-next'

const route = useRoute()
const site = useSettings()
const primaryNav = usePrimaryNav()
const overlay = useHeaderOverlayState()

const scrolled = ref(false)
const menuOpen = ref(false)
/** Index of the desktop dropdown currently open, if any. */
const openDropdown = ref<number | null>(null)
/** Index of the expanded tab in the mobile menu. */
const mobileExpanded = ref<number | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)

/** Desktop keeps the highlighted tab (Plan Your Journey) last, where it stands in for the call-to-action button. */
const desktopNav = [...primaryNav.filter((item) => !item.highlight), ...primaryNav.filter((item) => item.highlight)]

/** Full-bleed photo that sits faintly behind the mobile menu. */
const MENU_IMAGE = 'photo-1506905925346-21bda4d32df4'

/** Transparent only at the very top of a page that asked for an overlay header. */
const transparent = computed(() => overlay.value && !scrolled.value && !menuOpen.value)

/** Active when on the tab's page or any page beneath it. */
const isActive = (to: string) => route.path === to || route.path.startsWith(`${to}/`)

/** A pill glides under the desktop tabs as they are hovered, and rests on the current one. */
const navHighlight = computed(() => ({
  value: desktopNav.find((item) => !item.highlight && isActive(item.to))?.to ?? null,
  hover: true,
  class: transparent.value
    ? 'rounded-pill bg-white/15 ring-1 ring-inset ring-white/25 backdrop-blur-md'
    : 'rounded-pill bg-brand/[0.08] ring-1 ring-inset ring-brand/15'
}))
const dropdownHighlight = { hover: true, class: 'rounded-xl bg-brand/[0.07]' }

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

        <nav v-animated-background="navHighlight" class="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <div
            v-for="(item, index) in desktopNav"
            :key="item.to"
            class="relative"
            :data-animated-ignore="item.highlight ? '' : undefined"
            @mouseenter="openDropdown = index"
            @mouseleave="openDropdown = null"
            @focusout="closeDropdownOnFocusOut"
          >
            <div
              class="flex items-center rounded-pill transition-colors"
              :data-id="item.highlight ? undefined : item.to"
              :class="
                item.highlight
                  ? [transparent ? 'btn btn-light' : 'btn-primary', 'ml-2 gap-0 py-1 pl-4 pr-2']
                  : 'pl-3.5 pr-1.5'
              "
            >
              <NuxtLink
                :to="item.to"
                class="inline-flex items-center gap-2 whitespace-nowrap py-2 text-sm font-medium transition-colors"
                :class="
                  item.highlight
                    ? ''
                    : [
                        transparent ? 'text-white/90 hover:text-white' : 'text-ink-soft hover:text-ink',
                        transparent ? '' : '[[data-highlighted]_&]:text-ink',
                        isActive(item.to) && !transparent ? 'text-accent' : ''
                      ]
                "
                @focus="openDropdown = index"
              >
                <Sparkles v-if="item.highlight" class="h-4 w-4" aria-hidden="true" />
                {{ item.label }}
              </NuxtLink>
              <button
                v-if="item.children?.length"
                type="button"
                class="inline-flex h-6 w-5 items-center justify-center rounded-sm transition-colors"
                :class="
                  item.highlight
                    ? 'opacity-80 hover:opacity-100'
                    : transparent
                      ? 'text-white/70 hover:text-white'
                      : 'text-ink-muted hover:text-ink'
                "
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
                <ul
                  v-animated-background="dropdownHighlight"
                  class="min-w-[15rem] rounded-2xl border border-hairline bg-white/90 p-2 shadow-lift backdrop-blur-xl"
                >
                  <li v-for="child in item.children" :key="child.to">
                    <NuxtLink
                      :to="child.to"
                      :data-id="child.to"
                      class="block rounded-xl px-4 py-2.5 text-sm text-ink-soft transition-colors hover:text-accent"
                      @click="openDropdown = null"
                    >
                      {{ child.label }}
                    </NuxtLink>
                  </li>
                  <li class="mt-1 border-t border-hairline pt-1">
                    <NuxtLink
                      :to="item.to"
                      data-id="all"
                      class="group/all flex items-center justify-between gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-accent transition-colors"
                      @click="openDropdown = null"
                    >
                      {{ item.allLabel ?? `All ${item.label.toLowerCase()}` }}
                      <ArrowRight
                        class="h-3.5 w-3.5 transition-transform duration-300 ease-editorial group-hover/all:translate-x-1"
                        aria-hidden="true"
                      />
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
            class="hidden text-sm sm:inline-flex lg:hidden"
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
        enter-active-class="transition-opacity duration-300 ease-editorial drawer-enter-active"
        enter-from-class="opacity-0 drawer-enter-from"
        leave-active-class="transition-opacity duration-200 ease-editorial drawer-leave-active"
        leave-to-class="opacity-0 drawer-leave-to"
        :duration="{ enter: 450, leave: 280 }"
      >
        <!-- A full-screen light panel that slides in from the right. -->
        <div v-if="menuOpen" class="fixed inset-0 z-[70] lg:hidden" @keydown="onKeydown">

          <div
            id="mobile-menu"
            class="drawer-panel absolute inset-0 isolate flex h-[100dvh] w-full flex-col overflow-hidden bg-canvas text-ink"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <!-- Soft mint light, and the mountains fading in faintly at the foot of the menu. -->
            <div class="menu-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
            <div
              class="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[45%] opacity-[0.16] [mask-image:linear-gradient(to_bottom,transparent,black_70%)]"
              aria-hidden="true"
            >
              <AppImage :src="MENU_IMAGE" alt="" :ratio="16 / 9" sizes="100vw" :zoom="false" class="h-full w-full" />
            </div>

            <div class="flex h-16 shrink-0 items-center justify-between border-b border-hairline/70 bg-canvas/70 px-6 backdrop-blur-md sm:px-10">
              <NuxtLink to="/" class="rounded-sm" :aria-label="`${site.name} — home`" @click="menuOpen = false">
                <PravaahLogo tone="brand" size="sm" />
              </NuxtLink>
              <button
                ref="closeButton"
                type="button"
                class="inline-flex h-10 w-10 items-center justify-center rounded-pill border border-hairline bg-surface text-ink shadow-soft transition-colors hover:border-accent/40 hover:text-accent"
                aria-label="Close menu"
                @click="menuOpen = false"
              >
                <X class="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav class="flex-1 overflow-y-auto overscroll-contain px-6 pb-6 pt-2 sm:px-10" aria-label="Mobile">
              <ul>
                <li
                  v-for="(item, index) in primaryNav"
                  :key="item.to"
                  class="hero-fade border-b border-hairline"
                  :style="{ animationDelay: `${0.08 + index * 0.04}s` }"
                >
                  <div class="flex items-center justify-between gap-3">
                    <NuxtLink
                      :to="item.to"
                      class="flex flex-1 items-center gap-2.5 py-3.5 font-display text-[1.3rem] leading-tight transition-colors hover:text-accent"
                      :class="isActive(item.to) ? 'text-accent' : 'text-ink'"
                      @click="menuOpen = false"
                    >
                      <Sparkles v-if="item.highlight" class="h-4 w-4 text-highlight" aria-hidden="true" />
                      {{ item.label }}
                    </NuxtLink>
                    <button
                      v-if="item.children?.length"
                      type="button"
                      class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-pill border transition-colors duration-300"
                      :class="
                        mobileExpanded === index
                          ? 'border-accent/40 bg-accent/10 text-accent'
                          : 'border-hairline bg-surface text-ink-soft hover:text-ink'
                      "
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
                    class="grid transition-[grid-template-rows,opacity] duration-300 ease-editorial"
                    :class="mobileExpanded === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
                    :inert="mobileExpanded !== index"
                  >
                    <div class="overflow-hidden">
                      <ul class="flex flex-wrap gap-2 pb-4 pt-0.5">
                        <li v-for="child in item.children" :key="child.to">
                          <NuxtLink
                            :to="child.to"
                            class="inline-flex rounded-pill border border-hairline bg-surface px-3.5 py-2 text-[0.85rem] text-ink-soft shadow-soft transition-colors hover:border-accent/50 hover:text-accent"
                            @click="menuOpen = false"
                          >
                            {{ child.label }}
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink
                            :to="item.to"
                            class="inline-flex items-center gap-1.5 rounded-pill px-2 py-2 text-[0.85rem] font-medium text-accent"
                            @click="menuOpen = false"
                          >
                            {{ item.allLabel ?? `All ${item.label.toLowerCase()}` }}
                            <ArrowRight class="h-3.5 w-3.5" aria-hidden="true" />
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>

            <div class="shrink-0 border-t border-hairline bg-canvas/80 px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4 backdrop-blur-md sm:px-10">
              <NuxtLink to="/plan-my-trip" class="btn-primary w-full" @click="menuOpen = false">
                <Sparkles class="h-4 w-4" aria-hidden="true" />
                Plan My Trip
              </NuxtLink>
              <div class="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-[0.85rem] text-ink-muted">
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
        </div>
      </Transition>
    </Teleport>
  </header>
</template>
