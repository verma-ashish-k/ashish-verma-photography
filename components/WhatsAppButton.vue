<template>
  <a
    :href="site.whatsapp"
    target="_blank"
    rel="noreferrer"
    class="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#20a83e] text-white shadow-soft transition hover:scale-105 sm:bottom-7 sm:right-7"
    title="Message us on WhatsApp"
  >
    <span class="sr-only">Message Urban Snap on WhatsApp</span>
    <svg viewBox="0 0 24 24" class="h-7 w-7 fill-current" aria-hidden="true">
      <path
        d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4.1-.5c0-.1 0-.4-.1-.5s-.5-1.3-.7-1.8-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3a2.4 2.4 0 0 0-.8 1.8 4.2 4.2 0 0 0 .9 2.2 9.6 9.6 0 0 0 3.7 3.5 12.6 12.6 0 0 0 1.3.5 3.1 3.1 0 0 0 1.4.1 2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .2-1.2c-.1-.1-.2-.1-.4-.2Z"
      />
    </svg>
  </a>
</template>

<script setup lang="ts">
const site = useSite()
</script>
