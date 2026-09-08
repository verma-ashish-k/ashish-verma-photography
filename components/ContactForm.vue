<template>
  <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
    <form class="card-surface p-6 sm:p-8" @submit.prevent="submitForm">
      <p class="eyebrow">Book a shoot</p>
      <h2 class="mt-2 font-display text-3xl text-ink-900">Send us a message</h2>
      <p class="mt-3 text-sm text-ink-500">Tell us the address, square footage, and the services you need.</p>

      <div v-if="formSubmitted" class="mt-8 rounded-2xl bg-cream p-6 text-ink-800">
        Thank you for your message. We will get back to you soon.
      </div>

      <div v-else class="mt-6 grid gap-4 sm:grid-cols-2">
        <input type="text" name="botcheck" class="hidden" tabindex="-1" autocomplete="off" v-model="botcheck" />
        <label class="block text-sm font-medium text-ink-700">
          First name
          <input v-model="firstName" required class="input" type="text" name="firstName" autocomplete="given-name" />
        </label>
        <label class="block text-sm font-medium text-ink-700">
          Last name
          <input v-model="lastName" required class="input" type="text" name="lastName" autocomplete="family-name" />
        </label>
        <label class="block text-sm font-medium text-ink-700">
          Email
          <input v-model="email" required class="input" type="email" name="email" autocomplete="email" />
        </label>
        <label class="block text-sm font-medium text-ink-700">
          Phone
          <input v-model="phone" required class="input" type="tel" name="phone" autocomplete="tel" />
        </label>
        <label class="block text-sm font-medium text-ink-700 sm:col-span-2">
          Subject
          <input v-model="subject" required class="input" type="text" name="subject" />
        </label>
        <label class="block text-sm font-medium text-ink-700 sm:col-span-2">
          Message
          <textarea v-model="message" required class="input min-h-32" name="message" />
        </label>
        <p v-if="error" class="sm:col-span-2 text-sm text-coral">{{ error }}</p>
        <button type="submit" class="btn-primary sm:col-span-2" :disabled="submitting || !isFormValid">
          {{ submitting ? 'Sending…' : 'Send message' }}
        </button>
      </div>
    </form>

    <aside class="rounded-3xl bg-ink-900 p-6 text-white sm:p-8">
      <p class="eyebrow text-coral-light">Studio</p>
      <h2 class="mt-2 font-display text-3xl">Urban Snap</h2>
      <p class="mt-3 text-white/70">Real Estate Photography<br />{{ site.locationLabel }}</p>
      <div class="mt-8 space-y-5 text-sm">
        <div>
          <p class="text-white/45">Call us</p>
          <a :href="site.phoneHref" class="mt-1 block text-lg text-white">{{ site.phoneDisplay }}</a>
        </div>
        <div>
          <p class="text-white/45">Email</p>
          <a :href="`mailto:${site.email}`" class="mt-1 block text-lg text-white">{{ site.email }}</a>
        </div>
      </div>
      <div class="mt-8 flex flex-wrap gap-4 text-sm">
        <a :href="site.social.facebook" target="_blank" rel="noreferrer" class="text-white/70 hover:text-white">Facebook</a>
        <a :href="site.social.instagram" target="_blank" rel="noreferrer" class="text-white/70 hover:text-white">Instagram</a>
        <a :href="site.whatsapp" target="_blank" rel="noreferrer" class="text-white/70 hover:text-white">WhatsApp</a>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
const site = useSite()
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
.input {
  @apply mt-2 w-full rounded-2xl border border-ink-900/10 bg-cream px-4 py-3 text-ink-900 outline-none transition placeholder:text-ink-300 focus:border-coral focus:bg-white;
}
</style>
