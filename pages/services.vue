<template>
  <div>
    <PageHero
      eyebrow="Services"
      title="Everything a listing needs to show well online."
      lede="Book one service or stack a package. Every shoot is edited for MLS, realtor sites, and social."
      :image="heroImages.services"
    />

    <section class="section">
      <div class="site-shell space-y-24">
        <Reveal
          v-for="(service, index) in services"
          :id="service.id"
          :key="service.id"
          :variant="index % 2 ? 'zoom-out' : 'zoom-in'"
        >
          <article class="scroll-mt-28 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div class="zoom-hover overflow-hidden rounded-[28px]">
              <CldImg
                :src="service.image"
                :alt="service.title"
                class="h-72 w-full object-cover lg:h-[28rem]"
                :widths="[640, 1000, 1400]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p class="eyebrow">{{ service.title }}</p>
              <h2 class="display-sm mt-4">{{ service.summary }}</h2>
              <p class="mt-5 text-[17px] leading-relaxed text-ink-500">{{ service.description }}</p>
              <div class="mt-8 flex flex-wrap gap-3">
                <NuxtLink to="/pricing" class="btn-outline">See pricing</NuxtLink>
                <NuxtLink v-if="service.id === 'headshots'" to="/portfolio/headshots" class="btn-primary">
                  Headshot gallery
                </NuxtLink>
              </div>
            </div>
          </article>
        </Reveal>
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
