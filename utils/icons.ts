import {
  Compass,
  Flower2,
  Landmark,
  MapPin,
  MessageCircle,
  Mountain,
  MountainSnow,
  PawPrint,
  Route,
  Trees,
  UtensilsCrossed,
  Waves
} from 'lucide-vue-next'
import type { Component } from 'vue'

/**
 * Explicit icon registry.
 * Importing named icons (rather than `* as icons`) keeps tree-shaking working —
 * only these twelve glyphs reach the bundle.
 */
export const iconRegistry: Record<string, Component> = {
  Compass,
  Flower2,
  Landmark,
  MapPin,
  MessageCircle,
  Mountain,
  MountainSnow,
  PawPrint,
  Route,
  Trees,
  UtensilsCrossed,
  Waves
}

export const resolveIcon = (name: string): Component => iconRegistry[name] ?? Compass
