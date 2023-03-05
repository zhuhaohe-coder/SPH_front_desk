import { reqSearchInfo } from "@/api";

const actions = {
  async getSearchList({ commit }, params) {
    const result = await reqSearchInfo(params);
    if (result.code === 200) {
      commit("GET_SEARCH_LIST", result.data);
    }
  },
};
const mutations = {
  GET_SEARCH_LIST(state, searchList) {
    state.searchList = searchList;
  },
};
const state = {
  searchList: {},
};
// 简化数据
const getters = {
  // 这里的state是当前仓库中的state,而非大仓库中的state
  attrsList(state) {
    return state.searchList.attrsList || [];
  },
  goodsList(state) {
    return state.searchList.goodsList || [];
  },
  trademarkList(state) {
    return state.searchList.trademarkList || [];
  },
};

export default {
  actions,
  mutations,
  state,
  getters,
};
