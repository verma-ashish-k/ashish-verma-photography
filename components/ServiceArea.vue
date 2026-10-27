<template>
  <section class="section">
    <div class="site-shell grid items-center gap-12 md:grid-cols-2">
      <Reveal variant="fade-up">
        <p class="eyebrow">Service area</p>
        <h2 class="headline mt-2">Ottawa and 30&nbsp;km around.</h2>
        <p class="body-copy mt-5 max-w-md">
          Based in Ottawa, we shoot anywhere within about {{ site.serviceRadiusKm }} km of downtown — no travel fee. Further
          out? We still come; travel is billed per kilometre.
        </p>
        <ul class="mt-7 flex flex-wrap gap-2" aria-label="Communities we serve">
          <li v-for="place in site.serviceArea" :key="place" class="chip">{{ place }}</li>
        </ul>
      </Reveal>
      <Reveal variant="zoom-in">
        <div class="radius-map relative mx-auto aspect-square w-full max-w-[420px]" aria-hidden="true">
          <span class="ring ring-1" />
          <span class="ring ring-2" />
          <span class="ring ring-3" />
          <span class="center-dot" />
          <span class="absolute left-1/2 top-1/2 mt-4 -translate-x-1/2 text-[12px] font-semibold text-fg">Downtown</span>
          <span
            v-for="place in placed"
            :key="place.name"
            class="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] text-fg-muted sm:text-[12px]"
            :style="{ left: `${place.x}%`, top: `${place.y}%` }"
          >
            {{ place.name }}
          </span>
          <span class="absolute bottom-1 left-1/2 -translate-x-1/2 text-[11px] text-fg-faint">{{ site.serviceRadiusKm }} km</span>
        </div>
      </Reveal>
    </div>
  </section>
</template>

<script setup lang="ts">
const site = useSite()

// Approximate compass placement for a schematic (not to scale) radius graphic.
const placed = [
  { name: 'Gatineau', x: 40, y: 30 },
  { name: 'Orléans', x: 80, y: 38 },
  { name: 'Gloucester', x: 66, y: 62 },
  { name: 'Riverside South', x: 54, y: 76 },
  { name: 'Manotick', x: 46, y: 88 },
  { name: 'Barrhaven', x: 30, y: 72 },
  { name: 'Nepean', x: 31, y: 56 },
  { name: 'Kanata', x: 15, y: 46 },
  { name: 'Stittsville', x: 14, y: 61 },
]
</script>

<style scoped>
.ring {
  position: absolute;
  inset: 0;
  margin: auto;
  border-radius: 9999px;
  border: 1px solid var(--line);
}

.ring-1 {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0, 113, 227, 0.1), rgba(0, 113, 227, 0.02) 70%);
}

.ring-2 {
  width: 66%;
  height: 66%;
}

.ring-3 {
  width: 33%;
  height: 33%;
}

.center-dot {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 9999px;
  background: #0071e3;
  box-shadow: 0 0 0 6px rgba(0, 113, 227, 0.2);
}
</style>
