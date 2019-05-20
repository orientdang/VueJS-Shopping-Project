const state = {
    cart: []
};
const getters = {
    GET_CART(state) {
        return state.cart;
    },
    GET_CART_LENGTH(state) {
        return state.cart.length;
    }
};
const actions = {
    find(context, orderProduct) {
        const cart = context.getters.GET_CART;
        // Find
        const oldCart = cart.find(
            item => item.orderId === orderProduct.orderId
        );
        return oldCart;
    },
    CLEAR_CART({ commit }) {
        commit("DELETE_CART");
    },
    async FIND_OR_CREATED(context, orderProduct) {
        const oldCart = await context.dispatch("find", orderProduct);
        // if not existed => add new
        if (oldCart === undefined) {
            context.commit("SET_CART", orderProduct);
        }
        // if existed => update
        else {
            context.commit("UPDATE_CART", {
                oldCart,
                newQuantity: orderProduct.orderQuantity
            });
        }
    },
    async FIND_AND_DELETE(context, deletedItem) {
        const oldItem = await context.dispatch("find", deletedItem);
        context.commit("DELETE_ITEM", oldItem);
    }
};
const mutations = {
    SET_CART(state, newCart) {
        state.cart.push(newCart);
    },
    UPDATE_CART(state, updateCart) {
        const oldIndex = state.cart.indexOf(updateCart.oldCart);
        state.cart[oldIndex].orderQuantity = updateCart.newQuantity;
    },
    DELETE_CART(state) {
        state.cart.splice(0);
    },
    DELETE_ITEM(state, oldItem) {
        const indexOldItem = state.cart.indexOf(oldItem);
        state.cart.splice(indexOldItem, 1);
    }
};

export const productsModule = {
    state,
    getters,
    actions,
    mutations
};
