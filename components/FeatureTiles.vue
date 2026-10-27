<template>
  <div class="wide-shell mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
    <Reveal v-for="(item, index) in items" :key="item.title" :delay="(index % 3) * 80" variant="zoom-in">
      <article class="flex h-full flex-col overflow-hidden rounded-[18px] bg-[color:var(--card)]">
        <div v-if="item.image" class="zoom-hover">
          <CldImg
            :src="item.image"
            :alt="item.alt || item.title"
            class="aspect-[16/10] w-full object-cover"
            :widths="[480, 800, 1200]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
          />
        </div>
        <div class="flex flex-1 flex-col p-6 sm:p-7">
          <h3 class="headline-xs">{{ item.title }}</h3>
          <p class="mt-3 flex-1 text-[15px] leading-relaxed text-fg-muted">{{ item.text }}</p>
        </div>
      </article>
    </Reveal>
  </div>
</template>

<script setup lang="ts">
defineProps<{ items: { title: string; text: string; image?: string; alt?: string }[] }>()
</script>
