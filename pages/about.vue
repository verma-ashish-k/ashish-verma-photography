<template>
  <div>
    <PageHero
      eyebrow="About"
      title="An Ottawa studio for property photography."
      lede="Urban Snap photographs new builds, renovations, and listings across Ottawa and surrounding areas."
      :image="heroImages.about"
      image-alt="Sunlit living room photographed by Urban Snap"
    />

    <section class="section">
      <div class="site-shell grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="fade-up">
          <h2 class="headline-sm">Why builders, renovators, and realtors book Urban Snap.</h2>
          <p class="body-copy mt-5">
            Builders need model homes that sell the next phase. Renovators need proof of the work. Realtors need a listing
            that stands out on MLS. We photograph all three with architecture-aware composition, careful editing, and a quick
            turnaround.
          </p>
          <p class="body-copy mt-4">
            Every set is delivered in high resolution and MLS-optimized sizes, so the same files work on websites, portals,
            social, and print. When a project needs more than stills, we add 4K video, aerial, twilight, or a marketing
            package without changing crews.
          </p>
        </Reveal>
        <div class="grid gap-3 sm:grid-cols-2">
          <Reveal v-for="(item, index) in facts" :key="item.label" :delay="index * 80" variant="zoom-in">
            <article class="tile h-full p-6">
              <h3 class="text-[17px] font-semibold text-fg">{{ item.label }}</h3>
              <p class="mt-2 text-[15px] leading-relaxed text-fg-muted">{{ item.body }}</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>

    <ServiceArea />
    <CtaBand />
  </div>
</template>

<script setup lang="ts">
import { heroImages } from '~/data/gallery'

const facts = [
  { label: 'Based in Ottawa', body: 'Serving Ottawa, Kanata, Orléans, Barrhaven, Nepean, Gatineau, and nearby communities.' },
  { label: 'Builders first', body: 'Model homes, show homes, and completed builds photographed for sales and marketing.' },
  { label: 'Licensed aerial', body: 'Transport Canada licensed drone imaging for lots, streetscapes, and context.' },
  { label: 'Direct booking', body: 'Phone, email, or WhatsApp — one studio, no marketplace in between.' },
]

useSeoPage({
  title: 'About Urban Snap — Ottawa Real Estate Photography',
  description:
    'Urban Snap is an Ottawa real estate photography studio for builders, renovators, and realtors, serving Ottawa and surrounding areas.',
  path: '/about',
  image: cloudinaryUrl(heroImages.about, 'f_auto,q_auto,w_1200'),
})
</script>
