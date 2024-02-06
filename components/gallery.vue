<template>
    <div class="gallery">
        <div v-for="(image, index) in images" :key="index" class="gallery-item">
            <img :src="image" @click="openLightbox(index)" />
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import Lightbox from './lightbox.vue'; // assuming Lightbox is another component

const images = ref([]); // Array of image URLs
const currentIndex = ref(-1);

// Function to fetch images from a source
const fetchImages = async () => {
    // Fetch images from a server or static asset folder
    // Update the 'images' ref with URLs of fetched images
};

// Call fetchImages on component mount
onMounted(() => {
    fetchImages();
});

const openLightbox = (index) => {
    currentIndex.value = index;
};

// Include other required methods and logic
</script>
  
<style>
.gallery {
    /* Styles for mosaic layout */
}

.gallery-item {
    /* Styles for gallery items */
}

.gallery-item img {
    /* Styles for images */
}
</style>
  