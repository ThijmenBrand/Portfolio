<script setup lang="ts">
import Mesh from "./components/mesh.vue";
import navbar from "./components/navbar.vue";
import baseButton from "./components/button.vue";
import recentwork from "./components/recentwork.vue";
import contact from "./components/contact.vue";
import projectCursor from "./components/projectCursor.vue";
import downloadCvCursor from "./components/downloadCvCursor.vue";
</script>

<template>
  <projectCursor />
  <downloadCvCursor />

  <section class="hero-section">
    <navbar />
    <div class="greeting-message-container">
      <h1 class="greeting-message">Hello, I am Thijmen Brand</h1>
      <h1 class="message">software developer and coder</h1>
      <div class="button-container">
        <baseButton>Checkout my work</baseButton>
      </div>
    </div>
    <Mesh />
  </section>
  <recentwork />
  <contact />
</template>

<style lang="scss" scoped>
.hero-section {
  color: white;
  align-items: center;
  display: flex;
  flex-direction: column;

  .greeting-message-container {
    height: 88vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .message {
      margin: 0;
      font-size: 2em;
      font-weight: lighter;
    }

    .greeting-message {
      font-size: 3em;
      font-weight: lighter;
      margin-top: 10vh;
    }

    .button-container {
      height: 40vh;
      display: flex;
      align-items: center;
    }
  }
}
</style>
