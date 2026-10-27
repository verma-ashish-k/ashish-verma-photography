<template>
  <div>
    <LocalNav
      title="Pricing"
      :links="[
        { label: 'Build your shoot', href: '#estimate' },
        { label: 'Packages', href: '#packages' },
      ]"
    />
    <PageHero
      eyebrow="Pricing"
      title="Simple, size-based pricing."
      lede="Real estate photography for builders, renovators, and realtors. Slide to your property size and see every price update live."
    />
    <PricingMenu />
    <PricingPackages />
    <CtaBand cta="Ask about a date" title="Questions about a project?" plain />
  </div>
</template>

<script setup lang="ts">
import { heroImages } from '~/data/gallery'

useSeoPage({
  title: 'Urban Snap Pricing — Ottawa Real Estate Photography Packages',
  description:
    'Size-based pricing for Ottawa real estate photography, 4K video tours, drone, twilight, and packages for builders, renovators, and realtors.',
  path: '/pricing',
  image: cloudinaryUrl(heroImages.pricing, 'f_auto,q_auto,w_1200'),
})
</script>
