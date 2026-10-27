<template>
  <section class="section" :class="plain ? 'bg-[color:var(--page)]' : 'bg-[color:var(--page-alt)]'">
    <Reveal variant="zoom-in">
      <div class="site-shell text-center">
        <h2 class="headline">{{ title }}</h2>
        <p class="lede mt-4">
          Builders, renovators, and realtors across Ottawa — tell us about the property and we will find a date.
        </p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <NuxtLink to="/contact" class="btn-primary">{{ cta }}</NuxtLink>
          <a :href="site.phoneHref" class="btn-secondary">Call {{ site.phoneDisplay }}</a>
        </div>
      </div>
    </Reveal>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ cta?: string; title?: string; plain?: boolean }>(), {
  cta: 'Book a shoot',
  title: 'Ready when your project is.',
})

const site = useSite()
</script>
