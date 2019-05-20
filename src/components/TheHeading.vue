<template>
    <div>
        <b-navbar
            toggleable="lg"
            type="dark"
            variant="danger"
        >
            <b-navbar-brand :to="{name: 'the-home'}">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse
                id="nav-collapse"
                is-nav
            >
                <b-navbar-nav>

                    <router-link
                        :to="{name: 'product'}"
                        tag="b-nav-item"
                        active-class="active"
                        exact
                    >
                        <b-dropdown
                            variant="outline-light"
                            split
                            text="Products"
                            class="m-2"
                        >
                            <b-dropdown-item :to="{name: 'product-item',params: {gender: 'male'}}">Male</b-dropdown-item>
                            <b-dropdown-item :to="{name: 'product-item',params: {gender: 'female'}}">Female</b-dropdown-item>
                        </b-dropdown>
                    </router-link>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item>
                        <router-link
                            tag="h6"
                            to="/cart"
                        >
                            Your Cart
                            <b-badge variant="warning">{{cart}}</b-badge>
                        </router-link>
                    </b-nav-item>

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template slot="button-content"><em>User</em></template>
                        <b-dropdown-item :to="{name: 'cart'}">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cartLength: 0
        };
    },
    computed: {
        cart() {
            return this.$store.getters.GET_CART_LENGTH;
        }
    }
};
</script>

<style>
</style>
