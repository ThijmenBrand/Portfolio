<script setup lang="ts">
import { signIn, checkUserLoggedIn } from '../providers/auth/authRedirect';
import { useRouter } from "vue-router"

const router = useRouter()

if (checkUserLoggedIn()) {
    router.replace({ name: "Home" })
}
</script>

<template>
    <section class="main">
        <button @click="signIn" class="login-button">Sign in</button>
    </section>
</template>

<style scoped>
.main {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-button {
    padding: 2em 5em 2em 5em;
    background-color: white;
    opacity: 100;
    border: none;
    border-radius: 1em;
}
</style>
