import type { Config } from 'tailwindcss'

/**
 * Pravaah design tokens — "valley green": white and mint surfaces, deep pine
 * bands, and an emerald → teal → lime gradient used for light, glow and emphasis.
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
      screens: {
        /** Monitors wider than 1920 CSS px, where left-aligned heroes drift off-centre. */
        '3xl': '2000px',
        /**
         * Desktop windows proportionally shorter than the 1920×900 design. An aspect
         * ratio rather than a height, because the rem scale follows the width: a 125%
         * laptop (1536×730) has the same proportions as 1920×910 and should look identical.
         */
        short: { raw: '(min-width: 1024px) and (min-aspect-ratio: 32/15)' }
      },
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

        /** Deep pine green — dark bands, photo overlays and text on white. */
        pine: {
          DEFAULT: '#0B2E22',
          deep: '#061C14',
          raised: '#123F2E'
        },
        /** Emerald — buttons, links, focus and glow. */
        brand: {
          DEFAULT: '#059669',
          deep: '#047857',
          light: '#34D399',
          soft: '#D1FAE5',
          teal: '#0D9488',
          lime: '#A3E635'
        }
      },
      fontFamily: {
        display: ['Sora', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      fontSize: {
        // Capped by height too, so the hero still fits a short, display-scaled laptop screen.
        'display-xl': ['clamp(2.75rem, min(7vw, 11vh), 5.75rem)', { lineHeight: '1', letterSpacing: '-0.045em' }],
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
        soft: '0 1px 2px rgba(11,46,34,0.04), 0 10px 30px -14px rgba(5,150,105,0.2)',
        lift: '0 2px 6px rgba(11,46,34,0.05), 0 28px 60px -24px rgba(5,150,105,0.38)',
        glow: '0 0 0 1px rgba(52,211,153,0.35), 0 12px 40px -8px rgba(5,150,105,0.55)',
        'glow-lg': '0 0 0 1px rgba(52,211,153,0.4), 0 20px 70px -10px rgba(13,148,136,0.6)',
        header: '0 1px 0 rgba(205,228,214,0.7), 0 10px 30px -20px rgba(11,46,34,0.25)'
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
