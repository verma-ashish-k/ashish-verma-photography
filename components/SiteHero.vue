<template>
  <section class="overflow-hidden bg-[color:var(--page)] pt-12 sm:pt-16">
    <div class="site-shell text-center">
      <Reveal variant="fade-up">
        <p class="eyebrow">Ottawa real estate photography</p>
        <h1 class="headline-hero mt-3">Built to be seen.</h1>
        <p class="subhead mx-auto mt-4 max-w-2xl">
          Photography for builders, renovators, and realtors across Ottawa and 30&nbsp;km around.
        </p>
        <div class="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <NuxtLink to="/contact" class="btn-primary">Book a shoot</NuxtLink>
          <NuxtLink to="/pricing" class="link-more">See pricing</NuxtLink>
        </div>
      </Reveal>
    </div>

    <div class="wide-shell mt-10 sm:mt-14">
      <ScrollZoom :from="1.12" class="tile aspect-[4/5] sm:aspect-[16/9]">
        <CldImg
          :src="heroImages.home"
          alt="Bright open-concept living space photographed by Urban Snap"
          class="h-full w-full object-cover"
          :widths="[800, 1280, 1920, 2400]"
          sizes="(max-width: 1260px) 100vw, 1260px"
          preload
        />
      </ScrollZoom>
    </div>
  </section>
</template>

<script setup lang="ts">
import { heroImages } from '~/data/gallery'
</script>
