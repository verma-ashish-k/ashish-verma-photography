<template>
    <div v-if="isVisible" class="lightbox">
        <button class="close" @click="closeModal">×</button>
        <Transition name="slide" mode="out-in">
            <NuxtImg key="currentImage" provider="cloudinary" loading="lazy"
                class="w-[80%] h-[80vh] object-contain border rounded-xl bg-black border-transparent"
                :src="currentImage" alt="Displayed Image" />
        </Transition>

        <!-- Left arrow -->
        <button class="arrow left-arrow" @click="prevImage">&lt;</button>

        <!-- Right arrow -->
        <button class="arrow right-arrow" @click="nextImage">&gt;</button>

        <!-- Thumbnail carousel -->
        <div class="thumbnails-container">
            <div class="thumbnails">
                <div v-for="(image, index) in realEstateImageUrls" :key="index"
                    :class="{ 'thumbnail': true, 'active-thumbnail': index === currentImageIndex }"
                    @click="selectImage(index)">
                    <NuxtImg provider="cloudinary" loading="lazy" class="thumbnail-img" :src="image" alt="Thumbnail" />
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, computed, onMounted, onUnmounted, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
    realEstateImageUrls: Array,
    isVisible: Boolean,
    currentImageIndex: Number,
    autoStartSlideshow: Boolean // New prop to control slideshow start
});

const emit = defineEmits(['close', 'update:index']);

const currentImageIndex = ref(props.currentImageIndex);
const currentImage = computed(() => props.realEstateImageUrls[currentImageIndex.value]);

function closeModal() {
    emit('close');
}

function nextImage() {
    currentImageIndex.value = (currentImageIndex.value + 1) % props.realEstateImageUrls.length;
}

function prevImage() {
    currentImageIndex.value = (currentImageIndex.value + props.realEstateImageUrls.length - 1) % props.realEstateImageUrls.length;
}

const autoplay = ref(null);

function startSlideshow() {
    stopSlideshow();  // Ensure no multiple intervals
    autoplay.value = setInterval(nextImage, 5000);
}

function stopSlideshow() {
    clearInterval(autoplay.value);
}

function selectImage(index) {
    currentImageIndex.value = index;
}

function scrollToThumbnail() {
    const thumbnailElement = document.querySelector('.thumbnails .thumbnail:nth-child(' + (currentImageIndex.value + 1) + ')');
    if (thumbnailElement) {
        thumbnailElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
}

watch(() => currentImageIndex.value, scrollToThumbnail);

onMounted(() => {
    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') nextImage();
        if (event.key === 'ArrowLeft') prevImage();
        if (event.key === 'Escape') closeModal();
    });
    if (props.autoStartSlideshow && props.isVisible) {  // Start slideshow only if both conditions are met
        startSlideshow();
    }
});

onUnmounted(() => {
    window.removeEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') nextImage();
        if (event.key === 'ArrowLeft') prevImage();
        if (event.key === 'Escape') closeModal();
    });
    stopSlideshow();
});

// Watch for changes in visibility prop to start/stop slideshow accordingly
watch(() => props.isVisible, (newVal) => {
    if (newVal) {
        startSlideshow();
    } else {
        stopSlideshow();
    }
});
</script>



<style scoped>
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.close,
.next,
.prev {
    cursor: pointer;
    padding: 10px;
    color: white;
    font-size: 24px;
    background: none;
    border: none;
}

.close {
    position: absolute;
    top: 20px;
    right: 20px;
}

.next,
.prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.next {
    right: 20px;
}

.prev {
    left: 20px;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
    transform: translateX(0);
    opacity: 1;
}

.thumbnails-container {
    width: 100%;

    overflow-x: auto;
}

.thumbnails {
    display: inline-flex;

}

.thumbnail {
    flex: none;
    width: 80px;
    height: 60px;
    margin-right: 10px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.thumbnail-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
}

.thumbnail:hover {
    transform: scale(1.1);
}

.active-thumbnail {
    border: 2px solid orangered;
    border-radius: 6px;
    transform: scale(1.3);
}

.arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 24px;
    border: none;
    cursor: pointer;
    z-index: 999;
}

.left-arrow {
    left: 20px;
}

.right-arrow {
    right: 20px;
}
</style>
