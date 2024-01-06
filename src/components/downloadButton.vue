<script setup lang="ts"></script>

<template>
  <a href="/Curriculum-vitae-Thijmen-Brand.pdf" download>
    <div class="button-div">
      <img src="@/assets/icons/code.svg"  alt="download resume icon"/>
      <svg viewBox="0 0 100 100" width="100" height="100">
        <defs>
          <path
            id="circle"
            d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text>
          <textPath xlink:href="#circle">Download my resume</textPath>
        </text>
      </svg>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.button-div {
  width: 6vw;
  aspect-ratio: 1/1;
  position: absolute;
  top: 3vw;
  right: 3vw;
  background: rgb(133, 18, 0);
  background: linear-gradient(
    45deg,
    rgba(133, 18, 0, 0.5) 0%,
    rgba(9, 0, 115, 0.5) 100%
  );
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: white;
    position: absolute;
    max-width: 80%;
    height: auto;
    transform-origin: center;

    text {
      font-size: 1em;
      font-family: Heavitas,serif;
    }
  }

  img {
    max-height: 30%;
    position: absolute;
    transition: 0.2s;
  }

  .blackening-div {
    background-color: black;
  }

  &:hover {
    img {
      max-height: 40%;
    }
  }
}
</style>
