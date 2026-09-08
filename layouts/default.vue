<template>
  <div class="min-h-screen bg-cream">
    <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
      Skip to content
    </a>
    <AppHeader />
    <main id="main">
      <slot />
    </main>
    <AppFooter />
    <WhatsAppButton />
    <SpeedInsights />
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue'
import { site } from '~/data/site'

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: site.name,
        description: site.description,
        url: site.url,
        telephone: '+1-403-994-7627',
        email: site.email,
        image: `${site.cloudinary.baseUrl}${site.logo.cloudinarySquare}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: site.city,
          addressRegion: site.region,
          addressCountry: site.country,
        },
        areaServed: 'Calgary',
        sameAs: [site.social.instagram, site.social.facebook, site.social.youtube],
      }),
    },
  ],
})
</script>
