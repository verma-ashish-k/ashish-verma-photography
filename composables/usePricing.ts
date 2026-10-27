import { pricingTiers, type PriceValue } from '~/data/pricing'

export type EstimateKey = 'photography' | 'videography' | 'drone' | 'twilight'

export const usePricing = () => {
  // Default to the most common size (1,000–2,500 sqft).
  const selectedIndex = useState('pricing-tier', () => 1)
  const selectedServices = useState<EstimateKey[]>('pricing-services', () => ['photography'])
  const selectedTier = computed(() => pricingTiers[selectedIndex.value] ?? pricingTiers[0])

  const selectTier = (index: number) => {
    selectedIndex.value = Math.min(Math.max(index, 0), pricingTiers.length - 1)
  }

  const toggleService = (key: EstimateKey) => {
    const list = selectedServices.value
    selectedServices.value = list.includes(key) ? list.filter((item) => item !== key) : [...list, key]
  }

  /** Live total of the selected à-la-carte items, or null when the tier is quote-only. */
  const estimate = computed<number | null>(() => {
    let total = 0
    for (const key of selectedServices.value) {
      const value: PriceValue = selectedTier.value.prices[key]
      if (typeof value !== 'number') return null
      total += value
    }
    return total
  })

  /** Suggest the Basic package when photos + video are both selected and the package costs less. */
  const packageTip = computed(() => {
    const basic = selectedTier.value.prices.basicPackage
    const picks = selectedServices.value
    if (typeof basic !== 'number' || estimate.value === null) return null
    if (!picks.includes('photography') || !picks.includes('videography')) return null
    const photoVideo =
      (selectedTier.value.prices.photography as number) + (selectedTier.value.prices.videography as number)
    if (basic >= photoVideo) return null
    return { price: basic, saving: photoVideo - basic }
  })

  return {
    tiers: pricingTiers,
    selectedIndex,
    selectedTier,
    selectTier,
    selectedServices,
    toggleService,
    estimate,
    packageTip,
  }
}
