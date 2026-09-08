export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  telemetry: false,
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  components: true,
  ssr: true,

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  app: {
    head: {
      title: 'Urban Snap — Calgary Real Estate Photography & Videography',
      titleTemplate: '%s',
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/images/logo-square.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;1,14..32,400&display=swap',
        },
      ],
      meta: [
        {
          name: 'description',
          content:
            'Urban Snap is Calgary real estate photography and videography — listing photos, 4K video tours, iGuide floor plans, aerial imaging, twilight shoots, and professional headshots.',
        },
        { name: 'theme-color', content: '#000000' },
        { name: 'author', content: 'Urban Snap' },
      ],
    },
  },

  site: {
    url: 'https://urbansnap.ca',
    name: 'Urban Snap',
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-gtag',
  ],

  gtag: {
    id: 'G-VTTPE9V8EC',
  },

  robots: {
    allow: '/',
    sitemap: 'https://urbansnap.ca/sitemap.xml',
  },

  sitemap: {
    exclude: [],
  },

  routeRules: {
    '/real_estate_photography': { redirect: { to: '/portfolio', statusCode: 301 } },
    '/headshots': { redirect: { to: '/portfolio/headshots', statusCode: 301 } },
    '/privacyPolicy': { redirect: { to: '/privacy', statusCode: 301 } },
    '/termsConditions': { redirect: { to: '/terms', statusCode: 301 } },
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://urbansnap.ca',
      web3formsKey: process.env.NUXT_PUBLIC_WEB3FORMS_KEY || 'd1bc0811-4796-4f5a-956b-782094171a22',
      cloudinaryCloudName: process.env.NUXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'ashish-verma-photography',
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
})
