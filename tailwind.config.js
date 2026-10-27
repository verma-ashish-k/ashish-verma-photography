/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './data/**/*.ts',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        // Apple-style palette. Theme-aware tokens resolve through CSS variables in main.css.
        apple: {
          blue: '#0071e3',
          'blue-hover': '#0077ed',
          link: 'var(--link)',
          ink: '#1d1d1f',
          gray: '#6e6e73',
          light: '#f5f5f7',
        },
        page: {
          DEFAULT: 'var(--page)',
          alt: 'var(--page-alt)',
        },
        tile: 'var(--tile)',
        card: 'var(--card)',
        line: 'var(--line)',
        fg: {
          DEFAULT: 'var(--fg)',
          muted: 'var(--fg-muted)',
          faint: 'var(--fg-faint)',
        },
      },
      fontFamily: {
        sans: [
          '"SF Pro Text"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Helvetica Neue"',
          'Inter',
          '"Segoe UI"',
          'system-ui',
          'sans-serif',
        ],
        display: [
          '"SF Pro Display"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Helvetica Neue"',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        tile: '2px 4px 12px rgba(0, 0, 0, 0.08)',
        lift: '2px 4px 16px rgba(0, 0, 0, 0.16)',
      },
      maxWidth: {
        site: '980px',
        wide: '1260px',
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0.28, 0.11, 0.32, 1)',
      },
    },
  },
  plugins: [],
}
