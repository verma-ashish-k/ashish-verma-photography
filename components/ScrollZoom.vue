<template>
  <div ref="el" class="relative overflow-hidden">
    <div class="scroll-zoom-inner h-full w-full will-change-transform" :style="innerStyle">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * Apple-style scroll-linked zoom: content starts slightly zoomed (or shrunk) and settles to 1:1
 * as it travels through the viewport. Disabled for prefers-reduced-motion.
 */
const props = withDefaults(
  defineProps<{
    from?: number
    to?: number
  }>(),
  { from: 1.15, to: 1 },
)

const el = ref<HTMLElement | null>(null)
const progress = ref(1)
const enabled = ref(false)
let frame = 0

const innerStyle = computed(() => {
  if (!enabled.value) return undefined
  const scale = props.from + (props.to - props.from) * progress.value
  return { transform: `scale(${scale.toFixed(4)})` }
})

const update = () => {
  frame = 0
  if (!el.value) return
  const rect = el.value.getBoundingClientRect()
  const vh = window.innerHeight
  // 0 when the top enters the bottom of the viewport, 1 when the element is centred.
  const raw = (vh - rect.top) / (vh * 0.5 + rect.height * 0.5)
  progress.value = Math.min(Math.max(raw, 0), 1)
}

const onScroll = () => {
  if (!frame) frame = requestAnimationFrame(update)
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  enabled.value = true
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  if (frame) cancelAnimationFrame(frame)
})
</script>
