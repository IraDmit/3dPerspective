<template>
  <div>
    <div class="preloader">
      <div class="el"></div>
      <div class="el1"></div>
      <div class="el2"></div>
    </div>
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
    this.animationPreloader();
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
    animationPreloader() {
      gsap
        .timeline()
        .to(
          ".el",
          {
            left: "51%",
            top: "60%",
            onComplete() {
              gsap.to(`.el`, {
                scale: 100,
                duration: 9,
                backgroundImage:
                  "radial-gradient(circle, #82c91e 43%, #3bc9db 96%)",
              });
            },
          },
          1
        )
        .to(
          ".el1",
          {
            right: "18%",
            top: "36%",
            onComplete() {
              gsap.to(`.el1`, {
                scale: 100,
                duration: 9,
                backgroundImage:
                  "radial-gradient(circle, #228be6 23%, #3bc9db 86%)",
              });
            },
          },
          ">"
        )
        .to(
          ".el2",
          {
            top: "37%",
            right: "63%",
            onComplete() {
              gsap.to(`.el2`, {
                scale: 100,
                duration: 9,
                backgroundImage:
                  "radial-gradient(circle, #7950f2 23%, #748ffc 74%)",
              });
            },
          },
          ">"
        )
        .to(".preloader", {
          opacity: 0,
          delay: 2,
          zIndex: -10,
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
.preloader {
  position: absolute;
  top: 0;
  left: 0;
  // position: relative;
  background-color: #fff;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  .el {
    position: absolute;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background-color: greenyellow;
    top: -100vh;
  }
  .el1 {
    top: -100vh;
    position: absolute;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background-color: aquamarine;
  }
  .el2 {
    top: -100vh;
    position: absolute;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    background-color: mediumslateblue;
  }
}
</style>
