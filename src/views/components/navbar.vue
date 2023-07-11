<script setup lang="ts"></script>

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
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;

  .logo {
    margin: 0;
    font-size: 3em;
    padding: 0.5em 1em 1em 1em;
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
