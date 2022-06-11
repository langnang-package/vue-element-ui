import Vue from "vue";
import App from "@/layout";
import router from "@/router";
import '@/plugins'
import '@/directives'
import '@/filters'
import VueElementUI from "./../packages";

Vue.config.productionTip = false;

Vue.use(VueElementUI)
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
