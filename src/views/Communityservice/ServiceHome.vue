<template>
  <div class="service-home">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "vueName",
  data() {
    return {
      msg: "Welcome to your vueName",
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/global.scss";
.service-home {
  height: 100%;
}
</style>
