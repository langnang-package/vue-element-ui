import Vue from "vue";
import App from "@/layout";
import router from "@/router";
import '@/plugins'
import '@/directives'
import '@/filters'
import VueUI from './../packages'

Vue.config.productionTip = false;

Vue.use(VueUI)
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
