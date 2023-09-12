<template>
  <div>
    <section>
      <button @click="animationBox">box</button>
      <button @click="animationBox2">box2</button>

      <div class="box"></div>
      <div class="box2"></div>
    </section>
    <section></section>
    <section>
      <div class="boxes">
        <div class="scrollBox"></div>
        <div class="scrollBox2"></div>
      </div>
    </section>
    <section></section>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default {
  mounted() {
    this.animationBox3();
  },
  methods: {
    animationBox() {
      gsap.set(".box", {
        opacity: 0,
        y: 500,
      });
      gsap.to(".box", {
        x: 400,
        opacity: 1,
        y: 0,
        rotate: 360,
        duration: 5,
      });
    },
    animationBox2() {
      gsap.set(".box2", {
        x: "120vh",
        scale: 0.5,
        backgroundColor: "#000",
      });
      gsap.to(".box2", {
        x: "10vh",
        scale: 2,
        duration: 3,
        backgroundColor: "#1cfa1d",
      });
    },
    animationBox3() {
      gsap.set(".scrollBox", {
        left: "-1000vw",
      });
      gsap.to(".scrollBox", {
        left: "0vw",
        scrollTrigger: {
          start: "top center",
          trigger: ".scrollBox",
          scrun: true,
          end: "bottom 50%",
          //   scrub: true,
          //   pin: true,
        },
      });

      gsap.set(".scrollBox2", {
        right: "-1000vw",
      });
      gsap.to(".scrollBox2", {
        right: "0vw",
        scrollTrigger: {
          start: "top center",
          scrun: true,
          trigger: ".scrollBox2",
          end: "bottom 50%",
          //   scrub: true,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  border-bottom: 3px solid #000;
}
.box {
  width: 500px;
  height: 500px;
  background: green;
}
.box2 {
  width: 250px;
  height: 250px;
  background-color: red;
}
.boxes {
  height: 100%;
  position: relative;
}
.scrollBox {
  position: absolute;
  width: 49%;
  height: 100%;
  border: 5px solid red;
}
.scrollBox2 {
  position: absolute;
  width: 49%;
  height: 100%;
  border: 5px solid greenyellow;
}
</style>
