<template>
  <section class="section bg-[color:var(--page-alt)]">
    <div class="site-shell text-center">
      <Reveal variant="fade-up">
        <h2 class="headline">Every angle. Covered.</h2>
        <p class="lede mt-4">Stills, video, aerial, and twilight — booked on their own or as a package.</p>
      </Reveal>
    </div>
    <div class="wide-shell mt-12 grid gap-3 md:grid-cols-2">
      <Reveal v-for="(service, index) in items" :key="service.id" :delay="(index % 2) * 90" variant="zoom-in">
        <NuxtLink :to="`/services#${service.id}`" class="tile zoom-hover group block bg-[color:var(--card)] text-center">
          <div class="px-6 pt-10">
            <h3 class="headline-xs">{{ service.title }}</h3>
            <p class="mt-2 text-[17px] text-fg-muted">{{ service.summary }}</p>
            <span class="link-more mt-3 !text-[17px]">Learn more</span>
          </div>
          <div class="mt-8 overflow-hidden">
            <CldImg
              :src="service.image"
              :alt="service.title"
              class="aspect-[16/10] w-full object-cover"
              :widths="[480, 800, 1200]"
              sizes="(max-width: 768px) 100vw, 630px"
            />
          </div>
        </NuxtLink>
      </Reveal>
    </div>
  </section>
</template>

<script setup lang="ts">
import { services } from '~/data/services'

const props = withDefaults(defineProps<{ limit?: number }>(), { limit: 4 })
const items = computed(() => services.slice(0, props.limit))
</script>
