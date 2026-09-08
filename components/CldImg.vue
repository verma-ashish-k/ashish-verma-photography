<template>
  <img
    :src="primary"
    :srcset="srcset"
    :sizes="sizes"
    :alt="alt"
    :loading="preload ? 'eager' : loading"
    :fetchpriority="preload ? 'high' : undefined"
    decoding="async"
  />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    src: string
    alt: string
    widths?: number[]
    sizes?: string
    loading?: 'lazy' | 'eager'
    preload?: boolean
  }>(),
  {
    widths: () => [480, 800, 1200, 1600],
    sizes: '100vw',
    loading: 'lazy',
    preload: false,
  },
)

const primary = computed(() => {
  const width = props.widths[props.widths.length - 2] ?? props.widths[props.widths.length - 1] ?? 1200
  return cloudinaryUrl(props.src, `f_auto,q_auto,c_limit,w_${width}`)
})

const srcset = computed(() =>
  props.widths
    .map((width) => `${cloudinaryUrl(props.src, `f_auto,q_auto,c_limit,w_${width}`)} ${width}w`)
    .join(', '),
)
</script>
