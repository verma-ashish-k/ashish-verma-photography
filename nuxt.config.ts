export default defineNuxtConfig({

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  components: true,

  app: {
    head: {
      title: 'Urban Snap - Calgary Real Estate Photography & Videography',

      link:[
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ],

      meta: [
          {
              name: 'description',
              content: "Elevate your Calgary real estate listings with Urban Snap, the premier photography service specializing in captivating imagery tailored to the city's dynamic market. Our expert team combines local expertise with meticulous attention to detail, ensuring each property shines online. From downtown condos to suburban homes, our personalized approach, quick turnaround times, and commitment to excellence set us apart. Trust Urban Snap to enhance your listings and attract potential buyers. Contact us today to experience the difference."
          },
          {
              name: 'keywords',
              content: 'Photography, Photographer, Airdrie, Alberta, Calgary, Edmonton, Surrey, Vancouver, Architectural, Portraits, Event, Real Estate Photography, Real Estate Videography, Virtual Tours, Professional Headshots, Interior Photography, Exterior Photography, Twilight Photography, Aerial Photography, Property Photography, Real Estate Marketing, Virtual Tours, Professional Headshots'
          },
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        { type:"module",
         src:"https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.esm.js"},
          // ionicons
          {
            nomodule: '',
            src: 'https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.js'
          },
      ],
    }
  },

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
  },

  runtimeConfig: {
    apiKey: process.env.NUXT_PUBLIC_WEB3_API_KEY,
    cloudinaryApiKey: process.env.NUXT_PUBLIC_CLOUDINARY_API_KEY,
    
  },
  
})