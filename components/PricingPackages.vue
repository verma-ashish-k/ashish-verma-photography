<template>
  <section class="section bg-cream-dark">
    <div class="site-shell">
      <Reveal variant="fade-up">
        <div class="mx-auto max-w-2xl text-center">
          <p class="eyebrow">Packages</p>
          <h2 class="display mt-4">Pre-curated listing packages</h2>
          <p class="lede mx-auto mt-5">For properties {{ selectedTier.label }}.</p>
        </div>
      </Reveal>

      <div class="mt-14 grid gap-5 lg:grid-cols-3">
        <Reveal v-for="(item, index) in packages" :key="item.key" :delay="index * 90" :variant="item.highlight ? 'zoom-out' : 'zoom-in'">
          <article
            class="h-full rounded-[28px] p-7 sm:p-9"
            :class="item.highlight ? 'bg-ink-950 text-white' : 'card-surface text-fg'"
          >
            <p
              class="text-[12px] font-medium uppercase tracking-[0.2em]"
              :class="item.highlight ? 'text-coral-light' : 'text-coral'"
            >
              {{ item.name }}
            </p>
            <p class="mt-5 text-[48px] font-semibold tracking-wide">{{ formatPrice(selectedTier.prices[item.key]) }}</p>
            <ul class="mt-8 space-y-3 text-[15px]">
              <li
                v-for="line in item.includes"
                :key="line.label"
                class="flex items-start gap-2"
                :class="line.included ? '' : item.highlight ? 'text-white/30 line-through' : 'text-fg-faint line-through'"
              >
                <span aria-hidden="true">{{ line.included ? '✓' : '–' }}</span>
                {{ line.label }}
              </li>
            </ul>
            <NuxtLink to="/contact" class="btn-primary mt-10 w-full">Book now</NuxtLink>
          </article>
        </Reveal>
      </div>

      <p class="mt-14 text-center text-[15px] text-fg-muted">
        Contact us for commercial real estate pricing.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { packages } from '~/data/pricing'

const { selectedTier } = usePricing()
</script>
