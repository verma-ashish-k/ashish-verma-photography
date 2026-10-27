<template>
  <div>
    <LocalNav
      title="Renovators"
      :links="[
        { label: 'What we shoot', href: '#coverage' },
        { label: 'Your portfolio', href: '#portfolio' },
        { label: 'How it works', href: '#process' },
        { label: 'FAQ', href: '#faq' },
      ]"
      cta="Book a shoot"
      :cta-to="bookLink"
    />
    <PageHero
      eyebrow="For Renovators"
      title="Show the finished work."
      lede="Clients hire renovators from their portfolio. We photograph finished kitchens, baths, basements, and whole homes so the craftsmanship is obvious at a glance."
      :image="heroImage"
      image-alt="Finished open living room with fireplace"
    >
      <div class="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        <NuxtLink :to="bookLink" class="btn-primary">Book a renovation shoot</NuxtLink>
        <NuxtLink to="/pricing" class="link-more">See pricing</NuxtLink>
      </div>
    </PageHero>

    <section id="coverage" class="section scroll-mt-28 bg-[color:var(--page-alt)]">
      <div class="site-shell text-center">
        <Reveal variant="fade-up">
          <h2 class="headline">The rooms you rebuilt.</h2>
          <p class="lede mt-4">Photographed the day the work is done, before life moves back in.</p>
        </Reveal>
      </div>
      <FeatureTiles :items="coverage" />
    </section>

    <section id="portfolio" class="section scroll-mt-28">
      <div class="site-shell grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <Reveal variant="fade-up" class="md:order-2">
          <div class="zoom-hover overflow-hidden rounded-[18px]">
            <CldImg :src="detailImage" alt="Kitchen island and cabinetry detail" class="aspect-[4/3] w-full object-cover" :widths="[640, 1000, 1400]" sizes="(max-width: 768px) 100vw, 480px" />
          </div>
        </Reveal>
        <Reveal variant="fade-up">
          <p class="eyebrow">Built for your portfolio</p>
          <h2 class="headline-sm mt-2">Your next client is looking.</h2>
          <p class="body-copy mt-4">
            One strong set of photos works everywhere you win work: your website, proposals, social, home shows, and
            award submissions. We shoot wide establishing views and close details — the joinery, tile lines, and
            hardware that prove the quality of the job.
          </p>
          <ul class="mt-6 space-y-2 text-[15px] text-fg">
            <li v-for="point in portfolioPoints" :key="point" class="flex gap-3">
              <span class="text-[color:var(--link)]" aria-hidden="true">✓</span>{{ point }}
            </li>
          </ul>
        </Reveal>
      </div>
    </section>

    <section id="process" class="section scroll-mt-28 bg-[color:var(--page-alt)]">
      <div class="site-shell text-center">
        <Reveal variant="fade-up">
          <h2 class="headline">How it works.</h2>
          <p class="lede mt-4">Easy for you, easy for your client.</p>
        </Reveal>
      </div>
      <div class="wide-shell">
        <ProcessSteps :steps="process" />
      </div>
      <p class="site-shell mt-8 text-center">
        <NuxtLink to="/shoot-prep" class="link-more">Read the shoot prep guide</NuxtLink>
      </p>
    </section>

    <section id="faq" class="section scroll-mt-28">
      <div class="site-shell">
        <Reveal variant="fade-up">
          <h2 class="headline text-center">Renovator questions.</h2>
        </Reveal>
        <div class="mt-10">
          <FaqList :items="renovatorFaq" />
        </div>
        <p class="mt-8 text-center">
          <NuxtLink to="/faq" class="link-more">All frequently asked questions</NuxtLink>
        </p>
      </div>
    </section>

    <section class="section bg-[color:var(--page-alt)]">
      <div class="site-shell text-center">
        <h2 class="headline-sm">Renovations across Ottawa.</h2>
        <ul class="mt-6 flex flex-wrap justify-center gap-2" aria-label="Renovation communities">
          <li v-for="area in areas" :key="area.slug">
            <NuxtLink :to="`/areas/${area.slug}`" class="chip hover:border-[color:var(--link)] hover:text-[color:var(--link)]">{{ area.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <CtaBand cta="Book a renovation shoot" title="Just finished a project?" plain />
  </div>
</template>

<script setup lang="ts">
import { areas } from '~/data/areas'
import { promiseText } from '~/data/site'

const site = useSite()
const heroImage = '/v1707335738/real_estate/MH-FS-2-resized_tk4qfk.jpg'
const detailImage = '/v1708666606/real_estate/ashish_verma_photography-82_srxeqm.jpg'
const bookLink = { path: '/contact', query: { audience: 'renovator', services: 'photography' } }

const coverage = [
  { title: 'Kitchens', text: 'Islands, cabinetry, counters, and lighting — wide views of the room and close-ups of the finish.', image: '/v1708666678/real_estate/ashish_verma_photography-194_d2jqv0.jpg', alt: 'Renovated kitchen interior' },
  { title: 'Bathrooms and ensuites', text: 'Tile work, glass, vanities, and fixtures photographed with straight lines and clean reflections.', image: '/v1707337334/real_estate/MH-FS-11-resized_zlwtl9.jpg', alt: 'Spa-inspired renovated bathroom' },
  { title: 'Basements', text: 'Finished lower levels lit to look like the living space they now are — rec rooms, bars, suites.', image: '/v1707332111/real_estate/T3E-27-resized_eh6zxd.jpg', alt: 'Finished lower-level living space' },
  { title: 'Whole-home renovations', text: 'Open plans and flow from room to room, so the scale of the project comes through.', image: '/v1707337372/real_estate/T3E-16-resized_ibwjun.jpg', alt: 'Sunlit renovated living room' },
  { title: 'Outdoor living', text: 'Decks, patios, and outdoor kitchens photographed at the time of day they look best.', image: '/v1707352181/real_estate/T3E-23-resized_gklw9o.jpg', alt: 'Patio and outdoor living space' },
  { title: 'Craftsmanship details', text: 'Joinery, trim, hardware, and tile lines — the close-ups that win the next job.', image: '/v1708666689/real_estate/ashish_verma_photography-200_h293bl.jpg', alt: 'Interior architectural detail' },
]

const portfolioPoints = [
  'Detail shots that show the craftsmanship',
  'Portfolio-ready files for web, social, proposals, and awards',
  'Video walkthroughs of finished projects',
  'Headshots for you and your team, added to any shoot',
]

const process = [
  { title: 'Book when it’s finished', text: 'After the final clean and before the homeowner moves everything back in is ideal.' },
  { title: 'Tell us the story', text: 'Which rooms changed and what you are proudest of, so we give them the most time.' },
  { title: 'Shoot day', text: 'We work around your client’s schedule and leave the home exactly as we found it.' },
  { title: 'Delivery', text: promiseText('turnaround') },
]

const renovatorFaq = [
  { q: 'Do I need to be at the shoot?', a: 'Not always. Many renovators arrange access with the homeowner. If you can be there, it helps to point out the details you want featured.' },
  { q: 'Can you photograph only the renovated rooms?', a: 'Yes. Renovation shoots focus on the finished spaces and details, priced by the size of the home on our pricing page.' },
  { q: 'Can I use the photos for award submissions?', a: 'Yes — tell us where you plan to use them, and we will deliver files sized for print and web.' },
  { q: 'How fast is delivery?', a: promiseText('turnaround') },
]

useSeoPage({
  title: 'Renovation Photography Ottawa — Portfolio Photos for Renovators | Urban Snap',
  description:
    'Ottawa renovation photography for contractors and renovators: finished kitchens, bathrooms, basements, whole-home renovations, outdoor living, and craftsmanship details.',
  path: '/renovators',
  image: cloudinaryUrl(heroImage, 'f_auto,q_auto,w_1200'),
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Renovation photography',
  serviceType: 'Portfolio photography for renovators and contractors',
  description: 'Photography of finished kitchens, bathrooms, basements, whole-home renovations, and outdoor living for renovators in Ottawa and surrounding areas.',
  url: `${site.url}/renovators`,
  provider: businessRef(),
  areaServed: site.serviceArea.map((name) => ({ '@type': 'City', name })),
  audience: { '@type': 'BusinessAudience', name: 'Renovators and contractors' },
})
useJsonLd(breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Renovators', path: '/renovators' }]))
</script>
