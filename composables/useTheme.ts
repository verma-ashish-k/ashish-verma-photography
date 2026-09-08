export type ThemePreference = 'system' | 'light' | 'dark'

const STORAGE_KEY = 'urban-snap-theme'

const applyTheme = (preference: ThemePreference) => {
  if (!import.meta.client) return
  const root = document.documentElement
  if (preference === 'system') {
    root.removeAttribute('data-theme')
  } else {
    root.setAttribute('data-theme', preference)
  }
}

export const useTheme = () => {
  const preference = useState<ThemePreference>('theme-preference', () => 'system')
  const resolved = useState<'light' | 'dark'>('theme-resolved', () => 'light')

  const syncResolved = () => {
    if (!import.meta.client) return
    if (preference.value === 'light' || preference.value === 'dark') {
      resolved.value = preference.value
      return
    }
    resolved.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setPreference = (next: ThemePreference) => {
    preference.value = next
    applyTheme(next)
    syncResolved()
    if (!import.meta.client) return
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore quota / private mode */
    }
  }

  const cyclePreference = () => {
    const order: ThemePreference[] = ['system', 'light', 'dark']
    const index = order.indexOf(preference.value)
    setPreference(order[(index + 1) % order.length])
  }

  const label = computed(() => {
    if (preference.value === 'system') return `Theme: system (${resolved.value})`
    return `Theme: ${preference.value}`
  })

  const listenersBound = useState('theme-listeners', () => false)
  let media: MediaQueryList | undefined
  const onMediaChange = () => syncResolved()

  onMounted(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'light' || saved === 'dark' || saved === 'system') {
        preference.value = saved
      }
    } catch {
      /* ignore */
    }
    applyTheme(preference.value)
    syncResolved()

    if (listenersBound.value) return
    listenersBound.value = true
    media = window.matchMedia('(prefers-color-scheme: dark)')
    media.addEventListener('change', onMediaChange)
  })

  return {
    preference,
    resolved,
    label,
    setPreference,
    cyclePreference,
  }
}
