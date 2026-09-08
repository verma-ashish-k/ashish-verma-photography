import { inject } from '@vercel/analytics'

const productionHosts = new Set(['urbansnap.ca', 'www.urbansnap.ca'])

export default defineNuxtPlugin(() => {
  if (!import.meta.client) return
  const host = window.location.hostname
  if (!productionHosts.has(host) && !host.endsWith('.vercel.app')) return
  inject()
})
