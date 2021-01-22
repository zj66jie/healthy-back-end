import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    // name: 'Home',
    // component: Home
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "services",
        component: () => import("../views/Communityservice/ServiceHome.vue"),
        meta: { key: 1 },
        // meta: { keepAlive: true },
        children: [
          {
            path: "pay-report",
            component: () =>
              import("../components/CommunityService/PayReport.vue"),
          },
          {
            path: "pay-info",
            component: () =>
              import("../components/CommunityService/PayInfo.vue"),
          },
          {
            path: "repair",
            component: () =>
              import("../components/CommunityService/Repair.vue"),
          },
          {
            path: "complaint",
            component: () =>
              import("../components/CommunityService/Complaint.vue"),
          },
        ],
      },
      {
        path: "temperature-report",
        component: () => import("../views/TemperatureReport.vue"),
      },
      {
        path: "news-info",
        component: () => import("../views/NewsInfo.vue"),
      },
      {
        path: "community-ques",
        component: () => import("../views/CommunityQues.vue"),
      },
      {
        path: "prevention-info",
        component: () => import("../views/PreventionInfo.vue"),
      },
      {
        path: "people-info",
        component: () => import("../views/PeopleInfo.vue"),
        children: [
          {
            path: "people-all",
            component: () => import("@/components/PeopleInfo/PeopleAll.vue"),
          },
          {
            path: "people-pay",
            component: () => import("@/components/PeopleInfo/PeoplePay.vue"),
          },
        ],
      },
      {
        path: "apply-info",
        component: () => import("../views/InAntOutApply.vue"),
      },
      {
        path: "cart",
        component: () => import("../views/cart/CartHome.vue"),
        children: [
          {
            path: "cart-release",
            component: () => import("@/components/Cart/cartRelease.vue"),
          },
          {
            path: "cart-order",
            component: () => import("@/components/Cart/cartOrder.vue"),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
