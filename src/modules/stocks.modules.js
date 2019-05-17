import stocksData from "../data/stock.data";
const states = {
    stocks: []
};
const getters = {
    GET_STOCK(state) {
        if (state) {
            return state.stocks;
        }
    }
};
const actions = {
    INIT_STOCK({ commit }) {
        // eslint-disable-next-line
        console.log(`init_stock`);
        commit("SET_STOCK", stocksData);
    }
    // buyStock({ commit }, orderStock) {
    //     commit();
    // }
};
const mutations = {
    SET_STOCK(state, stocks) {
        state.stocks = stocks;
    }
    // BUY_STOCK(state, orderStock) {
    // }
};

export const stocksModules = {
    states,
    getters,
    actions,
    mutations
};
