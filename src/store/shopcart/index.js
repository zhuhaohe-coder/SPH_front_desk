import { reqShopCartList } from "@/api";

const state = { shopCartList: [] };
const mutations = {};
const actions = {
  async getShopCartList({ commit }) {
    const result = await reqShopCartList();
    console.log(result);
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
