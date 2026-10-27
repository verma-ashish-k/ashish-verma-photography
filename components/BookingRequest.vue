<template>
  <div class="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
    <div class="rounded-[18px] border border-line bg-[color:var(--card)] p-6 sm:p-10">
      <h2 class="headline-xs">Request a booking.</h2>
      <p class="mt-2 text-[15px] text-fg-muted">Three quick steps. We confirm the date and final quote before anything is booked.</p>

      <ol class="steps mt-7 grid grid-cols-3 gap-2" aria-label="Booking steps">
        <li
          v-for="(label, index) in stepLabels"
          :key="label"
          class="step"
          :class="{ 'is-active': index + 1 === step, 'is-done': index + 1 < step || submitted }"
          :aria-current="index + 1 === step && !submitted ? 'step' : undefined"
        >
          <span class="step-bar" aria-hidden="true" />
          <span class="mt-2 block text-[12px] sm:text-[13px]">
            <span class="sr-only">Step {{ index + 1 }} of 3: </span>{{ label }}
          </span>
        </li>
      </ol>

      <div v-if="submitted" class="mt-8 rounded-[14px] bg-[color:var(--page-alt)] p-6" role="status" aria-live="polite">
        <p class="text-[19px] font-semibold text-fg">Thank you — your request is in.</p>
        <p class="mt-2 text-[15px] text-fg-muted">We’ll reply to confirm the date and your quote. {{ turnaroundNote }}</p>
        <a :href="whatsappHref" target="_blank" rel="noreferrer" class="link-more mt-4 !text-[17px]">Also send it on WhatsApp</a>
      </div>

      <form v-else class="mt-8" novalidate @submit.prevent="onSubmit">
        <input v-model="botcheck" type="text" name="botcheck" class="hidden" tabindex="-1" autocomplete="off" aria-hidden="true" />

        <!-- Step 1 -->
        <div v-show="step === 1">
          <h3 ref="stepHeading1" tabindex="-1" class="text-[19px] font-semibold text-fg outline-none">What do you need?</h3>
          <fieldset class="mt-4" :aria-invalid="!!errors.services" :aria-describedby="errors.services ? 'err-services' : undefined">
            <legend class="field-label">Services <span class="text-fg-faint">(choose one or more)</span></legend>
            <div class="mt-2 grid grid-cols-2 gap-2">
              <label v-for="option in serviceOptions" :key="option.key" class="choice" :class="{ 'is-selected': services.includes(option.key) }">
                <input v-model="services" type="checkbox" :value="option.key" class="choice-input" />
                <span>
                  <span class="block text-[15px] font-semibold text-fg">{{ option.label }}</span>
                  <span class="block text-[13px] text-fg-muted">{{ option.hint }}</span>
                </span>
              </label>
            </div>
            <p v-if="errors.services" id="err-services" class="field-error" role="alert">{{ errors.services }}</p>
          </fieldset>

          <div class="mt-5 grid gap-4 sm:grid-cols-2">
            <label class="field">
              <span class="field-label">Property size</span>
              <select v-model="size" name="size" required :aria-invalid="!!errors.size" :aria-describedby="errors.size ? 'err-size' : undefined">
                <option value="" disabled>Choose a size</option>
                <option v-for="tier in pricingTiers" :key="tier.id" :value="tier.id">{{ tier.label }}</option>
                <option value="not-sure">Not sure yet</option>
              </select>
              <span v-if="errors.size" id="err-size" class="field-error" role="alert">{{ errors.size }}</span>
            </label>
            <label v-if="services.includes('builder-program')" class="field">
              <span class="field-label">Number of homes <span class="text-fg-faint">(optional)</span></span>
              <input v-model="homes" type="number" min="1" inputmode="numeric" name="homes" />
            </label>
          </div>
          <label class="mt-4 flex items-center gap-3 text-[15px] text-fg-muted">
            <input v-model="headshots" type="checkbox" class="h-4 w-4 accent-[#0071e3]" />
            Add headshots to this shoot
          </label>
        </div>

        <!-- Step 2 -->
        <div v-show="step === 2">
          <h3 ref="stepHeading2" tabindex="-1" class="text-[19px] font-semibold text-fg outline-none">Where and when?</h3>
          <div class="mt-4 grid gap-4 sm:grid-cols-2">
            <label class="field sm:col-span-2">
              <span class="field-label">Property address</span>
              <input v-model.trim="address" type="text" name="address" autocomplete="street-address" required :aria-invalid="!!errors.address" :aria-describedby="errors.address ? 'err-address' : undefined" />
              <span v-if="errors.address" id="err-address" class="field-error" role="alert">{{ errors.address }}</span>
            </label>
            <label class="field">
              <span class="field-label">Community</span>
              <select v-model="community" name="community" required :aria-invalid="!!errors.community" :aria-describedby="errors.community ? 'err-community' : undefined">
                <option value="" disabled>Choose a community</option>
                <option v-for="place in site.serviceArea" :key="place" :value="place">{{ place }}</option>
                <option value="Other">Other</option>
              </select>
              <span v-if="errors.community" id="err-community" class="field-error" role="alert">{{ errors.community }}</span>
            </label>
            <label class="field">
              <span class="field-label">Property status</span>
              <select v-model="propertyStatus" name="propertyStatus">
                <option v-for="option in statusOptions" :key="option" :value="option">{{ option }}</option>
              </select>
            </label>
            <label class="field">
              <span class="field-label">Preferred date <span class="text-fg-faint">(optional)</span></span>
              <input v-model="date" type="date" name="date" :min="today" :aria-invalid="!!errors.date" :aria-describedby="errors.date ? 'err-date' : undefined" />
              <span v-if="errors.date" id="err-date" class="field-error" role="alert">{{ errors.date }}</span>
            </label>
            <label class="field">
              <span class="field-label">Time of day</span>
              <select v-model="timeOfDay" name="timeOfDay">
                <option v-for="option in timeOptions" :key="option" :value="option">{{ option }}</option>
              </select>
            </label>
            <label class="field sm:col-span-2">
              <span class="field-label">Access notes <span class="text-fg-faint">(optional)</span></span>
              <textarea v-model.trim="accessNotes" name="accessNotes" rows="3" placeholder="Lockbox, site contact, parking, pets, rooms to focus on…" />
            </label>
          </div>
        </div>

        <!-- Step 3 -->
        <div v-show="step === 3">
          <h3 ref="stepHeading3" tabindex="-1" class="text-[19px] font-semibold text-fg outline-none">How do we reach you?</h3>
          <div class="mt-4 grid gap-4 sm:grid-cols-2">
            <label class="field">
              <span class="field-label">First name</span>
              <input v-model.trim="firstName" type="text" name="firstName" autocomplete="given-name" required :aria-invalid="!!errors.firstName" :aria-describedby="errors.firstName ? 'err-first' : undefined" />
              <span v-if="errors.firstName" id="err-first" class="field-error" role="alert">{{ errors.firstName }}</span>
            </label>
            <label class="field">
              <span class="field-label">Last name</span>
              <input v-model.trim="lastName" type="text" name="lastName" autocomplete="family-name" required :aria-invalid="!!errors.lastName" :aria-describedby="errors.lastName ? 'err-last' : undefined" />
              <span v-if="errors.lastName" id="err-last" class="field-error" role="alert">{{ errors.lastName }}</span>
            </label>
            <label class="field">
              <span class="field-label">Email</span>
              <input v-model.trim="email" type="email" name="email" autocomplete="email" required :aria-invalid="!!errors.email" :aria-describedby="errors.email ? 'err-email' : undefined" />
              <span v-if="errors.email" id="err-email" class="field-error" role="alert">{{ errors.email }}</span>
            </label>
            <label class="field">
              <span class="field-label">Phone</span>
              <input v-model.trim="phone" type="tel" name="phone" autocomplete="tel" required :aria-invalid="!!errors.phone" :aria-describedby="errors.phone ? 'err-phone' : undefined" />
              <span v-if="errors.phone" id="err-phone" class="field-error" role="alert">{{ errors.phone }}</span>
            </label>
            <label class="field">
              <span class="field-label">I am a…</span>
              <select v-model="clientType" name="clientType" required>
                <option v-for="option in clientTypes" :key="option" :value="option">{{ option }}</option>
              </select>
            </label>
            <label class="field">
              <span class="field-label">Company <span class="text-fg-faint">(optional)</span></span>
              <input v-model.trim="company" type="text" name="company" autocomplete="organization" />
            </label>
            <label class="field sm:col-span-2">
              <span class="field-label">Anything else? <span class="text-fg-faint">(optional)</span></span>
              <textarea v-model.trim="message" name="message" rows="3" />
            </label>
          </div>
        </div>

        <p v-if="sendError" class="field-error mt-5 !text-[14px]" role="alert">{{ sendError }}</p>

        <div class="mt-8 flex flex-wrap items-center gap-3">
          <button v-if="step > 1" type="button" class="btn-secondary" @click="goTo(step - 1)">Back</button>
          <button type="submit" class="btn-primary" :disabled="submitting">
            {{ step < 3 ? 'Continue' : submitting ? 'Sending…' : 'Send request' }}
          </button>
          <a v-if="step === 3" :href="whatsappHref" target="_blank" rel="noreferrer" class="btn-secondary" @click="onWhatsApp">
            Send on WhatsApp
          </a>
        </div>
        <p class="mt-4 text-[12px] text-fg-faint">{{ turnaroundNote }}</p>
      </form>
    </div>

    <aside class="flex flex-col rounded-[18px] bg-black p-6 text-[#f5f5f7] sm:p-10">
      <h2 class="headline-xs !text-[#f5f5f7]">Prefer to talk?</h2>
      <p class="mt-2 text-[15px] text-[#a1a1a6]">Urban Snap · {{ site.locationLabel }}<br />Serving Ottawa and surrounding areas.</p>
      <dl class="mt-8 space-y-6">
        <div>
          <dt class="text-[12px] text-[#a1a1a6]">Call</dt>
          <dd><a :href="site.phoneHref" class="mt-1 block text-[21px] font-semibold text-[#2997ff] hover:underline">{{ site.phoneDisplay }}</a></dd>
        </div>
        <div>
          <dt class="text-[12px] text-[#a1a1a6]">Email</dt>
          <dd><a :href="`mailto:${site.email}`" class="mt-1 block break-all text-[21px] font-semibold text-[#2997ff] hover:underline">{{ site.email }}</a></dd>
        </div>
        <div>
          <dt class="text-[12px] text-[#a1a1a6]">WhatsApp</dt>
          <dd><a :href="whatsappHref" target="_blank" rel="noreferrer" class="mt-1 block text-[21px] font-semibold text-[#2997ff] hover:underline">Message {{ site.phoneDisplay }}</a></dd>
        </div>
      </dl>
      <div class="mt-auto pt-10">
        <NuxtLink to="/shoot-prep" class="text-[14px] text-[#a1a1a6] hover:text-white">How to prepare for your shoot →</NuxtLink>
        <SocialLinks inverse inline class="mt-5 border-t border-white/10 pt-5" />
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { pricingTiers } from '~/data/pricing'
import { areas } from '~/data/areas'
import { promiseText } from '~/data/site'

