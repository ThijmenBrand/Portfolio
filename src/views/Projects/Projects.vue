<script setup lang="ts">
import { onMounted } from "vue";

function makeCarouselWork() {
  const backButton = document.getElementById("back-button")!;
  const forwardButton = document.getElementById("forward-button")!;
  const carouselElement = document.getElementById("carousel")!;
  const childElements = carouselElement.children;

  const carouselCount = childElements.length;
  let currectIndex = 0;

  forwardButton.addEventListener("click", () => {
    currectIndex < carouselCount - 1 && currectIndex++;

    childElements[currectIndex - 1].classList.remove("active");
    childElements[currectIndex].classList.add("active");

    const elem = childElements[currectIndex] as HTMLElement;

    const scollDistance =
      currectIndex * elem.clientWidth - window.innerWidth / 2;

    if (scollDistance > 0) {
      carouselElement.scrollTo({ left: scollDistance, behavior: "smooth" });
    }
  });

  backButton.addEventListener("click", () => {
    currectIndex > 0 && currectIndex--;

    childElements[currectIndex + 1].classList.remove("active");
    childElements[currectIndex].classList.add("active");

    const elem = childElements[currectIndex] as HTMLElement;

    const scollDistance =
      currectIndex * elem.clientWidth - window.innerWidth / 2;

    if (elem.clientWidth > scollDistance) {
      carouselElement.scrollTo({ left: 0, behavior: "smooth" });
    }

    if (scollDistance > 0) {
      carouselElement.scrollTo({ left: scollDistance, behavior: "smooth" });
    }
  });
}

onMounted(makeCarouselWork);
</script>

<template>
  <section class="main">
    <div class="header"><h1>MY PROJECTS</h1></div>
    <div class="projects-carousel-container">
      <div id="carousel" class="projects-carousel-inner-container">
        <div class="active">
          <h1>TITLE</h1>
          <img src="@/assets/project-placeholder-1.webp" />
        </div>
        <div>
          <h1>TITLE</h1>
          <img src="@/assets/project-placeholder-1.webp" />
        </div>
        <div>
          <h1>TITLE</h1>
          <img src="@/assets/project-placeholder-1.webp" />
        </div>
        <div>
          <h1>TITLE</h1>
          <img src="@/assets/project-placeholder-1.webp" />
        </div>
        <div>
          <h1>TITLE</h1>
          <img src="@/assets/project-placeholder-1.webp" />
        </div>
        <div>
          <h1>TITLE</h1>
          <img src="@/assets/project-placeholder-1.webp" />
        </div>
        <div>
          <h1>TITLE</h1>
          <img src="@/assets/project-placeholder-1.webp" />
        </div>
        <div>
          <h1>TITLE</h1>
          <img src="@/assets/project-placeholder-1.webp" />
        </div>
        <div>
          <h1>TITLE</h1>
          <img src="@/assets/project-placeholder-1.webp" />
        </div>
        <div>
          <h1>TITLE</h1>
          <img src="@/assets/project-placeholder-1.webp" />
        </div>
        <div>
          <h1>TITLE</h1>
          <img src="@/assets/project-placeholder-1.webp" />
        </div>
        <div>
          <h1>TITLE</h1>
          <img src="@/assets/project-placeholder-1.webp" />
        </div>
        <div>
          <h1>TITLE</h1>
          <img src="@/assets/project-placeholder-1.webp" />
        </div>
      </div>
      <div class="carousel-indication">
        <p id="back-button">Back</p>
        <p id="forward-button">Forward</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main {
  max-height: 100vh;

  .header {
    h1 {
      font-size: 5vw;
      font-weight: bold;
      font-family: "Geologica", sans-serif;
      //todo: Make fancy color
      color: white;
    }
  }

  .projects-carousel-container {
    height: 50vh;
    flex: 1;

    .projects-carousel-inner-container {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      height: 100%;

      div {
        &.active {
          img {
            visibility: unset;
          }
        }
        max-width: 150px;
        flex: 0 0 auto;
        background-color: red;
        h1 {
          color: white;
        }
        img {
          visibility: hidden;
          max-height: 100%;
          max-width: 100%;
        }
      }
    }

    .carousel-indication {
      color: white;
    }
  }
}
</style>
