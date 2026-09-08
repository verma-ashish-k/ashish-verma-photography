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
        <li v-for="logo in clientLogos" :key="logo.src">
          <div class="logo-plate">
            <CldImg
              :src="logo.src"
              :alt="logo.alt"
              class="h-24 w-full object-contain sm:h-28"
              :widths="[320, 480]"
              sizes="220px"
            />
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { clientLogos } from '~/data/site'
</script>
