<script setup lang="ts">
import Project from "../../logic/types/project";
import projectCarousel from "./components/projectCarousel.vue";

const projects = new Array<Project>(20).fill({
  title: "SOME COOL PROJECT",
  category: "WEB",
  imageUrl: "@/assets/project-placeholder-3.webp",
  id: 1,
});
</script>

<template>
  <section class="main">
    <div class="header"><h1>MY PROJECTS</h1></div>
    <projectCarousel :projects="projects" />
  </section>
</template>

<style lang="scss" scoped>
.main {
  max-height: 100vh;
  width: 95%;
  margin: auto;

  .header {
    h1 {
      font-size: 4vw;
      font-weight: 400;
      font-family: "Geologica", sans-serif;
      //todo: Make fancy color
      color: white;
    }
  }
}
</style>
