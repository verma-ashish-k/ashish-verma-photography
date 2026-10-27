<template>
  <div>
    <LocalNav title="FAQ" :links="groups.map((group) => ({ label: group.title, href: `#${group.id}` }))" />
    <PageHero eyebrow="FAQ" title="Questions, answered." lede="Booking, delivery, services, and pricing — for builders, renovators, and realtors." />
    <section class="section pt-10 sm:pt-12">
      <div class="site-shell space-y-14">
        <div v-for="group in groups" :id="group.id" :key="group.id" class="scroll-mt-32">
          <h2 class="headline-sm mb-6">{{ group.title }}</h2>
          <FaqList :items="group.items" />
        </div>
      </div>
    </section>
    <CtaBand title="Still have a question?" cta="Ask us" />
  </div>
</template>

<script setup lang="ts">
import { faqGroups } from '~/data/faq'

const groups = faqGroups()

useSeoPage({
  title: 'FAQ — Ottawa Real Estate Photography | Urban Snap',
  description:
    'Answers about booking, delivery, builder and renovation shoots, drone licensing, and pricing for Urban Snap real estate photography in Ottawa.',
  path: '/faq',
})

useJsonLd({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: groups.flatMap((group) =>
    group.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  ),
})
useJsonLd(breadcrumbs([{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }]))
</script>
