<script setup lang="ts">
import useAuthStore from "../../stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <h4 @click="authStore.signOut()">Logout</h4>
  <h1>Home</h1>
</template>
