export type PriceValue = number | 'Call Us'

export type PricingTier = {
  id: string
  label: string
  shortLabel: string
  prices: {
    photography: PriceValue
    videography: PriceValue
    drone: PriceValue
    twilight: PriceValue
    basicPackage: PriceValue
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
      drone: 149,
      twilight: 99,
      basicPackage: 279,
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
      drone: 199,
      twilight: 149,
      basicPackage: 379,
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
      drone: 249,
      twilight: 249,
      basicPackage: 249,
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
      drone: 249,
      twilight: 349,
      basicPackage: 399,
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
      drone: 'Call Us',
      twilight: 'Call Us',
      basicPackage: 'Call Us',
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
    title: 'Video Tours',
    features: [
      '2–3 minute tour',
      '4K video',
      'HDR video available',
      'High resolution delivery',
      'No ads',
      'Professionally edited',
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
    bestFor: 'Realtor listings and finished renovations',
    highlight: false,
    includes: [
      { label: '25–30 HDR photos', included: true },
      { label: '2–3 min 4K video', included: true },
      { label: 'Social media slideshow', included: false },
      { label: 'Single-page website', included: false },
    ],
  },
  {
    key: 'ultimatePackage' as const,
    name: 'Ultimate',
    bestFor: 'Model homes, builder launches, and premium listings',
    highlight: true,
    includes: [
      { label: '25–30 HDR photos', included: true },
      { label: '2–3 min 4K video', included: true },
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
    'Charged only beyond 30 km of downtown Ottawa',
  ],
}
