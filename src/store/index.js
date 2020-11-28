import Vue from "vue";
import Vuex from "vuex";
import {History} from "./modules/history"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    History
  }
});
