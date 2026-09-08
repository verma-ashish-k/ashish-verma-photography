<template>
  <section class="section pt-8">
    <div class="site-shell">
      <div class="max-w-2xl">
        <p class="eyebrow">À-la-carte</p>
        <h2 class="display mt-3">Choose a size, then a service.</h2>
        <p class="lede mt-4">
          Slide between property sizes or tap a chip. Prices update for photography, video, iGuide, and add-ons.
        </p>
      </div>

      <div class="mt-8 rounded-3xl bg-ink-900 p-5 text-white sm:p-8">
        <label class="block text-sm font-medium text-white/70" for="area-range">Select your property size</label>
        <input
          id="area-range"
          type="range"
          min="0"
          :max="tiers.length - 1"
          step="1"
          :value="selectedIndex"
          class="mt-4 w-full accent-coral"
          @input="selectTier(Number(($event.target as HTMLInputElement).value))"
        />
        <div class="mt-4 flex flex-wrap gap-2">
          <button
            v-for="(tier, index) in tiers"
            :key="tier.id"
            type="button"
            class="rounded-full px-3 py-2 text-xs font-semibold sm:text-sm"
            :class="index === selectedIndex ? 'bg-coral text-white' : 'bg-white/10 text-white/75 hover:bg-white/15'"
            @click="selectTier(index)"
          >
            {{ tier.shortLabel }}
          </button>
        </div>
        <p class="mt-4 text-lg font-semibold">{{ selectedTier.label }}</p>
      </div>

      <div class="mt-8 grid gap-4 lg:grid-cols-3">
        <article v-for="item in aLaCarteItems" :key="item.key" class="card-surface p-6">
          <h3 class="font-display text-2xl">{{ item.title }}</h3>
          <p class="mt-3 text-3xl font-semibold text-coral">{{ formatPrice(selectedTier.prices[item.key]) }}</p>
          <ul class="mt-5 space-y-2 text-sm text-ink-500">
            <li v-for="feature in item.features" :key="feature">{{ feature }}</li>
          </ul>
        </article>
      </div>

      <h3 class="mt-14 font-display text-3xl">Add-on items</h3>
      <div class="mt-6 grid gap-4 md:grid-cols-2">
        <article v-for="item in addOnItems" :key="item.key" class="card-surface p-6">
          <h4 class="font-display text-2xl">{{ item.title }}</h4>
          <p class="mt-3 text-3xl font-semibold text-sky">{{ formatPrice(selectedTier.prices[item.key]) }}</p>
          <ul class="mt-5 space-y-2 text-sm text-ink-500">
            <li v-for="feature in item.features" :key="feature">{{ feature }}</li>
          </ul>
        </article>
      </div>

      <article class="mt-6 rounded-3xl bg-ink-800 p-6 text-white">
        <h4 class="font-display text-2xl">{{ travelFees.title }}</h4>
        <p class="mt-3 text-3xl font-semibold text-sky-light">Variable</p>
        <ul class="mt-5 space-y-2 text-sm text-white/70">
          <li>{{ travelFees.rate }}</li>
          <li v-for="note in travelFees.notes" :key="note">{{ note }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { aLaCarteItems, addOnItems, travelFees } from '~/data/pricing'

const { tiers, selectedIndex, selectedTier, selectTier } = usePricing()
</script>
