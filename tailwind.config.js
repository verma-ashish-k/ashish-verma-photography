/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#f25244',
          dark: '#d83d30',
          light: '#f58b78',
        },
        sky: {
          DEFAULT: '#30a8d8',
          dark: '#1e86b0',
          light: '#6cc6e8',
        },
        ink: {
          950: '#050b14',
          900: '#0a1628',
          800: '#12233a',
          700: '#1b3352',
          500: '#4b627c',
          300: '#9aadc0',
        },
        cream: {
          DEFAULT: '#f6f1ea',
          dark: '#ebe3d6',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      boxShadow: {
        lift: '0 18px 50px -24px rgba(10, 22, 40, 0.45)',
      },
      maxWidth: {
        site: '72rem',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        urbansnap: {
          primary: '#f25244',
          secondary: '#30a8d8',
          accent: '#f58b78',
          neutral: '#0a1628',
          'base-100': '#f6f1ea',
          'base-content': '#0a1628',
          info: '#30a8d8',
          success: '#009485',
          warning: '#ff9900',
          error: '#ff5724',
        },
      },
    ],
    base: false,
    styled: true,
    utils: true,
    logs: false,
  },
}
