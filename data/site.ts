export const site = {
  name: 'Urban Snap',
  legalName: 'Urban Snap Inc.',
  tagline: 'Real Estate Photography',
  domain: 'urbansnap.ca',
  url: 'https://urbansnap.ca',
  city: 'Ottawa',
  region: 'ON',
  regionName: 'Ontario',
  country: 'CA',
  locationLabel: 'Ottawa, Ontario',
  // Downtown Ottawa (Parliament Hill area). No street address is published.
  geo: { latitude: 45.4215, longitude: -75.6972 },
  serviceArea: [
    'Ottawa',
    'Kanata',
    'Orléans',
    'Barrhaven',
    'Nepean',
    'Gloucester',
    'Stittsville',
    'Riverside South',
    'Manotick',
    'Gatineau',
  ],
  phoneDisplay: '613-704-0004',
  phoneHref: 'tel:+16137040004',
  phoneE164: '+1-613-704-0004',
  email: 'letschat@urbansnap.ca',
  legalEmail: 'info@urbansnap.ca',
  whatsapp: 'https://wa.me/16137040004',
  foundedYear: 2018,
  web3formsKey: 'd1bc0811-4796-4f5a-956b-782094171a22',
  gtag: 'G-VTTPE9V8EC',
  cloudinary: {
    cloudName: 'ashish-verma-photography',
    baseUrl: 'https://res.cloudinary.com/ashish-verma-photography/image/upload',
  },
  logo: {
    mark: '/images/logo-house.png',
    wordmark: '/images/logo.png',
    square: '/images/logo-square.png',
    cloudinaryMark: '/v1712543352/company_logo/logo_house_ohkava.png',
    cloudinarySquare: '/v1712543351/company_logo/logo_transparent_square_ofmacj.png',
  },
  ogImage:
    'https://res.cloudinary.com/ashish-verma-photography/image/upload/f_auto,q_auto,w_1200/v1708666694/real_estate/ashish_verma_photography-208_e8ohsv.jpg',
  description:
    'Urban Snap is real estate photography for Ottawa builders, renovators, and realtors — new construction and model homes, renovation portfolios, and listing photos, video, aerial, and twilight across Ottawa and surrounding areas.',
} as const

export type SocialLink = {
  id: 'instagram' | 'youtube' | 'facebook'
  label: string
  /** Leave empty to show a non-clickable "Coming soon" placeholder. Add the profile URL to re-enable the link. */
  url: string
}

/** Social profiles are paused for now; entries with an empty url render as placeholders and are left out of JSON-LD. */
export const socials: SocialLink[] = [
  { id: 'instagram', label: 'Instagram', url: '' },
  { id: 'youtube', label: 'YouTube', url: '' },
  { id: 'facebook', label: 'Facebook', url: '' },
]

export const activeSocialUrls = socials.map((social) => social.url).filter(Boolean)

export const navLinks = [
  { label: 'Builders', to: '/builders' },
  { label: 'Renovators', to: '/renovators' },
  { label: 'Realtors', to: '/services#realtors' },
  { label: 'Areas', to: '/areas' },
  { label: 'Work', to: '/portfolio' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

export const footerServices = [
  { label: 'For Builders', to: '/builders' },
  { label: 'For Renovators', to: '/renovators' },
  { label: 'For Realtors', to: '/services#realtors' },
  { label: 'Real Estate Photography', to: '/services#photography' },
  { label: 'Video Tours', to: '/services#videography' },
  { label: 'Aerial Imaging', to: '/services#aerial' },
  { label: 'Twilight Photography', to: '/services#twilight' },
  { label: 'Commercial Photography', to: '/services#commercial' },
] as const

export const clientLogos = [
  { src: '/v1713166267/realty_logos/1_gkg3cv.png', alt: 'CBRE' },
  { src: '/v1713166284/realty_logos/2_per6qc.png', alt: 'Century 21' },
  { src: '/v1713166284/realty_logos/3_fbgjxg.png', alt: 'CIR Realty' },
  { src: '/v1713166284/realty_logos/4_yuuymd.png', alt: 'Coldwell Banker' },
  { src: '/v1713166285/realty_logos/5_dfwutr.png', alt: 'Engel & Völkers' },
  { src: '/v1713166286/realty_logos/6_euajiw.png', alt: "Sotheby's International Realty" },
  { src: '/v1713166286/realty_logos/7_bjw4b5.png', alt: 'MaxWell' },
] as const

/**
 * Service promises that are PENDING Ashish's numbers.
 * Any value still wrapped in {{…}} is a placeholder: the site renders the neutral `fallback`
 * text instead and never shows the raw token. Replace the `value` with the real wording
 * (e.g. 'Photos delivered next business day') to publish it everywhere at once.
 */
export const promises = {
  turnaround: {
    value: '{{TURNAROUND}}',
    fallback: 'Fast turnaround — we’ll confirm your delivery time when you book.',
  },
  videoTurnaround: {
    value: '{{VIDEO_TURNAROUND}}',
    fallback: 'Video, aerial, and twilight edits follow the photos — we’ll confirm timing when you book.',
  },
  reshoot: {
    value: '{{RESHOOT_POLICY}}',
    fallback: 'If something in your gallery isn’t right, tell us — we’ll walk you through revisions when you book.',
  },
} as const

export type PromiseKey = keyof typeof promises

export const isPlaceholder = (value: string | null | undefined) => !value || /\{\{[^}]+\}\}/.test(value)

/** Published wording for a promise, or its neutral fallback while the value is still a placeholder. */
export const promiseText = (key: PromiseKey) => {
  const entry = promises[key]
  return isPlaceholder(entry.value) ? entry.fallback : entry.value
}
