<script setup lang="ts">
import Mesh from "./components/mesh.vue";
import navbar from "./components/navbar.vue";
import baseButton from "./components/button.vue";
import recentwork from "./components/recentwork.vue";
import contact from "./components/contact.vue";
import projectCursor from "./components/projectCursor.vue";
import downloadCvCursor from "./components/downloadCvCursor.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <projectCursor />
  <downloadCvCursor />

  <div class="home-page">
    <navbar />

    <section class="hero-section">
      <div>
        <h1 class="greeting-message">Hello, I am Thijmen Brand</h1>
        <h1 class="message">software developer and coder</h1>
      </div>
      <div class="button-container">
        <baseButton @click="() => router.push({ name: 'Projects' })"
          >Checkout my work</baseButton
        >
      </div>
    </section>

    <Mesh />
  </div>

  <recentwork />
  <contact />
</template>

<style lang="scss" scoped>
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
      .message {
        margin: 0;
        font-size: 2vw;
        font-weight: lighter;
      }

      .greeting-message {
        font-size: 4vw;
        font-weight: lighter;
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
