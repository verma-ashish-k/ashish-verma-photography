<template>
  <section id="packages" class="section scroll-mt-28 bg-[color:var(--page-alt)]">
    <div class="site-shell">
      <Reveal variant="fade-up">
        <div class="text-center">
          <h2 class="headline">Packages.</h2>
          <Transition name="price-swap" mode="out-in">
            <p :key="selectedTier.id" class="lede mt-4">Priced for {{ selectedTier.label.toLowerCase() }}.</p>
          </Transition>
        </div>
      </Reveal>

      <div class="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
        <Reveal v-for="(item, index) in packages" :key="item.key" :delay="index * 90" variant="zoom-in">
          <article class="flex h-full flex-col rounded-[18px] bg-[color:var(--card)] p-8 sm:p-10" :class="item.highlight && 'ring-2 ring-[#0071e3]'">
            <p class="h-4 text-[12px] font-semibold uppercase tracking-[0.06em] text-[color:var(--new)]">
              {{ item.highlight ? 'Most complete' : '' }}
            </p>
            <h3 class="headline-sm mt-1">{{ item.name }}</h3>
            <p class="mt-2 text-[14px] text-fg-muted">Best for {{ item.bestFor.toLowerCase() }}.</p>
            <Transition name="price-swap" mode="out-in">
              <p :key="`${item.key}-${selectedTier.id}`" class="mt-6 text-[40px] font-semibold leading-none text-fg">
                {{ formatPrice(selectedTier.prices[item.key]) }}
              </p>
            </Transition>
            <ul class="mt-8 flex-1 space-y-3 border-t border-line pt-6 text-[15px]">
              <li
                v-for="line in item.includes"
                :key="line.label"
                class="flex items-start gap-3"
                :class="line.included ? 'text-fg' : 'text-fg-faint line-through'"
              >
                <span aria-hidden="true" class="w-4 text-center" :class="line.included ? 'text-[color:var(--link)]' : ''">
                  {{ line.included ? '✓' : '–' }}
                </span>
                <span><span class="sr-only">{{ line.included ? 'Included: ' : 'Not included: ' }}</span>{{ line.label }}</span>
              </li>
            </ul>
            <NuxtLink :to="{ path: '/contact', query: { package: item.key, size: selectedTier.id } }" class="mt-8 w-full" :class="item.highlight ? 'btn-primary' : 'btn-secondary'">
              Book {{ item.name }}
            </NuxtLink>
          </article>
        </Reveal>
      </div>

      <div class="mx-auto mt-6 grid max-w-4xl gap-4 md:grid-cols-2">
        <Reveal variant="fade-up">
          <div class="h-full rounded-[18px] bg-[color:var(--card)] p-7">
            <h3 class="text-[17px] font-semibold text-fg">Service area</h3>
            <p class="mt-2 text-[14px] text-fg-muted">
              Serving Ottawa and surrounding areas — Kanata, Orléans, Barrhaven, Nepean, Gloucester, Stittsville, Riverside South, Manotick and Gatineau.
            </p>
          </div>
        </Reveal>
        <Reveal variant="fade-up" :delay="80">
          <div class="h-full rounded-[18px] bg-[color:var(--card)] p-7">
            <h3 class="text-[17px] font-semibold text-fg">Commercial</h3>
            <p class="mt-2 text-[14px] text-fg-muted">
              Offices, retail, and mixed-use spaces are quoted per project.
              <NuxtLink to="/contact" class="text-[color:var(--link)] hover:underline">Contact us</NuxtLink>.
            </p>
          </div>
        </Reveal>
      </div>

      <p class="mx-auto mt-10 max-w-2xl text-center text-[12px] text-fg-faint">
        Need headshots for your sales team or agent profile? They can be added to any shoot —
        <NuxtLink :to="headshotAddOn.to" class="text-[color:var(--link)] hover:underline">ask about headshots</NuxtLink>.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { packages } from '~/data/pricing'
import { headshotAddOn } from '~/data/services'

const { selectedTier } = usePricing()
</script>
