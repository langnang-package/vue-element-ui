import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ElVueUI from './../../packages'
console.log(ElVueUI)
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { title: "Home" },
    component: Home,
  },
  {
    path: "/jumbotron",
    name: "Jumbotron",
    meta: Object.values(ElVueUI).find(v => v.name == 'ElJumbotron'),
    component: () => import("@/views/component/jumbotron.vue"),
  },
  {
    path: "/dynamic-select",
    name: "DynamicSelect",
    meta: Object.values(ElVueUI).find(v => v.name == 'ElDynamicSelect'),
    component: () => import("@/views/component/dynamic-select.vue"),
  },
  {
    path: "/route-menu",
    name: "RouteMenu",
    meta: Object.values(ElVueUI).find(v => v.name == 'ElRouteMenu'),
    component: () => import("@/views/component/route-menu.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else if (to.meta.name) {
    document.title = to.meta.name.substring(2)
  }
  next()
})
export default router;
