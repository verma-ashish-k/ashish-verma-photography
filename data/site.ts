export const site = {
  name: 'Urban Snap',
  legalName: 'Urban Snap Inc.',
  tagline: 'Real Estate Photography Done Right',
  domain: 'urbansnap.ca',
  url: 'https://urbansnap.ca',
  city: 'Calgary',
  region: 'AB',
  country: 'CA',
  locationLabel: 'Calgary, Alberta',
  phoneDisplay: '403-994-SNAP (7627)',
  phoneHref: 'tel:+14039947627',
  email: 'letschat@urbansnap.ca',
  legalEmail: 'info@urbansnap.ca',
  whatsapp: 'https://wa.me/message/JIDTIORNF7ZSG1',
  foundedYear: 2018,
  social: {
    instagram: 'https://www.instagram.com/urban_snap_yyc/',
    facebook: 'https://www.facebook.com/urbansnap.ca',
    youtube: 'https://www.youtube.com/@Urban_Snap',
  },
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
    'Urban Snap is a Calgary real estate photography and videography studio. We create listing-ready photography, 4K video tours, iGuide floor plans, aerial imaging, twilight shoots, and professional headshots.',
} as const

export const navLinks = [
  { label: 'Work', to: '/portfolio' },
  { label: 'Services', to: '/services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

export const footerServices = [
  { label: 'Real Estate Photography', to: '/services#photography' },
  { label: 'Video Tours', to: '/services#videography' },
  { label: 'iGuide Floor Plans', to: '/services#iguide' },
  { label: 'Aerial Imaging', to: '/services#aerial' },
  { label: 'Virtual Tours', to: '/services#virtual-tours' },
  { label: 'Twilight Photography', to: '/services#twilight' },
  { label: 'Commercial Photography', to: '/services#commercial' },
  { label: 'Headshots', to: '/portfolio/headshots' },
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
