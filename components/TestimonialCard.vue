<script setup lang="ts">
import { Star } from 'lucide-vue-next'
import type { Testimonial } from '~/types'

defineProps<{ testimonial: Testimonial }>()
</script>

<template>
  <figure class="flex h-full flex-col border-t border-line pt-7">
    <div v-if="testimonial.rating" class="mb-4 flex gap-0.5" :aria-label="`${testimonial.rating} out of 5`">
      <Star
        v-for="index in testimonial.rating"
        :key="index"
        class="h-3.5 w-3.5 fill-gold text-gold"
        aria-hidden="true"
      />
    </div>

    <blockquote class="flex-1">
      <p class="font-display text-lg leading-relaxed text-charcoal">“{{ testimonial.quote }}”</p>
    </blockquote>

    <figcaption class="mt-6 text-sm">
      <span class="block font-medium text-charcoal">{{ testimonial.name }}</span>
      <span class="block text-charcoal-muted">{{ testimonial.location }} · {{ testimonial.trip }}</span>
    </figcaption>
  </figure>
</template>
