<template>
    <SpeedInsights />
    <header :class="navbarClass">
        <nav class="flex justify-between items-center mx-5">
            <div>
                <NuxtLink to="/">
                    <img class="w-32 my-2 cursor-pointer" src="assets/images/logo_transparent.png"
                        alt="urban_snap_logo">
                </NuxtLink>
            </div>
            <div>
                <div class="flex justify-center items-center px-5 z-50 duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full bg-white bg-opacity-90 md:bg-transparent"
                    :class="{ 'top-[9%]': menuOpen }">
                    <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-base-100">
                        <li>
                            <a class="hover:text-gray-500" href="/">Home</a>
                        </li>
                        <li>
                            <a class="hover:text-gray-500" href="/real_estate_photography">Portfolio</a>
                        </li>
                        <li>
                            <a class="hover:text-gray-500" href="/pricing">Pricing</a>
                        </li>
                        <li>
                            <a class="hover:text-gray-500" href="/contact">Contact</a>
                        </li>
                        <li>
                            <a class="hover:text-gray-500" href="#">About</a>
                        </li>
                    </ul>
                </div>
                <IonIcon @click="toggleMenu" :name="menuIcon" class="text-3xl text-primary cursor-pointer md:hidden">
                </IonIcon>

            </div>
        </nav>
    </header>
    <div>
        <slot />
    </div>

    <footer>
        <footer class="footer p-5 bg-slate-200">
            <nav>
                <header class="footer-title flex content-start items-start">SAY HELLO!</header>
                <NuxtLink
                    class="flex items-center text-gray-400 hover:text-secondary-content transition-all ease-in-out duration-200"
                    to="mailto:letschat@urbansnap.ca"><svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"
                        class="h-3 w-3 mr-2" fill="currentColor">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M9 12a3.14 3.14 0 0 1-1.64-.462L0 7.056V14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7.056l-7.354 4.48A3.148 3.148 0 0 1 9 12z">
                            </path>
                            <path
                                d="M17.466 5.04L9.6 9.83a1.144 1.144 0 0 1-1.2 0L.534 5.04a1.09 1.09 0 0 1-.49-1.24 1.14 1.14 0 0 1 1.09-.8h15.733a1.138 1.138 0 0 1 1.09.8 1.09 1.09 0 0 1-.49 1.24z">
                            </path>
                        </g>
                    </svg> | letschat@urbansnap.ca</NuxtLink>
                <NuxtLink
                    class="flex items-center text-gray-400 hover:text-secondary-content transition-all ease-in-out duration-200"
                    to="tel:+1(403)994-7627"><svg class="h-3 w-3 mr-2" fill="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z">
                            </path>
                        </g>
                    </svg> | +1 (403) 994-7627</NuxtLink>

                <header class="footer-title flex content-start items-start mt-8">SOCIALIZE</header>
                <div class="flex gap-4 items-center justify-center">
                    <NuxtLink to="https://www.instagram.com/urban_snap_yyc/"><svg class="w-10" viewBox="0 0 32 32"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)">
                                </rect>
                                <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)">
                                </rect>
                                <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)">
                                </rect>
                                <path
                                    d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                                    fill="white"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                                    fill="white"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                                    fill="white"></path>
                                <defs>
                                    <radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)">
                                        <stop stop-color="#B13589"></stop>
                                        <stop offset="0.79309" stop-color="#C62F94"></stop>
                                        <stop offset="1" stop-color="#8A3AC8"></stop>
                                    </radialGradient>
                                    <radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)">
                                        <stop stop-color="#E0E8B7"></stop>
                                        <stop offset="0.444662" stop-color="#FB8A2E"></stop>
                                        <stop offset="0.71474" stop-color="#E2425C"></stop>
                                        <stop offset="1" stop-color="#E2425C" stop-opacity="0"></stop>
                                    </radialGradient>
                                    <radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)">
                                        <stop offset="0.156701" stop-color="#406ADC"></stop>
                                        <stop offset="0.467799" stop-color="#6A45BE"></stop>
                                        <stop offset="1" stop-color="#6A45BE" stop-opacity="0"></stop>
                                    </radialGradient>
                                </defs>
                            </g>
                        </svg></NuxtLink>
                    <NuxtLink to="https://www.facebook.com/urbansnap.ca"><svg class="w-8" viewBox="0 0 48 48"
                            version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <title>Facebook-color</title>
                                <desc>Created with Sketch.</desc>
                                <defs> </defs>
                                <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#4460A0">
                                        <path
                                            d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                                            id="Facebook"> </path>
                                    </g>
                                </g>
                            </g>
                        </svg></NuxtLink>
                    <NuxtLink to="https://www.youtube.com/@Urban_Snap"><svg class="w-10" viewBox="0 -7 48 48"
                            version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            fill="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <title>Youtube-color</title>
                                <desc>Created with Sketch.</desc>
                                <defs> </defs>
                                <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Color-" transform="translate(-200.000000, -368.000000)" fill="#CE1312">
                                        <path
                                            d="M219.044,391.269916 L219.0425,377.687742 L232.0115,384.502244 L219.044,391.269916 Z M247.52,375.334163 C247.52,375.334163 247.0505,372.003199 245.612,370.536366 C243.7865,368.610299 241.7405,368.601235 240.803,368.489448 C234.086,368 224.0105,368 224.0105,368 L223.9895,368 C223.9895,368 213.914,368 207.197,368.489448 C206.258,368.601235 204.2135,368.610299 202.3865,370.536366 C200.948,372.003199 200.48,375.334163 200.48,375.334163 C200.48,375.334163 200,379.246723 200,383.157773 L200,386.82561 C200,390.73817 200.48,394.64922 200.48,394.64922 C200.48,394.64922 200.948,397.980184 202.3865,399.447016 C204.2135,401.373084 206.612,401.312658 207.68,401.513574 C211.52,401.885191 224,402 224,402 C224,402 234.086,401.984894 240.803,401.495446 C241.7405,401.382148 243.7865,401.373084 245.612,399.447016 C247.0505,397.980184 247.52,394.64922 247.52,394.64922 C247.52,394.64922 248,390.73817 248,386.82561 L248,383.157773 C248,379.246723 247.52,375.334163 247.52,375.334163 L247.52,375.334163 Z"
                                            id="Youtube"> </path>
                                    </g>
                                </g>
                            </g>
                        </svg></NuxtLink>
                </div>

            </nav>
            <nav>
                <header class="footer-title">ABOUT</header>
                <p class="w-60  text-gray-400 hover:text-secondary-content transition-all ease-in-out duration-200">
                    Elevate your Calgary real estate listings with Urban Snap, the premier photography service
                    specializing in captivating imagery tailored to the city's dynamic market. <br><br>
                    Our expert team combines
                    local expertise with meticulous attention to detail, ensuring each property shines online. From
                    downtown condos to suburban homes, our personalized approach, quick turnaround times, and commitment
                    to excellence set us apart.<br><br>
                    Trust Urban Snap to enhance your listings and attract potential buyers.
                    Contact us today to experience the difference.
                </p>
            </nav>
            <nav>
                <header class="footer-title">SERVICES</header>
                <NuxtLink to=""
                    class="flex items-center text-gray-400 hover:text-secondary-content transition-all ease-in-out duration-200">
                    Real Estate Photography</NuxtLink>
                <NuxtLink to=""
                    class="flex items-center text-gray-400 hover:text-secondary-content transition-all ease-in-out duration-200">
                    Video Tours</NuxtLink>
                <NuxtLink to=""
                    class="flex items-center text-gray-400 hover:text-secondary-content transition-all ease-in-out duration-200">
                    iGuide Floor Plans</NuxtLink>
                <NuxtLink to=""
                    class="flex items-center text-gray-400 hover:text-secondary-content transition-all ease-in-out duration-200">
                    Aerial Imaging</NuxtLink>
                <NuxtLink to=""
                    class="flex items-center text-gray-400 hover:text-secondary-content transition-all ease-in-out duration-200">
                    Virtual Tours</NuxtLink>
                <NuxtLink to=""
                    class="flex items-center text-gray-400 hover:text-secondary-content transition-all ease-in-out duration-200">
                    Twilight Photography</NuxtLink>
                <NuxtLink to=""
                    class="flex items-center text-gray-400 hover:text-secondary-content transition-all ease-in-out duration-200">
                    Commercial Photography</NuxtLink>
                <NuxtLink to=""
                    class="flex items-center text-gray-400 hover:text-secondary-content transition-all ease-in-out duration-200">
                    Headshots</NuxtLink>
            </nav>
            <nav>
                <header class="footer-title">NOT SO FUN STUFF</header>
                <NuxtLink to="/termsConditions"
                    class="flex items-center text-gray-400 hover:text-secondary-content transition-all ease-in-out duration-200">
                    Terms & Conditions</NuxtLink>
                <NuxtLink to="/legal"
                    class="flex items-center text-gray-400 hover:text-secondary-content transition-all ease-in-out duration-200">
                    Legal</NuxtLink>
                <NuxtLink to="/privacyPolicy"
                    class="flex items-center text-gray-400 hover:text-secondary-content transition-all ease-in-out duration-200">
                    Cookie / Privacy Policy</NuxtLink>

            </nav>

        </footer>
        <div class="bg-neutral text-white h-10 flex justify-center">
            <div class="flex justify-center items-center">
                <p class="text-secondary-content">© 2018-2024 Urban Snap Inc. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script>
import { IonIcon } from '@ionic/vue';
import { SpeedInsights } from '@vercel/speed-insights/vue';

export default {
    data() {
        return {
            menuOpen: false,
            isScrolled: false, // Flag to track if user has scrolled
        };
    },
    computed: {
        menuIcon() {
            return this.menuOpen ? 'close' : 'menu';
        },
        navbarClass() {
            return {
                'bg-white bg-opacity-80 transition-all ease-in-out duration-300': !this.isScrolled, // Original color when not scrolled
                'bg-secondary bg-opacity-80 transition-all ease-in-out duration-300': this.isScrolled, // New color when scrolled
                'md:fixed md:left-0 md:top-0 w-full z-30': true, // Add fixed positioning and other classes
            };
        },
    },
    mounted() {
        // Listen for scroll events
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        // Remove scroll event listener to prevent memory leaks
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        handleScroll() {
            // Check if user has scrolled beyond the top of the page
            this.isScrolled = window.scrollY > 0;
        },
    },
    components: {
        IonIcon
    }
};
</script>

<style scoped></style>