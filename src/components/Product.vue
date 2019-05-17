<template>
    <b-container>
        <div class="mt-3 row">
            <div
                v-for="(product,index) in productsByGender"
                :key="index"
                class="col-3 mt-3"
            >
                <product-item :productItem="product"/>
            </div>
        </div>
    </b-container>

</template>

<script>
import ProductItem from "./ProductItem";
import productsServices from "../services/products.service";

export default {
    created() {
        this.getProducts();
    },
    watch: {
        // eslint-disable-next-line
        $route(to, from) {
            this.gender = to.params.gender;
        }
    },
    computed: {
        productsByGender() {
            if (this.hasParams()) {
                return this.getProductsByGender(this.gender);
            } else {
                return this.productItems;
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
            this.productItems = productsServices.getAll();
        }
    },
    data() {
        return {
            productItems: [],
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
