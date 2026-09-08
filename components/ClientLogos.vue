<template>
  <section class="overflow-hidden bg-cream-dark py-12">
    <div class="site-shell mb-6">
      <p class="text-center text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">
        Clients we have worked with
      </p>
    </div>
    <div class="relative">
      <div class="marquee-track flex w-max items-center gap-10 px-6">
        <CldImg
          v-for="(logo, index) in looped"
          :key="`${logo}-${index}`"
          :src="logo"
          alt="Realty partner logo"
          class="h-16 w-auto object-contain opacity-80 sm:h-20"
          :widths="[240, 400]"
          sizes="160px"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { clientLogos } from '~/data/site'

const looped = [...clientLogos, ...clientLogos]
</script>
