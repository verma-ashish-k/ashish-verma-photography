<template>
    <div>
        <div class="select-none scroll-smooth">
            <hero-header class="-mt-16 -z-10" />
            <section2 />
            <before-after />
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
// Set up the JSON-LD structured data
const jsonLdData = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "Urban Snap",
    "description": "Urban Snap is a Calgary-based real estate photography company.",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Calgary",
        "addressRegion": "AB",
        "addressCountry": "CA"
    },
    "telephone": "+1 (403) 994-7627",
    "image": "https://res.cloudinary.com/ashish-verma-photography/image/upload/v1712543351/company_logo/logo_transparent_square_ofmacj.png",
    "url": "https://www.urbansnap.ca",
    "sameAs": [
        "https://www.instagram.com/urban_snap_yyc/",
        "https://www.facebook.com/urbansnap.ca",
        "https://www.youtube.com/@Urban_Snap"
    ]
};
useHead({
    title: 'Urban Snap - Homepage - Calgary Real Estate Photography, Videography & iGuide',
    meta: [
        { name: 'Urban Snap', content: 'Calgary Real Estate Photography, Videography & Floor Plans' }
    ],
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(jsonLdData)
        }
    ]
});

useSeoMeta({
    title: 'Urban Snap - Calgary Real Estate Photography',
    description: 'Urban Snap is a Calgary-based real estate photography company that specializes in creating stunning visual content for real estate listings. We offer a range of services including photography, videography, and 3D tours. Contact us today to learn more about our services and how we can help you showcase your property in the best possible light.',
    keywords: 'Calgary real estate photography, real estate photography, Calgary photography services',
    canonical: 'https://www.urbansnap.ca',
    ogTitle: 'Urban Snap - Calgary Real Estate Photography',
    ogDescription: 'Urban Snap is a Calgary-based real estate photography company that specializes in creating stunning visual content for real estate listings. We offer a range of services including photography, videography, and 3D tours. Contact us today to learn more about our services and how we can help you showcase your property in the best possible light.',
    ogImage: 'https://www.urbansnap.ca/assets/images/logo_transparent.png',
    ogUrl: 'https://www.urbansnap.ca',
    ogType: 'website',
    ogSiteName: 'Urban Snap',
    twitterCard: 'summary_large_image',
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
    lang: 'en',
    appleTouchIcon: '/apple-touch-icon.png',
    favicon: '/favicon.ico',
    author: 'Urban Snap',
    publisher: 'Urban Snap Inc.',
    distribution: 'global',
    rating: 'general',
    revisitAfter: '7 days',
    expires: '2025-12-31',
    referrerPolicy: 'strict-origin',
});
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