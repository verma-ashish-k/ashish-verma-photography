<template>
  <div>
    <PageHero
      eyebrow="About"
      title="A Calgary studio built around listing visuals."
      lede="Urban Snap photographs, films, and tours properties across Calgary and nearby communities. Local expertise, careful editing, and a fast turnaround are the point."
      :image="heroImages.about"
    />

    <section class="section">
      <div class="site-shell grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal variant="slide">
          <h2 class="display">Why agents book Urban Snap</h2>
          <p class="lede mt-6">
            Elevate your Calgary real estate listings with photography tailored to the city’s market. From downtown
            condos to suburban homes, a personalized approach, quick turnaround times, and attention to detail set the
            work apart.
          </p>
          <p class="mt-5 text-[17px] leading-relaxed text-fg-muted">
            We combine architecture-aware composition with MLS-ready delivery so the same set of files works on realtor
            websites, portals, social, and print. If a listing needs more than stills, we add 4K video, iGuide, aerial,
            twilight, or a marketing package without changing crews.
          </p>
        </Reveal>
        <div class="grid gap-4 sm:grid-cols-2">
          <Reveal v-for="(item, index) in facts" :key="item.label" :delay="index * 80" variant="zoom-in">
            <article class="card-surface h-full p-7">
              <p class="text-[12px] font-medium uppercase tracking-[0.18em] text-coral">{{ item.label }}</p>
              <p class="mt-3 text-[15px] leading-relaxed text-fg-muted">{{ item.body }}</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>

    <section class="section bg-ink-950 text-white">
      <div class="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <Reveal variant="zoom-out">
          <p class="eyebrow text-coral-light">The work</p>
          <h2 class="display mt-4 text-white">Photography, video, and tours from one studio.</h2>
        </Reveal>
        <Reveal variant="fade-up">
          <p class="text-[19px] leading-relaxed text-white/60">
            Urban Snap is not a marketplace and not a national franchise overlay. It is a Calgary real estate photography
            studio: shoot the property, edit with care, and deliver files that help a listing compete. Contact us to talk
            through square footage, access, and which package fits.
          </p>
        </Reveal>
      </div>
    </section>
    <CtaBand />
  </div>
</template>

<script setup lang="ts">
import { heroImages } from '~/data/gallery'

const facts = [
  { label: 'Based in Calgary', body: 'We know the light, the neighbourhoods, and the MLS expectations here.' },
  { label: 'Full listing kit', body: 'Stills, 4K video, iGuide, drone, twilight, headshots, and marketing add-ons.' },
  { label: 'Licensed aerial', body: 'Transport Canada licensed drone imaging for lot, orientation, and context.' },
  { label: 'Direct booking', body: 'Email, phone, or WhatsApp — same studio, no extra marketplace layer.' },
]

useSeoPage({
  title: 'About Urban Snap — Calgary Real Estate Photography',
  description:
    'Urban Snap is a Calgary real estate photography studio offering listing photos, videography, iGuide tours, aerial imaging, and headshots.',
  path: '/about',
  image: cloudinaryUrl(heroImages.about, 'f_auto,q_auto,w_1200'),
})
</script>
