<template>
  <div id="home">
    <header><nav-title></nav-title></header>
    <div class="nav">
      <div class="nav-left-menu">
        <NavMenu></NavMenu>
      </div>
      <div class="nav-right-content">
        <div class="nav-right-header">
          <ContentTitle></ContentTitle>
        </div>
        <div class="nav-right-page">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from "@/components/common/NavMenu.vue";
import NavTitle from "@/components/common/NavTitle.vue";
import ContentTitle from "@/components/common/ContentTitle.vue";
export default {
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
  beforeRouteUpdate(to, from, next) {
    // if (to.meta.key > from.meta.key) {
    //   this.transitionName = "slide-left";
    // } else {
    //   this.transitionName = "slide-right";
    // }
    console.log("home.vue触发"); //可以触发
    // this.transitionName = "slide-right";
    next();
  },
  methods: {},
};
</script>
<style lang="scss">
#home {
  width: 100%;
  height: 100%;
  background-color: #eaebec;
}
.nav {
  display: flex;
  width: 100%;
  height: 100%;
  // .nav-left-menu {
  // }
  .nav-right-content {
    margin-top: 5px;
    width: 100%;
    overflow: auto;
    // overflow-y: hidden;
    background-color: #f0f1f4;
    // background-color: rgb(204, 152, 152);
  }
  // .nav-right-page {
  //   // background: #000;
  //   // height: 100%;
  // }
}
</style>
