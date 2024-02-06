// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  components: true,

  image: {
    dir: 'assets/images',
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxtjs/tailwindcss', 'nuxt-anchorscroll', "@nuxt/image", "@hypernym/nuxt-anime" ],

    anime: {
      provide: true

  },

  runtimeConfig: {
    public: {
    apiKey: process.env.NUXT_PUBLIC_WEB3_API_KEY,
    },
  },
})