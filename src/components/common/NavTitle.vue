<template>
  <div class="nav-title">
    <div class="title-left">
      <div class="title-left-text">健康社区后台</div>
    </div>
    <div class="title-right">
      <div></div>
      <div class="title-right-img">
        <img src="@/assets/1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to your vueName",
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/global.scss";
.nav-title {
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  height: 65px;
  box-shadow: 0px 2px 5px 0px rgba(237, 233, 233, 0.5);
  .title-left {
    padding-left: 40px;
    .title-left-text {
      height: 100%;
      @include center;
      font-size: 20px;
      font-weight: bold;
      // padding-left: 50px;
    }
  }
  .title-right {
    padding-right: 40px;
    height: 100%;
    @include center;
    .title-right-img {
      // height: 30px;
      // width: 30px;
      img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        @include center;
      }
    }
  }
}
</style>
