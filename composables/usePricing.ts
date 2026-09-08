import { pricingTiers } from '~/data/pricing'

export const usePricing = () => {
  const selectedIndex = useState('pricing-tier', () => 0)
  const selectedTier = computed(() => pricingTiers[selectedIndex.value] ?? pricingTiers[0])

  const selectTier = (index: number) => {
    selectedIndex.value = Math.min(Math.max(index, 0), pricingTiers.length - 1)
  }

  return {
    tiers: pricingTiers,
    selectedIndex,
    selectedTier,
    selectTier,
  }
}
