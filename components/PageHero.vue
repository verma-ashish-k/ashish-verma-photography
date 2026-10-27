<template>
  <section class="overflow-hidden bg-[color:var(--page)] pt-12 sm:pt-20">
    <div class="site-shell text-center">
      <Reveal variant="fade-up">
        <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
        <h1 class="headline-hero mt-2">{{ title }}</h1>
        <p v-if="lede" class="lede mt-5">{{ lede }}</p>
        <slot />
      </Reveal>
    </div>
    <div v-if="image" class="wide-shell mt-10 sm:mt-14">
      <ScrollZoom :from="1.1" class="tile aspect-[4/3] sm:aspect-[21/9]">
        <CldImg
          :src="image"
          :alt="imageAlt || title"
          class="h-full w-full object-cover"
          :widths="[800, 1400, 2000]"
          sizes="(max-width: 1260px) 100vw, 1260px"
          preload
        />
      </ScrollZoom>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  eyebrow?: string
  lede?: string
  image?: string
  imageAlt?: string
}>()
</script>
