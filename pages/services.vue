<template>
  <div>
    <LocalNav
      title="Services"
      :links="[
        { label: 'Builders', href: '#builders' },
        { label: 'Renovators', href: '#renovators' },
        { label: 'Realtors', href: '#realtors' },
        { label: 'Capabilities', href: '#capabilities' },
      ]"
    />
    <PageHero
      eyebrow="Services"
      title="Real estate photography, focused."
      lede="Built first for builders, then renovators and realtors — across Ottawa and surrounding areas."
    />

    <section class="space-y-3 py-12 sm:py-16">
      <div v-for="(audience, index) in audiences" :id="audience.id" :key="audience.id" class="wide-shell scroll-mt-28">
        <article class="tile grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
          <Reveal :variant="index % 2 ? 'zoom-out' : 'zoom-in'" :class="index % 2 && 'lg:order-2'">
            <div class="zoom-hover overflow-hidden rounded-[14px]">
              <CldImg
                :src="audience.image"
                :alt="`${audience.label}: ${audience.subhead}`"
                class="aspect-[4/3] w-full object-cover"
                :widths="[640, 1000, 1400]"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </Reveal>
          <Reveal variant="fade-up">
            <p class="eyebrow">{{ index + 1 }}. {{ audience.label }}</p>
            <h2 class="headline-sm mt-2">{{ audience.headline }}</h2>
            <p class="body-copy mt-4">{{ audience.description }}</p>
            <ul class="mt-6 space-y-2 text-[15px] text-fg">
              <li v-for="point in audience.points" :key="point" class="flex gap-3">
                <span class="text-[color:var(--link)]" aria-hidden="true">✓</span>{{ point }}
              </li>
            </ul>
            <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <NuxtLink :to="{ path: '/contact', query: { audience: audienceQuery[audience.id] } }" class="btn-primary">{{ audience.cta }}</NuxtLink>
              <NuxtLink v-if="audience.id !== 'realtors'" :to="audiencePage(audience.id)" class="link-more">{{ audience.label }} page</NuxtLink>
              <NuxtLink v-else to="/pricing" class="link-more">See pricing</NuxtLink>
            </div>
          </Reveal>
        </article>
      </div>
    </section>

    <section id="capabilities" class="section scroll-mt-28 bg-[color:var(--page-alt)]">
      <div class="site-shell text-center">
        <Reveal variant="fade-up">
          <h2 class="headline">Capabilities.</h2>
          <p class="lede mt-4">Everything below can be booked by builders, renovators, and realtors alike.</p>
        </Reveal>
      </div>
      <div class="wide-shell mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        <Reveal v-for="(service, index) in services" :key="service.id" :delay="(index % 3) * 80" variant="zoom-in">
          <article :id="service.id" class="flex h-full scroll-mt-28 flex-col overflow-hidden rounded-[18px] bg-[color:var(--card)]">
            <div class="zoom-hover">
              <CldImg
                :src="service.image"
                :alt="service.title"
                class="aspect-[16/10] w-full object-cover"
                :widths="[480, 800, 1200]"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
              />
            </div>
            <div class="flex flex-1 flex-col p-6 sm:p-7">
              <h3 class="headline-xs">{{ service.title }}</h3>
              <p class="mt-1 text-[17px] font-semibold text-fg-muted">{{ service.summary }}</p>
              <p class="mt-3 flex-1 text-[15px] leading-relaxed text-fg-muted">{{ service.description }}</p>
              <NuxtLink to="/pricing" class="link-more mt-5 !text-[17px]">Pricing</NuxtLink>
            </div>
          </article>
        </Reveal>
      </div>
    </section>

    <CtaBand />
  </div>
</template>

<script setup lang="ts">
import { heroImages } from '~/data/gallery'
import { audiences, audiencePage, audienceQuery, services } from '~/data/services'

useSeoPage({
  title: 'Urban Snap Services — Ottawa Photography for Builders, Renovators & Realtors',
  description:
    'Ottawa real estate photography for builders (new construction, model and show homes), renovators (renovation portfolios), and realtors (listing photos, 4K video, aerial, twilight).',
  path: '/services',
  image: cloudinaryUrl(heroImages.services, 'f_auto,q_auto,w_1200'),
})
</script>
