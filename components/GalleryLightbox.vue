<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-[80] flex flex-col bg-ink-950/95 text-white"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      @keydown.escape.prevent="emit('close')"
    >
      <div class="flex items-center justify-between px-4 py-4 sm:px-6">
        <p class="text-sm text-white/60">{{ index + 1 }} / {{ images.length }}</p>
        <button type="button" class="rounded-full px-4 py-2 text-sm hover:bg-white/10" @click="emit('close')">
          Close
        </button>
      </div>

      <div class="relative flex flex-1 items-center justify-center px-4 sm:px-16">
        <button
          type="button"
          class="absolute left-2 hidden h-12 w-12 place-items-center rounded-full bg-white/10 sm:grid"
          aria-label="Previous image"
          @click="go(-1)"
        >
          ‹
        </button>
        <NuxtImg
          provider="cloudinary"
          :src="current.src"
          :alt="current.alt"
          class="max-h-[70vh] w-full max-w-5xl object-contain"
          sizes="90vw"
        />
        <button
          type="button"
          class="absolute right-2 hidden h-12 w-12 place-items-center rounded-full bg-white/10 sm:grid"
          aria-label="Next image"
          @click="go(1)"
        >
          ›
        </button>
      </div>

      <div class="flex justify-center gap-4 px-4 py-4 sm:hidden">
        <button type="button" class="rounded-full bg-white/10 px-4 py-2" @click="go(-1)">Previous</button>
        <button type="button" class="rounded-full bg-white/10 px-4 py-2" @click="go(1)">Next</button>
      </div>

      <div class="hidden gap-2 overflow-x-auto px-4 pb-5 sm:flex">
        <button
          v-for="(image, i) in images"
          :key="image.src"
          type="button"
          class="shrink-0 overflow-hidden rounded-lg border-2"
          :class="i === index ? 'border-coral' : 'border-transparent'"
          @click="emit('update:index', i)"
        >
          <NuxtImg provider="cloudinary" :src="image.src" :alt="image.alt" class="h-16 w-20 object-cover" sizes="80px" />
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import type { GalleryImage } from '~/data/gallery'

const props = defineProps<{
  images: GalleryImage[]
  index: number
  open: boolean
}>()

const emit = defineEmits<{
  close: []
  'update:index': [value: number]
}>()

const current = computed(() => props.images[props.index] ?? props.images[0])

const go = (step: number) => {
  const next = (props.index + step + props.images.length) % props.images.length
  emit('update:index', next)
}

const onKey = (event: KeyboardEvent) => {
  if (!props.open) return
  if (event.key === 'ArrowRight') go(1)
  if (event.key === 'ArrowLeft') go(-1)
  if (event.key === 'Escape') emit('close')
}

watch(
  () => props.open,
  (isOpen) => {
    if (!import.meta.client) return
    document.body.style.overflow = isOpen ? 'hidden' : ''
  },
)

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>
