import Vuex from "vuex";
import Vue from "vue";
import { productsModule } from "./products.module";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        productsModule
    },
    plugins: [createPersistedState()]
});
