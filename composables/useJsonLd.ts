import { site } from '~/data/site'

/** Inject a JSON-LD block into <head>. */
export const useJsonLd = (data: Record<string, unknown> | (() => Record<string, unknown>)) => {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(typeof data === 'function' ? data() : data),
      },
    ],
  })
}

/** Reference to the site-wide business entity (declared in layouts/default.vue). */
export const businessRef = () => ({
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${site.url}/#business`,
  name: site.name,
  url: site.url,
  telephone: site.phoneE164,
  email: site.email,
  image: `${site.cloudinary.baseUrl}${site.logo.cloudinarySquare}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: site.country,
  },
})

export const breadcrumbs = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${site.url}${item.path}`,
  })),
})
