<template>
  <section class="section pt-10">
    <div class="site-shell">
      <Reveal variant="fade-up">
        <div class="max-w-2xl">
          <p class="eyebrow">À-la-carte</p>
          <h2 class="display mt-4">Choose a size, then a service.</h2>
          <p class="lede mt-5">
            Slide between property sizes or tap a chip. Prices update for photography, video, iGuide, and add-ons.
          </p>
        </div>
      </Reveal>

      <Reveal variant="zoom-in">
        <div class="mt-10 rounded-[28px] bg-ink-950 p-6 text-white sm:p-10">
          <label class="block text-[13px] font-medium tracking-wide text-white/55" for="area-range">
            Select your property size
          </label>
          <input
            id="area-range"
            type="range"
            min="0"
            :max="tiers.length - 1"
            step="1"
            :value="selectedIndex"
            class="mt-5 w-full accent-coral"
            @input="selectTier(Number(($event.target as HTMLInputElement).value))"
          />
          <div class="mt-5 flex flex-wrap gap-2">
            <button
              v-for="(tier, index) in tiers"
              :key="tier.id"
              type="button"
              class="rounded-full px-3.5 py-2 text-[13px] font-medium tracking-wide transition"
              :class="index === selectedIndex ? 'bg-coral text-white' : 'bg-white/10 text-white/70 hover:bg-white/15'"
              @click="selectTier(index)"
            >
              {{ tier.shortLabel }}
            </button>
          </div>
          <p class="mt-5 text-[20px] font-semibold tracking-wide">{{ selectedTier.label }}</p>
        </div>
      </Reveal>

      <div class="mt-8 grid gap-4 lg:grid-cols-3">
        <Reveal v-for="(item, index) in aLaCarteItems" :key="item.key" :delay="index * 80" variant="zoom-in">
          <article class="card-surface h-full p-7">
            <h3 class="display-sm">{{ item.title }}</h3>
            <p class="mt-4 text-[40px] font-semibold tracking-wide text-coral">
              {{ formatPrice(selectedTier.prices[item.key]) }}
            </p>
            <ul class="mt-6 space-y-2.5 text-[15px] text-fg-muted">
              <li v-for="feature in item.features" :key="feature">{{ feature }}</li>
            </ul>
          </article>
        </Reveal>
      </div>

      <Reveal variant="fade-up">
        <h3 class="display-sm mt-16">Add-on items</h3>
      </Reveal>
      <div class="mt-6 grid gap-4 md:grid-cols-2">
        <Reveal v-for="(item, index) in addOnItems" :key="item.key" :delay="index * 80" variant="zoom-out">
          <article class="card-surface h-full p-7">
            <h4 class="display-sm">{{ item.title }}</h4>
            <p class="mt-4 text-[40px] font-semibold tracking-wide text-sky">
              {{ formatPrice(selectedTier.prices[item.key]) }}
            </p>
            <ul class="mt-6 space-y-2.5 text-[15px] text-fg-muted">
              <li v-for="feature in item.features" :key="feature">{{ feature }}</li>
            </ul>
          </article>
        </Reveal>
      </div>

      <Reveal variant="slide">
        <article class="mt-6 rounded-[28px] bg-ink-900 p-7 text-white">
          <h4 class="display-sm text-white">{{ travelFees.title }}</h4>
          <p class="mt-4 text-[40px] font-semibold tracking-wide text-white/90">Variable</p>
          <ul class="mt-6 space-y-2.5 text-[15px] text-white/55">
            <li>{{ travelFees.rate }}</li>
            <li v-for="note in travelFees.notes" :key="note">{{ note }}</li>
          </ul>
        </article>
      </Reveal>
    </div>
  </section>
</template>

<script setup lang="ts">
import { aLaCarteItems, addOnItems, travelFees } from '~/data/pricing'

const { tiers, selectedIndex, selectedTier, selectTier } = usePricing()
</script>
