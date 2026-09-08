<template>
  <div>
    <PageHero
      eyebrow="About"
      title="A Calgary studio built around listing visuals."
      lede="Urban Snap photographs, films, and tours properties across Calgary and nearby communities. Local expertise, careful editing, and a fast turnaround are the point."
      :image="heroImages.about"
    />

    <section class="section">
      <div class="site-shell grid gap-12 lg:grid-cols-2">
        <div>
          <h2 class="display">Why agents book Urban Snap</h2>
          <p class="lede mt-5">
            Elevate your Calgary real estate listings with photography tailored to the city’s market. From downtown
            condos to suburban homes, a personalized approach, quick turnaround times, and attention to detail set the
            work apart.
          </p>
          <p class="mt-5 text-ink-500 leading-relaxed">
            We combine architecture-aware composition with MLS-ready delivery so the same set of files works on realtor
            websites, portals, social, and print. If a listing needs more than stills, we add 4K video, iGuide, aerial,
            twilight, or a marketing package without changing crews.
          </p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <article v-for="item in facts" :key="item.label" class="card-surface p-6">
            <p class="text-sm uppercase tracking-[0.16em] text-coral">{{ item.label }}</p>
            <p class="mt-3 text-ink-500">{{ item.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section bg-ink-900 text-white">
      <div class="site-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p class="eyebrow text-coral-light">The work</p>
          <h2 class="display mt-3 text-white">Photography, video, and tours from one studio.</h2>
        </div>
        <p class="text-lg leading-relaxed text-white/70">
          Urban Snap is not a marketplace and not a national franchise overlay. It is a Calgary real estate photography
          studio: shoot the property, edit with care, and deliver files that help a listing compete. Contact us to talk
          through square footage, access, and which package fits.
        </p>
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
