<template>
  <div>
    <SiteHero />
    <section class="section">
      <div class="site-shell grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <Reveal variant="fade-up">
          <p class="eyebrow">Calgary studio</p>
          <h2 class="display mt-4">Hello.<br />We make listings look like they live there.</h2>
          <p class="lede mt-6">
            Urban Snap is a Calgary-based real estate photography company that specializes in creating stunning visual
            content for real estate listings. We offer photography, videography, and 3D tours. Our team is dedicated to
            high-quality content that helps you sell faster and for a stronger price.
          </p>
          <NuxtLink to="/about" class="btn-outline mt-10">About the studio</NuxtLink>
        </Reveal>
        <Reveal variant="zoom-out">
          <CldImg
            :src="site.logo.cloudinaryMark"
            alt="Urban Snap house mark"
            class="mx-auto w-52 rounded-[32px] bg-ink-950 p-10 shadow-soft lg:w-64"
            :widths="[280, 400]"
            sizes="280px"
          />
        </Reveal>
      </div>
    </section>
    <ServiceGrid />
    <BeforeAfter />
    <ClientLogos />
    <PortfolioPreview />
    <section class="section">
      <div class="site-shell">
        <Reveal variant="fade-up">
          <div class="mb-10 max-w-2xl">
            <p class="eyebrow">Start a conversation</p>
            <h2 class="display mt-4">Tell us about the property.</h2>
          </div>
        </Reveal>
        <Reveal variant="zoom-in">
          <ContactForm />
        </Reveal>
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
