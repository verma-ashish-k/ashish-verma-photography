<template>
  <header class="sticky top-0 z-50">
    <div class="global-nav" :class="menuOpen && '!bg-[color:var(--page)]'">
      <div class="mx-auto flex h-12 max-w-site items-center justify-between px-4 text-[color:var(--nav-fg)] lg:h-11 lg:px-0">
        <BrandMark />

        <nav class="hidden items-center gap-8 lg:flex" aria-label="Primary">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-[12px] tracking-[-0.01em] text-[color:var(--nav-muted)] transition-colors duration-200 hover:text-[color:var(--nav-fg)]"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-1">
          <ThemeToggle />
          <a
            :href="site.phoneHref"
            class="hidden text-[12px] text-[color:var(--nav-muted)] transition-colors hover:text-[color:var(--nav-fg)] lg:ml-3 lg:inline"
          >
            {{ site.phoneDisplay }}
          </a>
          <button
            type="button"
            class="grid h-11 w-11 place-items-center lg:hidden"
            :aria-expanded="menuOpen"
            aria-controls="mobile-nav"
            :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
            @click="menuOpen = !menuOpen"
          >
            <span class="relative block h-[10px] w-[17px]">
              <span
                class="absolute left-0 top-0 block h-[1.5px] w-[17px] bg-current transition-transform duration-300"
                :class="menuOpen && 'translate-y-[4.25px] rotate-45'"
              />
              <span
                class="absolute bottom-0 left-0 block h-[1.5px] w-[17px] bg-current transition-transform duration-300"
                :class="menuOpen && '-translate-y-[4.25px] -rotate-45'"
              />
            </span>
          </button>
        </div>
      </div>
    </div>

    <Transition name="menu">
      <div
        v-if="menuOpen"
        id="mobile-nav"
        class="fixed inset-x-0 bottom-0 top-12 overflow-y-auto bg-[color:var(--page)] lg:hidden"
      >
        <nav class="flex flex-col px-10 pb-12 pt-6" aria-label="Mobile">
          <NuxtLink
            v-for="(link, index) in navLinks"
            :key="link.to"
            :to="link.to"
            class="mobile-link py-1.5 text-[28px] font-semibold tracking-[0.007em] text-fg"
            :style="{ animationDelay: `${60 + index * 30}ms` }"
            @click="menuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <div class="mt-10 space-y-2 text-[14px] text-fg-muted">
            <a :href="site.phoneHref" class="block">{{ site.phoneDisplay }}</a>
            <a :href="`mailto:${site.email}`" class="block">{{ site.email }}</a>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { navLinks } from '~/data/site'

const site = useSite()
const route = useRoute()
const menuOpen = ref(false)

watch(() => route.fullPath, () => {
  menuOpen.value = false
})

watch(menuOpen, (open) => {
  if (!import.meta.client) return
  document.body.style.overflow = open ? 'hidden' : ''
})

onBeforeUnmount(() => {
  if (import.meta.client) document.body.style.overflow = ''
})
</script>

<style scoped>
.mobile-link {
  animation: mobile-link-in 420ms cubic-bezier(0.28, 0.11, 0.32, 1) both;
}

@keyframes mobile-link-in {
  from {
    opacity: 0;
    transform: translate3d(0, -8px, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mobile-link {
    animation: none;
  }
}
</style>
