<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition duration-300"
    :class="scrolled || menuOpen ? 'bg-ink-900/92 shadow-lg backdrop-blur-md' : 'bg-transparent'"
  >
    <div class="site-shell flex h-16 items-center justify-between sm:h-20">
      <BrandMark light />

      <nav class="hidden items-center gap-8 lg:flex" aria-label="Primary">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-white/75 transition hover:text-white"
          active-class="text-white"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/contact" class="btn-primary !py-2.5">Book a shoot</NuxtLink>
      </nav>

      <button
        type="button"
        class="grid h-11 w-11 place-items-center rounded-full text-white lg:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-nav"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="menuOpen = !menuOpen"
      >
        <span class="sr-only">Menu</span>
        <span class="relative block h-4 w-5">
          <span class="absolute left-0 top-0 block h-0.5 w-5 bg-white transition" :class="menuOpen && 'translate-y-1.5 rotate-45'" />
          <span class="absolute left-0 top-1.5 block h-0.5 w-5 bg-white transition" :class="menuOpen && 'opacity-0'" />
          <span class="absolute left-0 top-3 block h-0.5 w-5 bg-white transition" :class="menuOpen && '-translate-y-1.5 -rotate-45'" />
        </span>
      </button>
    </div>

    <div
      id="mobile-nav"
      class="overflow-hidden border-t border-white/10 bg-ink-900 lg:hidden"
      :class="menuOpen ? 'max-h-[28rem]' : 'max-h-0'"
    >
      <nav class="site-shell flex flex-col gap-1 py-4" aria-label="Mobile">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="rounded-xl px-3 py-3 text-base font-medium text-white/85"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/contact" class="btn-primary mt-2" @click="menuOpen = false">Book a shoot</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { navLinks } from '~/data/site'

const menuOpen = ref(false)
const scrolled = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 12
}

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
