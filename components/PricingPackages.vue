<template>
  <section class="section bg-cream-dark">
    <div class="site-shell">
      <div class="mx-auto max-w-2xl text-center">
        <p class="eyebrow">Packages</p>
        <h2 class="display mt-3">Pre-curated listing packages</h2>
        <p class="lede mx-auto mt-4">For properties {{ selectedTier.label }}.</p>
      </div>

      <div class="mt-10 grid gap-5 lg:grid-cols-3">
        <article
          v-for="item in packages"
          :key="item.key"
          class="rounded-3xl p-6 sm:p-8"
          :class="item.highlight ? 'bg-ink-900 text-white shadow-lift' : 'bg-white text-ink-900 shadow-lift'"
        >
          <p class="text-sm font-semibold uppercase tracking-[0.16em]" :class="item.highlight ? 'text-coral-light' : 'text-coral'">
            {{ item.name }}
          </p>
          <p class="mt-4 text-5xl font-semibold">{{ formatPrice(selectedTier.prices[item.key]) }}</p>
          <ul class="mt-6 space-y-3 text-sm">
            <li
              v-for="line in item.includes"
              :key="line.label"
              class="flex items-start gap-2"
              :class="line.included ? '' : item.highlight ? 'text-white/35 line-through' : 'text-ink-300 line-through'"
            >
              <span aria-hidden="true">{{ line.included ? '✓' : '–' }}</span>
              {{ line.label }}
            </li>
          </ul>
          <NuxtLink to="/contact" class="btn-primary mt-8 w-full">Book now</NuxtLink>
        </article>
      </div>

      <p class="mt-12 text-center text-ink-500">
        Contact us for commercial real estate pricing.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { packages } from '~/data/pricing'

const { selectedTier } = usePricing()
</script>
