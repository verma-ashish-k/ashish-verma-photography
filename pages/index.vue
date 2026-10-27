<template>
  <div>
    <SiteHero />
    <AudienceTiles />
    <ServiceGrid />
    <ServiceArea />
    <ClientLogos />
    <PortfolioPreview />
    <CtaBand />
  </div>
</template>

<script setup lang="ts">
import { heroImages } from '~/data/gallery'

const site = useSite()

useSeoPage({
  title: 'Urban Snap — Ottawa Real Estate Photography for Builders, Renovators & Realtors',
  description: site.description,
  path: '/',
  image: cloudinaryUrl(heroImages.home, 'f_auto,q_auto,w_1200'),
})
</script>
