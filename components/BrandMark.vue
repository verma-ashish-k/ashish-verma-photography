<template>
  <NuxtLink to="/" class="group inline-flex items-center gap-2.5" :aria-label="`${site.name} home`">
    <span class="relative grid h-8 w-8 place-items-center overflow-hidden rounded-full bg-coral">
      <svg viewBox="0 0 32 32" class="h-5 w-5" aria-hidden="true">
        <path
          d="M7 16.5 16 8l9 8.5V25H7v-8.5Z"
          fill="none"
          stroke="#111"
          stroke-width="1.8"
          stroke-linejoin="round"
        />
        <path d="M16 8v6" fill="none" stroke="#111" stroke-width="1.8" />
      </svg>
    </span>
    <span class="leading-none">
      <span class="block text-[17px] font-semibold tracking-wide" :class="light ? 'text-white' : 'text-fg'">
        {{ site.name }}
      </span>
      <span class="mt-0.5 hidden text-[10px] font-medium uppercase tracking-[0.18em] sm:block" :class="light ? 'text-white/50' : 'text-fg-muted'">
        {{ site.tagline }}
      </span>
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  light?: boolean
}>()

const site = useSite()
</script>
