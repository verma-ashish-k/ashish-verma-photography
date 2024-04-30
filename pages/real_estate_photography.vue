<template>
    <div class="py-20 px-10 bg-gradient-to-r from-slate-300 to-slate-500">
        <div id="real-estate">
            <h2 class="text-3xl font-bold text-white text-center my-5">Real Estate Photography</h2>
            <div class="grid justify-center grid-cols-2 md:grid-cols-3 gap-5">
                <!-- Loop through the array of image URLs and create a div for each image -->
                <div v-for="(image, index) in realEstateImageUrls" :key="index" @click="openModal(index)">
                    <NuxtImg provider="cloudinary" loading="lazy" class="h-auto max-w-full rounded-lg"
                        :src="getImages(image)" alt="real-estate"></NuxtImg>
                </div>
            </div>
        </div>

        <galleryModal :realEstateImageUrls="realEstateImageUrls" :isVisible="showModal"
            :currentImageIndex="currentImageIndex" @close="closeModal" @update:index="updateIndex" />

    </div>
</template>

<script setup>

import { ref } from 'vue';
import galleryModal from '~/components/galleryModal.vue';

const realEstateImageUrls = [
    '/v1708666682/real_estate/ashish_verma_photography-196_hb9ewt.jpg',
    '/v1708666678/real_estate/ashish_verma_photography-194_d2jqv0.jpg',
    '/v1708666671/real_estate/ashish_verma_photography-193_jemw4i.jpg',
    '/v1708666662/real_estate/ashish_verma_photography-172_ycvwt5.jpg',
    '/v1708666653/real_estate/ashish_verma_photography-132_twjz4k.jpg',
    '/v1708666649/real_estate/ashish_verma_photography-131_lxgoqt.jpg',
    '/v1708666630/real_estate/ashish_verma_photography-101_nscqug.jpg',
    '/v1708666626/real_estate/ashish_verma_photography-98_qfmhma.jpg',
    '/v1708666606/real_estate/ashish_verma_photography-82_srxeqm.jpg',
    '/v1707701807/real_estate/TFM_OB-1_dqm8ol.jpg',
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
    '/v1707332111/real_estate/T3E-27-resized_eh6zxd.jpg',
    '/v1707332113/real_estate/T3E-29-resized_uzdcem.jpg',
    '/v1707332121/real_estate/living_room_1-resized_ln86f2.jpg',
    '/v1707332122/real_estate/T3E-17-resized_ziyjhb.jpg',
    '/v1707332123/real_estate/T3E-18-resized_amxvdd.jpg',
    '/v1707332124/real_estate/T3E-15-resized_tv8ec1.jpg',
    '/v1707332126/real_estate/T3E-19-resized_cvlpdz.jpg',
    '/v1707335736/real_estate/MH-FS-6-resized_bv30gh.jpg',
    '/v1707335738/real_estate/MH-FS-1-resized_sn5fkw.jpg',
    '/v1707335749/real_estate/MH-FS-7-resized_x1ptfh.jpg',
    '/v1707335981/real_estate/MH-FS-9-resized_sfhttv.jpg',
    '/v1707337334/real_estate/MH-FS-11-resized_zlwtl9.jpg',
    '/v1707337397/real_estate/IMG_6494-resized_xyxwxl.jpg',
    '/v1708666694/real_estate/ashish_verma_photography-208_e8ohsv.jpg',
    '/v1708666685/real_estate/ashish_verma_photography-202_bmdyh9.jpg',
    '/v1707352181/real_estate/T3E-23-resized_gklw9o.jpg',
    '/v1708666689/real_estate/ashish_verma_photography-200_h293bl.jpg'
];

const showModal = ref(false);
const currentImageIndex = ref(0);

function openModal(index) {
    currentImageIndex.value = index;
    showModal.value = true;
}

function closeModal() {
    showModal.value = false;
}

function updateIndex(newIndex) {
    currentImageIndex.value = newIndex;
}


function getImages(imageUrl) {
    return imageUrl;
}

</script>

<style scoped></style>