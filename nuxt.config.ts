export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  components: true,

  image: {
    dir: 'assets/images',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/ashish-verma-photography/image/upload/',
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxtjs/tailwindcss', 'nuxt-anchorscroll', '@nuxt/image', '@hypernym/nuxt-anime', '@nuxtjs/cloudinary'],

  anime: {
    provide: true
  },

  ssr: false,

  cloudinary: {
    cloudName: process.env.NUXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.NUXT_PUBLIC_CLOUDINARY_API_KEY,
    apiSecret: process.env.NUXT_PUBLIC_CLOUDINARY_API_SECRET,
  },

  runtimeConfig: {
    apiKey: process.env.NUXT_PUBLIC_WEB3_API_KEY,
    cloudinaryApiKey: process.env.NUXT_PUBLIC_CLOUDINARY_API_KEY,
    
  },
})