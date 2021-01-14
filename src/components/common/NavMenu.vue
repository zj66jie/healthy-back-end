<template>
  <div class="nav-menu">
    <el-row class="tac">
      <el-col>
        <el-menu
          :default-active="defaultUrl"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-coordinate"></i>
              <span>小区服务</span>
            </template>
            <el-menu-item-group>
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item index="/home/about" @click="navTo"
                >水费</el-menu-item
              >
              <el-menu-item index="1-2">电费</el-menu-item>
              <el-menu-item index="1-3">投诉</el-menu-item>
              <el-menu-item index="1-3">报修</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-thumb"></i>
            <span slot="title">温度上报</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">新闻情况</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">社区问卷</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-collection"></i>
            <span slot="title">防疫知识</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-s-custom"></i>
            <span slot="title">人员信息</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-edit"></i>
            <span slot="title"
              >出入申请<el-badge
                v-show="isApplyMes"
                is-dot
                class="item"
              ></el-badge
            ></span>
          </el-menu-item>
          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-sold-out"></i>
              <span>社区购物</span>
            </template>
            <el-menu-item-group>
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item index="" @click="navTo">商品发布</el-menu-item>
              <el-menu-item index="6-2">订单管理</el-menu-item>
              <el-menu-item index="6-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "vueName",
  data() {
    return {
      defaultUrl: "/",
      isApplyMes: true,
    };
  },
  mounted() {
    let href = window.location.href;
    this.defaultUrl = href.split("/#")[1];
    // console.log(this.defaultUrl);
    this.getPath();
  },
  watch: {
    $route: "getPath",
  },
  methods: {
    getPath() {
      this.defaultUrl = this.$route.path;
      switch (this.defaultUrl) {
        case "/home":
          this.$store.commit("SET_contentTitle", []);
          break;
        case "/home/about":
          this.$store.commit("SET_contentTitle", ["小区服务", "水费"]);
          break;

        default:
          break;
      }
      console.log(this.defaultUrl);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    navTo() {
      console.log("44");
      // this.$store.commit("SET_contentTitle", ["导航一", "选项一"]);
      // this.$emit("childFn", ["导航一", "选项一"]);
      this.$router.push({
        path: "/home/about",
        query: {
          // // category: getCategoryName(this.data.category),
          // categoryText: '畅销精选'
        },
      });
    },
  },
};
</script>

<style lang="scss">
// @import "@/assets/styles/global.scss";
.nav-menu {
  margin-top: 5px;
  width: 200px;
  height: 100vh;
  background-color: #545c64;
  .tac {
    // width: 200px;
    padding-right: 5px;
    box-sizing: border-box;
    height: 100vh;
    // background-color: #545c64;

    .el-menu {
      border: none;
    }
    .item {
      position: absolute;
      top: -6px;
      .is-dot {
        border: none;
      }
    }
  }
}
</style>
