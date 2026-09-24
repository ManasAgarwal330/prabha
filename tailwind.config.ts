import type { Config } from 'tailwindcss'

/**
 * Pravaah design tokens — "blue hour": white and ice-blue surfaces, deep navy
 * bands, and an electric blue → indigo → cyan gradient used for light, glow and emphasis.
 * Colours, type scale, radii and shadows live here only — never inline in components.
 */
export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.ts',
    './utils/**/*.ts',
    './data/**/*.ts',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        /**
         * Semantic tokens. These resolve to CSS variables, which `.section-dark`
         * and `.section-forest` reassign — so a card, heading or form field reads
         * correctly on a light band and a dark one without any per-section classes.
         * Use these in components; use the raw palette below only when a colour
         * must stay fixed regardless of the surface (e.g. text over a photograph).
         */
        canvas: {
          DEFAULT: 'rgb(var(--c-canvas) / <alpha-value>)',
          alt: 'rgb(var(--c-canvas-alt) / <alpha-value>)'
        },
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        ink: {
          DEFAULT: 'rgb(var(--c-ink) / <alpha-value>)',
          soft: 'rgb(var(--c-ink-soft) / <alpha-value>)',
          muted: 'rgb(var(--c-ink-muted) / <alpha-value>)'
        },
        hairline: 'rgb(var(--c-hairline) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        /** Eyebrows, numerals and small labels. */
        highlight: 'rgb(var(--c-highlight) / <alpha-value>)',
        link: 'rgb(var(--c-link) / <alpha-value>)',

        /** Deep night blue — dark bands, photo overlays and text on white. */
        navy: {
          DEFAULT: '#0A1530',
          deep: '#050B1A',
          raised: '#111F42'
        },
        /** Electric blue — buttons, links, focus and glow. */
        brand: {
          DEFAULT: '#2563EB',
          deep: '#1D4ED8',
          light: '#60A5FA',
          soft: '#DBEAFE',
          indigo: '#6366F1',
          cyan: '#22D3EE'
        }
      },
      fontFamily: {
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 7vw, 5.75rem)', { lineHeight: '1', letterSpacing: '-0.045em' }],
        'display-lg': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        'display-md': ['clamp(1.875rem, 3.4vw, 2.875rem)', { lineHeight: '1.1', letterSpacing: '-0.035em' }],
        'display-sm': ['clamp(1.5rem, 2.4vw, 2rem)', { lineHeight: '1.15', letterSpacing: '-0.03em' }],
        eyebrow: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.14em' }]
      },
      borderRadius: {
        card: '1.5rem',
        pill: '999px'
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10,21,48,0.04), 0 10px 30px -14px rgba(37,99,235,0.18)',
        lift: '0 2px 6px rgba(10,21,48,0.05), 0 28px 60px -24px rgba(37,99,235,0.38)',
        glow: '0 0 0 1px rgba(96,165,250,0.35), 0 12px 40px -8px rgba(37,99,235,0.55)',
        'glow-lg': '0 0 0 1px rgba(96,165,250,0.4), 0 20px 70px -10px rgba(99,102,241,0.6)',
        header: '0 1px 0 rgba(203,213,235,0.7), 0 10px 30px -20px rgba(10,21,48,0.25)'
      },
      maxWidth: {
        prose: '68ch'
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)'
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1.12) translate3d(0, 0, 0)' },
          '100%': { transform: 'scale(1) translate3d(0, 0, 0)' }
        },
        riseIn: {
          '0%': { opacity: '0', transform: 'translate3d(0, 110%, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translate3d(0, 24px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' }
        },
        /** Slow drift for the aurora glows behind dark bands. */
        aurora: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(6%, -4%, 0) scale(1.08)' },
          '66%': { transform: 'translate3d(-5%, 3%, 0) scale(0.96)' }
        },
        /** Moves a wide gradient across text or borders. */
        gradientPan: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(0.8)' }
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' }
        }
      },
      animation: {
        // Slow enough to read as depth rather than movement.
        kenburns: 'kenburns 26s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'rise-in': 'riseIn 1s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        aurora: 'aurora 18s ease-in-out infinite',
        'gradient-pan': 'gradientPan 8s ease infinite',
        'pulse-dot': 'pulseDot 2.2s ease-in-out infinite',
        blink: 'blink 1.1s steps(1) infinite'
      }
    }
  }
}
