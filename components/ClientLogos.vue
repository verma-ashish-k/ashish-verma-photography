<template>
  <section class="section bg-[color:var(--page-alt)]">
    <div class="site-shell text-center">
      <Reveal variant="fade-up">
        <h2 class="headline-sm">Clients we have worked with.</h2>
        <p class="body-copy mx-auto mt-3 max-w-xl">Brokerages and teams whose properties we have photographed.</p>
      </Reveal>
    </div>
    <ul class="site-shell mt-10 flex flex-wrap justify-center gap-3">
      <li v-for="(logo, index) in clientLogos" :key="logo.src" class="w-[calc(50%-6px)] sm:w-[calc(33.333%-8px)] lg:w-[calc(25%-9px)]">
        <Reveal variant="zoom-in" :delay="index * 50">
          <div class="logo-plate">
            <CldImg :src="logo.src" :alt="logo.alt" :widths="[320, 480]" sizes="240px" />
          </div>
        </Reveal>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { clientLogos } from '~/data/site'
</script>
