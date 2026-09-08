<template>
  <section class="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink-950 text-white">
    <NuxtImg
      provider="cloudinary"
      :src="heroImages.home"
      alt="Calgary interior photographed by Urban Snap"
      class="absolute inset-0 h-full w-full object-cover"
      sizes="100vw"
      preload
    />
    <video
      v-if="showVideo"
      class="absolute inset-0 hidden h-full w-full object-cover md:block"
      autoplay
      muted
      loop
      playsinline
      poster=""
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/25" />

    <div class="site-shell relative z-10 w-full pb-16 pt-28 sm:pb-20 sm:pt-32">
      <p class="eyebrow text-coral-light">{{ site.city }} · {{ site.region }}</p>
      <h1 class="display mt-4 max-w-4xl text-white">
        Real estate photography<br class="hidden sm:block" />
        <span class="italic text-cream">done right.</span>
      </h1>
      <p class="lede mt-6 text-white/75">
        Discover the power of visual storytelling with Urban Snap. From downtown condos to suburban retreats, we
        showcase a property’s unique charm and help listings attract the right buyers.
      </p>
      <p class="mt-4 text-sm font-medium text-sky-light">{{ currentService }}</p>
      <div class="mt-8 flex flex-col gap-3 sm:flex-row">
        <NuxtLink to="/contact" class="btn-primary">Book a shoot</NuxtLink>
        <NuxtLink to="/portfolio" class="btn-ghost">View the portfolio</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { heroImages } from '~/data/gallery'
import { services } from '~/data/services'

const site = useSite()
const titles = services.map((item) => item.title)
const currentService = ref(titles[0])
const showVideo = ref(false)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  showVideo.value = window.matchMedia('(min-width: 768px)').matches
  let index = 0
  timer = setInterval(() => {
    index = (index + 1) % titles.length
    currentService.value = titles[index]
  }, 2600)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>
