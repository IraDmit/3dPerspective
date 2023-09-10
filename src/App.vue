<template>
  <div class="container">
    <div class="frames">
      <div class="frame" v-for="i in 10" :key="'frame' + i">
        frame {{ i }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frames: [
        {
          type: 'video',
          // src: require("@/assets/image/1.jpg"),
          position: 'left'
        },
        {
          type: 'image',
          // src: require("@/assets/image/1.jpg"),
          position: 'right'
        },
        {
          type: 'text',
          title: 'title',
          text: 'text',
          position: 'center'
        },
      ]
    }
  },
  mounted() {
    window.scrollTo(0,1)
    let zSpacing = -1000,
      lastPos = zSpacing / 5,
      frames = document.querySelectorAll(".frame"),
      zVals = Array.from({ length: frames.length }).map(
        (_, i) => i * zSpacing + zSpacing
      );

    window.onscroll = () => {
      let scrollPosition = document.documentElement.scrollTop,
        delta = lastPos - scrollPosition;

      lastPos = scrollPosition;

      frames.forEach((_, idx) => {
        zVals[idx] += delta * -5;
        let frame = frames[idx],
          transformZ = `translateZ(${zVals[idx]}px)`,
          opacity = zVals[idx] < zSpacing / -1.7 ? 1 : 0
        frame.setAttribute("style", `transform: ${transformZ}; opacity: ${opacity}`);
      });
    };
  },
};
</script>

<style lang="scss">
:root{
  --index: calc(1vw + 1vh)
}
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 4000px;
  font-size: calc(var(--index) * 0.8);
}
.container {
  background-color: indigo;
  width: 100%;
  height: 100%;
  position: fixed;
  perspective: 1000px;
  .frames {
    height: 100%;
    transform-style: preserve-3d;
    .frame {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      will-change: transform;
      transition: 0.75s cubic-bezier(0.075, 0.5, 0, 1);
      transform-style: preserve-3d;
    }
  }
}
</style>
