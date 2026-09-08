<template>
  <div>
    <div class="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
      <button
        v-for="(image, index) in images"
        :key="image.src"
        type="button"
        class="group overflow-hidden rounded-2xl"
        @click="open(index)"
      >
        <CldImg
          :src="image.src"
          :alt="image.alt"
          class="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
          :widths="[400, 700, 1000]"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </button>
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
