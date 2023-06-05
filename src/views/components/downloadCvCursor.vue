<script setup lang="ts">
import { onMounted } from "vue";

function init() {
  const element = document.getElementById("download-cv-hover");

  if (!element) return;

  const originalRadius = "5em";
  const clickRadius = "4em";

  document.addEventListener("mousedown", function () {
    element.style.transition = "0.2s";
    element.style.height = clickRadius;
    element.style.width = clickRadius;
  });

  document.addEventListener("mouseup", function () {
    element.style.transition = "unset";
    element.style.height = originalRadius;
    element.style.width = originalRadius;
  });
}

onMounted(init);
</script>

<template>
  <div id="download-cv-hover"><p>CLICK!</p></div>
</template>

<style lang="scss" scoped>
#download-cv-hover {
  $cursor-size: 5em;

  display: none;

  height: $cursor-size;
  width: $cursor-size;
  background-color: white;
  position: fixed;
  mix-blend-mode: difference;
  pointer-events: none;
  border-radius: 50%;
  max-width: 100%;

  p {
    font-size: 1em;
    color: black;
    position: absolute;
    top: 15%;
    left: 15%;
    user-select: none;
  }
}
</style>
