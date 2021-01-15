import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contentTitle: [],
  },
  mutations: {
    SET_contentTitle(state, val) {
      state.contentTitle = val;
    },
  },
  actions: {},
  modules: {},
});
