<template>
  <ol class="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
    <li v-for="(item, index) in steps" :key="item.title" class="rounded-[18px] bg-[color:var(--card)] p-6 sm:p-7">
      <p class="text-[14px] font-semibold text-[color:var(--link)]">Step {{ index + 1 }}</p>
      <h3 class="headline-xs mt-2">{{ item.title }}</h3>
      <p class="mt-3 text-[15px] leading-relaxed text-fg-muted">{{ item.text }}</p>
    </li>
  </ol>
</template>

<script setup lang="ts">
defineProps<{ steps: { title: string; text: string }[] }>()
</script>
