<template>
  <div>
    <LocalNav
      title="Builders"
      :links="[
        { label: 'What we shoot', href: '#coverage' },
        { label: 'Builder pricing', href: '#builder-pricing' },
        { label: 'How it works', href: '#process' },
        { label: 'FAQ', href: '#faq' },
      ]"
      cta="Request a quote"
      :cta-to="quoteLink"
    />
    <PageHero
      eyebrow="For Builders"
      title="New construction. Shown at its best."
      lede="Model homes, spec homes, and finished phases across Ottawa — photographed to one consistent look your sales team, website, and brochures can share."
      :image="heroImage"
      image-alt="Bright, finished new-home living space photographed by Urban Snap"
    >
      <div class="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <NuxtLink :to="quoteLink" class="btn-primary">Request a builder quote</NuxtLink>
        <NuxtLink to="/portfolio" class="link-more">See the work</NuxtLink>
      </div>
    </PageHero>

    <section id="coverage" class="section scroll-mt-28 bg-[color:var(--page-alt)]">
      <div class="site-shell text-center">
        <Reveal variant="fade-up">
          <h2 class="headline">Everything a launch needs.</h2>
          <p class="lede mt-4">From the first model to the last home in the phase.</p>
        </Reveal>
      </div>
      <FeatureTiles :items="coverage" />
    </section>

    <section class="section">
      <div class="site-shell grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <Reveal variant="zoom-in">
          <div class="zoom-hover overflow-hidden rounded-[18px]">
            <CldImg :src="libraryImage" alt="Bright finished kitchen in a new home" class="aspect-[4/3] w-full object-cover" :widths="[640, 1000, 1400]" sizes="(max-width: 768px) 100vw, 480px" />
          </div>
        </Reveal>
        <Reveal variant="fade-up">
          <p class="eyebrow">One library</p>
          <h2 class="headline-sm mt-2">Every model. One look.</h2>
          <p class="body-copy mt-4">
            Buyers compare your models side by side. We photograph each one with the same framing, colour, and editing,
            so your website, sales centre screens, signage, and print feel like one brand — and we can come back as new
            models and phases open.
          </p>
          <ul class="mt-6 space-y-2 text-[15px] text-fg">
            <li v-for="point in libraryPoints" :key="point" class="flex gap-3">
              <span class="text-[color:var(--link)]" aria-hidden="true">✓</span>{{ point }}
            </li>
          </ul>
        </Reveal>
      </div>
    </section>

    <section id="builder-pricing" class="section scroll-mt-28 bg-[color:var(--page-alt)]">
      <div class="site-shell text-center">
        <Reveal variant="fade-up">
          <p class="eyebrow">Builder pricing</p>
          <h2 class="headline mt-2">Priced to the project.</h2>
          <p class="lede mt-4">Single homes, model homes, and whole phases. Tell us the scope and we’ll prepare a builder quote.</p>
        </Reveal>
      </div>
      <div class="wide-shell mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal v-for="(line, index) in builderPricing" :key="line.key" :delay="index * 80" variant="zoom-in">
          <article class="flex h-full flex-col rounded-[18px] bg-[color:var(--card)] p-6 sm:p-7" :data-price-key="line.key">
            <h3 class="headline-xs">{{ line.title }}</h3>
            <p class="mt-3 flex-1 text-[15px] leading-relaxed text-fg-muted">{{ line.detail }}</p>
            <p v-if="typeof line.price === 'number'" class="mt-6 text-[28px] font-semibold text-fg">{{ builderPriceLabel(line) }}</p>
            <NuxtLink v-else :to="quoteLink" class="link-more mt-6 !text-[17px]">{{ builderPriceLabel(line) }}</NuxtLink>
          </article>
        </Reveal>
      </div>
      <p class="site-shell mt-8 text-center text-[14px] text-fg-muted">
        Listing a finished home through a realtor instead?
        <NuxtLink to="/pricing" class="text-[color:var(--link)] hover:underline">See size-based pricing</NuxtLink>.
      </p>
    </section>

    <section id="process" class="section scroll-mt-28">
      <div class="site-shell text-center">
        <Reveal variant="fade-up">
          <h2 class="headline">How it works.</h2>
          <p class="lede mt-4">Planned around your construction schedule, not ours.</p>
        </Reveal>
      </div>
      <div class="wide-shell">
        <ProcessSteps :steps="process" />
      </div>
    </section>

    <section id="faq" class="section scroll-mt-28 bg-[color:var(--page-alt)]">
      <div class="site-shell">
        <Reveal variant="fade-up">
          <h2 class="headline text-center">Builder questions.</h2>
        </Reveal>
        <div class="mt-10">
          <FaqList :items="builderFaq" />
        </div>
        <p class="mt-8 text-center">
          <NuxtLink to="/faq" class="link-more">All frequently asked questions</NuxtLink>
        </p>
      </div>
    </section>

    <section class="section">
      <div class="site-shell text-center">
        <h2 class="headline-sm">New construction across Ottawa.</h2>
        <ul class="mt-6 flex flex-wrap justify-center gap-2" aria-label="Builder communities">
          <li v-for="area in builderAreas" :key="area.slug">
            <NuxtLink :to="`/areas/${area.slug}`" class="chip hover:border-[color:var(--link)] hover:text-[color:var(--link)]">{{ area.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <CtaBand cta="Request a builder quote" title="Launching a model or a phase?" />
  </div>
</template>

<script setup lang="ts">
import { builderPricing, builderPriceLabel } from '~/data/pricing'
import { areas } from '~/data/areas'
import { promiseText } from '~/data/site'

const site = useSite()
const heroImage = '/v1708666630/real_estate/ashish_verma_photography-101_nscqug.jpg'
const libraryImage = '/v1708666678/real_estate/ashish_verma_photography-194_d2jqv0.jpg'
const quoteLink = { path: '/contact', query: { audience: 'builder', services: 'builder-program' } }

const coverage = [
  { title: 'Model and show homes', text: 'Styled rooms, hero exteriors, and the finish details buyers ask about — ready for the sales centre and website.', image: '/v1707335738/real_estate/MH-FS-2-resized_tk4qfk.jpg', alt: 'Model home living room with fireplace' },
  { title: 'Completed and spec homes', text: 'Every finished home photographed to the same standard, so inventory homes look as good as the model.', image: '/v1707335738/real_estate/MH-FS-1-resized_sn5fkw.jpg', alt: 'Front elevation of a completed home' },
  { title: 'Finishes and details', text: 'Cabinetry, tile, millwork, fixtures, and feature walls — the upgrades that set your homes apart.', image: '/v1707337333/real_estate/MH-FS-12-resized_pxvwrx.jpg', alt: 'Luxury bathroom finish detail' },
  { title: 'Streetscapes and aerials', text: 'Transport Canada licensed drone imaging of lots, streets, parks, and the community as it takes shape.', image: '/v1707701807/real_estate/TFM_OB-1_dqm8ol.jpg', alt: 'Aerial view of a suburban property' },
  { title: 'Launch twilight', text: 'A dedicated after-hours visit for signage, ads, and launch creative when the lights are on.', image: '/v1708666662/real_estate/ashish_verma_photography-172_ycvwt5.jpg', alt: 'Home exterior at dusk' },
  { title: 'Video walkthroughs', text: '2–3 minute 4K tours of a model or finished home for your website, social, and YouTube.', image: '/v1708666694/real_estate/ashish_verma_photography-208_e8ohsv.jpg', alt: 'Wide architectural living space' },
]

const libraryPoints = [
  'Consistent framing and editing across models and phases',
  'High-resolution files for print and signage, plus web sizes',
  'Return visits as new models and phases open',
  'Headshots for your sales team, added to any shoot',
]

const process = [
  { title: 'Tell us the project', text: 'Homes, models, or phase, the community, and when each home will be photo-ready.' },
  { title: 'We plan the shot list', text: 'Rooms, finishes, exteriors, aerials, and twilight — planned around your schedule and marketing needs.' },
  { title: 'Shoot day', text: 'We work around trades and sales-centre hours, and keep the site the way we found it.' },
  { title: 'Delivery', text: promiseText('turnaround') },
]

const builderFaq = [
  { q: 'Can you photograph several homes or a whole phase?', a: 'Yes. We can photograph several homes in one visit or return as homes finish, always to the same look so the set stays consistent.' },
  { q: 'When should we book?', a: 'Once the home is clean, landscaping is as complete as it will be for launch, and any staging is in place. If exteriors are not ready, we can photograph interiors first and return for exteriors and aerials.' },
  { q: 'How is builder pricing set?', a: 'Builder work is quoted to the scope: the number of homes or models, the coverage you need, and any aerial or twilight add-ons.' },
  { q: 'How fast is delivery?', a: promiseText('turnaround') },
]

const builderAreas = areas.filter((area) => ['barrhaven', 'kanata', 'orleans', 'stittsville', 'riverside-south', 'manotick', 'gloucester'].includes(area.slug))

useSeoPage({
  title: 'Builder Photography Ottawa — New Construction & Model Homes | Urban Snap',
  description:
    'New-construction photography for Ottawa builders: model and show homes, spec homes, finishes, streetscapes, aerials, and launch twilight — one consistent look for every phase.',
  path: '/builders',
  image: cloudinaryUrl(heroImage, 'f_auto,q_auto,w_1200'),
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'New construction and builder photography',
  serviceType: 'Real estate photography for home builders',
  description: 'Model home, spec home, finish detail, streetscape, aerial, and twilight photography for builders in Ottawa and surrounding areas.',
  url: `${site.url}/builders`,
  provider: businessRef(),
  areaServed: site.serviceArea.map((name) => ({ '@type': 'City', name })),
  audience: { '@type': 'BusinessAudience', name: 'Home builders and developers' },
})
useJsonLd(breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Builders', path: '/builders' }]))
</script>
