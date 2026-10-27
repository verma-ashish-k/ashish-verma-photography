<template>
  <div class="min-h-screen bg-[color:var(--page)] text-fg">
    <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[color:var(--card)] focus:px-4 focus:py-2 focus:text-fg">
      Skip to content
    </a>
    <AppHeader />
    <main id="main">
      <slot />
    </main>
    <AppFooter />
    <WhatsAppButton />
    <SpeedInsights v-if="enableVercelInsights" />
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue'
import { activeSocialUrls, site } from '~/data/site'

useTheme()

const enableVercelInsights = computed(() => {
  if (!import.meta.client) return false
  const host = window.location.hostname
  return host === 'urbansnap.ca' || host === 'www.urbansnap.ca' || host.endsWith('.vercel.app')
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: site.name,
        description: site.description,
        url: site.url,
        telephone: site.phoneE164,
        email: site.email,
        image: `${site.cloudinary.baseUrl}${site.logo.cloudinarySquare}`,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: site.city,
          addressRegion: site.region,
          addressCountry: site.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: site.geo.latitude,
          longitude: site.geo.longitude,
        },
        areaServed: [
          {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: site.geo.latitude,
              longitude: site.geo.longitude,
            },
            geoRadius: site.serviceRadiusKm * 1000,
          },
          ...site.serviceArea.map((name) => ({ '@type': 'City', name })),
        ],
        knowsAbout: [
          'New construction photography',
          'Model home photography',
          'Renovation before and after photography',
          'Real estate listing photography',
          'Real estate videography',
          'Aerial drone photography',
          'Twilight photography',
        ],
        ...(activeSocialUrls.length ? { sameAs: activeSocialUrls } : {}),
      }),
    },
  ],
})
</script>
