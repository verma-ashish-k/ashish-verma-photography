export type GalleryImage = {
  src: string
  alt: string
}

const unique = (items: GalleryImage[]) => {
  const seen = new Set<string>()
  return items.filter((item) => {
    if (seen.has(item.src)) return false
    seen.add(item.src)
    return true
  })
}

export const realEstateImages: GalleryImage[] = unique([
  { src: '/v1708666682/real_estate/ashish_verma_photography-196_hb9ewt.jpg', alt: 'Calgary living room with natural light' },
  { src: '/v1708666678/real_estate/ashish_verma_photography-194_d2jqv0.jpg', alt: 'Styled Calgary kitchen interior' },
  { src: '/v1708666671/real_estate/ashish_verma_photography-193_jemw4i.jpg', alt: 'Open-concept dining and living space' },
  { src: '/v1708666662/real_estate/ashish_verma_photography-172_ycvwt5.jpg', alt: 'Residential exterior elevation' },
  { src: '/v1708666653/real_estate/ashish_verma_photography-132_twjz4k.jpg', alt: 'Primary bedroom interior' },
  { src: '/v1708666649/real_estate/ashish_verma_photography-131_lxgoqt.jpg', alt: 'Bathroom interior photography' },
  { src: '/v1708666630/real_estate/ashish_verma_photography-101_nscqug.jpg', alt: 'Modern Calgary home exterior' },
  { src: '/v1708666626/real_estate/ashish_verma_photography-98_qfmhma.jpg', alt: 'Furnished living room listing photo' },
  { src: '/v1708666606/real_estate/ashish_verma_photography-82_srxeqm.jpg', alt: 'Kitchen island and cabinetry' },
  { src: '/v1707701807/real_estate/TFM_OB-1_dqm8ol.jpg', alt: 'Suburban Calgary property exterior' },
  { src: '/v1707352153/real_estate/T3E_6_of_25_-resized_t1lgkg.jpg', alt: 'Bright living space with large windows' },
  { src: '/v1707352138/real_estate/T3E_2_of_25_-resized_aeidav.jpg', alt: 'Interior hallway and architectural detail' },
  { src: '/v1707342331/real_estate/T3E-10-resized_itqv8q.jpg', alt: 'Dining room listing photograph' },
  { src: '/v1707342330/real_estate/T3E-12-resized_lvouwj.jpg', alt: 'Home office interior' },
  { src: '/v1707337402/real_estate/IMG_6499-resized_oe7ewr.jpg', alt: 'Calgary property backyard' },
  { src: '/v1707337386/real_estate/T3E-26-resized_wcnbkg.jpg', alt: 'Ensuite bathroom photography' },
  { src: '/v1707337397/real_estate/IMG_6494-resized_xyxwxl.jpg', alt: 'Residential street frontage' },
  { src: '/v1707337377/real_estate/T3E-17-resized_dmdf0b.jpg', alt: 'Family room interior' },
  { src: '/v1707337355/real_estate/T3E-2-resized_qa8grs.jpg', alt: 'Kitchen and living area' },
  { src: '/v1707337353/real_estate/T3E-1-resized_ifqih1.jpg', alt: 'Entry and living space' },
  { src: '/v1707332111/real_estate/T3E-27-resized_eh6zxd.jpg', alt: 'Finished lower-level living space' },
  { src: '/v1707337333/real_estate/MH-FS-12-resized_pxvwrx.jpg', alt: 'Luxury bathroom interior' },
  { src: '/v1707335738/real_estate/MH-FS-5-resized_jyvaap.jpg', alt: 'Primary suite photography' },
  { src: '/v1707335738/real_estate/MH-FS-2-resized_tk4qfk.jpg', alt: 'Open living room with fireplace' },
  { src: '/v1707337415/real_estate/T3E_6751-resized_ghdynb.jpg', alt: 'Calgary home exterior twilight-ready facade' },
  { src: '/v1707701802/real_estate/TFM_OB-3_akiyoo.jpg', alt: 'Property exterior and landscaping' },
  { src: '/v1707701795/real_estate/T3E-19_zzjc1a.jpg', alt: 'Bedroom interior listing photo' },
  { src: '/v1707332113/real_estate/T3E-29-resized_uzdcem.jpg', alt: 'Recreation room interior' },
  { src: '/v1707332121/real_estate/living_room_1-resized_ln86f2.jpg', alt: 'Staged living room photography' },
  { src: '/v1707332122/real_estate/T3E-17-resized_ziyjhb.jpg', alt: 'Great room interior' },
  { src: '/v1707332123/real_estate/T3E-18-resized_amxvdd.jpg', alt: 'Kitchen detail photography' },
  { src: '/v1707332124/real_estate/T3E-15-resized_tv8ec1.jpg', alt: 'Dining nook interior' },
  { src: '/v1707332126/real_estate/T3E-19-resized_cvlpdz.jpg', alt: 'Secondary bedroom interior' },
  { src: '/v1707335736/real_estate/MH-FS-6-resized_bv30gh.jpg', alt: 'Walk-in closet interior' },
  { src: '/v1707335738/real_estate/MH-FS-1-resized_sn5fkw.jpg', alt: 'Front elevation of Calgary residence' },
  { src: '/v1707335749/real_estate/MH-FS-7-resized_x1ptfh.jpg', alt: 'Ensuite and vanity detail' },
  { src: '/v1707335981/real_estate/MH-FS-9-resized_sfhttv.jpg', alt: 'Laundry and utility space' },
  { src: '/v1707337334/real_estate/MH-FS-11-resized_zlwtl9.jpg', alt: 'Spa-inspired bathroom' },
  { src: '/v1708666694/real_estate/ashish_verma_photography-208_e8ohsv.jpg', alt: 'Wide architectural living space' },
  { src: '/v1708666685/real_estate/ashish_verma_photography-202_bmdyh9.jpg', alt: 'Kitchen and dining composition' },
  { src: '/v1707352181/real_estate/T3E-23-resized_gklw9o.jpg', alt: 'Patio and outdoor living' },
  { src: '/v1708666689/real_estate/ashish_verma_photography-200_h293bl.jpg', alt: 'Interior architecture detail' },
  { src: '/v1707337372/real_estate/T3E-16-resized_ibwjun.jpg', alt: 'Sunlit living room with layered textures' },
])

