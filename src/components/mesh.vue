<script setup lang="ts">
import { onMounted } from "vue";
import p5 from "p5";

let width: number;
let height: number;
const mouse = {
  x: 0,
  y: 0,
};

class dot {
  private readonly p: p5;
  private readonly radius: number;
  private xOff = Math.random();
  private yOff = Math.random() * 1000;
  private direction = Math.random() > 0.5 ? 1 : -1;

  public posX: number;
  public posY: number;

  constructor(x: number, y: number, r: number, p: p5) {
    this.p = p;

    this.posX = x;
    this.posY = y;
    this.radius = r;
  }

  public Move() {
    this.posX += (this.p.noise(this.xOff) - 0.3) * this.direction;
    this.posY += (this.p.noise(this.yOff) - 0.3) * this.direction;

    if (this.posY >= this.p.height || this.posY <= 0) {
      this.direction *= -1;
    }
    if (this.posX >= this.p.width || this.posX <= 0) {
      this.direction *= -1;
    }

    this.xOff += 0.01;
    this.yOff += 0.01;

    this.p.ellipse(this.posX, this.posY, this.radius);
  }
}

function RandomNum(min: number, max: number) {
  const difference = max - min;

  let rand = Math.random();

  rand = Math.floor(rand * difference);

  rand = rand + min;

  return rand;
}

function make(p: p5) {
  const dots: Array<dot> = [];
  const windowWidth = window.innerWidth;
  const dotAmount = Math.pow(windowWidth, 0.7);

  const drawLine = (
    cords1: { x: number; y: number },
    cords2: { x: number; y: number },
    weight = 0.1
  ) => {
    p.stroke("white");
    p.strokeWeight(weight);
    p.line(cords1.x, cords1.y, cords2.x, cords2.y);
  };

  p.setup = function () {
    this.createCanvas(width, height);
    this.frameRate(60);
    for (let i = 0; i < dotAmount; i++) {
      dots.push(new dot(RandomNum(0, width), RandomNum(0, height), 4, p));
    }
  };

  p.draw = function () {
    this.clear(0, 0, 0, 0);
    for (let i = 0; i < dots.length; i++) {
      const dotI = dots[i];
      dotI.Move();

      if (this.dist(dotI.posX, dotI.posY, mouse.x, mouse.y) < 100) {
        drawLine(
          { x: dotI.posX, y: dotI.posY },
          { x: mouse.x, y: mouse.y },
          0.5
        );
      }

      for (let j = 0; j < dots.length; j++) {
        var dotII = dots[j];
        if (this.dist(dotI.posX, dotI.posY, dotII.posX, dotII.posY) < 100) {
          drawLine(
            { x: dotI.posX, y: dotI.posY },
            { x: dotII.posX, y: dotII.posY }
          );
        }
      }
    }
  };
}

onMounted(() => {
  const meshThingElement = document.getElementById("mesh-thing")!;
  width = meshThingElement.offsetWidth - 5;
  height = meshThingElement.offsetHeight - 5;

  meshThingElement.addEventListener("mousemove", function (e) {
    mouse.x = e.offsetX;
    mouse.y = e.offsetY;
  });

  new p5(make, meshThingElement);
});
</script>

<template>
  <div id="mesh-thing"></div>
</template>

<style scoped lang="scss">
#mesh-thing {
  height: 100vh;
  width: 100vw;
  z-index: -1;
  position: absolute;
}
</style>
