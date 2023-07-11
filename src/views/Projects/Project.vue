<script setup lang="ts">
import { useRoute } from "vue-router";

const router = useRoute();

const projectId = router.params.projectId;
</script>

<template>
  <h2>project {{ projectId }}</h2>
</template>

<style lang="scss" scoped></style>
