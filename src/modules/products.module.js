// Vuex module
const state = {
    cart: [],
    products: [],
    // key to re-render product-item component 
    reRenderKey: 0
};
const getters = {
    GET_CART(state) {
        return state.cart;
    },
    GET_CART_LENGTH(state) {
        return state.cart.length;
    },
    GET_PRODUCTS(state) {
        return state.products;
    },
    GET_PRODUCTS_BY_GENDER(state) {
        return gender => {
            return state.products.filter(product => {
                return product.gender === gender;
            });
        };
    },
    RENDER_KEY(state) {
        return state.reRenderKey;
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
    INIT_PRODUCTS({ commit }, products) {
        commit("SET_PRODUCTS", products);
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
    },
    SAVE({commit},saveCarts){
        console.log(saveCarts);
        commit('SET_NEW_CART',saveCarts)
    }
};
const mutations = {
    
    SET_PRODUCTS(state, products) {
        state.products = products;
    },
    SET_CART(state, newCart) {
        console.log(state.products);
        state.cart.push(newCart);
    },
    UPDATE_CART(state, updateCart) {
        const oldIndex = state.cart.indexOf(updateCart.oldCart);
        const oldQuantity = +state.cart[oldIndex].orderQuantity ;
        const newQuantity = +updateCart.newQuantity
        state.cart[oldIndex].orderQuantity =  newQuantity + oldQuantity
    },
    DELETE_CART(state) {
        state.cart.splice(0);
        // change the key so that the component can re-render
        state.reRenderKey += 1;
    }
};

export const productsModule = {
    state,
    getters,
    actions,
    mutations
};
