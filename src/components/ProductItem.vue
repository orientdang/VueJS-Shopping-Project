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
                        <div class="text-left mb-2">
                            <b-card-text><span class="font-weight-bold">Quantity</span>: {{remainQuantity}}</b-card-text>
                            <b-card-text><span class="font-weight-bold">Price</span>: {{product.price}}</b-card-text>
                        </div>
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
            quantity: null,
            product: {...this.productItem}
        };
    },
    computed: {
        notValidNumber() {
            return this.quantity <= 0 ||
                !Number.isInteger(+this.quantity) ||
                this.quantity === null ||
                this.product.quantity - this.quantity < 0
                ? true
                : false;
        },
        remainQuantity() {
            const remain = this.product.quantity - this.quantity;
            return this.quantity < 0 ? this.product.quantity : remain;
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
            this.$store.dispatch("FIND_OR_CREATED", orderProduct);
            this.product.quantity = this.remainQuantity;
            this.reset();
        },
        reset() {
            this.quantity = "";
        }
    }
};
</script>

<style>
</style>
