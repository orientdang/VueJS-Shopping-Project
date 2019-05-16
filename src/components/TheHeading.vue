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
                        :to="{name: 'stocks'}"
                        tag="b-nav-item"
                        active-class="active"
                        exact
                    >
                        <b-dropdown
                            variant="outline-light"
                            split
                            text="Stocks"
                            class="m-2"
                        >
                            <b-dropdown-item :to="{name: 'stocks-item'}">Stocks item</b-dropdown-item>
                        </b-dropdown>
                    </router-link>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input
                            size="sm"
                            class="mr-sm-2"
                            placeholder="Search"
                        ></b-form-input>
                        <b-button
                            size="sm"
                            class="my-2 my-sm-0"
                            type="submit"
                            variant="outline-light"
                        >Search</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown
                        text="Lang"
                        right
                    >
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

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
export default {};
</script>

<style>
</style>
