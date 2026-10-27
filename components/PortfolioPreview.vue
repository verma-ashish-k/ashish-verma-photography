<template>
  <section class="section bg-black text-[#f5f5f7]">
    <div class="site-shell text-center">
      <Reveal variant="fade-up">
        <h2 class="headline !text-[#f5f5f7]">Recent work.</h2>
        <p class="lede mt-4 !text-[#a1a1a6]">Interiors, exteriors, and the details buyers notice.</p>
        <NuxtLink to="/portfolio" class="link-more mt-4 !text-[#2997ff]">View the gallery</NuxtLink>
      </Reveal>
    </div>

    <div class="wide-shell mt-12 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
      <Reveal v-for="(image, index) in featuredPortfolio" :key="image.src" :delay="(index % 4) * 70" variant="zoom-out">
        <button type="button" class="zoom-hover block w-full overflow-hidden rounded-[14px]" @click="open(index)">
          <CldImg
            :src="image.src"
            :alt="image.alt"
            class="aspect-[4/5] w-full object-cover"
            :widths="[400, 700, 1000]"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </button>
      </Reveal>
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
