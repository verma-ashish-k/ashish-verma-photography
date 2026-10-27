<template>
  <svg viewBox="0 0 24 24" class="h-[14px] w-[14px] shrink-0" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
    <template v-if="id === 'instagram'">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="id === 'youtube'">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10 9.2 5 2.8-5 2.8Z" fill="currentColor" stroke="none" />
    </template>
    <template v-else>
      <circle cx="12" cy="12" r="9" />
      <path d="M13 20.5V12h2.6l.4-2.8H13V7.6c0-.8.3-1.4 1.4-1.4H16V3.8" stroke-linecap="round" stroke-linejoin="round" />
    </template>
  </svg>
</template>

<script setup lang="ts">
defineProps<{ id: 'instagram' | 'youtube' | 'facebook' }>()
</script>
