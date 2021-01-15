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
              <el-menu-item
                index="/home/services/pay-report"
                @click="navTo(`/home/services/pay-report`)"
                >缴费上报</el-menu-item
              >
              <el-menu-item
                index="/home/services/pay-info"
                @click="navTo(`/home/services/pay-info`)"
                >缴费情况</el-menu-item
              >
              <el-menu-item
                index="/home/services/complaint"
                @click="navTo(`/home/services/complaint`)"
                >投诉处理</el-menu-item
              >
              <el-menu-item
                index="/home/services/repair"
                @click="navTo(`/home/services/repair`)"
                >报修处理</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item
            index="/home/temperature-report"
            @click="navTo(`/home/temperature-report`)"
          >
            <i class="el-icon-thumb"></i>
            <span slot="title">温度上报</span>
          </el-menu-item>
          <el-menu-item
            index="/home/news-info"
            @click="navTo(`/home/news-info`)"
          >
            <i class="el-icon-document"></i>
            <span slot="title">新闻情况</span>
          </el-menu-item>
          <el-menu-item
            index="/home/community-ques"
            @click="navTo(`/home/community-ques`)"
          >
            <i class="el-icon-edit-outline"></i>
            <span slot="title">社区问卷</span>
          </el-menu-item>
          <el-menu-item
            index="/home/prevention-info"
            @click="navTo(`/home/prevention-info`)"
          >
            <i class="el-icon-collection"></i>
            <span slot="title">防疫知识</span>
          </el-menu-item>
          <el-menu-item
            index="/home/people-info"
            @click="navTo(`/home/people-info`)"
          >
            <i class="el-icon-s-custom"></i>
            <span slot="title">人员信息</span>
          </el-menu-item>
          <el-menu-item
            index="/home/apply-info"
            @click="navTo(`/home/apply-info`)"
          >
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
              <el-menu-item
                index="/home/cart/cart-release"
                @click="navTo(`/home/cart/cart-release`)"
                >商品发布</el-menu-item
              >
              <el-menu-item
                index="/home/cart/cart-order"
                @click="navTo(`/home/cart/cart-order`)"
                >订单管理</el-menu-item
              >
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
      console.log(this.defaultUrl);
      switch (this.defaultUrl) {
        case "/home":
          this.$store.commit("SET_contentTitle", []);
          break;
        case "/home/services/pay-report":
          this.$store.commit("SET_contentTitle", ["小区服务", "缴费上报"]);
          break;
        case "/home/services/pay-info":
          this.$store.commit("SET_contentTitle", ["小区服务", "缴费情况"]);
          break;
        case "/home/services/repair":
          this.$store.commit("SET_contentTitle", ["小区服务", "报修处理"]);
          break;
        case "/home/services/complaint":
          this.$store.commit("SET_contentTitle", ["小区服务", "投诉处理"]);
          break;
        case "/home/temperature-report":
          this.$store.commit("SET_contentTitle", ["温度上报"]);
          break;
        case "/home/news-info":
          this.$store.commit("SET_contentTitle", ["新闻情况"]);
          break;
        case "/home/community-ques":
          this.$store.commit("SET_contentTitle", ["社区问卷"]);
          break;
        case "/home/prevention-info":
          this.$store.commit("SET_contentTitle", ["防疫知识"]);
          break;
        case "/home/people-info":
          this.$store.commit("SET_contentTitle", ["人员信息"]);
          break;
        case "/home/apply-info":
          this.$store.commit("SET_contentTitle", ["出入申请"]);
          break;
        case "/home/cart/cart-release":
          this.$store.commit("SET_contentTitle", ["社区购物", "商品发布"]);
          break;
        case "/home/cart/cart-order":
          this.$store.commit("SET_contentTitle", ["社区购物", "订单管理"]);
          break;
        default:
          break;
          0;
      }
      console.log(this.defaultUrl);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    navTo(routerUrl) {
      console.log(routerUrl);
      // this.$store.commit("SET_contentTitle", ["导航一", "选项一"]);
      // this.$emit("childFn", ["导航一", "选项一"]);
      this.$router.push({
        path: routerUrl,
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
