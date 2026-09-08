<template>
  <div>
    <SiteHero />
    <section class="section">
      <div class="site-shell grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p class="eyebrow">Calgary studio</p>
          <h2 class="display mt-3">Hello. We make listings look like they live there.</h2>
          <p class="lede mt-5">
            Urban Snap is a Calgary-based real estate photography company that specializes in creating stunning visual
            content for real estate listings. We offer photography, videography, and 3D tours. Our team is dedicated to
            high-quality content that helps you sell faster and for a stronger price.
          </p>
          <NuxtLink to="/about" class="btn-outline mt-8">About the studio</NuxtLink>
        </div>
        <NuxtImg
          provider="cloudinary"
          :src="site.logo.cloudinaryMark"
          alt="Urban Snap house mark"
          class="mx-auto w-56 rounded-3xl bg-ink-900 p-8 shadow-lift lg:w-72"
        />
      </div>
    </section>
    <ServiceGrid />
    <BeforeAfter />
    <ClientLogos />
    <PortfolioPreview />
    <section class="section">
      <div class="site-shell">
        <div class="mb-8 max-w-2xl">
          <p class="eyebrow">Start a conversation</p>
          <h2 class="display mt-3">Tell us about the property.</h2>
        </div>
        <ContactForm />
      </div>
    </section>
    <CtaBand />
  </div>
</template>

<script setup lang="ts">
import { heroImages } from '~/data/gallery'

const site = useSite()

useSeoPage({
  title: 'Urban Snap — Calgary Real Estate Photography & Videography',
  description: site.description,
  path: '/',
  image: cloudinaryUrl(heroImages.home, 'f_auto,q_auto,w_1200'),
})
</script>
