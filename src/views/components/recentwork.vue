<script setup lang="ts">
import baseButton from "./button.vue";
import sectionTitle from "./sectionTitle.vue";
import { useRouter } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();

function showTooltip() {
  const tooltip = document.getElementById("project-hover-cursor")!;

  const project1 = document.getElementById("project-1")!;
  const project2 = document.getElementById("project-2")!;

  const tooltipShowCallback = (e: MouseEvent) => {
    tooltip.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    tooltip.style.display = "block";
  };
  const tooltipHideCallback = () => (tooltip.style.display = "none");

  project1.addEventListener("mousemove", tooltipShowCallback);
  project2.addEventListener("mousemove", tooltipShowCallback);

  project1.addEventListener("mouseleave", tooltipHideCallback);
  project2.addEventListener("mouseleave", tooltipHideCallback);
}

onMounted(showTooltip);
</script>

<template>
  <section class="highlighted-section">
    <sectionTitle id="recent-work-title">MY RECENT WORK</sectionTitle>
    <p class="work-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      pellentesque consectetur elit, nec mollis tellus pulvinar id. Phasellus ut
      pulvinar ipsum. Ut commodo rutrum velit a condimentum. Aenean sed risus
      dignissim nisl scelerisque pellentesque non tristique urna.
    </p>

    <div class="projects">
      <div class="project">
        <span>
          <p class="project-title">Makhno studio</p>
        </span>
        <div class="image-container" id="project-1">
          <img draggable="false" src="@/assets/project-placeholder-1.webp" />
        </div>
      </div>
      <div class="project">
        <span>
          <p class="project-title">Thinking for creativity</p>
        </span>
        <div class="image-container" id="project-2">
          <img draggable="false" src="@/assets/project-placeholder-2.webp" />
        </div>
      </div>
    </div>

    <div class="button-container">
      <baseButton @click="router.push({ name: 'Projects' })"
        >Click here to see all of my work</baseButton
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
@media screen and (max-width: $medium) {
  .highlighted-section {
    .work-description {
      font-size: 1em;
      margin: 0em 1.5em 0em 1.5em;
    }
    .projects {
      flex-direction: column !important;
      align-items: center;

      .project {
        width: 70% !important;
        padding: 2.5em;
      }
    }
  }
}

.highlighted-section {
  color: white;
  width: min(100ch, 100%);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .work-description {
    text-align: center;
  }

  .projects {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 10vh;

    .project {
      width: 45%;
      aspect-ratio: 2/2;

      span {
        display: flex;
        justify-content: space-between;

        .project-title {
          font-weight: bold;
        }
      }

      .image-container {
        width: 100%;
        height: 100%;
        border-radius: 0.7em;
        overflow: hidden;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          transition: 0.5s;
        }

        &:hover {
          * {
            cursor: none;
          }
          img {
            scale: 1.1;
          }
        }
      }
    }
  }

  .button-container {
    height: 20vh;
    display: flex;
    align-items: center;
  }
}
</style>
