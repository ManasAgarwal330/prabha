<script setup lang="ts">
import { MessageCircle } from 'lucide-vue-next'
import { site } from '~/data/site'

withDefaults(defineProps<{ variant?: 'floating' | 'inline' }>(), { variant: 'floating' })

/** Placeholder number lives in data/site.ts — swap it there. */
const href = computed(
  () => `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(site.contact.whatsappMessage)}`
)
</script>

<template>
  <a
    v-if="variant === 'floating'"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-pill bg-forest text-ivory-bright shadow-lift transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:bg-forest-deep sm:bottom-7 sm:right-7"
    aria-label="Chat with Prabha on WhatsApp"
  >
    <MessageCircle class="h-5 w-5" aria-hidden="true" />
  </a>
  <a
    v-else
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="btn-secondary"
  >
    <MessageCircle class="h-4 w-4" aria-hidden="true" />
    Chat on WhatsApp
  </a>
</template>
