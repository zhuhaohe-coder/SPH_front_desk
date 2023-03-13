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
const getters = {
  // 数据还未请求到时, 为undefined, 至少应该是一个空对象
  categoryView(state) {
    return state.detailInfo.categoryView || {};
  },
  skuInfo(state) {
    return state.detailInfo.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.detailInfo.spuSaleAttrList || [];
  },
};
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
