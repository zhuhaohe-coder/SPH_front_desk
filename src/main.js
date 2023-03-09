import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TypeNav from "@/components/TypeNav";
import "@/mock/mockServe";
import store from "@/store";
import "swiper/css/swiper.css";
import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination";

Vue.config.productionTip = false;
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);

new Vue({
  render: (h) => h(App),
  // 注册路由,每个组件实例都拥有$route,$router
  router,
  // 注册仓库,每个组件实例都拥有$store
  store,
  beforeCreate() {
    // 安装全局事件总线
    Vue.prototype.$bus = this;
  },
}).$mount("#app");
