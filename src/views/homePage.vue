<template>
  <div class="wrp" :style="depth">
    <div class="container">
      <div class="frames">
        <div
          class="frame"
          v-for="(frame, i) in framesList"
          :key="'frame' + i"
          :class="frame.position"
        >
          <component
            :is="frame.type !== 'text' ? frame.type : ''"
            :src="frame.src"
            autoplay
          ></component>
          <template v-if="frame.type === 'text'">
            <h2>
              {{ frame.title }}
            </h2>
            <br />
            <p>{{ frame.text }}</p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      framesList: [
        {
          type: "video",
          src: require("@/assets/video/video_optimized.mp4"),
          position: "left",
        },
        {},
        {},
        {},
        {
          type: "img",
          src: "https://i.pinimg.com/736x/93/ba/71/93ba714674b8f822c3f0300c8ff52acc.jpg",
          position: "right",
        },
        {
          type: "img",
          src: "https://i.pinimg.com/736x/93/ba/71/93ba714674b8f822c3f0300c8ff52acc.jpg",
          position: "left",
        },
        {
          type: "img",
          src: "https://i.pinimg.com/564x/12/75/b8/1275b89338f2eefedde58d67c8c871c1.jpg",
          position: "right",
        },
        {
          type: "text",
          title: "title",
          text: "text",
          position: "center",
        },
        {
          type: "video",
          src: require("@/assets/video/video_optimized.mp4"),
          position: "left",
        },
        {
          type: "img",
          src: "https://i.pinimg.com/736x/93/ba/71/93ba714674b8f822c3f0300c8ff52acc.jpg",
          position: "right",
        },
        {
          type: "img",
          src: "https://i.pinimg.com/736x/93/ba/71/93ba714674b8f822c3f0300c8ff52acc.jpg",
          position: "left",
        },
        {
          type: "img",
          src: "https://i.pinimg.com/564x/12/75/b8/1275b89338f2eefedde58d67c8c871c1.jpg",
          position: "right",
        },
        {
          type: "text",
          title: "title",
          text: "text",
          position: "center",
        },
      ],
      frames: null,
      zSpacing: -1000,
      zVals: [],
    };
  },
  computed: {
    depth() {
      return {
        "--depth": (Math.abs(this.zSpacing) / 2.8 )* this.framesList.length + "px",
      };
    },
  },
  mounted() {
    let lastPos = this.zSpacing / 5,
      frames = document.querySelectorAll(".frame"),
      zVals = Array.from({ length: frames.length }).map(
        (_, i) => i * this.zSpacing + this.zSpacing
      );

    window.onscroll = () => {
      let scrollPosition = document.documentElement.scrollTop,
        delta = lastPos - scrollPosition;

      lastPos = scrollPosition;

      frames.forEach((_, idx) => {
        zVals[idx] += delta * -5;
        let frame = frames[idx],
          transformZ = `translateZ(${zVals[idx]}px)`,
          opacity = zVals[idx] < this.zSpacing / -1.7 ? 1 : 0;
        frame.setAttribute(
          "style",
          `transform: ${transformZ}; opacity: ${opacity}`
        );
      });
    };
    window.scrollTo(0, 1);
  },
};
</script>

<style lang="scss">
:root {
  --index: calc(1vw + 1vh);
  --side-x: 26;
  --side-y: 36;
  --gutter: 30px;
}
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
img {
  width: calc(var(--index) * var(--side-x));
  height: calc(var(--index) * var(--side-y));
}
video {
  height: calc(var(--index) * var(--side-x));
  width: calc(var(--index) * var(--side-y));
}
.wrp {
  height: var(--depth);
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

      &.left {
        &:has(video) {
          left: calc(var(--side-y) / 2 * var(--index) + var(--gutter));
        }
        left: calc(var(--side-x) / 2 * var(--index) + var(--gutter));
      }
      &.right {
        &:has(video) {
          left: calc(var(--side-y) / 2 * var(--index) + var(--gutter));
        }
        right: calc(var(--side-x) / 2 * var(--index) + var(--gutter));
      }
    }
  }
}
</style>
