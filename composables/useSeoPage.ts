import { site } from '~/data/site'

type SeoOptions = {
  title: string
  description: string
  path: string
  image?: string
}

export const useSeoPage = ({ title, description, path, image }: SeoOptions) => {
  const url = `${site.url}${path}`
  const ogImage = image || site.ogImage

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage,
    ogUrl: url,
    ogType: 'website',
    ogSiteName: site.name,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
    robots: 'index, follow',
  })

  useHead({
    title,
    link: [{ rel: 'canonical', href: url }],
    htmlAttrs: { lang: 'en' },
  })
}
