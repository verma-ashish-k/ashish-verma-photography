<template>
    <div class="flex min-h-screen justify-center items-center">

        <div class="container mx-auto my-4 px-4 lg:px-20">
            <form @submit.prevent="submitForm">
                <div
                    class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-gradient-to-r from-red-500 to-orange-500 bg-opacity-70">
                    <div class="flex">
                        <h1 class="font-bold text-3xl">Send Us a message</h1>
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
                        <button v-if="!formSubmitted" type="submit"
                            class="btn btn-outline btn-secondary disabled:btn-neutral" :disabled="!isFormValid">
                            Send Message
                        </button>

                    </div>
                    <!-- Show thank you message after form submission -->
                    <div v-if="formSubmitted" class="text-orange-400 w-full">
                        Thank you for your message!
                        <br />
                        We will get back to you soon.
                    </div>
                </div>
            </form>

            <div
                :class="'w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-gradient-to-r from-cyan-500 to-blue-500 bg-opacity-80 rounded-2xl'">
                <div class="flex flex-col text-white">

                    <div class="flex my-4 w-2/3 lg:w-2/3">
                        <div class="flex flex-col">
                            <img src="/static/logo_transparent.png" class="w-36" alt="urban_snap_logo" />
                            <p class="whitespace-nowrap">Real Estate Photography Calgary <br />Alberta</p>
                        </div>
                    </div>

                    <div class="flex my-4 w-2/3 lg:w-1/2">
                        <div class="flex flex-col">
                            <h2 class="text-xl">Call us</h2>
                            <a class="" href="tel:403-994-7627">
                                <p class=" whitespace-nowrap">403-994-SNAP(7627)</p>
                            </a>
                        </div>

                    </div>
                    <div class="flex my-4 w-2/3 lg:w-1/2">
                        <div class="flex flex-col">
                            <h2 class="text-xl">Email</h2>
                            <a class="" href="mailto:letschat@urbansnap.ca">
                                <p class=" whitespace-nowrap">letschat@urbansnap.ca</p>
                            </a>
                        </div>

                    </div>

                    <div class="flex my-4 w-2/3 lg:w-1/2">
                        <a href="https://www.facebook.com/urbansnap.ca" target="_blank" rel="noreferrer"
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
                        <a href="https://www.instagram.com/urban_snap_yyc/" target="_blank" rel="noreferrer"
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
                        <a href="https://wa.me/message/JIDTIORNF7ZSG1" target="_blank" rel="noreferrer"
                            class="rounded-full h-8 w-8 inline-block mx-1 text-center pt-1">
                            <svg height="" width="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"
                                fill="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path style="fill:#ffffff;"
                                        d="M0,512l35.31-128C12.359,344.276,0,300.138,0,254.234C0,114.759,114.759,0,255.117,0 S512,114.759,512,254.234S395.476,512,255.117,512c-44.138,0-86.51-14.124-124.469-35.31L0,512z">
                                    </path>
                                    <path style="fill:#55CD6C;"
                                        d="M137.71,430.786l7.945,4.414c32.662,20.303,70.621,32.662,110.345,32.662 c115.641,0,211.862-96.221,211.862-213.628S371.641,44.138,255.117,44.138S44.138,137.71,44.138,254.234 c0,40.607,11.476,80.331,32.662,113.876l5.297,7.945l-20.303,74.152L137.71,430.786z">
                                    </path>
                                    <path style="fill:#FEFEFE;"
                                        d="M187.145,135.945l-16.772-0.883c-5.297,0-10.593,1.766-14.124,5.297 c-7.945,7.062-21.186,20.303-24.717,37.959c-6.179,26.483,3.531,58.262,26.483,90.041s67.09,82.979,144.772,105.048 c24.717,7.062,44.138,2.648,60.028-7.062c12.359-7.945,20.303-20.303,22.952-33.545l2.648-12.359 c0.883-3.531-0.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-0.883-10.593,2.648l-22.069,28.248 c-1.766,1.766-4.414,2.648-7.062,1.766c-15.007-5.297-65.324-26.483-92.69-79.448c-0.883-2.648-0.883-5.297,0.883-7.062 l21.186-23.834c1.766-2.648,2.648-6.179,1.766-8.828l-25.6-57.379C193.324,138.593,190.676,135.945,187.145,135.945">
                                    </path>
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
            <a title="Message us!" href="https://wa.me/message/JIDTIORNF7ZSG1"
                class="block w-10 h-10 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                <UTooltip text="Reach us on WhatsApp" :popper="{ arrow: true }">
                    <svg height="" width="" version=" 1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"
                        fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path style="fill:#20A83E;"
                                d="M437.019,74.98C388.668,26.628,324.38,0,256,0S123.333,26.628,74.98,74.98S0,187.62,0,256 c0,51.485,15.154,100.938,43.874,143.34L0.69,500.106c-1.343,3.134-0.607,6.966,1.798,9.381c2.495,2.506,6.519,3.206,9.714,1.684 l96.358-45.885C151.858,495.866,202.721,512,256,512c68.38,0,132.668-26.628,181.019-74.98C485.371,388.667,512,324.38,512,256 S485.371,123.333,437.019,74.98z">
                            </path>
                            <circle style="fill:#E5E5E5;" cx="256" cy="256" r="213.333"></circle>
                            <circle style="fill:#FFFFFF;" cx="256" cy="256" r="187.733"></circle>
                            <path style="fill:#20A83E;"
                                d="M392.391,342.641l-7.673-41.561c-0.635-3.432-3.295-6.133-6.718-6.818l-60.339-12.067 c-2.802-0.559-5.691,0.317-7.709,2.334l-24.514,24.514c-41.302-18.507-64.226-41.478-84.396-84.555l24.435-24.436 c2.018-2.017,2.893-4.91,2.334-7.708l-12.068-60.34c-0.685-3.423-3.386-6.084-6.819-6.718l-41.561-7.673 c-1.138-0.21-2.31-0.187-3.44,0.07c-10.974,2.494-20.987,8.023-28.956,15.994c-13.801,13.801-19.075,33.938-15.252,58.237 c6.418,40.801,26.409,97.583,63.289,134.61l0.502,0.5c37.001,36.855,93.782,56.846,134.583,63.265 c5.14,0.809,10.092,1.21,14.838,1.21c17.694,0,32.517-5.581,43.4-16.462c7.97-7.971,13.5-17.984,15.993-28.957 C392.578,344.951,392.602,343.78,392.391,342.641z">
                            </path>
                            <path style="fill:#189433;"
                                d="M349.996,376.428c-4.747,0-9.698-0.401-14.838-1.21c-40.801-6.419-97.583-26.41-134.583-63.265 l-0.502-0.5c-36.88-37.027-56.87-93.809-63.289-134.61c-3.323-21.118,0.236-39.088,10.283-52.492 c-4.388,2.565-8.458,5.689-12.097,9.328c-13.801,13.801-19.075,33.938-15.252,58.237c6.418,40.801,26.409,97.583,63.289,134.61 l0.502,0.5c37.001,36.855,93.782,56.846,134.583,63.265c5.14,0.809,10.092,1.21,14.838,1.21c17.694,0,32.517-5.581,43.4-16.462 c1.974-1.974,3.797-4.075,5.463-6.284C372.747,373.836,362.037,376.428,349.996,376.428z">
                            </path>
                        </g>
                    </svg>
                </UTooltip>
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Define reactive variables
const fromName = ref('Contact Lead - Urban Snap');
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
