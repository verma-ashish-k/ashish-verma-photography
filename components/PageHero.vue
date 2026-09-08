<template>
  <section class="relative isolate overflow-hidden bg-ink-950 pt-28 text-white sm:pt-36">
    <div v-if="image" class="absolute inset-0 overflow-hidden">
      <CldImg
        :src="image"
        :alt="title"
        class="hero-zoom absolute inset-0 h-full w-full object-cover opacity-40"
        :widths="[800, 1400, 2000]"
        sizes="100vw"
      />
    </div>
    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/25" />
    <div class="site-shell relative z-10 pb-16 pt-10 sm:pb-24">
      <p v-if="eyebrow" class="eyebrow text-coral-light">{{ eyebrow }}</p>
      <h1 class="display mt-4 max-w-5xl text-white">{{ title }}</h1>
      <p v-if="lede" class="lede mt-6 text-white/65">{{ lede }}</p>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  eyebrow?: string
  lede?: string
  image?: string
}>()
</script>
