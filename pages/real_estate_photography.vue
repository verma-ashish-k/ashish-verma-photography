<template>
    <div class="mt-20">
        <div id="real-estate">
            <h2 class="text-2xl font-bold text-gray-400 text-center my-10">Real Estate Photography</h2>
            <div class="grid justify-center grid-cols-2 md:grid-cols-3 gap-4">
                <!-- Loop through the array of image URLs and create a div for each image -->
                <div v-for="(image, index) in realEstateImageUrls" :key="index">
                    <NuxtImg provider="cloudinary" loading="lazy" class="h-auto max-w-full rounded-lg"
                        :src="getImages(image)" alt="real-estate"></NuxtImg>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

const realEstateImageUrls = [
    '/v1707352153/real_estate/T3E_6_of_25_-resized_t1lgkg.jpg',
    '/v1707352138/real_estate/T3E_2_of_25_-resized_aeidav.jpg',
    '/v1707342331/real_estate/T3E-10-resized_itqv8q.jpg',
    '/v1707342330/real_estate/T3E-12-resized_lvouwj.jpg',
    '/v1707337402/real_estate/IMG_6499-resized_oe7ewr.jpg',
    '/v1707337386/real_estate/T3E-26-resized_wcnbkg.jpg',
    '/v1707337397/real_estate/IMG_6494-resized_xyxwxl.jpg',
    '/v1707337377/real_estate/T3E-17-resized_dmdf0b.jpg',
    '/v1707337355/real_estate/T3E-2-resized_qa8grs.jpg',
    '/v1707337353/real_estate/T3E-1-resized_ifqih1.jpg',
    '/v1707332111/real_estate/T3E-27-resized_eh6zxd.jpg',
    '/v1707337333/real_estate/MH-FS-12-resized_pxvwrx.jpg',
    '/v1707335738/real_estate/MH-FS-5-resized_jyvaap.jpg',
    '/v1707335738/real_estate/MH-FS-2-resized_tk4qfk.jpg',
    '/v1707337415/real_estate/T3E_6751-resized_ghdynb.jpg',
    '/v1707701802/real_estate/TFM_OB-3_akiyoo.jpg',
    '/v1707701795/real_estate/T3E-19_zzjc1a.jpg',
    '/v1707701802/real_estate/TFM_OB-3_akiyoo.jpg',
];

function getImages(imageUrl) {
    return imageUrl;
}

</script>

<style scoped></style>