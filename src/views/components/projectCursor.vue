<script setup lang="ts"></script>

<template>
  <div id="project-hover-cursor" class="project-hover-cursor">
    <img src="@/assets/ext-link-icon.svg" />
  </div>
</template>

<style lang="scss" scoped>
.project-hover-cursor {
  $cursor-size: 4em;

  display: none;

  height: $cursor-size;
  width: $cursor-size;
  background-color: #6562cf;
  position: fixed;
  pointer-events: none;
  border-radius: 50%;
  max-width: 100%;
  z-index: 100000;

  img {
    height: 50%;
    aspect-ratio: 1;
    position: absolute;
    transform: translate(50%, 50%);
    user-select: none;
  }
}
</style>
