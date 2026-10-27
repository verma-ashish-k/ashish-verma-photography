<template>
  <div>
    <PageHero
      eyebrow="Work"
      title="Interiors, exteriors, and the spaces between."
      lede="A selection of recent Urban Snap real estate photography. Tap any frame to open the viewer."
    />
    <section class="section pt-10 sm:pt-12">
      <div class="wide-shell">
        <GalleryGrid :images="realEstateImages" />
      </div>
    </section>
    <CtaBand />
  </div>
</template>

<script setup lang="ts">
import { heroImages, realEstateImages } from '~/data/gallery'

useSeoPage({
  title: 'Urban Snap Work — Real Estate Photography Portfolio',
  description:
    'Browse Urban Snap real estate photography — new builds, renovated interiors, exteriors, and architectural details. Serving Ottawa and area.',
  path: '/portfolio',
  image: cloudinaryUrl(heroImages.portfolio, 'f_auto,q_auto,w_1200'),
})
</script>
