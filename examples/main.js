import Vue from "vue";
import App from "@/layout";
import router from "@/router";
import components from "@/components"
import '@/plugins'
import '@/directives'
import '@/filters'

Vue.config.productionTip = false;
Vue.use(components)
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
