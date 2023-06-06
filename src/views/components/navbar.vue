<script setup lang="ts">
import { useRouter } from "vue-router";
import { isAuthenticated } from "../../providers/authv2/auth.guard";
import { MSALInstance } from "../../providers/authv2/auth.config";
import { signIn } from "../../providers/authv2/auth.utils";
import { onMounted, ref } from "vue";

const authenticated = ref(false);

const checkAuthState = async () => {
  authenticated.value = await isAuthenticated(MSALInstance);
};

const router = useRouter();

const routeToHome = () => {
  router.push({ name: "Portal" });
};

onMounted(checkAuthState);
</script>

<template>
  <nav>
    <span>
      <a href="#recent-work-title">Work</a>
      <hr />
    </span>
    <p class="logo">t.</p>
    <span>
      <a href="#contact-title">Contact</a>
      <hr />
    </span>
    <span class="login">
      <img
        v-if="authenticated"
        @click="routeToHome"
        src="@/assets/home.svg"
        alt=""
      />
      <img v-else @click="signIn" src="@/assets/login.svg" alt="" />
    </span>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: row;
  align-items: center;

  .logo {
    margin: 0;
    font-size: 3em;
    padding: 0.5em 1em 1em 1em;
  }

  .login {
    height: 1em;
    width: 1em;
    position: absolute;
    right: 0;
    padding: 0.5em 1em 1em 1em;

    img {
      height: 100%;
      width: 100%;
    }
  }

  span {
    margin: 0em 3em 0em 3em;
    cursor: pointer;

    a {
      color: white;
      text-decoration: none;
    }

    hr {
      visibility: hidden;
    }

    &:hover {
      hr {
        visibility: inherit;
        animation: hover-link 0.2s;
      }

      @keyframes hover-link {
        from {
          width: 0%;
        }

        to {
          width: 100%;
        }
      }
    }
  }
}
</style>
