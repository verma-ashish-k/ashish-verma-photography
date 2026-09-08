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
          light: '#7dceea',
        },
        ink: {
          950: '#000000',
          900: '#1d1d1f',
          800: '#2d2d2f',
          700: '#424245',
          500: '#6e6e73',
          300: '#a1a1a6',
        },
        cream: {
          DEFAULT: '#f5f3ef',
          dark: '#ebe8e2',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          'Inter',
          '"Segoe UI"',
          'system-ui',
          'sans-serif',
        ],
        display: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        lift: '0 8px 40px -24px rgba(0, 0, 0, 0.2)',
        soft: '0 2px 16px -8px rgba(0, 0, 0, 0.12)',
      },
      maxWidth: {
        site: '76rem',
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
          neutral: '#1d1d1f',
          'base-100': '#f5f3ef',
          'base-content': '#1d1d1f',
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
