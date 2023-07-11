<script setup lang="ts">
import projectCard from "./projectCard.vue";
import Project from "../../../logic/types/project";
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  projects: {
    type: Array<Project>,
    default: [],
  },
});

const router = useRouter();

let currentIndex = ref<number>(0);

const redirectToProject = (projectId: string) => {
  console.log(projectId);
  router.push({ name: "Project", params: { projectId: projectId } });
};

function carousel() {
  const carouselElement = document.getElementById("carousel")!;
  const thumbElement = document.getElementById("thumb")!;

  const carouselElements = Array.from(carouselElement.children);
  const cards = carouselElements.filter((x) => !x.classList.contains("line"));

  const carouselCount = cards.length;
  const carouselElementsOnScreen = window.innerWidth / cards[0].clientWidth;
  const scrollbarThumbWidth = carouselElementsOnScreen / carouselCount;

  const init = () => {
    const backButton = document.getElementById("back-button")!;
    const forwardButton = document.getElementById("forward-button")!;

    forwardButton.addEventListener(
      "click",
      () => currentIndex.value < carouselCount - 1 && currentIndex.value++
    );
    backButton.addEventListener(
      "click",
      () => currentIndex.value > 0 && currentIndex.value--
    );

    carouselElements[0].classList.add("active");
    carouselElements[1].classList.add("active");
    carouselElements[2].classList.add("active");

    thumbElement.style.width = `${scrollbarThumbWidth * 100}%`;
  };

  const activateCard = () => {
    cards.map((card) => card.classList.remove("active"));
    cards.map((card) =>
      card.removeEventListener("click", () => redirectToProject)
    );

    const currentCard = cards[currentIndex.value];

    currentCard.classList.add("active");
    currentCard.nextElementSibling?.classList.add("active");
    currentCard.previousElementSibling?.classList.add("active");

    const projectId = currentCard.getAttribute("data-id");
    currentCard.addEventListener("click", () =>
      redirectToProject(projectId ?? "")
    );
  };

  const scroll = () => {
    const elem = cards[currentIndex.value] as HTMLElement;

    const scollDistance =
      currentIndex.value * elem.clientWidth - window.innerWidth / 2;

    if (elem.clientWidth > scollDistance) {
      carouselElement.scrollTo({ left: 0, behavior: "smooth" });
    }

    if (scollDistance > 0) {
      carouselElement.scrollTo({ left: scollDistance, behavior: "smooth" });
    }
  };

  const moveThumb = () => {
    const elem = cards[currentIndex.value] as HTMLElement;

    let thumbTransformation =
      ((elem.offsetLeft + elem.clientWidth) /
        (elem.clientWidth * carouselCount)) *
      100;

    let actualOffset = Math.round(
      thumbTransformation - scrollbarThumbWidth * 100
    );

    if (actualOffset < 10) actualOffset = 0;
    if (actualOffset > 90) actualOffset = 100;

    if (actualOffset >= 0) {
      thumbElement.style.left = `${actualOffset.toString()}%`;
    }
  };

  return { init, activateCard, moveThumb, scroll };
}

watch(currentIndex, (newIndex, oldIndex) => {
  if (newIndex > oldIndex) carousel().activateCard();
  else carousel().activateCard();

  carousel().moveThumb();
  carousel().scroll();
});

function projectClickHandler(index: number) {
  currentIndex.value = index;
}

onMounted(() => carousel().init());
</script>

<template>
  <div class="projects-carousel-container">
    <div id="carousel" class="projects-carousel-inner-container">
      <projectCard
        v-for="(project, index) in props.projects"
        @click="projectClickHandler(index)"
        :project="project"
      >
      </projectCard>
    </div>
    <div class="carousel-indication">
      <p>Btn</p>
      <div id="scrollbar" class="scrollbar">
        <div id="thumb" class="thumb"></div>
      </div>
      <div class="action-buttons">
        <img src="@/assets/backward.svg" alt="backward" id="back-button" />
        <img src="@/assets/forward.svg" alt="forward" id="forward-button" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects-carousel-container {
  height: 60vh;
  margin: auto;
  flex: 1;

  .projects-carousel-inner-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    height: 100%;

    &::-webkit-scrollbar {
      transition: 0.2s linear;
    }
  }

  .carousel-indication {
    width: 100%;
    margin-top: 1em;
    color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    $_scrollbar-height: 0.15em;

    .scrollbar {
      width: 60%;
      height: $_scrollbar-height;
      background-color: $thijmen-sand;
      position: relative;

      .thumb {
        transition: 0.2s linear;
        position: absolute;
        background-color: $thijmen-sand-2;
        height: $_scrollbar-height;
      }
    }

    .action-buttons {
      display: flex;

      img {
        margin: 0.5em;
        height: 1em;
        padding: 1em;
        border: 2px solid white;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
}
</style>
