<template>
  <footer class="bg-ink-950 text-white">
    <div class="site-shell grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <BrandMark light />
        <p class="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
          Elevate Calgary real estate listings with photography, videography, and iGuide tours tailored to the city’s
          market — from downtown condos to suburban homes.
        </p>
      </div>

      <div>
        <h2 class="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Say hello</h2>
        <div class="mt-4 space-y-3 text-sm">
          <a :href="`mailto:${site.email}`" class="flex items-center gap-2 text-white/75 transition hover:text-white">
            {{ site.email }}
          </a>
          <a :href="site.phoneHref" class="flex items-center gap-2 text-white/75 transition hover:text-white">
            {{ site.phoneDisplay }}
          </a>
          <p class="text-white/55">{{ site.locationLabel }}</p>
        </div>
        <div class="mt-5 flex gap-3">
          <a :href="site.social.instagram" target="_blank" rel="noreferrer" class="text-sm text-white/70 hover:text-white">Instagram</a>
          <a :href="site.social.facebook" target="_blank" rel="noreferrer" class="text-sm text-white/70 hover:text-white">Facebook</a>
          <a :href="site.social.youtube" target="_blank" rel="noreferrer" class="text-sm text-white/70 hover:text-white">YouTube</a>
        </div>
      </div>

      <div>
        <h2 class="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Services</h2>
        <ul class="mt-4 space-y-2 text-sm">
          <li v-for="item in footerServices" :key="item.to">
            <NuxtLink :to="item.to" class="text-white/70 transition hover:text-white">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Studio</h2>
        <ul class="mt-4 space-y-2 text-sm">
          <li><NuxtLink to="/about" class="text-white/70 hover:text-white">About</NuxtLink></li>
          <li><NuxtLink to="/portfolio" class="text-white/70 hover:text-white">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/pricing" class="text-white/70 hover:text-white">Pricing</NuxtLink></li>
          <li><NuxtLink to="/contact" class="text-white/70 hover:text-white">Contact</NuxtLink></li>
        </ul>
        <h2 class="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Policies</h2>
        <ul class="mt-4 space-y-2 text-sm">
          <li><NuxtLink to="/terms" class="text-white/70 hover:text-white">Terms & Conditions</NuxtLink></li>
          <li><NuxtLink to="/legal" class="text-white/70 hover:text-white">Legal</NuxtLink></li>
          <li><NuxtLink to="/privacy" class="text-white/70 hover:text-white">Cookie / Privacy Policy</NuxtLink></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <p class="site-shell py-5 text-center text-xs text-white/45">
        © {{ site.foundedYear }}–{{ new Date().getFullYear() }} {{ site.legalName }}. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { footerServices } from '~/data/site'

const site = useSite()
</script>