export const headshotImages: GalleryImage[] = [
  { src: '/v1707770470/head_shots/ashish_verma_photography-294_mzoczz.jpg', alt: 'Professional realtor headshot' },
  { src: '/v1707770472/head_shots/ashish_verma_photography-297_tiokar.jpg', alt: 'Studio portrait headshot' },
  { src: '/v1707770480/head_shots/ashish_verma_photography-301_amb5ee.jpg', alt: 'Outdoor professional portrait' },
  { src: '/v1707770473/head_shots/ashish_verma_photography-293_svg6fy.jpg', alt: 'Business portrait photography' },
  { src: '/v1707771597/head_shots/ashish_verma_photography-313_xfv2c8.jpg', alt: 'Calgary professional headshot' },
  { src: '/v1707770482/head_shots/ashish_verma_photography-300_kdf5wt.jpg', alt: 'Lifestyle professional portrait' },
  { src: '/v1707771599/head_shots/ashish_verma_photography-309_p6cugn.jpg', alt: 'Natural light headshot' },
  { src: '/v1707771600/head_shots/ashish_verma_photography-311_qeq0am.jpg', alt: 'Corporate portrait' },
  { src: '/v1707771602/head_shots/ashish_verma_photography-312_e4pevw.jpg', alt: 'Team headshot photography' },
  { src: '/v1707771596/head_shots/ashish_verma_photography-310_zlqcqv.jpg', alt: 'On-location professional portrait' },
  { src: '/v1707799657/head_shots/MH-1_miza4x.jpg', alt: 'Realtor branding portrait' },
  { src: '/v1707800070/head_shots/IMG_2136_sailjw.jpg', alt: 'Professional profile headshot' },
]

export const featuredPortfolio = realEstateImages.slice(0, 8)

export const heroImages = {
  home: '/v1708666694/real_estate/ashish_verma_photography-208_e8ohsv.jpg',
  portfolio: '/v1708666630/real_estate/ashish_verma_photography-101_nscqug.jpg',
  services: '/v1708666682/real_estate/ashish_verma_photography-196_hb9ewt.jpg',
  pricing: '/v1708666614/real_estate/ashish_verma_photography-85_wme92a.jpg',
  about: '/v1707337372/real_estate/T3E-16-resized_ibwjun.jpg',
  contact: '/v1708666685/real_estate/ashish_verma_photography-202_bmdyh9.jpg',
  headshots: '/v1707770470/head_shots/ashish_verma_photography-294_mzoczz.jpg',
}
