<script setup lang="ts">
import { onMounted } from "vue";
import baseButton from "./button.vue";
import sectionTitle from "./sectionTitle.vue";

window.addEventListener("scroll", animate);

function animate() {
  const elementToAnimate = document.getElementById("cv-text");

  if (!elementToAnimate) return;

  let windowBottom = window.scrollY + window.innerHeight;
  let textTop = elementToAnimate.offsetTop;
  let textHeight = elementToAnimate.offsetHeight;

  if (windowBottom > textTop + textHeight) {
    elementToAnimate.classList.add("animate");
  } else {
    elementToAnimate.classList.remove("animate");
  }
}

function showTooltip() {
  const targetElement = document.getElementById("cv-text");

  if (!targetElement) return;

  const tooltip = document.getElementById("download-cv-hover")!;

  const tooltipShowCallback = (e: MouseEvent) => {
    tooltip.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    tooltip.style.display = "block";
  };
  const tooltipHideCallback = () => (tooltip.style.display = "none");

  targetElement.addEventListener("mousemove", tooltipShowCallback);

  targetElement.addEventListener("mouseleave", tooltipHideCallback);
}

onMounted(showTooltip);
</script>

<template>
  <section>
    <sectionTitle id="contact-title">Get in touch with me</sectionTitle>
    <div class="section-wrapper">
      <div class="contact-form">
        <form action="" class="form">
          <input
            placeholder="Name"
            class="form-element"
            id="name"
            name="name"
            required
            type="text"
          />
          <input
            placeholder="Email"
            class="form-element"
            id="email"
            name="email"
            required
            type="email"
          />
          <textarea
            placeholder="Message"
            class="form-element"
            cols="50"
            id="message"
            name="message"
            required
            rows="4"
          ></textarea>
        </form>
        <baseButton>Get in touch!</baseButton>
      </div>
      <div class="cv-section">
        <h1 id="cv-text" class="cv-text">
          DOWNLOAD<br />
          RESUME
        </h1>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  color: white;
  width: min(100ch, 100%);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .section-wrapper {
    width: min(100ch, 100%);
    padding-bottom: 5em;
    margin-inline: auto;
    display: flex;
    align-items: center;

    .contact-form {
      width: 60%;

      form {
        display: flex;
        flex-direction: column;
      }

      .form-element {
        background-color: transparent;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 2px solid white;
        margin: 2em;
        transition: 0.5s;
        color: white;

        &::placeholder {
          color: white;
          font-family: "Courier New", Courier, monospace;
        }

        &:focus {
          outline: none !important;
          border-bottom: 2px solid #6562cf;
        }
      }
    }

    .cv-section {
      .animate {
        transform: none;
      }

      h1 {
        font-family: "Geologica", sans-serif;
        font-weight: bold;
        font-size: 4em;
        line-height: 1.5;
        margin: 0;
        transform: translate(100px);
        user-select: none;
        transition: 0.5s;
      }

      &:hover {
        * {
          cursor: none;
        }
      }
    }
  }
}
</style>
