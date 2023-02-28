import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TypeNav from "@/components/TypeNav";
import { reqCategoryList } from "@/api";
import store from "@/store";

Vue.config.productionTip = false;
Vue.component(TypeNav.name, TypeNav);

new Vue({
  render: (h) => h(App),
  // 注册路由,每个组件实例都拥有$route,$router
  router,
  // 注册仓库,每个组件实例都拥有$store
  store,
}).$mount("#app");
