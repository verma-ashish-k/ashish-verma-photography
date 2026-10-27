<template>
  <div class="divide-y divide-[color:var(--line)] border-y border-line">
    <details v-for="item in items" :key="item.q" class="faq group py-5">
      <summary class="flex cursor-pointer list-none items-start justify-between gap-6 text-[17px] font-semibold text-fg sm:text-[19px]">
        <span>{{ item.q }}</span>
        <span class="faq-icon mt-1 shrink-0 text-[color:var(--link)]" aria-hidden="true">+</span>
      </summary>
      <div class="mt-3 max-w-3xl text-[15px] leading-relaxed text-fg-muted sm:text-[17px]">
        <p>{{ item.a }}</p>
        <NuxtLink v-if="item.link" :to="item.link.to" class="link-more mt-3 !text-[15px] sm:!text-[17px]">{{ item.link.label }}</NuxtLink>
      </div>
    </details>
  </div>
</template>

<script setup lang="ts">
import type { FaqItem } from '~/data/faq'

defineProps<{ items: FaqItem[] }>()
</script>

<style scoped>
.faq summary::-webkit-details-marker {
  display: none;
}
.faq-icon {
  font-size: 24px;
  line-height: 1;
  transition: transform 300ms var(--ease-out);
}
.faq[open] .faq-icon {
  transform: rotate(45deg);
}
</style>
