<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <div
      class="border-b transition duration-500"
      :class="scrolled || menuOpen ? 'border-white/10 bg-ink-950/70 shadow-soft backdrop-blur-xl' : 'border-transparent bg-transparent'"
    >
      <div class="site-shell flex h-14 items-center justify-between sm:h-16">
        <BrandMark light />

        <nav class="hidden items-center gap-7 lg:flex" aria-label="Primary">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-[13px] font-medium tracking-wide text-white/70 transition hover:text-white"
            active-class="!text-white"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-primary !px-5 !py-2 !text-[13px]">Book a shoot</NuxtLink>
        </nav>

        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-full text-white lg:hidden"
          :aria-expanded="menuOpen"
          aria-controls="mobile-nav"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          @click="menuOpen = !menuOpen"
        >
          <span class="sr-only">Menu</span>
          <span class="relative block h-3.5 w-4">
            <span class="absolute left-0 top-0 block h-px w-4 bg-white transition" :class="menuOpen && 'translate-y-1.5 rotate-45'" />
            <span class="absolute left-0 top-[7px] block h-px w-4 bg-white transition" :class="menuOpen && 'opacity-0'" />
            <span class="absolute left-0 top-[14px] block h-px w-4 bg-white transition" :class="menuOpen && '-translate-y-1.5 -rotate-45'" />
          </span>
        </button>
      </div>
    </div>

    <Transition name="menu">
      <div
        v-if="menuOpen"
        id="mobile-nav"
        class="border-b border-white/10 bg-ink-950/90 backdrop-blur-2xl lg:hidden"
      >
        <nav class="site-shell flex flex-col gap-1 py-5" aria-label="Mobile">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="rounded-2xl px-3 py-3 text-[17px] font-medium text-white/90"
            @click="menuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-primary mt-3" @click="menuOpen = false">Book a shoot</NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { navLinks } from '~/data/site'

const route = useRoute()
const menuOpen = ref(false)
const scrolled = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 8
}

watch(() => route.path, () => {
  menuOpen.value = false
})

watch(menuOpen, (open) => {
  if (!import.meta.client) return
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})
</script>
