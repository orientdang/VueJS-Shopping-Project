<template>
    <b-container>
        <div class="mt-3 row">
            <div
                v-for="(item,index) in items"
                :key="index"
                class="col-3 mt-3"
            >
                <stocks-items :stock="item"  />
            </div>
        </div>
    </b-container>

</template>

<script>
import StocksItem from "./StocksItem";
export default {
    components: {
        "stocks-items": StocksItem
    },
    data() {
        return {
            items: [
                { id: 1, name: "T-Shirt", price: "PRICE" },
                { id: 2, name: "Hoddie", price: "PRICE" },
                { id: 3, name: "Sweather", price: "PRICE" },
                { id: 4, name: "Shirt", price: "PRICE" },
                { id: 5, name: "Leather", price: "PRICE" }
            ]
        };
    }
};
</script>

<style>
</style>
