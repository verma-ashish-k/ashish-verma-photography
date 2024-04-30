<template>
    <div class="pricing-page">
        <pricing-packages />

    </div>
</template>

<script>

</script>

<style>
.pricing-page {
    position: relative;
}

.pricing-page::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://res.cloudinary.com/ashish-verma-photography/image/upload/v1708666614/real_estate/ashish_verma_photography-85_wme92a.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 20%;
    z-index: -1;
}

.pricing-page-content {
    position: relative;
    z-index: 1;
}
</style>