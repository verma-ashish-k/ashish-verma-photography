<template>
  <div>
    <LocalNav title="Shoot prep" :links="sections.map((item) => ({ label: item.short, href: `#${item.id}` }))" />
    <PageHero
      eyebrow="Shoot prep guide"
      title="Ready for your close-up."
      lede="A little preparation makes a big difference in the photos. Use this checklist before the shoot — or share it with the homeowner or site team."
    />
    <section class="section pt-10 sm:pt-12">
      <div class="site-shell space-y-3">
        <Reveal v-for="item in sections" :key="item.id" variant="fade-up">
          <article :id="item.id" class="tile scroll-mt-32 p-6 sm:p-10">
            <p class="eyebrow">{{ item.eyebrow }}</p>
            <h2 class="headline-sm mt-2">{{ item.title }}</h2>
            <ul class="mt-6 grid gap-3 sm:grid-cols-2">
              <li v-for="tip in item.tips" :key="tip" class="flex gap-3 text-[15px] leading-relaxed text-fg sm:text-[17px]">
                <span class="text-[color:var(--link)]" aria-hidden="true">✓</span>{{ tip }}
              </li>
            </ul>
          </article>
        </Reveal>
      </div>
      <div class="site-shell mt-10 rounded-[18px] border border-line p-6 text-[15px] leading-relaxed text-fg-muted sm:p-8 sm:text-[17px]">
        <p><span class="font-semibold text-fg">On the day:</span> {{ turnaround }}</p>
        <p class="mt-3">
          Questions before the shoot? Message us on
          <a :href="site.whatsapp" target="_blank" rel="noreferrer" class="text-[color:var(--link)] underline">WhatsApp</a>
          or call <a :href="site.phoneHref" class="text-[color:var(--link)] underline">{{ site.phoneDisplay }}</a>.
        </p>
      </div>
    </section>
    <CtaBand />
  </div>
</template>

<script setup lang="ts">
import { promiseText } from '~/data/site'

const site = useSite()
const turnaround = promiseText('turnaround')

const sections = [
  {
    id: 'everyone',
    short: 'Every shoot',
    eyebrow: 'Every shoot',
    title: 'The essentials.',
    tips: [
      'Turn on every light, including lamps, under-cabinet, and exterior lights.',
      'Open blinds and curtains evenly in every room.',
      'Clear counters, tables, and bathroom vanities of everyday items.',
      'Hide bins, cords, chargers, remotes, and pet bowls.',
      'Move cars off the driveway and away from the front of the home.',
      'Make beds and straighten towels; remove bath mats.',
      'Replace burnt-out bulbs, ideally all with the same colour temperature.',
      'Share access details, alarm codes, pets, and parking in your booking notes.',
    ],
  },
  {
    id: 'builders',
    short: 'Builders',
    eyebrow: 'For builders',
    title: 'New construction and model homes.',
    tips: [
      'Book after the construction clean and window cleaning.',
      'Remove protective film, stickers, and tape from fixtures, appliances, and glass.',
      'Take signage, lockboxes, and construction materials out of exterior views where possible.',
      'Have staging and décor in place for model homes.',
      'Tell us which upgrades and finishes matter most to your sales team.',
      'If landscaping is not finished, we can photograph interiors first and return for exteriors.',
    ],
  },
  {
    id: 'renovators',
    short: 'Renovators',
    eyebrow: 'For renovators',
    title: 'Finished renovations.',
    tips: [
      'Book after the final clean, before the homeowner moves everything back in.',
      'Wipe fingerprints from stainless steel, glass, and glossy cabinetry.',
      'Install all hardware, cover plates, and light fixtures.',
      'Keep styling minimal: a bowl of fruit or a plant beats a busy counter.',
      'List the details you are proudest of so we give them extra time.',
    ],
  },
  {
    id: 'realtors',
    short: 'Listings',
    eyebrow: 'For listings',
    title: 'Getting a listing photo-ready.',
    tips: [
      'Declutter shelves and fridge doors; remove personal photos if the sellers prefer.',
      'Tidy the yard, sweep the entry, and put away hoses and toys.',
      'Clear snow from walkways and the driveway in winter.',
      'Plan for the homeowners and pets to be out during the shoot.',
      'Mention any rooms that should not be photographed.',
    ],
  },
]

useSeoPage({
  title: 'Shoot Prep Guide — Prepare for Real Estate Photography | Urban Snap',
  description:
    'How to prepare a new build, model home, renovation, or listing for real estate photography in Ottawa — checklists for builders, renovators, and realtors.',
  path: '/shoot-prep',
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to prepare a property for real estate photography',
  step: sections.flatMap((item) => item.tips.map((tip) => ({ '@type': 'HowToStep', name: item.title, text: tip }))),
})
useJsonLd(breadcrumbs([{ name: 'Home', path: '/' }, { name: 'Shoot prep', path: '/shoot-prep' }]))
</script>
