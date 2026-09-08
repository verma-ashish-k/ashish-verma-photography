<template>
  <footer class="bg-ink-950 text-white">
    <div class="site-shell grid gap-14 py-20 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <BrandMark light />
        <p class="mt-6 max-w-xs text-[15px] leading-relaxed text-white/55">
          Elevate Calgary real estate listings with photography, videography, and iGuide tours tailored to the city’s
          market — from downtown condos to suburban homes.
        </p>
      </div>

      <div>
        <h2 class="text-[12px] font-medium uppercase tracking-[0.2em] text-white/40">Say hello</h2>
        <div class="mt-5 space-y-3 text-[15px]">
          <a :href="`mailto:${site.email}`" class="block text-white/70 transition hover:text-white">
            {{ site.email }}
          </a>
          <a :href="site.phoneHref" class="block text-white/70 transition hover:text-white">
            {{ site.phoneDisplay }}
          </a>
          <p class="text-white/45">{{ site.locationLabel }}</p>
        </div>
        <div class="mt-6 flex gap-5 text-[13px] font-medium tracking-wide">
          <a :href="site.social.instagram" target="_blank" rel="noreferrer" class="text-white/55 hover:text-white">Instagram</a>
          <a :href="site.social.facebook" target="_blank" rel="noreferrer" class="text-white/55 hover:text-white">Facebook</a>
          <a :href="site.social.youtube" target="_blank" rel="noreferrer" class="text-white/55 hover:text-white">YouTube</a>
        </div>
      </div>

      <div>
        <h2 class="text-[12px] font-medium uppercase tracking-[0.2em] text-white/40">Services</h2>
        <ul class="mt-5 space-y-2.5 text-[15px]">
          <li v-for="item in footerServices" :key="item.to">
            <NuxtLink :to="item.to" class="text-white/65 transition hover:text-white">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="text-[12px] font-medium uppercase tracking-[0.2em] text-white/40">Studio</h2>
        <ul class="mt-5 space-y-2.5 text-[15px]">
          <li><NuxtLink to="/about" class="text-white/65 hover:text-white">About</NuxtLink></li>
          <li><NuxtLink to="/portfolio" class="text-white/65 hover:text-white">Portfolio</NuxtLink></li>
          <li><NuxtLink to="/pricing" class="text-white/65 hover:text-white">Pricing</NuxtLink></li>
          <li><NuxtLink to="/contact" class="text-white/65 hover:text-white">Contact</NuxtLink></li>
        </ul>
        <h2 class="mt-10 text-[12px] font-medium uppercase tracking-[0.2em] text-white/40">Policies</h2>
        <ul class="mt-5 space-y-2.5 text-[15px]">
          <li><NuxtLink to="/terms" class="text-white/65 hover:text-white">Terms & Conditions</NuxtLink></li>
          <li><NuxtLink to="/legal" class="text-white/65 hover:text-white">Legal</NuxtLink></li>
          <li><NuxtLink to="/privacy" class="text-white/65 hover:text-white">Cookie / Privacy Policy</NuxtLink></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <p class="site-shell py-6 text-center text-[12px] tracking-wide text-white/35">
        © {{ site.foundedYear }}–{{ new Date().getFullYear() }} {{ site.legalName }}. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { footerServices } from '~/data/site'

const site = useSite()
</script>
