<template>
    <div>
        <div class="hero min-h-screen mb-5">

            <!-- Hero Content -->
            <div class="hero-content text-center text-base-100 mt-96">
                <div class="max-w-7xl">
                    <span
                        class="mb-5 text-7xl title font-extrabold bg-gradient-to-br from-orange-400 to-orange-700 text-transparent bg-clip-text"
                        :key="currentTitle">{{
                            currentTitle }}</span><br />
                    <span class="mt-10 text-5xl font-bold">in {{ location }}</span>
                    <p class="mb-5 mt-2 text-2xl">Ashish is an experienced and talented Photographer and provides his
                        services
                        in {{
                            location }}
                        and surrounding areas.</p>
                    <div class="flex justify-center gap-5">
                        <button class="btn btn-outline btn-accent w-1/4">View Portfolio</button>
                        <button class="btn btn-outline btn-accent w-1/4">Book Now</button>
                    </div>

                </div>
            </div>

            <!-- Video Background -->
            <video :src="currentVideoSrc" @ended="changeVideo" autoplay loop muted
                class="absolute right-0 bottom-0 min-w-full min-h-full w-auto h-auto object-cover -z-10">
                Your browser does not support the video tag.
            </video>

            <div class="animate-bounce absolute bottom-0">
                <NuxtLink to="#sec-2" ref="nextSectionRef" @click="scrollToNextSection()">
                    <svg class="w-16" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-51.2 -51.2 614.40 614.40" xml:space="preserve"
                        fill="#000000" stroke="#000000" stroke-width="0.00512" transform="rotate(0)">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
                            stroke-width="7.168000000000001"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <path style="fill:#ff8800;"
                                    d="M256,310.857c-30.299,0-54.857,24.558-54.857,54.857c0,30.299,24.558,54.857,54.857,54.857 c30.299,0,54.857-24.558,54.857-54.857C310.857,335.415,286.299,310.857,256,310.857">
                                </path>
                                <path style="fill:#ff8800;"
                                    d="M356.571,201.143c-30.299,0-54.857,24.558-54.857,54.857c0,30.299,24.558,54.857,54.857,54.857 c30.299,0,54.857-24.558,54.857-54.857C411.429,225.701,386.871,201.143,356.571,201.143">
                                </path>
                                <path style="fill:#ff8800;"
                                    d="M457.143,91.429c-30.299,0-54.857,24.558-54.857,54.857s24.558,54.857,54.857,54.857 c30.299,0,54.857-24.558,54.857-54.857S487.442,91.429,457.143,91.429">
                                </path>
                                <path style="fill:#ff8800;"
                                    d="M155.429,201.143c-30.299,0-54.857,24.558-54.857,54.857c0,30.299,24.558,54.857,54.857,54.857 s54.857-24.558,54.857-54.857C210.286,225.701,185.728,201.143,155.429,201.143">
                                </path>
                                <path style="fill:#ff8800;"
                                    d="M54.857,91.429C24.558,91.429,0,115.986,0,146.286s24.558,54.857,54.857,54.857 s54.857-24.558,54.857-54.857S85.157,91.429,54.857,91.429">
                                </path>
                            </g>
                        </g>
                    </svg>

                </NuxtLink>
            </div>
        </div>

    </div>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);
//typing titles, updated as needed
const titles = [
    'Architectural Photography',
    'Interior Photography',
    'Exterior Photography',
    'Twilight Photography',
    'Aerial Photography',
    'Property Photography',
    'Real Estate Photography',
    'Real Estate Videography',
    'Real Estate Marketing',
    'Virtual Tours',
    'Professional Headshots',
];


const scrollToNextSection = () => {
    gsap.to(window, { duration: 2, scrollTo: sec - 2 });
};

const currentTitle = ref('');
const location = ref('Calgary'); // Default location
let titleIndex = 0;
let charIndex = 0;
let typingDelay = 100; // milliseconds per character
let nextTitleDelay = 1000; // milliseconds before switching to the next title
let typingInterval;

// Video Background
import livingRoomRender from '~/assets/videos/living-room-render.mp4';
import reVideo from '~/assets/videos/re-video.mp4';
import livingRoom from '~/assets/videos/living-room.mp4';
import industrialLivingRoom from '~/assets/videos/industrial-living-room.mp4';

const videoSources = [livingRoomRender, reVideo, livingRoom, industrialLivingRoom];
const currentVideoSrc = ref(videoSources[0]);
let currentVideoIndex = 0;




const userAgent = "AshishVermaPhotography ('hello@ashishverma.ca', https://ashishvermaphotography.com )";

// Calculate distance between two points
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Fetch location from OpenStreetMap Nominatim API
async function fetchLocation(lat, lon) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'User-Agent': userAgent }
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        return data.address.city || data.address.town || data.address.village || 'Calgary';
    } catch (error) {
        console.error('Error fetching location:', error);
        return 'Calgary';
    }
}

// Update user location
async function updateLocation() {
    const cachedLocation = localStorage.getItem('userLocation');
    if (cachedLocation) {
        location.value = cachedLocation;
    } else if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const userLat = position.coords.latitude;
            const userLon = position.coords.longitude;
            const calgaryLat = 51.0447;
            const calgaryLon = -114.0719;
            const distance = calculateDistance(userLat, userLon, calgaryLat, calgaryLon);

            if (distance <= 200) { // User within 200km range
                const cityName = await fetchLocation(userLat, userLon);
                location.value = cityName;
                localStorage.setItem('userLocation', cityName);
            }
        }, () => {
            location.value = 'Calgary';
        });
    }
}
//typing title effect
const typeInTitle = () => {
    if (charIndex < titles[titleIndex].length) {
        currentTitle.value += titles[titleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeInTitle, typingDelay);
    } else {
        setTimeout(typeOutTitle, nextTitleDelay);
    }
};

const typeOutTitle = () => {
    if (charIndex > 0) {
        currentTitle.value = currentTitle.value.substring(0, currentTitle.value.length - 1);
        charIndex--;
        setTimeout(typeOutTitle, typingDelay);
    } else {
        prepareNextTitle();
    }
};

const prepareNextTitle = () => {
    titleIndex = (titleIndex + 1) % titles.length;
    setTimeout(typeInTitle, nextTitleDelay);
};

const changeVideo = () => {
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    currentVideoSrc.value = videoSources[currentVideoIndex];
};
onMounted(() => {
    typeInTitle();
    updateLocation();
});

onUnmounted(() => {
    clearInterval(typingInterval);
});

useHead({
    title: 'Ashish Verma Photography | Calgary, Alberta',
    meta: [
        {
            name: 'description',
            content: 'Ashish Verma is a photographer based in Calgary, Alberta. He specializes in Architectural photography and loves to do portraits and event photography.'
        },
        {
            name: 'keywords',
            content: 'Photography, Photographer, Airdrie, Alberta, Calgary, Edmonton, Surrey, Vancouver, Architectural, Portraits, Event'
        }
    ]
});
</script>


  
<style scoped>
span {
    transition: all 1s ease-in-out;
}

body {
    scroll-behavior: smooth;
}
</style>

  