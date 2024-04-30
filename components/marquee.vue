<template>
    <div class="text-3xl text-center bg-base-100 text-white">
        Clients we have worked with</div>
    <div class="image-marquee bg-secondary pb-5" ref="marquee">
        <div class="marquee-content" ref="content">
            <!-- Render images including a cloned set of images -->
            <NuxtImg provider="cloudinary" v-for="(image, index) in imagesWithClones" :key="index" :src="image"
                alt="realty_image" class="inline-block mr-4 h-52" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                '/v1713166286/realty_logos/7_bjw4b5.png',
                '/v1713166286/realty_logos/6_euajiw.png',
                '/v1713166284/realty_logos/2_per6qc.png',
                '/v1713166285/realty_logos/5_dfwutr.png',
                '/v1713166284/realty_logos/4_yuuymd.png',
                '/v1713166284/realty_logos/3_fbgjxg.png',
                '/v1713166284/realty_logos/2_per6qc.png',
                '/v1713166267/realty_logos/1_gkg3cv.png',
            ],
            scrollInterval: null,
            scrollSpeed: 1, // Adjust scrolling speed as needed
            cloneCount: 2, // Number of clones to append
            idleTime: 3000, // Duration of inactivity before restarting scrolling (in milliseconds)
        };
    },
    computed: {
        // Add clones of images to the end and beginning of the array
        imagesWithClones() {
            const clonedImages = [];
            for (let i = 0; i < this.cloneCount; i++) {
                clonedImages.push(...this.images);
            }
            return [...clonedImages, ...this.images];
        },
    },
    mounted() {
        this.startScrolling();
    },
    methods: {
        startScrolling() {
            const marquee = this.$refs.marquee;
            const content = this.$refs.content;
            const totalWidth = content.scrollWidth; // Total width of all images

            const step = () => {
                if (marquee.scrollLeft >= totalWidth) {
                    // Reset scroll position to the beginning
                    marquee.scrollLeft = 0;
                } else {
                    marquee.scrollLeft += this.scrollSpeed;
                }

                // Request the next frame for smooth animation
                this.scrollInterval = requestAnimationFrame(step);
            };

            // Start the scrolling animation
            this.scrollInterval = requestAnimationFrame(step);
        },
        restartScrolling() {
            clearTimeout(this.restartTimeout);
            this.restartTimeout = setTimeout(() => {
                // Restart scrolling animation after idle time
                cancelAnimationFrame(this.scrollInterval);
                this.startScrolling();
            }, this.idleTime);
        },
    },
    beforeDestroy() {
        // Clean up the animation frame on component destroy
        cancelAnimationFrame(this.scrollInterval);
        clearTimeout(this.restartTimeout);
    },
};
</script>

<style scoped>
.image-marquee {
    width: 100%;
    overflow: hidden;
}

.marquee-content {
    white-space: nowrap;
}
</style>