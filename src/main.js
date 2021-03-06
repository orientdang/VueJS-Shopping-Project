import Vue from "vue";
import App from "./App.vue";
import { routes } from "./routes";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import  store  from "./modules/store";
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
    routes,
    mode: "history"
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
