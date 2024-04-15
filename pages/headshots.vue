<template>
    <div class="mt-20">
        <div id="headshots">
            <h2 class="text-2xl font-bold text-gray-400 text-center my-10">Headshot Photography</h2>
            <div class="grid justify-center grid-cols-2 md:grid-cols-3 gap-4">
                <!-- Loop through the array of image URLs and create a div for each image -->
                <div v-for="(image, index) in headshotImageUrls" :key="index">
                    <NuxtImg provider="cloudinary" height="600" class="rounded-lg w-full" :src="getImages(image)"
                        alt="headshots" />
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>

const headshotImageUrls = [
    '/v1707770470/head_shots/ashish_verma_photography-294_mzoczz.jpg',
    '/v1707770472/head_shots/ashish_verma_photography-297_tiokar.jpg',
    '/v1707770480/head_shots/ashish_verma_photography-301_amb5ee.jpg',
    '/v1707770473/head_shots/ashish_verma_photography-293_svg6fy.jpg',
    '/v1707771597/head_shots/ashish_verma_photography-313_xfv2c8.jpg',
    '/v1707770482/head_shots/ashish_verma_photography-300_kdf5wt.jpg',
    '/v1707771599/head_shots/ashish_verma_photography-309_p6cugn.jpg',
    '/v1707771600/head_shots/ashish_verma_photography-311_qeq0am.jpg',
    '/v1707771602/head_shots/ashish_verma_photography-312_e4pevw.jpg',
    '/v1707771596/head_shots/ashish_verma_photography-310_zlqcqv.jpg',
    '/v1707799657/head_shots/MH-1_miza4x.jpg',
    '/v1707800070/head_shots/IMG_2136_sailjw.jpg'
]
function getImages(imageUrl) {
    return imageUrl;
}

</script>

<style scoped></style>