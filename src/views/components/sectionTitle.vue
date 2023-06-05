<script setup lang="ts"></script>

<template>
  <div>
    <hr class="devider" />
    <h1 id="title" class="title"><slot></slot></h1>
  </div>
</template>

<style lang="scss" scoped>
div {
  width: 60%;
  text-align: center;
  .devider {
    border: none;
    height: 1px;
    background-color: white;
  }

  .title {
    font-family: "Geologica", sans-serif;
    font-weight: 400;
    font-size: 2em;
  }
}
</style>
