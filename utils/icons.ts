import { Compass, MapPin, MessageCircle, Route } from 'lucide-vue-next'
import type { Component } from 'vue'

/**
 * Explicit icon registry.
 * Importing named icons (rather than `* as icons`) keeps tree-shaking working —
 * only these glyphs reach the bundle.
 */
export const iconRegistry: Record<string, Component> = {
  Compass,
  MapPin,
  MessageCircle,
  Route
}

export const resolveIcon = (name: string): Component => iconRegistry[name] ?? Compass
