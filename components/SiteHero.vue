<template>
  <section class="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink-950 text-white">
    <div class="absolute inset-0 overflow-hidden">
      <CldImg
        :src="heroImages.home"
        alt="Calgary interior photographed by Urban Snap"
        class="hero-zoom absolute inset-0 h-full w-full object-cover"
        :widths="[800, 1280, 1920, 2400]"
        sizes="100vw"
        preload
      />
      <video
        v-if="showVideo"
        class="hero-zoom absolute inset-0 hidden h-full w-full object-cover md:block"
        autoplay
        muted
        loop
        playsinline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/15" />

    <div class="site-shell relative z-10 w-full pb-20 pt-28 sm:pb-28 sm:pt-32">
      <p class="eyebrow text-coral-light">{{ site.city }} · {{ site.region }}</p>
      <h1 class="display mt-5 max-w-5xl text-white">
        Real estate photography
        <span class="block tracking-[0.03em] text-white/90">done right.</span>
      </h1>
      <p class="lede mt-6 max-w-xl text-white/70">
        Discover the power of visual storytelling with Urban Snap. From downtown condos to suburban retreats, we
        showcase a property’s unique charm and help listings attract the right buyers.
      </p>
      <p class="mt-5 text-[15px] font-medium tracking-wide text-white/55">
        Now booking <span class="text-white">{{ currentService }}</span>
      </p>
      <div class="mt-10 flex flex-col gap-3 sm:flex-row">
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
  }, 2800)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>
