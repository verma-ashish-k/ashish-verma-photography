<template>
  <ul :class="inline ? 'flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px]' : 'space-y-2'" aria-label="Social profiles">
    <li v-for="social in socials" :key="social.id">
      <a
        v-if="social.url"
        :href="social.url"
        target="_blank"
        rel="noreferrer"
        class="inline-flex items-center gap-2 hover:underline"
        :class="inverse ? 'text-[#a1a1a6] hover:text-white' : ''"
      >
        <SocialIcon :id="social.id" />{{ social.label }}
      </a>
      <span
        v-else
        class="inline-flex cursor-default items-center gap-2"
        :class="inverse ? 'text-[#6e6e73]' : 'text-fg-faint'"
        :title="`${social.label} — coming soon`"
      >
        <SocialIcon :id="social.id" />
        <span>{{ social.label }}</span>
        <span
          class="rounded-full border px-1.5 py-px text-[10px] leading-[14px]"
          :class="inverse ? 'border-white/15' : 'border-line'"
        >
          Soon
        </span>
      </span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { socials } from '~/data/site'

defineProps<{
  /** Light text for dark surfaces. */
  inverse?: boolean
  /** Lay items out in a row instead of a column. */
  inline?: boolean
}>()
</script>
