import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "test" */ "../views/3d-perpective-Page.vue"),
  },
  {
    path: "/perspective",
    name: "perspective",
    component: () =>
      import(/* webpackChunkName: "test" */ "../views/testPage.vue"),
  },
  {
    path: "/horizontalScroll",
    name: "horizontalScroll",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/horizontal-page.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
