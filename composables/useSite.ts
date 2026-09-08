import { site } from '~/data/site'

export const useSite = () => site

export const cloudinaryUrl = (path: string, transform = 'f_auto,q_auto,w_1600') => {
  const clean = path.startsWith('/') ? path.slice(1) : path
  return `${site.cloudinary.baseUrl}/${transform}/${clean}`
}

export const formatPrice = (value: number | 'Call Us') =>
  typeof value === 'number' ? `$${value}` : value
