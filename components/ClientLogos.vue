<template>
  <section class="overflow-hidden bg-cream-dark py-16">
    <Reveal variant="fade-up">
      <p class="mb-8 text-center text-[12px] font-medium uppercase tracking-[0.22em] text-ink-500">
        Clients we have worked with
      </p>
    </Reveal>
    <div class="relative">
      <div class="marquee-track flex w-max items-center gap-12 px-6">
        <CldImg
          v-for="(logo, index) in looped"
          :key="`${logo}-${index}`"
          :src="logo"
          alt="Realty partner logo"
          class="h-14 w-auto object-contain opacity-70 sm:h-16"
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
