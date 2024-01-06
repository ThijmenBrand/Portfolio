<script setup lang="ts">
import { onMounted } from "vue";

function initializeBlob() {
  const blobElement = document.getElementById("mouse-blob")!;

  document.addEventListener("mousemove", (ev) => {
    const keyframes = { left: `${ev.pageX}px`, top: `${ev.pageY}px` };
    blobElement.animate(keyframes, { duration: 1000, fill: "forwards" });
  });
}

onMounted(initializeBlob);
</script>

<template>
  <div class="overlay" id="overlay-ele"></div>
  <div id="mouse-blob"></div>
</template>

<style lang="scss" scoped>
.overlay {
  bottom: 0;
  top: 0;
  width: 100%;
  position: fixed;
  z-index: -1;
  backdrop-filter: blur(200px);
}

#mouse-blob {
  position: absolute;
  height: 25vw;
  width: 25vw;
  translate: -50% -50%;
  border-radius: 50%;
  z-index: -2;
  animation: rotating 5s linear infinite;
  background: rgb(156, 0, 91);
  background: linear-gradient(90deg, rgb(165, 0, 49) 0%, rgb(105, 0, 158) 100%);
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
