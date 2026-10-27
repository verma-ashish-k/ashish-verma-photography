<template>
  <div
    ref="el"
    class="reveal"
    :class="[`reveal-${variant}`, visible && 'is-in']"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'zoom-in' | 'zoom-out' | 'fade-up' | 'slide'
    delay?: number
    once?: boolean
  }>(),
  {
    variant: 'fade-up',
    delay: 0,
    once: true,
  },
)

const el = ref<HTMLElement | null>(null)
// Visible during SSR so content is never hidden for crawlers or no-JS visitors.
const visible = ref(true)

onMounted(() => {
  if (!el.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const rect = el.value.getBoundingClientRect()
  visible.value = rect.top < window.innerHeight * 0.92 && rect.bottom > 0

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        if (props.once) observer.disconnect()
      } else if (!props.once) {
        visible.value = false
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  )

  observer.observe(el.value)
  onBeforeUnmount(() => observer.disconnect())
})
</script>
