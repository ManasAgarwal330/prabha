<script setup lang="ts">
import { Check, MapPin, Search, X } from 'lucide-vue-next'
import type { PlaceOption } from '~/data/places'

/**
 * Type-ahead search for a state or place. Picking one or more options narrows
 * the page below; the parent owns the filtering and reads the v-model.
 * Follows the ARIA combobox pattern: arrows move, Enter picks, Escape closes,
 * and Backspace in an empty field removes the last pick.
 */
const props = defineProps<{
  options: PlaceOption[]
  /** What is being filtered, singular and plural, e.g. ['stay', 'stays']. */
  noun: [string, string]
}>()

const selected = defineModel<string[]>({ default: () => [] })

const uid = useId()
const query = ref('')
const open = ref(false)
const active = ref(0)
const input = ref<HTMLInputElement | null>(null)

const isSelected = (label: string) => selected.value.includes(label)

/** Matches anywhere in the name; names that start with the query come first. */
const matches = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return props.options
  return props.options
    .filter((option) => option.label.toLowerCase().includes(q))
    .sort((a, b) => Number(b.label.toLowerCase().startsWith(q)) - Number(a.label.toLowerCase().startsWith(q)))
})

watch(matches, () => {
  active.value = 0
})

const countLabel = (count: number) => `${count} ${count === 1 ? props.noun[0] : props.noun[1]}`

const toggle = (label: string) => {
  selected.value = isSelected(label) ? selected.value.filter((l) => l !== label) : [...selected.value, label]
  query.value = ''
  input.value?.focus()
}

const remove = (label: string) => {
  selected.value = selected.value.filter((l) => l !== label)
  input.value?.focus()
}

const clearAll = () => {
  selected.value = []
  query.value = ''
  input.value?.focus()
}

const scrollActiveIntoView = () =>
  nextTick(() => document.getElementById(`${uid}-option-${active.value}`)?.scrollIntoView({ block: 'nearest' }))

const onKeydown = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      if (!open.value) open.value = true
      else active.value = Math.min(active.value + 1, matches.value.length - 1)
      scrollActiveIntoView()
      break
    case 'ArrowUp':
      event.preventDefault()
      active.value = Math.max(active.value - 1, 0)
      scrollActiveIntoView()
      break
    case 'Enter': {
      const option = matches.value[active.value]
      if (open.value && option) {
        event.preventDefault()
        toggle(option.label)
      }
      break
    }
    case 'Escape':
      if (open.value) {
        event.preventDefault()
        open.value = false
      }
      break
    case 'Backspace':
      if (!query.value && selected.value.length) selected.value = selected.value.slice(0, -1)
      break
  }
}

const onFocusOut = (event: FocusEvent) => {
  const next = event.relatedTarget as Node | null
  if (!next || !(event.currentTarget as HTMLElement).contains(next)) open.value = false
}
</script>

<template>
  <div class="relative" @focusout="onFocusOut">
    <label :for="`${uid}-input`" class="mb-2.5 flex items-center gap-2 text-sm font-medium text-ink">
      <MapPin class="h-4 w-4 text-accent" aria-hidden="true" />
      Search by state or place
    </label>

    <div
      class="flex min-h-[3.25rem] flex-wrap items-center gap-2 rounded-lg border border-hairline bg-surface px-3 py-2 transition-colors focus-within:border-link focus-within:ring-1 focus-within:ring-link"
      @click="input?.focus()"
    >
      <Search class="h-4 w-4 shrink-0 text-ink-muted" aria-hidden="true" />

      <span
        v-for="label in selected"
        :key="label"
        class="inline-flex items-center gap-1 rounded-pill bg-brand/10 py-1 pl-3 pr-1.5 text-sm font-medium text-link"
      >
        {{ label }}
        <button
          type="button"
          class="flex h-5 w-5 items-center justify-center rounded-pill transition-colors hover:bg-brand/20"
          :aria-label="`Remove ${label}`"
          @click.stop="remove(label)"
        >
          <X class="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </span>

      <input
        :id="`${uid}-input`"
        ref="input"
        v-model="query"
        type="text"
        role="combobox"
        autocomplete="off"
        :placeholder="selected.length ? 'Add another place…' : 'Type a state or place, e.g. Uttarakhand or Nainital'"
        class="min-w-[12rem] flex-1 bg-transparent py-1.5 text-[0.95rem] text-ink placeholder:text-ink-muted/70 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        aria-autocomplete="list"
        :aria-expanded="open"
        :aria-controls="`${uid}-listbox`"
        :aria-activedescendant="open && matches.length ? `${uid}-option-${active}` : undefined"
        @focus="open = true"
        @input="open = true"
        @keydown="onKeydown"
      />

      <button
        v-if="selected.length || query"
        type="button"
        class="shrink-0 rounded-pill px-2.5 py-1 text-xs font-medium text-ink-muted transition-colors hover:bg-canvas-alt hover:text-ink"
        @click.stop="clearAll"
      >
        Clear
      </button>
    </div>

    <ul
      v-show="open"
      :id="`${uid}-listbox`"
      role="listbox"
      aria-multiselectable="true"
      :aria-label="`States and places with ${noun[1]}`"
      class="absolute inset-x-0 top-full z-30 mt-2 max-h-72 overflow-y-auto overscroll-contain rounded-lg border border-hairline bg-surface p-1.5 shadow-lift"
    >
      <li
        v-for="(option, index) in matches"
        :id="`${uid}-option-${index}`"
        :key="option.label"
        role="option"
        :aria-selected="isSelected(option.label)"
        class="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors"
        :class="index === active ? 'bg-canvas-alt' : ''"
        @mousedown.prevent
        @mouseenter="active = index"
        @click="toggle(option.label)"
      >
        <span
          class="flex h-4 w-4 shrink-0 items-center justify-center rounded border"
          :class="isSelected(option.label) ? 'border-link bg-link text-white' : 'border-hairline'"
          aria-hidden="true"
        >
          <Check v-if="isSelected(option.label)" class="h-3 w-3" />
        </span>
        <span class="flex-1 text-ink">{{ option.label }}</span>
        <span v-if="option.kind === 'State'" class="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-accent">
          State
        </span>
        <span class="text-xs text-ink-muted">{{ countLabel(option.count) }}</span>
      </li>
      <li v-if="!matches.length" class="px-3 py-3 text-sm text-ink-muted" role="presentation">
        No {{ noun[1] }} in a place matching “{{ query }}” yet.
      </li>
    </ul>
  </div>
</template>
