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
    variant: 'zoom-in',
    delay: 0,
    once: true,
  },
)

const el = ref<HTMLElement | null>(null)
const visible = ref(true)

onMounted(() => {
  if (!el.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    visible.value = true
    return
  }

  const rect = el.value.getBoundingClientRect()
  const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 40
  visible.value = inView

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        if (props.once) observer.disconnect()
      } else if (!props.once) {
        visible.value = false
      }
    },
    { threshold: 0.14, rootMargin: '0px 0px -6% 0px' },
  )

  observer.observe(el.value)
  onBeforeUnmount(() => observer.disconnect())
})
</script>
