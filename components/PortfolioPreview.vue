<template>
  <section class="section bg-ink-900 text-white">
    <div class="site-shell">
      <div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p class="eyebrow text-coral-light">Selected frames</p>
          <h2 class="display mt-3 text-white">Recent listing work.</h2>
        </div>
        <NuxtLink to="/portfolio" class="btn-ghost w-fit">Open the full gallery</NuxtLink>
      </div>

      <div class="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        <button
          v-for="(image, index) in featuredPortfolio"
          :key="image.src"
          type="button"
          class="group overflow-hidden rounded-2xl"
          @click="open(index)"
        >
          <CldImg
            :src="image.src"
            :alt="image.alt"
            class="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105 md:aspect-[3/4]"
            :widths="[400, 700, 1000]"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </button>
      </div>
    </div>

    <GalleryLightbox
      :images="featuredPortfolio"
      :index="activeIndex"
      :open="lightboxOpen"
      @close="lightboxOpen = false"
      @update:index="activeIndex = $event"
    />
  </section>
</template>

<script setup lang="ts">
import { featuredPortfolio } from '~/data/gallery'

const lightboxOpen = ref(false)
const activeIndex = ref(0)

const open = (index: number) => {
  activeIndex.value = index
  lightboxOpen.value = true
}
</script>
