<template>
  <div>
    <PageHero
      eyebrow="Portfolio"
      title="Calgary interiors, exteriors, and the spaces between."
      lede="A selection of recent Urban Snap listing photography. Tap any frame to open the viewer."
      :image="heroImages.portfolio"
    >
      <div class="mt-6 flex flex-wrap gap-3">
        <NuxtLink to="/portfolio" class="btn-primary">Real estate</NuxtLink>
        <NuxtLink to="/portfolio/headshots" class="btn-ghost">Headshots</NuxtLink>
      </div>
    </PageHero>
    <section class="section">
      <div class="site-shell">
        <Reveal variant="zoom-in">
          <GalleryGrid :images="realEstateImages" />
        </Reveal>
      </div>
    </section>
    <CtaBand />
  </div>
</template>

<script setup lang="ts">
import { heroImages, realEstateImages } from '~/data/gallery'

useSeoPage({
  title: 'Urban Snap Portfolio — Calgary Real Estate Photography',
  description:
    'Browse Urban Snap real estate photography from Calgary listings — interiors, exteriors, and architectural details.',
  path: '/portfolio',
  image: cloudinaryUrl(heroImages.portfolio, 'f_auto,q_auto,w_1200'),
})
</script>
