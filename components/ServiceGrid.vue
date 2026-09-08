<template>
  <section class="section">
    <div class="site-shell">
      <Reveal variant="fade-up">
        <div class="max-w-2xl">
          <p class="eyebrow">What we shoot</p>
          <h2 class="display mt-4">Services built for Calgary listings.</h2>
          <p class="lede mt-5">
            Photography, video, iGuide, aerial, twilight, commercial, and portraits — booked as à-la-carte work or as a
            curated package.
          </p>
        </div>
      </Reveal>

      <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal v-for="(service, index) in services" :key="service.id" :delay="index * 70" variant="zoom-in">
          <NuxtLink
            :to="`/services#${service.id}`"
            class="zoom-hover group relative block overflow-hidden rounded-[28px] bg-ink-900 text-white"
          >
            <CldImg
              :src="service.image"
              :alt="service.title"
              class="h-72 w-full object-cover sm:h-80"
              :widths="[480, 800, 1200]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div class="absolute inset-x-0 bottom-0 p-6">
              <h3 class="display-sm text-white">{{ service.title }}</h3>
              <p class="mt-2 text-[15px] leading-relaxed text-white/70">{{ service.summary }}</p>
            </div>
          </NuxtLink>
        </Reveal>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { services } from '~/data/services'
</script>
