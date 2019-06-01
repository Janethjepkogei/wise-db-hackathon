import Vue from "vue";
import Vuex from "vuex";

// Module imports

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  strict: process.env.NODE_ENV !== "production" // prevents mutation of store directly, turned off in prod for performance
});