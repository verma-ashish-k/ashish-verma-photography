<template>
  <div>
    <PageHero
      eyebrow="Headshots · Add-on"
      title="A headshot to match the work."
      lede="Clean, professional headshots for builder sales teams, renovators, and realtors — added to any Urban Snap shoot."
    >
      <div class="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <NuxtLink to="/contact" class="btn-primary">Ask about headshots</NuxtLink>
        <NuxtLink to="/portfolio" class="link-more">Back to real estate work</NuxtLink>
      </div>
    </PageHero>
    <section class="section pt-10 sm:pt-12">
      <div class="wide-shell">
        <GalleryGrid :images="headshotImages" />
      </div>
    </section>
    <CtaBand />
  </div>
</template>

<script setup lang="ts">
import { headshotImages, heroImages } from '~/data/gallery'

useSeoPage({
  title: 'Headshots Add-on — Urban Snap Ottawa',
  description: 'Professional headshots for builder sales teams, renovators, and realtors, available as an add-on to any Urban Snap shoot in Ottawa.',
  path: '/portfolio/headshots',
  image: cloudinaryUrl(heroImages.headshots, 'f_auto,q_auto,w_1200'),
})
</script>
