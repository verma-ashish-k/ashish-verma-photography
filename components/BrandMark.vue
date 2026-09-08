<template>
  <NuxtLink to="/" class="group inline-flex items-center gap-3" :aria-label="`${site.name} home`">
    <span class="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-coral">
      <svg viewBox="0 0 32 32" class="h-6 w-6" aria-hidden="true">
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
    <span class="leading-tight">
      <span class="block font-display text-2xl tracking-tight" :class="light ? 'text-white' : 'text-ink-900'">
        {{ site.name }}
      </span>
      <span class="hidden text-[10px] uppercase tracking-[0.18em] sm:block" :class="light ? 'text-white/60' : 'text-ink-500'">
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
