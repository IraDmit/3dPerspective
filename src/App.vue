<template>
  <div>
    <router-view></router-view>
    <div class="cursor" ref="cursor"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    if ( !this.$refs.cursor ) return
    window.addEventListener("mousemove", (event) => {
      this.$refs.cursor?.setAttribute(
        "style",
        `top: ${event.clientY - 20}px;left:${event.clientX - 20}px;`
      );
    });
  },
};
</script>

<style lang="scss">
.cursor {
  height: 40px;
  width: 40px;
  border: 2px solid aqua;
  position: fixed;
  border-radius: 50%;
}

</style>
