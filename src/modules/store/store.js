import Vuex from "vuex";
import Vue from "vue";
import { stocksModules } from "../stocks.modules";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocksModules
    }
});
