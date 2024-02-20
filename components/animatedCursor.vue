<template>
    <div class="cursor">
        <div class="circle" v-for="n in 20" :key="n"></div>
    </div>
</template>
  
<script setup>
import { onMounted } from 'vue';

onMounted(() => {

    const colors = [
        "#ffb56b",
        "#fdaf69",
        "#f89d63",
        "#f59761",
        "#ef865e",
        "#ec805d",
        "#e36e5c",
        "#df685c",
        "#d5585c",
        "#d1525c",
        "#c5415d",
        "#c03b5d",
        "#b22c5e",
        "#ac265e",
        "#9c155f",
        "#950f5f",
        "#830060",
        "#7c0060",
        "#680060",
        "#60005f",
        "#48005f",
        "#3d005e"
    ];

    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const cursor = document.querySelector(".cursor");

    circles.forEach(function (circle, index) {
        circle.x = 0;
        circle.y = 0;
        circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function (e) {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });

    function animateCircles() {
        let x = coords.x;
        let y = coords.y;

        cursor.style.top = x;
        cursor.style.left = y;

        circles.forEach(function (circle, index) {
            circle.style.left = x - 12 + "px";
            circle.style.top = y - 12 + "px";

            circle.style.scale = (circles.length - index) / circles.length;

            circle.x = x;
            circle.y = y;

            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });

        requestAnimationFrame(animateCircles);
    }

    animateCircles();
});
</script>
<style scoped>
::v-global(body) {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    height: 100vh;
    cursor: none;
}

::v-global(.cursor) {
    pointer-events: none;
    position: fixed;
    display: block;
    border-radius: 0;
    top: 0;
    left: 0;
    z-index: 9999999999999999;
}


.circle {
    position: absolute;
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 20px;
}
</style>