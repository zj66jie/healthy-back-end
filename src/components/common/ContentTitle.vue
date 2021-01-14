<template>
  <div class="content-title">
    <i class="el-icon-s-operation"></i>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="(item, index) in $store.state.contentTitle"
        :key="index"
        >{{ item }}</el-breadcrumb-item
      >
      <!-- <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    contentTitle: {
      type: Array,
      default: ["red"],
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/global.scss";
.content-title {
  margin-left: 5px;
  display: flex;
  height: 30px;
  @include left;
  background-color: #eaebec;
  .el-icon-s-operation {
    font-size: 25px;
    padding-right: 5px;
  }
}
</style>
