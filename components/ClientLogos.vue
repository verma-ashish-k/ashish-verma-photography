<template>
  <section class="border-y border-line bg-page-alt">
    <div class="site-shell py-20 sm:py-24">
      <Reveal variant="fade-up">
        <div class="mx-auto max-w-2xl text-center">
          <p class="eyebrow">Trusted locally</p>
          <h2 class="display-sm mt-3">Clients we have worked with</h2>
          <p class="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-fg-muted">
            Calgary brokerages and teams whose listings we photograph.
          </p>
        </div>
      </Reveal>

      <ul class="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        <li v-for="(logo, index) in clientLogos" :key="logo">
          <Reveal :delay="index * 60" variant="zoom-in">
            <div class="logo-plate">
              <CldImg
                :src="logo"
                :alt="`Realty partner logo ${index + 1}`"
                class="h-12 w-auto max-w-[9.5rem] object-contain sm:h-14 sm:max-w-[11rem]"
                :widths="[240, 400]"
                sizes="180px"
              />
            </div>
          </Reveal>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { clientLogos } from '~/data/site'
</script>
