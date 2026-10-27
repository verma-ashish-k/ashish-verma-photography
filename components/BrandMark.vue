<template>
  <NuxtLink to="/" class="inline-flex items-center gap-2" :aria-label="`${site.name} home`">
    <svg viewBox="0 0 32 32" class="h-[18px] w-[18px]" aria-hidden="true">
      <path d="M5 16.5 16 6l11 10.5V27H5V16.5Z" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" />
      <path d="M16 6v8" fill="none" stroke="currentColor" stroke-width="2.2" />
    </svg>
    <span class="text-[14px] font-semibold tracking-[-0.01em]">{{ site.name }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
const site = useSite()
</script>
