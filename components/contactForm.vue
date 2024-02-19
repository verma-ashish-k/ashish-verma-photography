<template>
    <div class="flex min-h-screen justify-center items-center my-20">

        <div class="container mx-auto my-4 px-4 lg:px-20">
            <form @submit.prevent="submitForm">
                <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                    <div class="flex">
                        <h1 class="font-bold text-3xl">Send me a message</h1>
                    </div>
                    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input type="hidden" name="from_name" v-model="fromName">
                        <input
                            class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" name="firstName" placeholder="First Name" required v-model="firstName"
                            :disabled="formSubmitted" />
                        <input
                            class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" name="lastName" placeholder="Last Name" required v-model="lastName"
                            :disabled="formSubmitted" />
                        <input
                            class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="email" name="email" placeholder="Email" required v-model="email"
                            :disabled="formSubmitted" />
                        <input
                            class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="number" name="phone" placeholder="Phone" required v-model="phone"
                            :disabled="formSubmitted" />
                    </div>
                    <input
                        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text" name="subject" placeholder="Subject" required v-model="subject"
                        :disabled="formSubmitted" />
                    <div class="my-4">
                        <textarea placeholder="Message"
                            class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            required v-model="message" :disabled="formSubmitted"></textarea>
                    </div>
                    <div class="my-2 w-1/2 lg:w-1/4">
                        <input type="checkbox" name="botcheck" class="hidden" style="display: none;" v-model="botcheck">
                        <!-- Show button only if form not submitted -->
                        <button v-if="!formSubmitted" type="submit" class="btn btn-outline btn-accent"
                            :disabled="!isFormValid">
                            Send Message
                        </button>

                    </div>
                    <!-- Show thank you message after form submission -->
                    <div v-if="formSubmitted" class="text-orange-400 w-full">
                        Thank you for your message!
                        <br />
                        I will get back to you soon.
                    </div>
                </div>
            </form>

            <div :class="'w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-accent bg-opacity-80 rounded-2xl'">
                <div class="flex flex-col text-white">

                    <div class="flex my-4 w-2/3 lg:w-2/3">
                        <div class="flex flex-col">
                            <h2 class="text-xl">Ashish Verma Photography</h2>
                            <p class="whitespace-nowrap">Calgary <br />Alberta</p>
                        </div>
                    </div>

                    <div class="flex my-4 w-2/3 lg:w-1/2">
                        <div class="flex flex-col">
                            <h2 class="text-xl">Call Me</h2>
                            <p class=" whitespace-nowrap">(368) 993-7999</p>
                        </div>
                    </div>

                    <div class="flex my-4 w-2/3 lg:w-1/2">
                        <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer"
                            class="rounded-full h-8 w-8 inline-block mx-1 text-center pt-1">
                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fill="#1877F2"
                                        d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z">
                                    </path>
                                    <path fill="#ffffff"
                                        d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z">
                                    </path>
                                </g>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer"
                            class="rounded-full h-8 w-8 inline-block mx-1 text-center pt-1">
                            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <circle cx="512" cy="512" r="512" style="fill:#e4405f"></circle>
                                    <path
                                        d="M512 256c-69.5 0-78.2.3-105.5 1.5-27.3 1.3-45.8 5.6-62.1 11.9-16.8 6.5-31.1 15.3-45.4 29.5s-23 28.5-29.5 45.4c-6.3 16.3-10.6 34.9-11.9 62.1-1.3 27.3-1.5 36-1.5 105.5s.3 78.2 1.5 105.5c1.3 27.2 5.6 45.8 11.9 62.1 6.5 16.8 15.3 31.1 29.5 45.4 14.2 14.2 28.5 23 45.4 29.5 16.3 6.3 34.9 10.6 62.1 11.9 27.3 1.3 36 1.5 105.5 1.5s78.2-.3 105.5-1.5c27.2-1.3 45.8-5.6 62.1-11.9 16.8-6.5 31.1-15.3 45.4-29.5 14.2-14.2 23-28.5 29.5-45.4 6.3-16.3 10.6-34.9 11.9-62.1 1.3-27.3 1.5-36 1.5-105.5s-.3-78.2-1.5-105.5c-1.3-27.2-5.6-45.8-11.9-62.1-6.5-16.8-15.3-31.1-29.5-45.4-14.2-14.2-28.5-23-45.4-29.5-16.3-6.3-34.9-10.6-62.1-11.9-27.3-1.2-36-1.5-105.5-1.5zm0 46.1c68.3 0 76.5.3 103.5 1.5 25 1.2 38.5 5.3 47.5 8.9 12 4.6 20.5 10.2 29.5 19.1 8.9 9 14.5 17.5 19.1 29.5 3.5 9 7.7 22.5 8.8 47.5 1.2 27 1.5 35.1 1.5 103.5s-.3 76.5-1.6 103.5c-1.3 25-5.5 38.5-9 47.5-4.8 12-10.2 20.5-19.2 29.5-8.9 8.9-17.6 14.5-29.4 19.1-9 3.5-22.7 7.7-47.7 8.8-27.2 1.2-35.2 1.5-103.7 1.5s-76.5-.3-103.7-1.6c-25-1.3-38.7-5.5-47.7-9-12.1-4.8-20.5-10.2-29.4-19.2-9-8.9-14.7-17.6-19.2-29.4-3.5-9-7.7-22.7-9-47.7-1-26.9-1.3-35.2-1.3-103.3 0-68.2.3-76.5 1.3-103.7 1.3-25 5.4-38.7 9-47.7 4.5-12.2 10.2-20.5 19.2-29.5 8.9-8.9 17.3-14.7 29.4-19.2 9-3.5 22.4-7.7 47.4-9 27.2-1 35.2-1.3 103.7-1.3l1 .7zm0 78.4c-72.6 0-131.5 58.9-131.5 131.5S439.4 643.5 512 643.5 643.5 584.6 643.5 512 584.6 380.5 512 380.5zm0 216.8c-47.1 0-85.3-38.2-85.3-85.3s38.2-85.3 85.3-85.3 85.3 38.2 85.3 85.3-38.2 85.3-85.3 85.3zm167.4-221.9c0 17-13.8 30.7-30.7 30.7-17 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7c16.9-.1 30.7 13.7 30.7 30.7z"
                                        style="fill:#fff"></path>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
            <a title="call me" href="tel:+1-368-993-7999"
                class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                <svg height="" width="" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#ff961f"
                    stroke="#ff961f">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <path class="st0"
                                d="M255.998,0.002C114.606,0.012,0.01,114.604,0,256c0.01,141.406,114.65,255.328,255.926,255.998h0.334 l0.297-0.009c27.124,0.038,49.507-8.527,64.961-22.594c15.468-14.01,23.727-33.254,23.708-52.736 c0.02-9.148-1.914-18.306-5.521-27.024c6.086-3.464,10.143-6.612,11.301-7.444c4.152-2.957,16-18.766,7.693-31.79 c-8.344-13.014-38.042-42.678-46.152-47.702c-8.086-5.015-21.598-0.124-28.105,9.426c-6.526,9.55-11.674,6.689-11.674,6.689 s-18.516-14.957-44.124-66.621c-25.607-51.694-26.263-75.454-26.263-75.454s0.833-5.847,12.388-5.263 c11.53,0.621,23.598-7.168,24.516-16.66c0.928-9.464-4.698-51.091-10-65.598c-5.316-14.516-25.062-14.65-29.928-13.138 c-4.89,1.502-55.033,13.712-59.014,66.21c-3.966,52.506,9.565,100.18,28.943,139.309c19.387,39.119,49.128,78.765,93.3,107.406 c17.89,11.598,35.058,13.1,49.493,10.67c2.483,5.54,3.718,11.291,3.746,16.985c-0.028,11.292-4.621,22.354-14.066,30.966 c-9.469,8.564-24.071,14.928-45.2,14.967l-0.516,0.009C130.797,481.96,29.387,381.09,29.397,256 c0.01-62.621,25.339-119.186,66.367-160.237c41.053-41.023,97.612-66.354,160.234-66.364c62.621,0.01,119.181,25.34,160.232,66.364 c41.033,41.052,66.354,97.606,66.373,160.237c-0.01,38.67-9.666,74.966-26.698,106.784c-9.531,17.837-21.397,34.23-35.177,48.812 c-5.569,5.905-5.301,15.206,0.594,20.776c5.894,5.578,15.205,5.32,20.784-0.584c15.54-16.46,28.937-34.976,39.712-55.139 C501.071,340.717,512,299.589,512,256C511.98,114.604,397.389,0.012,255.998,0.002z">
                            </path>
                        </g>
                    </g>
                </svg>
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Define reactive variables
const fromName = ref('Contact Lead - Ashish Verma Photography');
const firstName = ref('');
const lastName = ref('');

const email = ref('');
const phone = ref('');

const subject = ref('');
const message = ref('');

const botcheck = ref('');

const config = useRuntimeConfig();

const formSubmitted = ref(false);

const resetForm = () => {
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    phone.value = '';
    subject.value = '';
    message.value = '';
    botcheck.value = '';
    fromName.value = '';
};

// Computed property to check if all fields are populated
const isFormValid = computed(() => {
    return firstName.value && lastName.value && email.value && phone.value && subject.value && message.value;
});

// Method for form submission
const submitForm = async () => {

    // Check if honeypot field is filled (indicating a bot submission)
    if (botcheck.value) {
        console.log('Honeypot field is filled. Likely a bot submission.');
        return; // Do not process the form
    }
    if (!isFormValid.value) return; // Ensure all fields are filled
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                access_key: config.public.apiKey,
                from_name: fromName.value,
                "First Name": firstName.value,
                "Last Name": lastName.value,
                "Phone": phone.value,
                "Email": email.value,
                "Subject": subject.value,
                "Message": message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log("Message Success!", result);
            formSubmitted.value = true;
            resetForm();
        } else {
            // Handle failure (e.g., show an error message)
            console.error('Form submission failed:', result);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};
</script>


<style scoped>
/* Your styles here */
</style>
