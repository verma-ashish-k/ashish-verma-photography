<template>
  <section class="bg-coral">
    <div class="site-shell flex flex-col items-start justify-between gap-6 py-14 text-white lg:flex-row lg:items-center">
      <div>
        <h2 class="font-display text-4xl sm:text-5xl">Ready to list? Let’s shoot.</h2>
        <p class="mt-3 max-w-xl text-white/85">
          Book photography, video, iGuide, or a full package. Same Calgary team, quick turnaround, listing-ready files.
        </p>
      </div>
      <div class="flex flex-col gap-3 sm:flex-row">
        <NuxtLink to="/contact" class="inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white hover:bg-ink-800">
          {{ cta }}
        </NuxtLink>
        <a :href="site.phoneHref" class="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
          {{ site.phoneDisplay }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ cta?: string }>(), {
  cta: 'Request a booking',
})

const site = useSite()
</script>
