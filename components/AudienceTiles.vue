<template>
  <section class="space-y-3 py-3">
    <article
      v-for="(audience, index) in audiences"
      :key="audience.id"
      class="wide-shell"
    >
      <div
        class="tile relative overflow-hidden text-center"
        :class="index === 0 ? 'audience-dark' : ''"
      >
        <Reveal variant="fade-up">
          <div class="px-6 pt-12 sm:pt-16">
            <p class="eyebrow" :class="index === 0 && '!text-[#a1a1a6]'">{{ audience.label }}</p>
            <h2 class="headline mx-auto mt-2 max-w-3xl" :class="index === 0 && '!text-[#f5f5f7]'">
              {{ audience.headline }}
            </h2>
            <p class="subhead mx-auto mt-3 max-w-2xl" :class="index === 0 && '!text-[#f5f5f7]'">{{ audience.subhead }}</p>
            <div class="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <NuxtLink :to="audiencePage(audience.id)" class="link-more" :class="index === 0 && '!text-[#2997ff]'" :aria-label="`Learn more about photography ${audience.label.toLowerCase()}`">
                Learn more
              </NuxtLink>
              <NuxtLink :to="{ path: '/contact', query: { audience: audienceQuery[audience.id] } }" class="link-more" :class="index === 0 && '!text-[#2997ff]'">{{ audience.cta }}</NuxtLink>
            </div>
          </div>
        </Reveal>

        <!-- TODO(v2.0): a before/after comparison returns here with real project content. -->
        <div class="mt-10 sm:mt-12">
          <ScrollZoom :from="index === 0 ? 1.14 : 0.94" class="aspect-[4/3] w-full sm:aspect-[16/7]">
            <CldImg
              :src="audience.image"
              :alt="`${audience.label} — ${audience.subhead}`"
              class="h-full w-full object-cover"
              :widths="[640, 1000, 1600, 2000]"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </ScrollZoom>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { audiences, audiencePage, audienceQuery } from '~/data/services'
</script>

<style scoped>
.audience-dark {
  background: #000;
}
</style>
