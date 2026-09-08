<template>
  <button
    type="button"
    class="grid h-9 w-9 place-items-center rounded-full border transition"
    :class="inverse
      ? 'border-white/25 bg-black/30 text-white hover:bg-black/45'
      : 'border-[color:var(--nav-border)] bg-[color-mix(in_srgb,var(--nav-fg)_6%,transparent)] text-[color:var(--nav-fg)] hover:bg-[color-mix(in_srgb,var(--nav-fg)_12%,transparent)]'"
    :aria-label="label"
    :title="label"
    @click="cyclePreference"
  >
    <svg v-if="preference === 'system'" viewBox="0 0 24 24" class="h-[18px] w-[18px]" aria-hidden="true">
      <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" stroke-width="1.6" />
      <path d="M12 3.75v16.5A8.25 8.25 0 0 0 12 3.75Z" fill="currentColor" />
    </svg>
    <svg v-else-if="preference === 'light'" viewBox="0 0 24 24" class="h-[18px] w-[18px]" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.6" />
      <path
        d="M12 3.5v1.6M12 18.9V20.5M4.7 4.7l1.1 1.1M18.2 18.2l1.1 1.1M3.5 12H5.1M18.9 12h1.6M4.7 19.3l1.1-1.1M18.2 5.8l1.1-1.1"
        fill="none"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
      />
    </svg>
    <svg v-else viewBox="0 0 24 24" class="h-[18px] w-[18px]" aria-hidden="true">
      <path
        d="M15.2 4.4a7.6 7.6 0 1 0 4.4 12.8 6.4 6.4 0 0 1-8.8-8.8 7.5 7.5 0 0 0 4.4-4Z"
        fill="none"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  inverse?: boolean
}>()

const { preference, label, cyclePreference } = useTheme()
</script>
