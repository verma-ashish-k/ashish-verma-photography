<template>
  <div>
    <PageHero
      eyebrow="Areas we serve"
      title="Ottawa and surrounding areas."
      lede="New builds, renovations, and listings across the city and the communities around it. Pick yours to see what we shoot there."
    />
    <section class="section pt-10 sm:pt-12">
      <div class="wide-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal v-for="(area, index) in areas" :key="area.slug" :delay="(index % 3) * 80" variant="zoom-in">
          <NuxtLink :to="`/areas/${area.slug}`" class="tile zoom-hover group flex h-full flex-col bg-[color:var(--card)]">
            <CldImg
              :src="area.image"
              :alt="`Real estate photography in ${area.name}`"
              class="aspect-[16/10] w-full object-cover"
              :widths="[480, 800, 1200]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
              :preload="index === 0"
            />
            <div class="flex flex-1 flex-col p-6 sm:p-7">
              <h2 class="headline-xs">{{ area.name }}</h2>
              <p class="mt-2 flex-1 text-[15px] leading-relaxed text-fg-muted">{{ area.headline }}</p>
              <span class="link-more mt-4 !text-[17px]">Photography in {{ area.name }}</span>
            </div>
          </NuxtLink>
        </Reveal>
      </div>
    </section>
    <ServiceArea />
    <CtaBand />
  </div>
</template>

<script setup lang="ts">
import { areas } from '~/data/areas'

const site = useSite()

useSeoPage({
  title: 'Areas We Serve — Ottawa, Kanata, Orléans, Barrhaven & Gatineau | Urban Snap',
  description:
    'Real estate photography for builders, renovators, and realtors in Ottawa, Kanata, Orléans, Barrhaven, Nepean, Gloucester, Stittsville, Riverside South, Manotick, and Gatineau.',
  path: '/areas',
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Communities served by Urban Snap',
  itemListElement: areas.map((area, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: area.name,
    url: `${site.url}/areas/${area.slug}`,
  })),
})
useJsonLd(breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Areas', path: '/areas' }]))
</script>
