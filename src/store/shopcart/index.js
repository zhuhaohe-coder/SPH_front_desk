import { reqShopCartList } from "@/api";

const state = { shopCartList: [] };
const mutations = {
  GET_SHOP_CART_LIST(state, data) {
    state.shopCartList = data;
  },
};
const actions = {
  async getShopCartList({ commit }) {
    const result = await reqShopCartList();

    commit("GET_SHOP_CART_LIST", result.data[0].cartInfoList);
  },
};
const getters = {
  shopCartList(state) {
    return state.shopCartList;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
