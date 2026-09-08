<template>
  <div>
    <PageHero
      eyebrow="Pricing"
      title="À-la-carte or a pre-curated package."
      lede="Choose a property size to see photography, videography, iGuide, drone, twilight, and package pricing. Travel is extra outside Calgary city limits."
      :image="heroImages.pricing"
    />
    <PricingMenu />
    <PricingPackages />
    <CtaBand cta="Ask about a date" />
  </div>
</template>

<script setup lang="ts">
import { heroImages } from '~/data/gallery'

useSeoPage({
  title: 'Urban Snap Pricing — Calgary Real Estate Photography Packages',
  description:
    'Urban Snap pricing for Calgary listing photography, 4K videography, iGuide, drone, twilight, and bundled packages by square footage.',
  path: '/pricing',
  image: cloudinaryUrl(heroImages.pricing, 'f_auto,q_auto,w_1200'),
})
</script>
