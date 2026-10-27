<template>
  <figure class="before-after relative select-none overflow-hidden rounded-[18px] bg-black" :style="{ '--pos': `${position}%` }">
    <img src="/images/after.jpg" alt="Interior after professional editing" class="block aspect-[16/10] w-full object-cover" draggable="false" />
    <div class="before-layer absolute inset-0">
      <img src="/images/before.jpg" alt="Same interior before editing" class="h-full w-full object-cover" draggable="false" />
    </div>
    <div class="divider pointer-events-none absolute inset-y-0" aria-hidden="true">
      <span class="handle grid place-items-center rounded-full bg-white/90 text-[#1d1d1f] shadow-lift backdrop-blur">
        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="m9 6-6 6 6 6M15 6l6 6-6 6" />
        </svg>
      </span>
    </div>
    <span class="pointer-events-none absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-[12px] text-white backdrop-blur">Before</span>
    <span class="pointer-events-none absolute right-3 top-3 rounded-full bg-black/55 px-3 py-1 text-[12px] text-white backdrop-blur">After</span>
    <label class="sr-only" for="before-after-range">Drag to compare before and after</label>
    <input
      id="before-after-range"
      v-model.number="position"
      type="range"
      min="0"
      max="100"
      step="1"
      class="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      aria-valuetext="Before and after comparison"
    />
  </figure>
</template>

<script setup lang="ts">
const position = ref(50)
</script>

<style scoped>
.before-layer {
  clip-path: inset(0 calc(100% - var(--pos)) 0 0);
}

.divider {
  left: var(--pos);
  width: 2px;
  margin-left: -1px;
  background: rgba(255, 255, 255, 0.9);
}

.handle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  transform: translate(-50%, -50%);
}
</style>
