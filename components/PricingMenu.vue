<template>
  <section id="estimate" class="section scroll-mt-28">
    <div class="site-shell">
      <Reveal variant="fade-up">
        <div class="text-center">
          <h2 class="headline">Build your shoot.</h2>
          <p class="lede mt-4">Pick a property size, then choose what you need. Your total updates as you go.</p>
        </div>
      </Reveal>

      <!-- Size selector -->
      <Reveal variant="zoom-in">
        <div class="tile mx-auto mt-10 max-w-3xl px-6 py-8 sm:px-10 sm:py-10">
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <label for="area-range" class="text-[17px] font-semibold text-fg">Property size</label>
            <Transition name="price-swap" mode="out-in">
              <p :key="selectedTier.id" class="text-[17px] text-fg-muted" aria-live="polite">{{ selectedTier.label }}</p>
            </Transition>
          </div>
          <!--
            Thumb centres sit at THUMB/2 + (trackWidth - THUMB) * t, not at t * trackWidth.
            Tick labels and the filled track use the same formula so they line up exactly with the thumb.
          -->
          <div class="range-wrap mt-6" :style="{ '--thumb': '28px' }">
            <input
              id="area-range"
              type="range"
              min="0"
              :max="tiers.length - 1"
              step="1"
              :value="selectedIndex"
              :aria-valuetext="selectedTier.label"
              class="apple-range block"
              :style="{ '--fill': stopPosition(selectedIndex) }"
              @input="selectTier(Number(($event.target as HTMLInputElement).value))"
            />
            <div class="relative mt-3 h-8">
              <button
                v-for="(tier, index) in tiers"
                :key="tier.id"
                type="button"
                class="tick-label absolute top-0 whitespace-nowrap rounded-full px-1 py-1.5 text-[12px] leading-none transition-colors sm:text-[13px]"
                :class="index === selectedIndex ? 'font-semibold text-[color:var(--link)]' : 'text-fg-muted hover:text-fg'"
                :style="{ left: stopPosition(index) }"
                :aria-pressed="index === selectedIndex"
                :aria-label="tier.label"
                :data-index="index"
                @click="selectTier(index)"
              >
                {{ tier.shortLabel }}
              </button>
            </div>
          </div>
          <p class="mt-2 text-center text-[12px] text-fg-faint">Square feet</p>
        </div>
      </Reveal>

      <!-- Configurator -->
      <div class="mt-12 grid gap-8 lg:grid-cols-[1fr_320px] lg:gap-10">
        <div>
          <h3 class="headline-xs">Services</h3>
          <div class="mt-4 space-y-3">
            <button
              v-for="item in [...aLaCarteItems, ...addOnItems]"
              :key="item.key"
              type="button"
              class="option w-full rounded-[14px] border p-5 text-left transition sm:p-6"
              :class="isSelected(item.key) ? 'is-selected' : ''"
              :aria-pressed="isSelected(item.key)"
              @click="toggleService(item.key)"
            >
              <div class="flex items-start justify-between gap-4">
                <div class="flex items-start gap-3">
                  <span class="check mt-0.5" aria-hidden="true">
                    <svg v-if="isSelected(item.key)" viewBox="0 0 16 16" class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                      <path d="m3.5 8.5 3 3 6-7" />
                    </svg>
                  </span>
                  <div>
                    <p class="text-[17px] font-semibold text-fg">
                      {{ item.title }}
                      <span v-if="isAddOn(item.key)" class="ml-1 text-[12px] font-normal text-fg-faint">Add-on</span>
                    </p>
                    <p class="mt-1 text-[14px] leading-snug text-fg-muted">{{ item.features.slice(0, 4).join(' · ') }}</p>
                  </div>
                </div>
                <Transition name="price-swap" mode="out-in">
                  <p :key="`${item.key}-${selectedTier.id}`" class="shrink-0 text-[17px] font-semibold text-fg">
                    {{ formatPrice(selectedTier.prices[item.key]) }}
                  </p>
                </Transition>
              </div>
            </button>
          </div>
        </div>

        <aside class="lg:sticky lg:top-32 lg:self-start">
          <div class="tile p-6 sm:p-8">
            <p class="text-[14px] text-fg-muted">Your estimate</p>
            <Transition name="price-swap" mode="out-in">
              <p :key="totalLabel" class="mt-1 text-[40px] font-semibold leading-tight tracking-[-0.01em] text-fg" aria-live="polite">
                {{ totalLabel }}
              </p>
            </Transition>
            <p class="mt-1 text-[14px] text-fg-muted">{{ selectedTier.label }} · {{ selectedServices.length }} selected</p>
            <ul v-if="selectedServices.length" class="mt-5 space-y-2 border-t border-line pt-4 text-[14px]">
              <li v-for="key in orderedSelection" :key="key" class="flex justify-between gap-3">
                <span class="text-fg-muted">{{ titleFor(key) }}</span>
                <span class="text-fg">{{ formatPrice(selectedTier.prices[key]) }}</span>
              </li>
            </ul>
            <p v-if="packageTip" class="mt-5 rounded-[12px] bg-[color:var(--page)] p-3 text-[14px] text-fg-muted">
              Tip: the <a href="#packages" class="text-[color:var(--link)] hover:underline">Basic package</a> includes
              photos and video for ${{ packageTip.price }} — save ${{ packageTip.saving }}.
            </p>
            <NuxtLink :to="bookingLink" class="btn-primary mt-6 w-full">Book this shoot</NuxtLink>
            <p class="mt-3 text-center text-[12px] text-fg-faint">Serving Ottawa and surrounding areas.</p>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { aLaCarteItems, addOnItems } from '~/data/pricing'
import type { EstimateKey } from '~/composables/usePricing'

const { tiers, selectedIndex, selectedTier, selectTier, selectedServices, toggleService, estimate, packageTip } =
  usePricing()

const order: EstimateKey[] = ['photography', 'videography', 'drone', 'twilight']
const allItems = [...aLaCarteItems, ...addOnItems]

const isSelected = (key: EstimateKey) => selectedServices.value.includes(key)
const isAddOn = (key: EstimateKey) => addOnItems.some((item) => item.key === key)
const titleFor = (key: EstimateKey) => allItems.find((item) => item.key === key)?.title ?? key
/** CSS position of step `index` along the track, matching the native thumb-centre position. */
const stopPosition = (index: number) => {
  const t = tiers.length > 1 ? index / (tiers.length - 1) : 0
  return `calc(var(--thumb) / 2 + (100% - var(--thumb)) * ${t})`
}

const bookingLink = computed(() => ({
  path: '/contact',
  query: { services: orderedSelection.value.join(',') || undefined, size: selectedTier.value.id, from: 'pricing' },
}))

const orderedSelection = computed(() => order.filter((key) => selectedServices.value.includes(key)))

const totalLabel = computed(() => {
  if (!selectedServices.value.length) return '$0'
  return estimate.value === null ? 'Call us' : `$${estimate.value}`
})
</script>

<style scoped>
.range-wrap {
  position: relative;
}

.tick-label {
  transform: translateX(-50%);
}

.option {
  border-color: var(--line);
  background: var(--card);
}

.option:hover {
  border-color: var(--fg-faint);
}

.option.is-selected {
  border-color: #0071e3;
  box-shadow: inset 0 0 0 1px #0071e3;
}

.check {
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 9999px;
  border: 1.5px solid var(--fg-faint);
  color: #fff;
  transition: background-color 200ms ease, border-color 200ms ease;
}

.option.is-selected .check {
  background: #0071e3;
  border-color: #0071e3;
}
</style>