const site = useSite()
const route = useRoute()
const config = useRuntimeConfig()
const pricing = usePricing()

type ServiceKey =
  | 'builder-program'
  | 'photography'
  | 'videography'
  | 'drone'
  | 'twilight'
  | 'basicPackage'
  | 'ultimatePackage'
  | 'commercial'

const serviceOptions: { key: ServiceKey; label: string; hint: string }[] = [
  { key: 'builder-program', label: 'Builder program', hint: 'Model, spec, or several homes' },
  { key: 'photography', label: 'Real estate photography', hint: 'HDR interiors and exteriors' },
  { key: 'videography', label: 'Video tour', hint: '2–3 minute 4K walkthrough' },
  { key: 'drone', label: 'Aerial / drone', hint: 'Licensed stills and video' },
  { key: 'twilight', label: 'Twilight shoot', hint: 'Dedicated after-hours visit' },
  { key: 'basicPackage', label: 'Basic package', hint: 'Photos + 4K video' },
  { key: 'ultimatePackage', label: 'Ultimate package', hint: 'Photos, video, slideshow, website' },
  { key: 'commercial', label: 'Commercial', hint: 'Offices, retail, mixed-use' },
]
const serviceKeys = serviceOptions.map((option) => option.key)
const stepLabels = ['Service', 'Property', 'Contact']
const statusOptions = ['Finished and furnished', 'Finished and vacant', 'Model or show home', 'Nearly finished', 'Occupied by tenants']
const timeOptions = ['Flexible', 'Morning', 'Afternoon', 'Twilight']
const clientTypes = ['Builder', 'Renovator', 'Realtor', 'Other']
const audienceMap: Record<string, string> = { builder: 'Builder', renovator: 'Renovator', realtor: 'Realtor', other: 'Other' }

