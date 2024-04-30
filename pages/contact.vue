<template>
    <div class=" min-h-screen contact-form">
        <contact-form />
    </div>
</template>

<script setup>

</script>

<style scoped>
.contact-form {
    position: relative;
    min-height: 100vh;
}

.contact-form::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://res.cloudinary.com/ashish-verma-photography/image/upload/v1708666682/real_estate/ashish_verma_photography-196_hb9ewt.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 20%;
    z-index: -1;
}

.contact-form-content {
    position: relative;
    z-index: 1;
}
</style>