<template>
  <div class="people-info">
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

<style scoped lang="scss">
@import "@/assets/styles/global.scss";
</style>
