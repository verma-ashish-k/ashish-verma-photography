/**
 * Community landing pages (/areas/<slug>).
 * Copy rules: no distances, no radius, no travel or per-km fees, no invented stats or reviews.
 * Keep every page genuinely specific to the community — housing stock, what builders/renovators/realtors
 * there typically need, and practical shoot notes.
 */
export type Area = {
  slug: string
  name: string
  /** <title> */
  title: string
  /** meta description, ~150 characters */
  description: string
  headline: string
  intro: string
  /** Optional French intro (Gatineau). */
  introFr?: string
  /** Neighbourhoods / parts of the community we name on the page. */
  neighbourhoods: string[]
  homes: string
  builders: string
  renovators: string
  realtors: string
  shootNotes: string[]
  image: string
  /** Slugs of related areas for internal links. */
  nearby: string[]
}

export const areas: Area[] = [
  {
    slug: 'ottawa',
    name: 'Ottawa',
    title: 'Ottawa Real Estate Photography for Builders, Renovators & Realtors | Urban Snap',
    description:
      'Real estate photography across central Ottawa — infill builds, heritage renovations, and condo listings in the Glebe, Westboro, Centretown, Hintonburg, and beyond.',
    headline: 'Central Ottawa, photographed with care.',
    intro:
      'Inside the Greenbelt, most projects are infill: a narrow lot in Westboro, a semi-detached rebuild in Hintonburg, a century home in the Glebe getting a new kitchen, a condo above Centretown. Tight streets, mature trees, and neighbouring buildings make these properties harder to photograph well — and more rewarding when it is done right.',
    neighbourhoods: ['Centretown', 'The Glebe', 'Westboro', 'Hintonburg', 'Little Italy', 'Old Ottawa South', 'New Edinburgh', 'Alta Vista', 'Sandy Hill', 'Lowertown'],
    homes:
      'Century brick homes, post-war bungalows, modern infill and semi-detached rebuilds, stacked towns, and high-rise and boutique condos.',
    builders:
      'Infill builders need the façade to read clearly on a tight street and the interior to show how much light a narrow plan really gets. We shoot elevations at the time of day the street allows and keep verticals straight so the architecture holds up on your website and in award submissions.',
    renovators:
      'Heritage and older homes are where renovation work shows best — original trim beside a new kitchen, a restored staircase, a finished attic. We photograph the transitions between old and new so the quality of the work is obvious.',
    realtors:
      'Condo and downtown listings compete on light and layout. We balance window views against interiors, photograph building amenities when you have access, and size everything for MLS and your listing page.',
    shootNotes: [
      'Street parking is often tight downtown — share any parking or loading instructions in your booking notes.',
      'For condos, let us know about building access, the concierge, and any amenity rooms we may photograph.',
      'Mature trees shade many central streets; we plan exterior timing around the light on your street.',
    ],
    image: '/v1708666694/real_estate/ashish_verma_photography-208_e8ohsv.jpg',
    nearby: ['nepean', 'gloucester', 'gatineau'],
  },
  {
    slug: 'kanata',
    name: 'Kanata',
    title: 'Kanata Real Estate Photography — New Builds & Listings | Urban Snap',
    description:
      'Real estate photography in Kanata for builders, renovators, and realtors — new subdivisions, family homes in Kanata Lakes and Bridlewood, and finished basements.',
    headline: 'Kanata. New streets, growing families.',
    intro:
      'Kanata keeps building. New phases continue to open on the edges of the community while established neighbourhoods like Bridlewood, Katimavik, and Beaverbrook turn over to new owners who renovate. That mix means a steady stream of model homes, finished-basement projects, and family listings — each needing a different kind of photography.',
    neighbourhoods: ['Kanata Lakes', 'Bridlewood', 'Morgan’s Grant', 'Katimavik', 'Beaverbrook', 'Kanata North', 'Emerald Meadows', 'Glen Cairn'],
    homes:
      'Detached family homes, townhomes, newer executive homes near the lakes and golf courses, and 1970s–80s homes in the older neighbourhoods.',
    builders:
      'Model homes in new Kanata phases sell lifestyle as much as square footage. We photograph the model, the streetscape, and nearby green space so your sales team can show buyers what the finished community will feel like.',
    renovators:
      'Older Kanata homes are prime for kitchen opens, ensuite upgrades, and basement finishes. We shoot lower levels with balanced light so a finished basement looks like the living space it is.',
    realtors:
      'Family buyers compare a lot of similar homes here. Clean, consistent photos, an aerial of the lot and backyard, and a short video tour help a listing stand apart from the next one on the street.',
    shootNotes: [
      'New phases may not have finished landscaping — tell us, and we will frame exteriors around what is complete.',
      'Backyards backing onto parks or ponds photograph well from the air; ask about aerial imaging.',
      'Twilight works well for model homes on streets with new lighting.',
    ],
    image: '/v1708666630/real_estate/ashish_verma_photography-101_nscqug.jpg',
    nearby: ['stittsville', 'nepean', 'barrhaven'],
  },
  {
    slug: 'orleans',
    name: 'Orléans',
    title: 'Orléans Real Estate Photography — Builders, Renovators & Realtors | Urban Snap',
    description:
      'Real estate photography in Orléans for new east-end communities, renovated family homes, and listings in Avalon, Chapel Hill, Convent Glen, and more.',
    headline: 'Orléans. The east end, shown well.',
    intro:
      'Orléans pairs established, bilingual neighbourhoods with large new communities still filling in toward the east. Builders are launching new phases, long-time owners are renovating homes built in the 1980s and 1990s, and family listings move steadily. We photograph all three with the same consistency.',
    neighbourhoods: ['Avalon', 'Chapel Hill', 'Convent Glen', 'Fallingbrook', 'Queenswood Heights', 'Cardinal Creek', 'Notre-Dame-des-Champs', 'Orléans Village'],
    homes:
      'Detached homes, townhomes, and semi-detached homes, from established 1980s–90s neighbourhoods to new east-end subdivisions.',
    builders:
      'New east-end phases need model-home photography that also shows the community taking shape. We cover interiors, elevations, and aerial context of the streets and parks around your homes.',
    renovators:
      'Homes from the 1980s and 1990s are ready for open kitchens, new flooring, and bathroom updates. We photograph the finished rooms so future clients see the change in the space, not just new surfaces.',
    realtors:
      'Orléans buyers often shop English and French listings side by side. Strong photos and a video tour help a listing hold attention, whatever language the remarks are in.',
    shootNotes: [
      'Bilingual families welcome — we are happy to coordinate with homeowners in English, and to receive notes in French.',
      'Corner lots and homes backing onto green space are worth an aerial.',
      'For new phases, share which homes and show suites are ready so we can plan the route.',
    ],
    image: '/v1708666662/real_estate/ashish_verma_photography-172_ycvwt5.jpg',
    nearby: ['gloucester', 'ottawa', 'riverside-south'],
  },
  {
    slug: 'barrhaven',
    name: 'Barrhaven',
    title: 'Barrhaven Real Estate Photography — Model Homes & Listings | Urban Snap',
    description:
      'Real estate photography in Barrhaven for builders and realtors — new phases in Half Moon Bay and Stonebridge, model homes, renovations, and family listings.',
    headline: 'Barrhaven. Model homes, front and centre.',
    intro:
      'Barrhaven has grown largely through new construction. Communities like Half Moon Bay and Stonebridge have grown phase by phase, and many builders keep model homes and sales centres here. That makes consistent, launch-ready photography especially valuable.',
    neighbourhoods: ['Half Moon Bay', 'Stonebridge', 'Chapman Mills', 'Longfields', 'Davidson Heights', 'Barrhaven Town Centre', 'Heart’s Desire'],
    homes:
      'Newer detached homes, townhomes, and back-to-back towns, with established 1990s–2000s neighbourhoods closer to the core of Barrhaven.',
    builders:
      'Several models, one look. We photograph each model to the same style, lighting, and framing so your website, sales centre, and brochures feel like one brand — and we can return as new models and phases open.',
    renovators:
      'Barrhaven owners often finish basements and upgrade kitchens a few years after moving in. We photograph those projects so they read as a clear upgrade over the builder-standard version next door.',
    realtors:
      'Resale homes here compete with brand-new builds down the road. Bright, true-to-life photos and a short video tour help a resale listing hold its own.',
    shootNotes: [
      'Sales centres are busy on weekends — weekday mornings are usually the easiest time to photograph a model.',
      'Tell us if a model has furniture or décor that should not appear in the photos.',
      'New streets can look bare; aerials and twilight help show the finished community.',
    ],
    image: '/v1707335738/real_estate/MH-FS-1-resized_sn5fkw.jpg',
    nearby: ['nepean', 'riverside-south', 'manotick'],
  },
  {
    slug: 'nepean',
    name: 'Nepean',
    title: 'Nepean Real Estate Photography — Renovations & Listings | Urban Snap',
    description:
      'Real estate photography in Nepean — renovated split-levels and bungalows, infill rebuilds, and family listings in Centrepointe, Craig Henry, Bells Corners, and more.',
    headline: 'Nepean. Where renovations shine.',
    intro:
      'Nepean’s established neighbourhoods are full of 1960s and 1970s bungalows, split-levels, and two-storeys on generous lots. Many are being opened up, extended, or replaced with new infill homes. That makes Nepean one of the best places in the city for renovation and infill photography.',
    neighbourhoods: ['Centrepointe', 'Craig Henry', 'Bells Corners', 'Merivale Gardens', 'Qualicum', 'Arlington Woods', 'Bel-Air Heights', 'Crestview'],
    homes:
      'Mid-century bungalows and split-levels, two-storey family homes, newer infill on subdivided lots, and townhome complexes.',
    builders:
      'Infill builders replacing older homes need photography that shows a modern plan on an established street. We frame the new home in its setting and photograph the details buyers compare.',
    renovators:
      'Split-level and bungalow renovations transform how a home lives. We photograph long sightlines, new open plans, and finish details so the scale of the work comes through.',
    realtors:
      'Generous lots and mature yards are a selling point here. An aerial view of the lot and well-lit interiors help buyers see the value straight away.',
    shootNotes: [
      'Large mature trees can shade exteriors; we plan timing for the best light on the front of the home.',
      'For renovations, tell us which rooms changed so we give them the most time.',
      'Split-levels have tricky sightlines — we take extra angles so the plan reads clearly.',
    ],
    image: '/v1707337372/real_estate/T3E-16-resized_ibwjun.jpg',
    nearby: ['ottawa', 'barrhaven', 'kanata'],
  },
  {
    slug: 'gloucester',
    name: 'Gloucester',
    title: 'Gloucester Real Estate Photography — Builders, Renovators & Realtors | Urban Snap',
    description:
      'Real estate photography in Gloucester — Blackburn Hamlet, Beacon Hill, Findlay Creek, and the south-east — for builders, renovators, and realtors.',
    headline: 'Gloucester. A bit of everything.',
    intro:
      'Gloucester covers a wide stretch of the east and south of the city, from mature, tree-lined neighbourhoods like Blackburn Hamlet and Beacon Hill to newer communities such as Findlay Creek. One week it is a mid-century renovation, the next a new townhome block — we photograph both to the same standard.',
    neighbourhoods: ['Blackburn Hamlet', 'Beacon Hill', 'Rothwell Heights', 'Findlay Creek', 'Leitrim', 'Hunt Club', 'Elmridge'],
    homes:
      'Mid-century detached homes on mature lots, ravine and riverside properties, townhome communities, and newer detached homes in the south-east.',
    builders:
      'For new south-east communities, we photograph models, finished spec homes, and the streetscape so buyers can picture the neighbourhood, not just the house.',
    renovators:
      'Mature Gloucester homes often get whole-floor renovations. We photograph the finished spaces and the details — millwork, tile, fixtures — that clients will hire you for next.',
    realtors:
      'Treed lots and ravine settings are a draw here. Aerials, exterior twilight, and well-balanced interiors help those settings come through online.',
    shootNotes: [
      'Ravine and wooded lots benefit from an aerial to show the setting and privacy.',
      'Tell us about pets, alarm systems, or lockbox access for vacant homes.',
      'Newer streets can look stark in winter; we plan angles that flatter the season.',
    ],
    image: '/v1708666671/real_estate/ashish_verma_photography-193_jemw4i.jpg',
    nearby: ['orleans', 'riverside-south', 'ottawa'],
  },
  {
    slug: 'stittsville',
    name: 'Stittsville',
    title: 'Stittsville Real Estate Photography — New Builds & Family Homes | Urban Snap',
    description:
      'Real estate photography in Stittsville for builders and realtors — Fernbank Crossing, Jackson Trails, new phases, finished basements, and family listings.',
    headline: 'Stittsville. Village roots, new phases.',
    intro:
      'Stittsville keeps its village main street while new communities grow around it. Builders are active in areas like Fernbank Crossing, and families who moved into earlier phases are now finishing basements and building outdoor living spaces. Each of those needs its own approach.',
    neighbourhoods: ['Fernbank Crossing', 'Jackson Trails', 'Westwood', 'Crossing Bridge', 'Stittsville Main Street', 'Fairwinds', 'Poole Creek'],
    homes:
      'Newer detached homes and townhomes, executive homes on larger lots, and older homes near the village core.',
    builders:
      'Launching a new phase? We photograph models, exterior elevations, and community context so marketing is ready when sales open.',
    renovators:
      'Basement finishes, decks, and outdoor kitchens are common Stittsville projects. We photograph outdoor living at the right time of day so it looks as good as it feels.',
    realtors:
      'Buyers here compare newer homes with similar plans. Clear, consistent photography and an aerial of the lot make it easy to see what sets a listing apart.',
    shootNotes: [
      'Outdoor projects photograph best in late afternoon light — ask us about timing.',
      'Larger lots and backyards backing onto trails suit aerial imaging.',
      'For homes on Main Street, share parking instructions in your notes.',
    ],
    image: '/v1707352181/real_estate/T3E-23-resized_gklw9o.jpg',
    nearby: ['kanata', 'nepean', 'barrhaven'],
  },
  {
    slug: 'riverside-south',
    name: 'Riverside South',
    title: 'Riverside South Real Estate Photography — New Construction | Urban Snap',
    description:
      'Real estate photography in Riverside South for builders, renovators, and realtors — new phases, model homes, and family listings beside the Rideau River.',
    headline: 'Riverside South. Built for what’s next.',
    intro:
      'Riverside South is still growing toward its finished shape, with new phases of detached homes and townhomes alongside established streets near the Rideau River. Builders need marketing that sells a community in progress; owners of earlier homes are starting to renovate.',
    neighbourhoods: ['Riverside South town centre', 'Limebank Road area', 'Earl Armstrong Road area', 'River Road area', 'Spratt Road area'],
    homes:
      'Newer detached homes and townhomes, with established streets and larger lots closer to the Rideau River.',
    builders:
      'For a growing community, we photograph finished homes and models alongside the parks, paths, and streets that already exist, so buyers can see what they are moving into.',
    renovators:
      'Earlier Riverside South homes are reaching their first renovation cycle — kitchens, basements, and ensuites. We photograph the finished work so it reads as a real upgrade.',
    realtors:
      'Many buyers here compare resale homes with new builds. Polished photography and a video tour help a resale home show its finished landscaping and upgrades.',
    shootNotes: [
      'Construction nearby? We frame exteriors to keep the focus on the finished home.',
      'Homes near the river or parks are worth an aerial.',
      'Twilight shoots work well on streets with new lighting.',
    ],
    image: '/v1707701802/real_estate/TFM_OB-3_akiyoo.jpg',
    nearby: ['manotick', 'barrhaven', 'gloucester'],
  },
  {
    slug: 'manotick',
    name: 'Manotick',
    title: 'Manotick Real Estate Photography — Estate & Riverfront Homes | Urban Snap',
    description:
      'Real estate photography in Manotick for custom builders, renovators, and realtors — estate lots, riverfront homes on the Rideau, and the historic village core.',
    headline: 'Manotick. Custom homes, room to breathe.',
    intro:
      'Manotick is a village on the Rideau River with a historic core, estate lots, and custom homes. Projects here tend to be larger and more individual — a custom build on a wooded lot, a riverfront renovation, a heritage home near the village centre — and they deserve photography to match.',
    neighbourhoods: ['Manotick Village', 'Mahogany', 'Rideau River waterfront', 'Long Island'],
    homes:
      'Custom and estate homes on larger lots, riverfront properties, heritage homes in the village, and newer homes in planned communities.',
    builders:
      'Custom builders win their next client with portfolio images. We photograph architecture, materials, and setting — including aerials of the lot — so a single home can carry your marketing for years.',
    renovators:
      'Larger homes mean larger renovations: additions, kitchens, primary suites, and outdoor living. We photograph them like the architectural projects they are.',
    realtors:
      'Estate and waterfront listings sell on setting. Aerial imaging, twilight, and a cinematic video tour show the lot, the water, and the home together.',
    shootNotes: [
      'Waterfront and large lots look best from the air — weather permitting, we schedule aerials on calm days.',
      'Twilight suits homes with strong landscape and exterior lighting.',
      'Larger homes take longer to photograph; share the square footage when you book.',
    ],
    image: '/v1707337415/real_estate/T3E_6751-resized_ghdynb.jpg',
    nearby: ['riverside-south', 'barrhaven', 'gloucester'],
  },
  {
    slug: 'gatineau',
    name: 'Gatineau',
    title: 'Gatineau Real Estate Photography — Photographe immobilier | Urban Snap',
    description:
      'Real estate photography in Gatineau, Hull, Aylmer, and Le Plateau for builders, renovators, and realtors. Photographie immobilière à Gatineau.',
    headline: 'Gatineau. Across the river, same standard.',
    intro:
      'From condos and plexes in Hull to family homes in Aylmer and Le Plateau and new construction across the city, Gatineau has its own market and its own rhythm. We photograph Gatineau projects with the same consistency as our Ottawa work, for builders, renovators, and courtiers alike.',
    introFr:
      'Urban Snap photographie les constructions neuves, les rénovations et les inscriptions à Gatineau — Hull, Aylmer, Le Plateau et Gatineau. Écrivez-nous en français ou en anglais : nous confirmerons les détails de votre séance avec plaisir.',
    neighbourhoods: ['Hull', 'Aylmer', 'Le Plateau', 'Gatineau (secteur)', 'Buckingham', 'Masson-Angers'],
    homes:
      'Condos and plexes in Hull, detached family homes in Aylmer and Le Plateau, and new-construction projects across the city.',
    builders:
      'New projects in Gatineau need marketing that works in both languages. We deliver one consistent photo and video set your team can use on French and English materials alike.',
    renovators:
      'Plexes and older homes in Hull are often renovated unit by unit. We photograph each finished unit and common area so the work can be shown to owners, tenants, and future clients.',
    realtors:
      'Whether the listing is on Centris or MLS, we deliver files sized for listing platforms and your website.',
    shootNotes: [
      'Notes in French are welcome — include access codes and parking details for plexes.',
      'For multi-unit buildings, tell us which units and common areas to include.',
      'Homes near Gatineau Park and the river can benefit from aerial context.',
    ],
    image: '/v1707337397/real_estate/IMG_6494-resized_xyxwxl.jpg',
    nearby: ['ottawa', 'orleans', 'kanata'],
  },
]

export const areaBySlug = (slug: string) => areas.find((area) => area.slug === slug)
export const areaRoutes = areas.map((area) => `/areas/${area.slug}`)
