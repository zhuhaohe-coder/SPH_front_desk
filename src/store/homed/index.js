import { reqCategoryList } from "@/api";

const actions = {
  async categoryList(context) {
    const result = await reqCategoryList();
    if (result.code === 200) {
      context.commit("CATEGORY_LIST", result.data);
    }
  },
};
const mutations = {
  CATEGORY_LIST(state, categoryList) {
    // 只保留前15条数据(页面装不下)
    state.categoryList = categoryList.slice(0, 15);
  },
};
const state = {
  categoryList: [],
};
const getters = {};

export default {
  actions,
  mutations,
  state,
  getters,
};
