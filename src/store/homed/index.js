import { reqCategoryList, reqBannerList } from "@/api";

const actions = {
  async categoryList({ commit }) {
    const result = await reqCategoryList();
    if (result.code === 200) {
      commit("CATEGORY_LIST", result.data);
    }
  },
  async bannerList({ commit }) {
    const result = await reqBannerList();
    console.log(result);
    if (result.code === 200) {
      commit("BANNER_LIST", result.data);
    }
  },
};
const mutations = {
  CATEGORY_LIST(state, categoryList) {
    // 只保留前15条数据(页面装不下)
    state.categoryList = categoryList.slice(0, 15);
  },
  BANNER_LIST(state, bannerList) {
    state.bannerList = bannerList;
  },
};
const state = {
  // 三级分类数据
  categoryList: [],
  // 轮播图数据
  bannerList: [],
};
const getters = {};

export default {
  actions,
  mutations,
  state,
  getters,
};
