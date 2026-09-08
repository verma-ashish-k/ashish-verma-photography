export type PriceValue = number | 'Call Us'

export type PricingTier = {
  id: string
  label: string
  shortLabel: string
  prices: {
    photography: PriceValue
    videography: PriceValue
    iguide: PriceValue
    drone: PriceValue
    twilight: PriceValue
    basicPackage: PriceValue
    plusPackage: PriceValue
    ultimatePackage: PriceValue
  }
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'under-1000',
    label: 'Up to 1,000 sqft',
    shortLabel: '≤ 1,000',
    prices: {
      photography: 119,
      videography: 179,
      iguide: 149,
      drone: 149,
      twilight: 99,
      basicPackage: 279,
      plusPackage: 379,
      ultimatePackage: 499,
    },
  },
  {
    id: '1000-2500',
    label: '1,000 to 2,500 sqft',
    shortLabel: '1–2.5k',
    prices: {
      photography: 159,
      videography: 199,
      iguide: 249,
      drone: 199,
      twilight: 149,
      basicPackage: 379,
      plusPackage: 549,
      ultimatePackage: 599,
    },
  },
  {
    id: '2500-4000',
    label: '2,500 to 4,000 sqft',
    shortLabel: '2.5–4k',
    prices: {
      photography: 199,
      videography: 249,
      iguide: 299,
      drone: 249,
      twilight: 249,
      basicPackage: 249,
      plusPackage: 349,
      ultimatePackage: 599,
    },
  },
  {
    id: '4000-7500',
    label: '4,000 to 7,500 sqft',
    shortLabel: '4–7.5k',
    prices: {
      photography: 249,
      videography: 349,
      iguide: 349,
      drone: 249,
      twilight: 349,
      basicPackage: 399,
      plusPackage: 549,
      ultimatePackage: 649,
    },
  },
  {
    id: 'above-7500',
    label: 'Above 7,500 sqft',
    shortLabel: '7.5k+',
    prices: {
      photography: 'Call Us',
      videography: 'Call Us',
      iguide: 'Call Us',
      drone: 'Call Us',
      twilight: 'Call Us',
      basicPackage: 'Call Us',
      plusPackage: 'Call Us',
      ultimatePackage: 'Call Us',
    },
  },
]

export const aLaCarteItems = [
  {
    key: 'photography' as const,
    title: 'Real Estate Photography',
    features: [
      '20–30 photos',
      'HDR editing',
      'Ultra-wide interiors',
      'High resolution delivery',
      'MLS-optimized files',
      'Professionally edited',
    ],
  },
  {
    key: 'videography' as const,
    title: 'Real Estate Videography',
    features: [
      '2–3 minute tour',
      '4K video',
      'HDR video available',
      'High resolution delivery',
      'No ads',
      'Professionally edited',
    ],
  },
  {
    key: 'iguide' as const,
    title: 'iGuide',
    features: [
      'Interactive 3D walkthrough',
      'Measured floor plans',
      'Shareable listing link',
      'MLS-ready assets',
      'Room-by-room navigation',
      'Desktop and mobile viewing',
    ],
  },
]

export const addOnItems = [
  {
    key: 'drone' as const,
    title: 'Aerial / Drone Imaging',
    features: [
      '4K quality',
      'Transport Canada licensed',
      'HDR video available',
      'High resolution stills',
      'Images and video',
      'Professionally edited',
    ],
  },
  {
    key: 'twilight' as const,
    title: 'Twilight Shoot',
    features: [
      'Dedicated after-hours visit',
      'Best for luxury marketing',
      'HDR video available',
      'High resolution delivery',
      'Images and video',
      'Professionally edited',
    ],
  },
]

export const packages = [
  {
    key: 'basicPackage' as const,
    name: 'Basic',
    highlight: false,
    includes: [
      { label: '25–30 HDR photos', included: true },
      { label: '2–3 min 4K video', included: true },
      { label: 'iGuide', included: false },
      { label: 'Social media slideshow', included: false },
      { label: 'Single-page website', included: false },
    ],
  },
  {
    key: 'plusPackage' as const,
    name: 'Plus',
    highlight: true,
    includes: [
      { label: '25–30 HDR photos', included: true },
      { label: '2–3 min 4K video', included: true },
      { label: 'iGuide', included: true },
      { label: 'Social media slideshow', included: false },
      { label: 'Single-page website', included: false },
    ],
  },
  {
    key: 'ultimatePackage' as const,
    name: 'Ultimate',
    highlight: false,
    includes: [
      { label: '25–30 HDR photos', included: true },
      { label: '2–3 min 4K video', included: true },
      { label: 'iGuide', included: true },
      { label: 'Social media slideshow', included: true },
      { label: 'Single-page website', included: true },
    ],
  },
]

export const travelFees = {
  title: 'Travel Fees',
  rate: 'Charged at $0.70 / km',
  notes: [
    'Calculated both ways',
    'Charged outside of Calgary city limits',
  ],
}