const step = ref(1)
const services = ref<ServiceKey[]>([])
const size = ref('')
const homes = ref<number | ''>('')
const headshots = ref(false)
const address = ref('')
const community = ref('')
const propertyStatus = ref(statusOptions[0])
const date = ref('')
const timeOfDay = ref('Flexible')
const accessNotes = ref('')
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const clientType = ref('Builder')
const company = ref('')
const message = ref('')
const botcheck = ref('')
const errors = reactive<Record<string, string>>({})
const submitting = ref(false)
const submitted = ref(false)
const sendError = ref('')
const stepHeading1 = ref<HTMLElement | null>(null)
const stepHeading2 = ref<HTMLElement | null>(null)
const stepHeading3 = ref<HTMLElement | null>(null)

const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10)
const turnaroundNote = promiseText('turnaround')

const first = (value: unknown) => (Array.isArray(value) ? value[0] : value) as string | undefined

/** Prefill from query params (?services=a,b&size=tier&package=basicPackage&audience=builder&area=kanata), else shared pricing state. */
const prefill = () => {
  const q = route.query
  const fromQuery = (first(q.services) || '').split(',').filter((key): key is ServiceKey => serviceKeys.includes(key as ServiceKey))
  const pkg = first(q.package)
  if (pkg && serviceKeys.includes(pkg as ServiceKey)) fromQuery.push(pkg as ServiceKey)
  if (fromQuery.length) {
    services.value = [...new Set(fromQuery)]
  } else if (first(q.from) === 'pricing') {
    services.value = pricing.selectedServices.value.filter((key) => serviceKeys.includes(key as ServiceKey)) as ServiceKey[]
  }
  const sizeParam = first(q.size)
  if (sizeParam && (pricingTiers.some((tier) => tier.id === sizeParam) || sizeParam === 'not-sure')) {
    size.value = sizeParam
  } else if (first(q.from) === 'pricing') {
    size.value = pricing.selectedTier.value.id
  }
  const audience = first(q.audience)
  if (audience && audienceMap[audience]) clientType.value = audienceMap[audience]
  const areaParam = first(q.area)
  const area = areas.find((item) => item.slug === areaParam)
  if (area) community.value = area.name
}
onMounted(prefill)
watch(() => route.query, prefill)

