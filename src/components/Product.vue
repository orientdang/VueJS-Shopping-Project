<template>
    <b-container>
        <div class="mt-3 row">
            <div
                v-for="(product,index) in productsByGender"
                :key="index"
                class="col-3 mt-3"
            >
                <product-item :key="$store.getters.RENDER_KEY" :productItem="product" />
            </div>
        </div>
    </b-container>

</template>

<script>
import ProductItem from "./ProductItem";
import productsServices from "../services/products.service";

export default {
    // created() {
    //     this.$store.dispatch("INIT_PRODUCTS", this.getProducts());
    // },
    watch: {
        // eslint-disable-next-line
        $route(to, from) {
            this.gender = to.params.gender;
        }
    },
    computed: {
        productsByGender() {
            if (this.hasParams()) {
                return this.$store.getters.GET_PRODUCTS_BY_GENDER(this.gender);
            } else {
                return this.$store.getters.GET_PRODUCTS;
            }
        }
    },
    methods: {
        hasParams() {
            return this.gender != undefined ? true : false;
        },
        getProductsByGender(gender) {
            return productsServices.getByGender(gender);
        },
        getProducts() {
            return productsServices.getAll();
        }
    },
    data() {
        return {
            // productItems: [],
            gender: this.$route.params.gender
        };
    },
    components: {
        "product-item": ProductItem
    }
};
</script>

<style>
</style>
