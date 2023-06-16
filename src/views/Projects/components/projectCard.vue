<script setup lang="ts">
import Project from "../../../logic/types/project";
import { FastAverageColor } from "fast-average-color";

const props = defineProps({
  project: {
    type: Object as () => Project,
    required: true,
  },
});
const emit = defineEmits(["click"]);

const uniqueId = Math.round(
  Math.random() * 1000 * Math.random() * 1000
).toString();

async function categoryAsImageColor(element: any) {
  const categoryElement = document.getElementById(uniqueId)!;

  const fac = new FastAverageColor();
  const color = await fac.getColorAsync(element);

  categoryElement.style.color = color.rgb;
}
</script>

<template>
  <div class="line"></div>
  <div class="project-card" @click="emit('click')">
    <h2 :id="uniqueId" class="category">
      {{ props.project.category }}
    </h2>
    <h1 class="title">{{ props.project.title }}</h1>
    <img
      v-on:load="(ev) => categoryAsImageColor(ev.target)"
      src="@/assets/project-placeholder-3.webp"
    />
  </div>
</template>

<style lang="scss" scoped>
.line {
  flex: 0 0 auto;
  height: 100%;
  width: 1px;
  background-color: rgb(69, 69, 69);

  &.active {
    background-color: rgb(154, 154, 154);
  }
}
.project-card {
  $title-size: 1.5em;

  transition: 0.1s ease-in-out;
  max-width: 150px;
  flex: 0 0 auto;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    .title {
      font-size: calc($title-size + $title-size / 10);
      transition: 0.1s linear;
    }
  }

  .category {
    margin: 5px 10px 0px 10px;
    flex: 0.5;
    visibility: hidden;
    font-size: 2vw;
  }

  .title {
    font-size: $title-size;
    margin: 0px 10px 0px 10px;
    flex: 1;
  }

  h1 {
    color: white;
  }

  img {
    visibility: hidden;
    max-height: 100%;
    max-width: 100%;
    transition: 0.1s linear;
  }

  &.active {
    background-color: rgba(219, 177, 255, 0.139);

    .category {
      visibility: unset;
      font-family: "Bebas Neue", sans-serif;
    }

    .title {
      font-family: "Bebas Neue", sans-serif;
      color: $thijmen-sand;
      font-size: 2.3em;
    }

    img {
      visibility: unset;
      margin-bottom: 20%;
    }
  }
}
</style>