const labelFor = (key: ServiceKey) => serviceOptions.find((option) => option.key === key)?.label ?? key
const sizeLabel = computed(() =>
  size.value === 'not-sure' ? 'Not sure yet' : pricingTiers.find((tier) => tier.id === size.value)?.label ?? '',
)
const serviceSummary = computed(() => {
  const list = services.value.map(labelFor)
  if (headshots.value) list.push('Headshots (add-on)')
  return list.join(', ')
})

const validEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
const validPhone = (value: string) => value.replace(/\D/g, '').length >= 10

const validate = (target: number) => {
  for (const key of Object.keys(errors)) delete errors[key]
  if (target === 1) {
    if (!services.value.length) errors.services = 'Choose at least one service.'
    if (!size.value) errors.size = 'Choose a property size, or “Not sure yet”.'
  }
  if (target === 2) {
    if (address.value.length < 4) errors.address = 'Enter the property address.'
    if (!community.value) errors.community = 'Choose the community.'
    if (date.value && date.value < today) errors.date = 'Choose today or a later date.'
  }
  if (target === 3) {
    if (!firstName.value) errors.firstName = 'Enter your first name.'
    if (!lastName.value) errors.lastName = 'Enter your last name.'
    if (!validEmail(email.value)) errors.email = 'Enter a valid email address.'
    if (!validPhone(phone.value)) errors.phone = 'Enter a phone number with area code.'
  }
  return Object.keys(errors).length === 0
}

const focusStep = async (target: number) => {
  await nextTick()
  const heading = [stepHeading1, stepHeading2, stepHeading3][target - 1]?.value
  heading?.focus({ preventScroll: false })
}

const goTo = (target: number) => {
  sendError.value = ''
  for (const key of Object.keys(errors)) delete errors[key]
  step.value = target
  focusStep(target)
}

const focusFirstError = async () => {
  await nextTick()
  const el = document.querySelector<HTMLElement>('[aria-invalid="true"]')
  const input = el?.tagName === 'FIELDSET' ? el.querySelector<HTMLElement>('input') : el
  input?.focus()
}

