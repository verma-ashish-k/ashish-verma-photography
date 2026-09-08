<template>
  <div>
    <PageHero
      eyebrow="Contact"
      title="Let’s get the listing on the calendar."
      lede="Share the address, size, and the mix of photos, video, iGuide, or aerial you need. We typically reply the same business day."
      :image="heroImages.contact"
    />
    <section class="section">
      <div class="site-shell">
        <ContactForm />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { heroImages } from '~/data/gallery'

const site = useSite()

useSeoPage({
  title: 'Contact Urban Snap — Book Calgary Listing Photography',
  description: `Book Urban Snap for Calgary real estate photography, videography, and iGuide. Call ${site.phoneDisplay} or email ${site.email}.`,
  path: '/contact',
  image: cloudinaryUrl(heroImages.contact, 'f_auto,q_auto,w_1200'),
})
</script>
