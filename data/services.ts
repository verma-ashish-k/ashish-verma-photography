export type ServiceItem = {
  id: string
  title: string
  summary: string
  description: string
  image: string
}

export type Audience = {
  id: 'builders' | 'renovators' | 'realtors'
  label: string
  headline: string
  subhead: string
  description: string
  points: string[]
  image: string
  cta: string
}

/**
 * Who Urban Snap shoots for, in order of priority: builders, then renovators, then realtors.
 * Every page that lists audiences should render them in this order.
 */
export const audiences: Audience[] = [
  {
    id: 'builders',
    label: 'For Builders',
    headline: 'New construction. Shown at its best.',
    subhead: 'Model homes, show homes, and finished builds photographed to sell the next phase.',
    description:
      'From a single custom home to a full model-home program, we photograph interiors, exteriors, and finishes so your sales team, website, and brochures all work from one consistent, high-resolution set.',
    points: [
      'Model and show homes',
      'Completed builds and spec homes',
      'Exteriors, streetscapes, and aerial context',
      'Twilight shoots for launch marketing',
    ],
    image: '/v1708666630/real_estate/ashish_verma_photography-101_nscqug.jpg',
    cta: 'Book a builder shoot',
  },
  {
    id: 'renovators',
    label: 'For Renovators',
    headline: 'Show the finished work.',
    subhead: 'Renovation photography that turns finished projects into your best sales tool.',
    description:
      'Clients hire renovators from their portfolio. We photograph the finished kitchen, bath, basement, or whole-home renovation so the craftsmanship and detail are obvious at a glance.',
    points: [
      'Detail shots that show the craftsmanship',
      'Kitchens, baths, basements, and whole homes',
      'Portfolio-ready files for web, social, and awards',
      'Video walkthroughs of finished projects',
    ],
    image: '/v1707335738/real_estate/MH-FS-2-resized_tk4qfk.jpg',
    cta: 'Book a renovation shoot',
  },
  {
    id: 'realtors',
    label: 'For Realtors',
    headline: 'Listings that stop the scroll.',
    subhead: 'MLS-ready photos, video tours, and aerials that help a listing compete.',
    description:
      'From downtown condos to family homes in the suburbs, we photograph listings with balanced HDR editing, straight verticals, and quick turnaround — sized for MLS, realtor websites, and social.',
    points: [
      'HDR listing photography',
      '4K video tours',
      'Licensed drone imaging',
      'Social slideshow and single-page listing site',
    ],
    image: '/v1708666682/real_estate/ashish_verma_photography-196_hb9ewt.jpg',
    cta: 'Book a listing shoot',
  },
]

/** Capabilities — what every audience can book. */
export const services: ServiceItem[] = [
  {
    id: 'photography',
    title: 'Real Estate Photography',
    summary: 'Bright, true-to-life HDR stills.',
    description:
      'Ultra-wide interiors and exteriors with balanced HDR editing and straight verticals, delivered in high resolution and MLS-optimized sizes.',
    image: '/v1708666678/real_estate/ashish_verma_photography-194_d2jqv0.jpg',
  },
  {
    id: 'videography',
    title: 'Video Tours',
    summary: 'Cinematic 4K walkthroughs.',
    description:
      '2–3 minute 4K property videos, edited without ads, for websites, social, and YouTube. HDR video available.',
    image: '/v1708666694/real_estate/ashish_verma_photography-208_e8ohsv.jpg',
  },
  {
    id: 'aerial',
    title: 'Aerial Imaging',
    summary: 'Licensed drone stills and video.',
    description:
      'Transport Canada licensed drone imaging that shows lot size, orientation, streetscape, and the neighbourhood around a build.',
    image: '/v1707701807/real_estate/TFM_OB-1_dqm8ol.jpg',
  },
  {
    id: 'twilight',
    title: 'Twilight Photography',
    summary: 'Warm glow. Serious curb appeal.',
    description:
      'A dedicated after-hours visit when interior lights, landscaping, and sky work together — ideal for model homes and premium listings.',
    image: '/v1708666662/real_estate/ashish_verma_photography-172_ycvwt5.jpg',
  },
  {
    id: 'commercial',
    title: 'Commercial Photography',
    summary: 'Offices, retail, and mixed-use.',
    description:
      'Leasing, hospitality, and mixed-use spaces photographed with the same attention to line, light, and finish. Contact us for commercial pricing.',
    image: '/v1708666685/real_estate/ashish_verma_photography-202_bmdyh9.jpg',
  },
  {
    id: 'marketing',
    title: 'Listing Marketing',
    summary: 'Put the visuals to work.',
    description:
      'A social media slideshow and a single-page property website, included in the Ultimate package, give the photos and video a home beyond the MLS feed.',
    image: '/v1707352153/real_estate/T3E_6_of_25_-resized_t1lgkg.jpg',
  },
]

/** Headshots are a quiet add-on: not in the main nav or headline services. */
export const headshotAddOn = {
  title: 'Headshots',
  summary: 'Clean, confident headshots for sales teams, renovators, and realtors — booked alongside any shoot.',
  to: '/portfolio/headshots',
}
