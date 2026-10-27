<template>
  <footer class="bg-[color:var(--page-alt)] text-[12px] leading-[1.33] text-fg-muted">
    <div class="site-shell py-10">
      <p class="border-b border-line pb-4">
        Urban Snap photographs new construction, renovations, and listings across Ottawa and surrounding areas,
        including {{ site.serviceArea.slice(1).join(', ') }}.
      </p>

      <div class="grid gap-8 py-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 class="font-semibold text-fg">Who we shoot for</h2>
          <ul class="mt-2 space-y-2">
            <li v-for="item in footerServices.slice(0, 3)" :key="item.to">
              <NuxtLink :to="item.to" class="hover:underline">{{ item.label }}</NuxtLink>
            </li>
          </ul>
          <h2 class="mt-6 font-semibold text-fg">Services</h2>
          <ul class="mt-2 space-y-2">
            <li v-for="item in footerServices.slice(3)" :key="item.to">
              <NuxtLink :to="item.to" class="hover:underline">{{ item.label }}</NuxtLink>
            </li>
            <li><NuxtLink to="/portfolio/headshots" class="hover:underline">Headshots (add-on)</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h2 class="font-semibold text-fg">Studio</h2>
          <ul class="mt-2 space-y-2">
            <li><NuxtLink to="/about" class="hover:underline">About</NuxtLink></li>
            <li><NuxtLink to="/portfolio" class="hover:underline">Work</NuxtLink></li>
            <li><NuxtLink to="/pricing" class="hover:underline">Pricing</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h2 class="font-semibold text-fg">Contact</h2>
          <ul class="mt-2 space-y-2">
            <li><a :href="site.phoneHref" class="hover:underline">{{ site.phoneDisplay }}</a></li>
            <li><a :href="`mailto:${site.email}`" class="hover:underline">{{ site.email }}</a></li>
            <li><a :href="site.whatsapp" target="_blank" rel="noreferrer" class="hover:underline">WhatsApp</a></li>
            <li>{{ site.locationLabel }}</li>
          </ul>
        </div>

        <div>
          <h2 class="font-semibold text-fg">Follow</h2>
          <SocialLinks class="mt-2" />
        </div>
      </div>

      <div class="flex flex-col gap-2 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright © {{ year }} {{ site.legalName }} All rights reserved.</p>
        <ul class="flex flex-wrap gap-x-4 gap-y-1">
          <li><NuxtLink to="/privacy" class="hover:underline">Privacy Policy</NuxtLink></li>
          <li><NuxtLink to="/terms" class="hover:underline">Terms &amp; Conditions</NuxtLink></li>
          <li><NuxtLink to="/legal" class="hover:underline">Legal</NuxtLink></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { footerServices } from '~/data/site'

const site = useSite()
const year = new Date().getFullYear()
</script>
