<script setup lang="ts"></script>

<template>
  <button @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  padding: 1em;
  background-color: transparent;
  border: 2px solid white;
  color: white;
  border-radius: 2em;
  transition: 0.2s;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #6562cf;
  }
}
</style>
