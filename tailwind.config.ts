import type { Config } from 'tailwindcss'

/**
 * Prabha design tokens.
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
        link: 'rgb(var(--c-link) / <alpha-value>)',

        ivory: {
          DEFAULT: '#F5EFE4',
          deep: '#EAE1D0',
          warm: '#E5DBC8',
          /** Text and logos sitting on photographs or dark bands. */
          bright: '#FAF7F1'
        },
        charcoal: {
          DEFAULT: '#1F1D1A',
          raised: '#2A2721',
          soft: '#3A3631',
          muted: '#6A6359'
        },
        forest: {
          DEFAULT: '#2E4A3C',
          deep: '#1F332A',
          light: '#4A6B59'
        },
        clay: {
          DEFAULT: '#B45F3F',
          light: '#C97F60',
          soft: '#E7CFC2'
        },
        gold: {
          DEFAULT: '#B08B4F',
          soft: '#E2D3B6'
        },
        line: '#DDD2BE'
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif']
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 7vw, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(2.25rem, 5.2vw, 4rem)', { lineHeight: '1.06', letterSpacing: '-0.022em' }],
        'display-md': ['clamp(1.875rem, 3.6vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.5rem, 2.6vw, 2.125rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        eyebrow: ['0.75rem', { lineHeight: '1', letterSpacing: '0.18em' }]
      },
      borderRadius: {
        card: '1.25rem',
        pill: '999px'
      },
      boxShadow: {
        soft: '0 1px 2px rgba(31,29,26,0.04), 0 8px 24px -12px rgba(31,29,26,0.14)',
        lift: '0 2px 4px rgba(31,29,26,0.05), 0 20px 45px -20px rgba(31,29,26,0.28)',
        header: '0 1px 0 rgba(227,218,203,0.9)'
      },
      maxWidth: {
        prose: '68ch'
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  }
}
