<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-[color:var(--page)] px-6 text-center">
    <p class="eyebrow">{{ error?.statusCode || 404 }}</p>
    <h1 class="headline-hero mt-2">This frame is missing.</h1>
    <p class="lede mt-5">The page you were looking for is gone, renamed, or never existed.</p>
    <div class="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
      <NuxtLink to="/" class="btn-primary">Back home</NuxtLink>
      <NuxtLink to="/portfolio" class="link-more">View work</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  error?: { statusCode?: number; message?: string }
}>()
</script>
