import Vue from "vue";
import Vuex from "vuex";
import home from "./homed";
import search from "./search";
import detail from "./detail";
import shopcart from "./shopcart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    search,
    detail,
    shopcart,
  },
});
