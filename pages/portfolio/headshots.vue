<template>
  <div>
    <PageHero
      eyebrow="Headshots"
      title="Portraits that keep a listing brand consistent."
      lede="Professional headshots for realtors, teams, and personal branding — shot to sit next to Urban Snap listing work."
      :image="heroImages.headshots"
    >
      <div class="mt-6 flex flex-wrap gap-3">
        <NuxtLink to="/portfolio" class="btn-ghost">Real estate</NuxtLink>
        <NuxtLink to="/portfolio/headshots" class="btn-primary">Headshots</NuxtLink>
      </div>
    </PageHero>
    <section class="section">
      <div class="site-shell">
        <GalleryGrid :images="headshotImages" />
      </div>
    </section>
    <CtaBand />
  </div>
</template>

<script setup lang="ts">
import { headshotImages, heroImages } from '~/data/gallery'

useSeoPage({
  title: 'Urban Snap Headshots — Calgary Professional Portraits',
  description: 'Professional realtor and team headshots by Urban Snap in Calgary.',
  path: '/portfolio/headshots',
  image: cloudinaryUrl(heroImages.headshots, 'f_auto,q_auto,w_1200'),
})
</script>
