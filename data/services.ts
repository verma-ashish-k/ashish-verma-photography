export type ServiceItem = {
  id: string
  title: string
  summary: string
  description: string
  icon: string
  image: string
}

export const services: ServiceItem[] = [
  {
    id: 'photography',
    title: 'Real Estate Photography',
    summary: 'Listing-ready HDR stills that make every room feel open, bright, and true to the property.',
    description:
      'From downtown condos to suburban homes, we photograph interiors and exteriors with ultra-wide composition, balanced HDR editing, and MLS-optimized delivery so your listing looks sharp on every portal.',
    icon: 'camera',
    image: '/v1708666682/real_estate/ashish_verma_photography-196_hb9ewt.jpg',
  },
  {
    id: 'videography',
    title: 'Videography',
    summary: 'Cinematic 4K walkthroughs that help buyers feel the flow of a home before they book a showing.',
    description:
      'Our 2–3 minute property videos are shot in 4K, edited without ads, and built for realtor websites, social posts, and YouTube. HDR video is available when the listing needs extra atmosphere.',
    icon: 'video',
    image: '/v1708666694/real_estate/ashish_verma_photography-208_e8ohsv.jpg',
  },
  {
    id: 'iguide',
    title: 'iGuide Floor Plans',
    summary: 'Interactive 3D tours with measured floor plans buyers can explore on any device.',
    description:
      'iGuide combines a shareable walkthrough with accurate floor plans so remote buyers understand scale, layout, and how rooms connect. It is one of the fastest ways to reduce unnecessary showings.',
    icon: 'plan',
    image: '/v1707337372/real_estate/T3E-16-resized_ibwjun.jpg',
  },
  {
    id: 'aerial',
    title: 'Aerial Imaging',
    summary: 'Licensed drone stills and video that show lot size, orientation, and the surrounding neighbourhood.',
    description:
      'Urban Snap flies Transport Canada licensed drone missions for listing stills and 4K aerial video. It is especially useful for larger lots, infill, and properties where the setting is part of the story.',
    icon: 'drone',
    image: '/v1708666630/real_estate/ashish_verma_photography-101_nscqug.jpg',
  },
  {
    id: 'virtual-tours',
    title: 'Virtual Tours',
    summary: 'Immersive online tours that keep a listing working around the clock.',
    description:
      'Pair photography with an interactive tour so out-of-town buyers, relocating families, and busy locals can walk the property on their own time and arrive at showings already interested.',
    icon: 'tour',
    image: '/v1708666678/real_estate/ashish_verma_photography-194_d2jqv0.jpg',
  },
  {
    id: 'twilight',
    title: 'Twilight Photography',
    summary: 'After-hours exteriors for luxury listings that need warmth, glow, and curb appeal.',
    description:
      'A dedicated twilight visit captures the house when interior lights, landscaping, and sky color work together. It is one of the strongest add-ons for premium and architectural properties.',
    icon: 'twilight',
    image: '/v1708666662/real_estate/ashish_verma_photography-172_ycvwt5.jpg',
  },
  {
    id: 'commercial',
    title: 'Commercial Photography',
    summary: 'Spaces built for leasing, hospitality, and business marketing — not just residential MLS.',
    description:
      'We photograph offices, retail, hospitality, and mixed-use spaces with the same attention to line, light, and finish. Contact us for commercial real estate pricing tailored to the property.',
    icon: 'building',
    image: '/v1708666685/real_estate/ashish_verma_photography-202_bmdyh9.jpg',
  },
  {
    id: 'headshots',
    title: 'Portrait Photography',
    summary: 'Clean, confident realtor and team headshots for portals, social, and personal branding.',
    description:
      'Professional portraits help your listing brand feel consistent from the first photo to the agent card. We shoot on location or in a simple setup that stays current across MLS and social channels.',
    icon: 'portrait',
    image: '/v1707770470/head_shots/ashish_verma_photography-294_mzoczz.jpg',
  },
  {
    id: 'marketing',
    title: 'Listing Marketing',
    summary: 'Social slideshows and single-page listing sites that put the visuals to work after the shoot.',
    description:
      'The Ultimate package includes a social media slideshow and a single-page property website so the photography, video, and iGuide have a home beyond the MLS feed.',
    icon: 'megaphone',
    image: '/v1707352153/real_estate/T3E_6_of_25_-resized_t1lgkg.jpg',
  },
]
