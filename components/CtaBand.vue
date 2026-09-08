<template>
  <section class="bg-ink-950">
    <Reveal variant="zoom-in">
      <div class="site-shell flex flex-col items-start justify-between gap-8 py-20 text-white lg:flex-row lg:items-center">
        <div>
          <h2 class="display text-white">Ready to list?<br />Let’s shoot.</h2>
          <p class="mt-5 max-w-xl text-[17px] leading-relaxed text-white/55">
            Book photography, video, iGuide, or a full package. Same Calgary team, quick turnaround, listing-ready files.
          </p>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row">
          <NuxtLink to="/contact" class="btn-primary">{{ cta }}</NuxtLink>
          <a :href="site.phoneHref" class="btn-ghost">{{ site.phoneDisplay }}</a>
        </div>
      </div>
    </Reveal>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ cta?: string }>(), {
  cta: 'Request a booking',
})

const site = useSite()
</script>
