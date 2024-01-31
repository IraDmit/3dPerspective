<template>
  <div>
    <section></section>
    <section class="box-section" ref="main">
      <div class="box-wrp" ref="wrp">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
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
  data() {
    return {
      boxesLength: null,
      boxWidth: 500,
    };
  },

  computed: {
    width() {
      return this.boxesLength * this.boxWidth;
    },
  },
  mounted() {
    const main = this.$refs.main,
      wrp = this.$refs.wrp;
    console.log(wrp);

    this.boxesLength = wrp.querySelectorAll(".box").length;
    const totalWidth = wrp.scrollWidth - window.innerWidth;

    gsap.to(wrp, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        start: "top top",
        scrub: 7,
        pin: true,
        trigger: main,
        end: this.width,
      },
    });
  },
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  background-color: bisque;
  overflow: hidden;
  width: 100vw;

  &.box-section {
    background-color: lightpink;
    position: relative;
    padding: 20px;
    .box-wrp {
      display: flex;
      gap: 20px;
      position: absolute;
      top: 50%;
      left: 0;
      .box {
        width: 500px;
        height: 250px;
        background-color: cornflowerblue;
      }
    }
  }
}
</style>
