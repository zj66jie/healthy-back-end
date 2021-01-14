<template>
  <div id="app">
    <!-- <header><nav-title></nav-title></header>
    <div id="nav">
      <div class="nav-left-menu"><nav-menu @childFn="parentFn"></nav-menu></div>
      <div class="nav-right-content">
        <div class="nav-right-header">
          <ContentTitle :contentTitle="contentTitle"></ContentTitle>
        </div>
        <div> -->
    <router-view />
    <!-- </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import NavMenu from "@/components/common/NavMenu.vue";
import NavTitle from "@/components/common/NavTitle.vue";
import ContentTitle from "@/components/common/ContentTitle.vue";
export default {
  name: "vueName",
  data() {
    return {
      contentTitle: [],
    };
  },
  components: {
    NavMenu,
    NavTitle,
    ContentTitle,
  },
  beforeRouteLeave(to, from, next) {
    // if (to.meta.key > from.meta.key) {
    //   this.transitionName = "slide-left";
    // } else {
    //   this.transitionName = "slide-right";
    // }
    console.log(from);
    // this.transitionName = "slide-right";
    next();
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    parentFn(payload) {
      this.contentTitle = payload;
      console.log(payload);
      console.log(this.contentTitle);
    },
  },
};
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  background-color: #eaebec;
}
#nav {
  display: flex;
  width: 100%;
  height: 100%;
  .nav-left-menu {
  }
  .nav-right-content {
    margin-top: 5px;
    width: 100%;
    // background-color: rgb(204, 152, 152);
  }
}
</style>
