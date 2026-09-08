<template>
  <div>
    <PageHero
      eyebrow="Services"
      title="Everything a listing needs to show well online."
      lede="Book one service or stack a package. Every shoot is edited for MLS, realtor sites, and social."
      :image="heroImages.services"
    />

    <section class="section">
      <div class="site-shell space-y-16">
        <article
          v-for="service in services"
          :id="service.id"
          :key="service.id"
          class="scroll-mt-28 grid items-center gap-8 lg:grid-cols-2"
        >
          <CldImg
            :src="service.image"
            :alt="service.title"
            class="h-72 w-full rounded-3xl object-cover shadow-lift lg:h-96"
            :widths="[640, 1000, 1400]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div>
            <p class="eyebrow">{{ service.title }}</p>
            <h2 class="mt-3 font-display text-4xl">{{ service.summary }}</h2>
            <p class="mt-4 text-ink-500 leading-relaxed">{{ service.description }}</p>
            <div class="mt-6 flex flex-wrap gap-3">
              <NuxtLink to="/pricing" class="btn-outline">See pricing</NuxtLink>
              <NuxtLink v-if="service.id === 'headshots'" to="/portfolio/headshots" class="btn-primary">
                Headshot gallery
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </section>
    <CtaBand />
  </div>
</template>

<script setup lang="ts">
import { heroImages } from '~/data/gallery'
import { services } from '~/data/services'

useSeoPage({
  title: 'Urban Snap Services — Photography, Video, iGuide, Aerial',
  description:
    'Calgary real estate photography, videography, iGuide floor plans, aerial imaging, twilight, commercial, virtual tours, headshots, and listing marketing.',
  path: '/services',
  image: cloudinaryUrl(heroImages.services, 'f_auto,q_auto,w_1200'),
})
</script>
