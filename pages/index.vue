<template>
    <div>
        <div class="select-none scroll-smooth">
            <hero-header class="-mt-16 -z-10" />
            <section2 />
            <marquee />
            <div class="services">
                <services />
            </div>
            <div class="contact-form-home">

                <contact-form />

            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>
.contact-form-home {
    position: relative;
    min-height: 100vh;
}

.contact-form-home::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://res.cloudinary.com/ashish-verma-photography/image/upload/v1708666694/real_estate/ashish_verma_photography-208_e8ohsv.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 20%;
    z-index: -1;
}

.contact-form-home-content {
    position: relative;
    z-index: 1;
}

.services {
    position: relative;
}

.services::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://res.cloudinary.com/ashish-verma-photography/image/upload/v1708666630/real_estate/ashish_verma_photography-101_nscqug.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 20%;
    z-index: -1;
}

.services-content {
    position: relative;
    z-index: 1;
}
</style>