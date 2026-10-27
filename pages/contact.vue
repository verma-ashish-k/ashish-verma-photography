<template>
  <div>
    <PageHero
      eyebrow="Contact"
      title="Let’s book your shoot."
      :lede="`Builders, renovators, and realtors across Ottawa — call ${site.phoneDisplay}, email, or send the form. We typically reply the same business day.`"
    />
    <section class="section pt-10 sm:pt-12">
      <div class="wide-shell max-w-[1080px]">
        <Reveal variant="zoom-in">
          <ContactForm />
        </Reveal>
      </div>
    </section>
    <ServiceArea />
  </div>
</template>

<script setup lang="ts">
import { heroImages } from '~/data/gallery'

const site = useSite()

useSeoPage({
  title: 'Contact Urban Snap — Book Ottawa Real Estate Photography',
  description: `Book Urban Snap for real estate photography in Ottawa, Kanata, Orléans, Barrhaven, Nepean, and Gatineau. Call ${site.phoneDisplay} or email ${site.email}.`,
  path: '/contact',
  image: cloudinaryUrl(heroImages.contact, 'f_auto,q_auto,w_1200'),
})
</script>