const summaryLines = computed(() =>
  [
    `Services: ${serviceSummary.value || '—'}`,
    `Property size: ${sizeLabel.value || '—'}`,
    homes.value ? `Homes: ${homes.value}` : '',
    `Address: ${address.value || '—'}${community.value ? ` (${community.value})` : ''}`,
    `Status: ${propertyStatus.value}`,
    `Preferred date: ${[date.value, timeOfDay.value === 'Flexible' && date.value ? '' : timeOfDay.value].filter(Boolean).join(' · ') || 'Flexible'}`,
    accessNotes.value ? `Access notes: ${accessNotes.value}` : '',
    firstName.value || lastName.value ? `Name: ${`${firstName.value} ${lastName.value}`.trim()}` : '',
    `I am a: ${clientType.value}${company.value ? ` (${company.value})` : ''}`,
    email.value ? `Email: ${email.value}` : '',
    phone.value ? `Phone: ${phone.value}` : '',
    message.value ? `Notes: ${message.value}` : '',
  ].filter(Boolean),
)

const whatsappHref = computed(() => {
  const text = ['Hi Urban Snap, I’d like to request a shoot.', '', ...summaryLines.value].join('\n')
  return `${site.whatsapp}?text=${encodeURIComponent(text)}`
})

const onWhatsApp = (event: MouseEvent) => {
  if (!validate(3)) {
    event.preventDefault()
    focusFirstError()
  }
}

const onSubmit = async () => {
  if (step.value < 3) {
    if (validate(step.value)) goTo(step.value + 1)
    else focusFirstError()
    return
  }
  if (!validate(3)) {
    focusFirstError()
    return
  }
  if (botcheck.value) return
  submitting.value = true
  sendError.value = ''
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: config.public.web3formsKey,
        subject: `Booking request — ${clientType.value} — ${community.value || 'Ottawa'}`,
        from_name: 'Booking Request - Urban Snap',
        replyto: email.value,
        'First Name': firstName.value,
        'Last Name': lastName.value,
        Email: email.value,
        Phone: phone.value,
        'Client Type': clientType.value,
        Company: company.value,
        Services: serviceSummary.value,
        'Property Size': sizeLabel.value,
        'Number of Homes': homes.value || '',
        Address: address.value,
        Community: community.value,
        'Property Status': propertyStatus.value,
        'Preferred Date': date.value || 'Flexible',
        'Time of Day': timeOfDay.value,
        'Access Notes': accessNotes.value,
        Message: message.value,
        Summary: summaryLines.value.join('\n'),
      }),
    })
    const result = await response.json()
    if (result.success) {
      submitted.value = true
    } else {
      sendError.value = `The request could not be sent. Please try WhatsApp, call ${site.phoneDisplay}, or email ${site.email}.`
    }
  } catch {
    sendError.value = `The request could not be sent. Please try WhatsApp, call ${site.phoneDisplay}, or email ${site.email}.`
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.step {
  color: var(--fg-faint);
}
.step-bar {
  display: block;
  height: 4px;
  border-radius: 9999px;
  background: var(--track);
  transition: background-color 300ms ease;
}
.step.is-active,
.step.is-done {
  color: var(--fg);
}
.step.is-active .step-bar,
.step.is-done .step-bar {
  background: #0071e3;
}

.field {
  @apply block;
}
.field-label {
  @apply block text-[12px] text-fg-muted;
}
.field-error {
  @apply mt-1.5 block text-[13px];
  color: #e30000;
}
:global([data-theme='dark']) .field-error {
  color: #ff6961;
}
@media (prefers-color-scheme: dark) {
  :global(:root:not([data-theme='light'])) .field-error {
    color: #ff6961;
  }
}

.field input,
.field select,
.field textarea {
  @apply mt-1.5 w-full rounded-[12px] border px-4 py-3 text-[17px] outline-none transition;
  background: var(--field-bg);
  color: var(--fg);
  border-color: var(--field-border);
}
.field input:focus,
.field select:focus,
.field textarea:focus {
  border-color: #0071e3;
  box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.25);
}
.field [aria-invalid='true'] {
  border-color: #e30000;
}

.choice {
  @apply flex cursor-pointer items-start gap-2.5 rounded-[14px] border p-3 transition sm:gap-3 sm:p-4;
  border-color: var(--line);
  background: var(--card);
}
.choice:hover {
  border-color: var(--fg-faint);
}
.choice.is-selected {
  border-color: #0071e3;
  box-shadow: inset 0 0 0 1px #0071e3;
}
.choice:focus-within {
  box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.25);
}
.choice-input {
  @apply mt-0.5 h-4 w-4 shrink-0;
  accent-color: #0071e3;
}
</style>
