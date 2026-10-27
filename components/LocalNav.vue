<template>
  <div class="local-nav sticky top-12 z-40 lg:top-11">
    <div class="site-shell flex h-[52px] items-center justify-between gap-4">
      <p class="truncate text-[19px] font-semibold tracking-[0.012em] text-fg sm:text-[21px]">{{ title }}</p>
      <div class="flex items-center gap-5">
        <nav v-if="links?.length" class="hidden items-center gap-6 md:flex" :aria-label="`${title} sections`">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="text-[12px] text-fg-muted transition-colors hover:text-[color:var(--link)]"
          >
            {{ link.label }}
          </a>
        </nav>
        <NuxtLink :to="ctaTo" class="btn-primary btn-sm whitespace-nowrap">{{ cta }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    links?: { label: string; href: string }[]
    cta?: string
    ctaTo?: string
  }>(),
  { cta: 'Book a shoot', ctaTo: '/contact' },
)
</script>
