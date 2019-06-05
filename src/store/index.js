import Vue from "vue";
import Vuex from "vuex";

// Module imports
import { account } from '@/store/account.module.js'
import { navigation } from '@/store/navigation.module.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    account,
    navigation
  },
  strict: process.env.NODE_ENV !== "production" // prevents mutation of store directly, turned off in prod for performance
});