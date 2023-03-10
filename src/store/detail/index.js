import { reqDetailInfo } from "@/api";
const state = {
  detailInfo: {},
};
const actions = {
  async getDetailInfo({ commit }, skuId) {
    const result = await reqDetailInfo(skuId);
    if (result.code === 200) {
      commit("GET_DETAIL_INFO", result.data);
    }
  },
};
const getters = {};
const mutations = {
  GET_DETAIL_INFO(state, detailInfo) {
    state.detailInfo = detailInfo;
  },
};

export default {
  actions,
  mutations,
  state,
  getters,
};
