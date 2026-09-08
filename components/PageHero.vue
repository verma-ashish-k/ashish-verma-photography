<template>
  <section class="relative isolate overflow-hidden bg-ink-950 pt-28 text-white sm:pt-32">
    <CldImg
      v-if="image"
      :src="image"
      :alt="title"
      class="absolute inset-0 h-full w-full object-cover opacity-35"
      :widths="[800, 1400, 2000]"
      sizes="100vw"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/40" />
    <div class="site-shell relative z-10 pb-14 pt-8 sm:pb-20">
      <p v-if="eyebrow" class="eyebrow text-coral-light">{{ eyebrow }}</p>
      <h1 class="display mt-3 max-w-4xl text-white">{{ title }}</h1>
      <p v-if="lede" class="lede mt-5 text-white/75">{{ lede }}</p>
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
