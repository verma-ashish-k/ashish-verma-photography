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
      title: 'Urban Snap — Ottawa Real Estate Photography for Builders, Renovators & Realtors',
      titleTemplate: '%s',
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
          innerHTML:
            "(function(){try{var t=localStorage.getItem('urban-snap-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}})();",
          tagPosition: 'head',
        },
      ],
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
            'Ottawa real estate photography for builders, renovators, and realtors — new construction and model homes, before-and-after renovations, listing photos, 4K video, aerial, and twilight within 30 km of downtown Ottawa.',
        },
        { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#000000', media: '(prefers-color-scheme: dark)' },
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
    // Floor plans / iGuide are no longer offered.
    '/iguide': { redirect: { to: '/services', statusCode: 301 } },
    '/iGuide': { redirect: { to: '/services', statusCode: 301 } },
    '/floor-plans': { redirect: { to: '/services', statusCode: 301 } },
    '/floorplans': { redirect: { to: '/services', statusCode: 301 } },
    '/floor_plans': { redirect: { to: '/services', statusCode: 301 } },
    '/services/iguide': { redirect: { to: '/services', statusCode: 301 } },
    '/services/floor-plans': { redirect: { to: '/services', statusCode: 301 } },
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
