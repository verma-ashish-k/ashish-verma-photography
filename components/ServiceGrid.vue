<template>
  <section class="section">
    <div class="site-shell">
      <div class="max-w-2xl">
        <p class="eyebrow">What we shoot</p>
        <h2 class="display mt-3">Services built for Calgary listings.</h2>
        <p class="lede mt-4">
          Photography, video, iGuide, aerial, twilight, commercial, and portraits — booked as à-la-carte work or as a
          curated package.
        </p>
      </div>

      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="service in services"
          :key="service.id"
          :to="`/services#${service.id}`"
          class="group relative overflow-hidden rounded-3xl bg-ink-900 text-white"
        >
          <NuxtImg
            provider="cloudinary"
            :src="service.image"
            :alt="service.title"
            class="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
          <div class="absolute inset-x-0 bottom-0 p-5">
            <h3 class="font-display text-2xl">{{ service.title }}</h3>
            <p class="mt-2 text-sm text-white/75">{{ service.summary }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { services } from '~/data/services'
</script>
