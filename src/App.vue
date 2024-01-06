<script setup lang="ts">
import Mesh from "./components/mesh.vue";
import backgroundBlob from "./components/backgroundBlob.vue";
import { onMounted } from "vue";
import downloadButton from "./components/downloadButton.vue";

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
  const message = document.getElementById("greeting-message")!;
  const row1 = document.getElementById("row-1")!;
  const row2 = document.getElementById("row-2")!;
  window.onload = async () => {
    let speed = 50;
    let text1 = "Helloo, I am";
    let text2 = "Thijmeen Braand";

    for (let i = 0; i < text1.length; i++) {
      await new Promise<void>((res) => {
        setTimeout(() => {
          row1.innerHTML += text1[i];
          res();
        }, speed);
      });
    }

    await new Promise<void>((res) => {
      setTimeout(() => {
        res();
      }, speed * 2);
    });

    for (let i = 0; i < text2.length; i++) {
      await new Promise<void>((res) => {
        setTimeout(() => {
          row2.innerHTML += text2[i];
          res();
        }, speed);
      });
    }

    message.innerHTML = `Hell<span id="show-photo-1">oo</span>, I am <br />Thijm<span
            id="show-photo-2"
            >ee</span
          >n Br<span id="show-photo-3">aa</span>nd`;
    makeTextWork();
  };
});
</script>

<template>
  <div class="home-page big-version">
    <backgroundBlob />
    <downloadButton />

    <section class="hero-section">
      <img id="foto-1" class="foto foto-1" src="@/assets/thijmen-foto-1-small.webp" srcset="@/assets/thijmen-foto-1-small.webp, @/assets/thijmen-foto-1-medium.webp 3.71x, @/assets/thijmen-foto-1-large.webp 5.27x"  alt="picture of Thijmen Brand"/>
      <img id="foto-2" class="foto foto-2" src="@/assets/thijmen-foto-2-small.webp" srcset="@/assets/thijmen-foto-2-small.webp, @/assets/thijmen-foto-2-medium.webp 2x, @/assets/thijmen-foto-2-large.webp 2.84x"  alt="picture of Thijmen Brand"/>
      <img id="foto-3" class="foto foto-3" src="@/assets/thijmen-foto-3-small.webp" srcset="@/assets/thijmen-foto-3-small.webp, @/assets/thijmen-foto-3-large.webp 1.69x"  alt="picture of Thijmen Brand"/>
      <div>
        <h1 id="greeting-message" class="greeting-message">
          <span id="row-1"></span>
          <span id="row-2"></span>
        </h1>
      </div>
    </section>

    <Mesh />
  </div>

  <div class="small-version">
    <h1>Thijmen Brand</h1>
  </div>
</template>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  .big-version {
    display: none !important;
  }

  .small-version {
    display: block;
  }
}

.foto {
  visibility: hidden;
  position: absolute;
  transition: 0.3s;
  height: 15vw;
}

.foto-1 {
  left: 10vw;
  top: 5vw;
}

.foto-2 {
  top: 28vw;
  left: 20vw;
}

.foto-3 {
  right: 0;
}

.home-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .hero-section {
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
        font-family: Heavitas,serif;
      }

      .greeting-message {
        transform: translateY(10%);
        text-align: start;
        font-size: 6vw;
        font-family: StrechPro,serif;
        user-select: none;

        #row-1 {
          display: block;
        }

        #row-2 {
          display: block;
        }
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
