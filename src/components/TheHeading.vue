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
                        :to="{name: 'porfolio'}"
                        tag="b-nav-item"
                        active-class="active"
                        exact
                    >
                        <b-dropdown
                            variant="outline-light"
                            split
                            text="Porfolio"
                            class="m-2"
                        >
                            <b-dropdown-item :to="{name: 'porfolio-stock'}">Porfolio Stock</b-dropdown-item>
                        </b-dropdown>
                    </router-link>
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
                        <h6>Your Cart
                            <b-badge variant="warning">{{cart}}</b-badge>
                        </h6>
                    </b-nav-item>

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template slot="button-content"><em>User</em></template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    data(){
        return {
            cartLength: 0
        }
    },
    computed: {
        cart(){
            return this.$store.getters.GET_PRODUCT_LENGTH
        }
    }
};
</script>

<style>
</style>
