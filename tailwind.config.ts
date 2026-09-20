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
        ivory: {
          DEFAULT: '#FAF7F1',
          deep: '#F2ECE1',
          warm: '#EFE7DA'
        },
        charcoal: {
          DEFAULT: '#1F1D1A',
          soft: '#3A3631',
          muted: '#6B645B'
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
        line: '#E3DACB'
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
