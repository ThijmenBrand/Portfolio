<script setup lang="ts">
import Mesh from "./components/mesh.vue";
import navbar from "./components/navbar.vue";
import recentwork from "./components/recentwork.vue";
import contact from "./components/contact.vue";
import projectCursor from "./components/projectCursor.vue";
import downloadCvCursor from "./components/downloadCvCursor.vue";
import backgroundBlob from "./components/backgroundBlob.vue";
import { onMounted } from "vue";

function makeTextWork() {
  const foto1Hover = document.getElementById("show-photo-1")!;
  const foto1Element = document.getElementById("foto-1")!;

  foto1Hover.addEventListener("mouseover", () => {
    foto1Element.animate(
      {
        visibility: "inherit",
        transform: "rotate(-10deg) translateY(-3vw)",
      },
      { duration: 200, fill: "forwards" }
    );
  });

  foto1Hover.addEventListener("mouseleave", () => {
    foto1Element.animate(
      {
        visibility: "hidden",
        transform: "rotate(0deg)",
      },
      { duration: 0, fill: "forwards" }
    );
  });

  const foto2Hover = document.getElementById("show-photo-2")!;
  const foto2Element = document.getElementById("foto-2")!;

  foto2Hover.addEventListener("mouseover", () => {
    foto2Element.animate(
      {
        visibility: "inherit",
        transform: "rotate(-10deg) translateY(3vw)",
      },
      { duration: 200, fill: "forwards" }
    );
  });

  foto2Hover.addEventListener("mouseleave", () => {
    foto2Element.animate(
      {
        visibility: "hidden",
        transform: "rotate(0deg)",
      },
      { duration: 0, fill: "forwards" }
    );
  });

  const foto3Hover = document.getElementById("show-photo-3")!;
  const foto3Element = document.getElementById("foto-3")!;

  foto3Hover.addEventListener("mouseover", () => {
    foto3Element.animate(
      {
        visibility: "inherit",
        transform: "rotate(10deg) translateX(-3vw)",
      },
      { duration: 200, fill: "forwards" }
    );
  });

  foto3Hover.addEventListener("mouseleave", () => {
    foto3Element.animate(
      {
        visibility: "hidden",
        transform: "rotate(0deg)",
      },
      { duration: 0, fill: "forwards" }
    );
  });
}

onMounted(() => {
  makeTextWork();
});
</script>

<template>
  <backgroundBlob />
  <projectCursor />
  <downloadCvCursor />

  <div class="home-page">
    <navbar />

    <section class="hero-section">
      <img id="foto-1" class="foto foto-1" src="@/assets/thijmen-foto-1.webp" />
      <img id="foto-2" class="foto foto-2" src="@/assets/thijmen-foto-2.webp" />
      <img id="foto-3" class="foto foto-3" src="@/assets/thijmen-foto-3.webp" />
      <div>
        <h1 id="greeting-message" class="greeting-message">
          Hell<span id="show-photo-1">oo</span>, I am <br />Thijm<span
            id="show-photo-2"
            >ee</span
          >n Br<span id="show-photo-3">aa</span>nd
        </h1>
      </div>
    </section>

    <Mesh />
  </div>

  <recentwork />
  <contact />
</template>

<style lang="scss" scoped>
.foto {
  visibility: hidden;
  position: absolute;
  transition: 0.3s;
  height: 15vw;
  opacity: 0.5;
}

.foto-1 {
  left: 10vw;
  top: 5vw;
}

.foto-2 {
  top: 25vw;
  left: 20vw;
}

.foto-3 {
  right: 0vw;
}

.home-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .hero-section {
    flex: 1;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      text-align: center;
      z-index: 100;

      .message {
        margin: 0;
        font-size: 2vw;
        font-weight: lighter;
        font-family: Heavitas;
      }

      .greeting-message {
        text-align: start;
        font-size: 6vw;
        font-family: StrechPro;
        user-select: none;
      }
    }

    .button-container {
      flex: 1;
      display: flex;
      align-items: center;
    }
  }
}
</style>
