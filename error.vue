<template>
  <div class="flex min-h-screen flex-col bg-ink-950 text-white">
    <div class="site-shell flex flex-1 flex-col items-start justify-center py-28">
      <p class="eyebrow text-coral-light">{{ error?.statusCode || 404 }}</p>
      <h1 class="display mt-5 text-white">This frame is missing.</h1>
      <p class="lede mt-6 text-white/60">
        The page you were looking for is gone, renamed, or never existed. The portfolio is still here.
      </p>
      <div class="mt-10 flex flex-wrap gap-3">
        <NuxtLink to="/" class="btn-primary">Back home</NuxtLink>
        <NuxtLink to="/portfolio" class="btn-ghost">View work</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  error?: { statusCode?: number; message?: string }
}>()
</script>
