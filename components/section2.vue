<template>
    <div>
        <div class="hero" id="sec-2">
            <div>
                <NuxtImg :style="{ width: '100vw' }" provider="cloudinary"
                    src="/v1707337372/real_estate/T3E-16-resized_ibwjun.jpg" format="webp" quality="60" loading="lazy"
                    class="object-cover h-[500px] opacity-20" />
            </div>
            <div class="hero-content flex-col lg:flex-row-reverse">
                <NuxtImg provider="cloudinary" src="/v1712543352/company_logo/logo_house_ohkava.png" format="webp"
                    loading="lazy" class="max-w-xs w-full rounded-lg shadow-2xl" />
                <div>
                    <h1
                        class="text-8xl font-black bg-gradient-to-b from-[#F25243] via-[#F25243] to-[#FF7600] text-transparent bg-clip-text">
                        Hello :)
                    </h1>
                    <p class="py-6 mb-5 mt-2 lg:text-2xl text-gray-500">
                        Urban Snap is a Calgary-based real estate photography company that specializes in creating
                        stunning visual content for real estate listings. We offer a range of services including
                        photography, videography, and 3D tours. Our team of professional photographers and videographers
                        are dedicated to providing high-quality content that will help you sell your property faster and
                        for a higher price. Contact us today to learn more about our services and how we can help you
                        showcase your property in the best possible light.
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped></style>