import { promiseText, site } from './site'

export type FaqItem = { q: string; a: string; link?: { label: string; to: string } }
export type FaqGroup = { id: string; title: string; items: FaqItem[] }

/**
 * FAQ copy. Turnaround and revision answers come from `promises` in data/site.ts,
 * so they stay neutral until Ashish publishes real numbers.
 */
export const faqGroups = (): FaqGroup[] => [
  {
    id: 'booking',
    title: 'Booking',
    items: [
      {
        q: 'How do I book a shoot?',
        a: 'Send a booking request in three short steps — what you need, where and when, and how to reach you. You can submit it online or send the same summary on WhatsApp. We confirm the date and the final quote before anything is booked.',
        link: { label: 'Request a booking', to: '/contact' },
      },
      {
        q: 'Which areas do you serve?',
        a: `We are based in Ottawa and photograph projects across the city and surrounding areas, including ${site.serviceArea.slice(1).join(', ')}.`,
        link: { label: 'See the communities we serve', to: '/areas' },
      },
      {
        q: 'Do I need to be at the property?',
        a: 'Not always. Many shoots run with a lockbox, a site supervisor, or the homeowner on hand. Add access details, alarm codes, pets, and parking in the access notes when you book.',
      },
      {
        q: 'What happens if the weather is bad?',
        a: 'Interiors can usually go ahead in any weather. If exteriors, aerials, or twilight need a better sky, we will talk through rescheduling those parts with you.',
      },
    ],
  },
  {
    id: 'delivery',
    title: 'Delivery and quality',
    items: [
      { q: 'How fast will I get my photos?', a: promiseText('turnaround') },
      { q: 'When do video, aerial, and twilight arrive?', a: promiseText('videoTurnaround') },
      { q: 'What if something in the gallery isn’t right?', a: promiseText('reshoot') },
      {
        q: 'What files do I receive?',
        a: 'Professionally edited, high-resolution files plus MLS-optimized sizes, so the same set works on your website, listing platforms, social, and print.',
      },
    ],
  },
  {
    id: 'services',
    title: 'Services',
    items: [
      {
        q: 'Do you offer builder pricing for several homes or a phase?',
        a: 'Yes. Builders can book single homes, model homes, or several homes together, photographed to one consistent look. Tell us about the project and we will prepare a builder quote.',
        link: { label: 'Photography for builders', to: '/builders' },
      },
      {
        q: 'Do you photograph finished renovations?',
        a: 'Yes. We photograph completed kitchens, baths, basements, additions, and whole-home renovations, with detail shots that show the craftsmanship.',
        link: { label: 'Photography for renovators', to: '/renovators' },
      },
      {
        q: 'Is your drone work licensed?',
        a: 'Yes. Aerial imaging is flown under a Transport Canada drone licence. Flights depend on weather and airspace rules at the property.',
      },
      {
        q: 'Can you add headshots to a shoot?',
        a: 'Yes. Headshots for sales teams, renovators, and agents can be added to any booking — just mention it in your request.',
        link: { label: 'See headshots', to: '/portfolio/headshots' },
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing',
    items: [
      {
        q: 'How is pricing set?',
        a: 'Listing and renovation shoots are priced by property size. Slide to your square footage on the pricing page to see every service and package update live. Builder programs and commercial projects are quoted per project.',
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Do larger homes cost more?',
        a: 'Larger homes take more time to photograph and edit, so pricing steps up by size. Homes above the largest size tier are quoted individually.',
      },
    ],
  },
]
