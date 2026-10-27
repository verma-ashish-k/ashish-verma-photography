<template>
  <div v-if="area">
    <LocalNav
      :title="area.name"
      :links="[
        { label: 'Builders', href: '#builders' },
        { label: 'Renovators', href: '#renovators' },
        { label: 'Realtors', href: '#realtors' },
        { label: 'Shoot notes', href: '#notes' },
      ]"
      :cta-to="bookLink"
    />
    <PageHero
      :eyebrow="`${area.name} real estate photography`"
      :title="area.headline"
      :lede="area.intro"
      :image="area.image"
      :image-alt="`Real estate photography in ${area.name}`"
    >
      <p v-if="area.introFr" lang="fr" class="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-fg-muted">{{ area.introFr }}</p>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <NuxtLink :to="bookLink" class="btn-primary">Book in {{ area.name }}</NuxtLink>
        <NuxtLink to="/pricing" class="link-more">See pricing</NuxtLink>
      </div>
    </PageHero>

    <section class="section bg-[color:var(--page-alt)]">
      <div class="site-shell grid gap-10 md:grid-cols-2">
        <Reveal variant="fade-up">
          <p class="eyebrow">Homes in {{ area.name }}</p>
          <h2 class="headline-sm mt-2">What we photograph here.</h2>
          <p class="body-copy mt-4">{{ area.homes }}</p>
        </Reveal>
        <Reveal variant="fade-up">
          <h3 class="text-[17px] font-semibold text-fg">Neighbourhoods we shoot in</h3>
          <ul class="mt-4 flex flex-wrap gap-2" :aria-label="`Neighbourhoods in ${area.name}`">
            <li v-for="place in area.neighbourhoods" :key="place" class="chip">{{ place }}</li>
          </ul>
        </Reveal>
      </div>
    </section>

    <section class="space-y-3 py-12 sm:py-16">
      <div v-for="(block, index) in blocks" :id="block.id" :key="block.id" class="wide-shell scroll-mt-28">
        <article class="tile grid gap-6 p-6 sm:p-10 md:grid-cols-[1fr_1.4fr] md:gap-12 lg:p-14">
          <Reveal variant="fade-up">
            <p class="eyebrow">{{ index + 1 }}. {{ block.label }}</p>
            <h2 class="headline-sm mt-2">{{ block.title }}</h2>
          </Reveal>
          <Reveal variant="fade-up">
            <p class="body-copy">{{ block.text }}</p>
            <div class="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <NuxtLink :to="block.to" class="link-more !text-[17px]">{{ block.linkLabel }}</NuxtLink>
              <NuxtLink :to="{ path: '/contact', query: { audience: block.audience, area: area.slug } }" class="link-more !text-[17px]">
                Book a {{ block.audience }} shoot
              </NuxtLink>
            </div>
          </Reveal>
        </article>
      </div>
    </section>

    <section id="notes" class="section scroll-mt-28 bg-[color:var(--page-alt)]">
      <div class="site-shell">
        <Reveal variant="fade-up">
          <h2 class="headline text-center">Shooting in {{ area.name }}.</h2>
          <p class="lede mt-4 text-center">A few things that help the day go smoothly.</p>
        </Reveal>
        <ul class="mx-auto mt-10 max-w-3xl space-y-4">
          <li v-for="note in area.shootNotes" :key="note" class="flex gap-4 rounded-[18px] bg-[color:var(--card)] p-5 text-[15px] leading-relaxed text-fg sm:text-[17px]">
            <span class="text-[color:var(--link)]" aria-hidden="true">✓</span>{{ note }}
          </li>
        </ul>
        <p class="mt-8 text-center">
          <NuxtLink to="/shoot-prep" class="link-more">Full shoot prep guide</NuxtLink>
        </p>
      </div>
    </section>

    <section class="section">
      <div class="site-shell text-center">
        <h2 class="headline-sm">Nearby communities.</h2>
        <ul class="mt-6 flex flex-wrap justify-center gap-2" aria-label="Nearby communities">
          <li v-for="item in nearby" :key="item.slug">
            <NuxtLink :to="`/areas/${item.slug}`" class="chip hover:border-[color:var(--link)] hover:text-[color:var(--link)]">{{ item.name }}</NuxtLink>
          </li>
          <li><NuxtLink to="/areas" class="chip hover:border-[color:var(--link)] hover:text-[color:var(--link)]">All areas</NuxtLink></li>
        </ul>
      </div>
    </section>

    <CtaBand :title="`Shooting in ${area.name}?`" />
  </div>
</template>

<script setup lang="ts">
import { areaBySlug, areas } from '~/data/areas'

const route = useRoute()
const site = useSite()
const area = areaBySlug(String(route.params.slug))

if (!area) {
  throw createError({ statusCode: 404, statusMessage: 'Area not found', fatal: true })
}

const bookLink = { path: '/contact', query: { area: area.slug } }
const nearby = area.nearby.map((slug) => areas.find((item) => item.slug === slug)).filter((item) => !!item)

const blocks = [
  { id: 'builders', label: 'Builders', title: `New construction in ${area.name}.`, text: area.builders, to: '/builders', linkLabel: 'Photography for builders', audience: 'builder' },
  { id: 'renovators', label: 'Renovators', title: `Renovations in ${area.name}.`, text: area.renovators, to: '/renovators', linkLabel: 'Photography for renovators', audience: 'renovator' },
  { id: 'realtors', label: 'Realtors', title: `Listings in ${area.name}.`, text: area.realtors, to: '/services#realtors', linkLabel: 'Photography for realtors', audience: 'realtor' },
]

useSeoPage({
  title: area.title,
  description: area.description,
  path: `/areas/${area.slug}`,
  image: cloudinaryUrl(area.image, 'f_auto,q_auto,w_1200'),
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: `Real estate photography in ${area.name}`,
  serviceType: 'Real estate photography',
  description: area.description,
  url: `${site.url}/areas/${area.slug}`,
  provider: businessRef(),
  areaServed: {
    '@type': 'City',
    name: area.name,
    containedInPlace: { '@type': 'AdministrativeArea', name: area.slug === 'gatineau' ? 'Quebec' : 'Ontario' },
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: `Photography services in ${area.name}`,
    itemListElement: ['New construction photography', 'Renovation photography', 'Listing photography', '4K video tours', 'Aerial imaging', 'Twilight photography'].map(
      (name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } }),
    ),
  },
})
useJsonLd(
  breadcrumbs([
    { name: 'Home', path: '/' },
    { name: 'Areas', path: '/areas' },
    { name: area.name, path: `/areas/${area.slug}` },
  ]),
)
</script>
