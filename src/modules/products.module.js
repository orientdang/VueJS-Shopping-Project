const state = {
    cart: []
};
const getters = {
    GET_PRODUCT(state) {
        return state.cart;
    },
    GET_PRODUCT_LENGTH(state) {
        return state.cart.length;
    }
};
const actions = {
    INIT_PRODUCTS({ commit }, cart) {
        // console.log(orderProduct);
        commit("SET_PRODUCT", cart);
    }
};
const mutations = {
    SET_PRODUCT(state, newCart) {
        console.log(state.cart);
        state.cart.push(newCart);
    }
};

export const productsModule = {
    state,
    getters,
    actions,
    mutations
};
