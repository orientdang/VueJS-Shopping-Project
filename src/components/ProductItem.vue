<template>
    <div>
        <div>
            <b-card-group>
                <b-card
                    border-variant="info"
                    :header="productItem.name"
                    header-bg-variant="outline"
                    header-text-variant="info"
                    header-size-variant="lg"
                    align="center"
                >
                    <b-card-text>
                        <input
                            class="form-control"
                            type="number"
                            placeholder="Quantity"
                            v-model="quantity"
                        >
                        <b-button
                            class="form-control mt-3"
                            size="sm"
                            variant="info"
                            @click="handleBuy"
                            :disabled="notValidNumber"
                        >BUY</b-button>
                    </b-card-text>
                </b-card>

            </b-card-group>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        productItem: [Object]
    },
    data() {
        return {
            quantity: null
        };
    },
    computed: {
        notValidNumber() {
            return this.quantity <= 0 ||
                !Number.isInteger(+this.quantity) ||
                this.quantity === null
                ? true
                : false;
        }
    },
    methods: {
        handleBuy() {
            const orderProduct = {
                orderId: this.productItem.id,
                orderName: this.productItem.name,
                orderGender: this.productItem.gender,
                orderQuantity: this.quantity,
                orderPrice: this.productItem.price
            };
            this.$store.dispatch('INIT_PRODUCTS',orderProduct);
        }
    }
};
</script>

<style>
</style>
