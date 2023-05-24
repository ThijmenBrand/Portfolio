<script setup lang="ts">
import { signOut } from '../../providers/auth/authRedirect';
</script>

<template>
    <h4 @click="signOut">Logout</h4>
    <h1>Home</h1>
</template>