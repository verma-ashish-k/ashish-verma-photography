<template>
  <div>
    <div class="grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
      <Reveal v-for="(image, index) in images" :key="image.src" :delay="(index % 8) * 40" variant="zoom-in">
        <button type="button" class="zoom-hover group w-full overflow-hidden rounded-[20px]" @click="open(index)">
          <CldImg
            :src="image.src"
            :alt="image.alt"
            class="aspect-[4/5] w-full object-cover"
            :widths="[400, 700, 1000]"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </button>
      </Reveal>
    </div>
    <GalleryLightbox
      :images="images"
      :index="activeIndex"
      :open="lightboxOpen"
      @close="lightboxOpen = false"
      @update:index="activeIndex = $event"
    />
  </div>
</template>

<script setup lang="ts">
import type { GalleryImage } from '~/data/gallery'

defineProps<{
  images: GalleryImage[]
}>()

const lightboxOpen = ref(false)
const activeIndex = ref(0)

const open = (index: number) => {
  activeIndex.value = index
  lightboxOpen.value = true
}
</script>
