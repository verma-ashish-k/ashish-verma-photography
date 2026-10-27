<template>
  <div class="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
    <form class="rounded-[18px] bg-[color:var(--card)] p-6 sm:p-10" :class="onAlt ? '' : 'border border-line'" @submit.prevent="submitForm">
      <h2 class="headline-xs">Tell us about the property.</h2>
      <p class="mt-2 text-[15px] text-fg-muted">
        Address or community, square footage, and whether it is a new build, a renovation, or a listing.
      </p>

      <div v-if="formSubmitted" class="mt-8 rounded-[12px] bg-[color:var(--page-alt)] p-6 text-[17px] text-fg" role="status">
        Thank you — we will get back to you soon.
      </div>

      <div v-else class="mt-8 grid gap-4 sm:grid-cols-2">
        <input v-model="botcheck" type="text" name="botcheck" class="hidden" tabindex="-1" autocomplete="off" />
        <label class="field">
          <span>First name</span>
          <input v-model="firstName" required type="text" name="firstName" autocomplete="given-name" />
        </label>
        <label class="field">
          <span>Last name</span>
          <input v-model="lastName" required type="text" name="lastName" autocomplete="family-name" />
        </label>
        <label class="field">
          <span>Email</span>
          <input v-model="email" required type="email" name="email" autocomplete="email" />
        </label>
        <label class="field">
          <span>Phone</span>
          <input v-model="phone" required type="tel" name="phone" autocomplete="tel" />
        </label>
        <label class="field sm:col-span-2">
          <span>I am a…</span>
          <select v-model="clientType" name="clientType">
            <option v-for="option in clientTypes" :key="option" :value="option">{{ option }}</option>
          </select>
        </label>
        <label class="field sm:col-span-2">
          <span>Subject</span>
          <input v-model="subject" required type="text" name="subject" />
        </label>
        <label class="field sm:col-span-2">
          <span>Message</span>
          <textarea v-model="message" required name="message" rows="5" />
        </label>
        <p v-if="error" class="text-[14px] text-[#e30000] sm:col-span-2" role="alert">{{ error }}</p>
        <button type="submit" class="btn-primary sm:col-span-2" :disabled="submitting || !isFormValid">
          {{ submitting ? 'Sending…' : 'Send message' }}
        </button>
      </div>
    </form>

    <aside class="flex flex-col rounded-[18px] bg-black p-6 text-[#f5f5f7] sm:p-10">
      <h2 class="headline-xs !text-[#f5f5f7]">Prefer to talk?</h2>
      <p class="mt-2 text-[15px] text-[#a1a1a6]">
        Urban Snap · {{ site.locationLabel }}<br />Serving Ottawa and surrounding areas.
      </p>
      <dl class="mt-8 space-y-6">
        <div>
          <dt class="text-[12px] text-[#86868b]">Call</dt>
          <dd><a :href="site.phoneHref" class="mt-1 block text-[21px] font-semibold text-[#2997ff] hover:underline">{{ site.phoneDisplay }}</a></dd>
        </div>
        <div>
          <dt class="text-[12px] text-[#86868b]">Email</dt>
          <dd><a :href="`mailto:${site.email}`" class="mt-1 block break-all text-[21px] font-semibold text-[#2997ff] hover:underline">{{ site.email }}</a></dd>
        </div>
      </dl>
      <div class="mt-auto pt-10">
        <a :href="site.whatsapp" target="_blank" rel="noreferrer" class="text-[14px] text-[#a1a1a6] hover:text-white">WhatsApp</a>
        <SocialLinks inverse inline class="mt-5 border-t border-white/10 pt-5" />
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
defineProps<{ onAlt?: boolean }>()

const site = useSite()
const clientTypes = ['Builder', 'Renovator', 'Realtor', 'Other']
const clientType = ref('Builder')
const config = useRuntimeConfig()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const subject = ref('')
const message = ref('')
const botcheck = ref('')
const formSubmitted = ref(false)
const submitting = ref(false)
const error = ref('')

const isFormValid = computed(
  () => firstName.value && lastName.value && email.value && phone.value && subject.value && message.value,
)

const submitForm = async () => {
  if (botcheck.value || !isFormValid.value) return
  submitting.value = true
  error.value = ''

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: config.public.web3formsKey,
        from_name: 'Contact Lead - Urban Snap',
        'First Name': firstName.value,
        'Last Name': lastName.value,
        Phone: phone.value,
        Email: email.value,
        'Client Type': clientType.value,
        Subject: subject.value,
        Message: message.value,
      }),
    })
    const result = await response.json()
    if (result.success) {
      formSubmitted.value = true
    } else {
      error.value = 'The message could not be sent. Please email or call us directly.'
    }
  } catch {
    error.value = 'The message could not be sent. Please email or call us directly.'
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.field {
  @apply block text-[12px] text-fg-muted;
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
</style>
