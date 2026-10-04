<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

/**
 * Overview copy: a lead paragraph, then the rest. On phones only the lead shows until
 * "Read more" is tapped; from `sm` up every paragraph is always visible. The hidden
 * paragraphs stay in the server-rendered HTML, so nothing is lost for search engines.
 */
defineProps<{ paragraphs: string[] }>()

const expanded = ref(false)
const uid = useId()
</script>

<template>
  <div>
    <div :id="uid" class="space-y-5">
      <p
        v-for="(paragraph, index) in paragraphs"
        :key="paragraph"
        :class="[
          index === 0
            ? 'border-l-2 border-accent pl-5 text-lg leading-relaxed text-ink sm:text-xl'
            : 'text-[1.0625rem] leading-[1.8] text-ink-soft',
          index > 0 && !expanded ? 'hidden sm:block' : ''
        ]"
      >
        {{ paragraph }}
      </p>
    </div>
    <button
      v-if="paragraphs.length > 1"
      type="button"
      class="btn-ghost link-underline mt-4 gap-1.5 text-sm font-medium sm:hidden"
      :aria-expanded="expanded"
      :aria-controls="uid"
      @click="expanded = !expanded"
    >
      {{ expanded ? 'Read less' : 'Read more' }}
      <ChevronDown
        class="h-4 w-4 transition-transform duration-300 ease-editorial"
        :class="expanded ? 'rotate-180' : ''"
        aria-hidden="true"
      />
    </button>
  </div>
</template>
