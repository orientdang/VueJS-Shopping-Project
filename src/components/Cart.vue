<template v-if="true">
    <b-container>
        <div v-if="cartItem.length > 0 ">
            <b-table
                :fields="fields"
                borderless
                hover
                :items="cartItem"
            >

                <template slot="table-caption">
                    <div class="text-right">
                        <b-button
                            class="mr-3"
                            variant="outline-success"
                            v-b-modal.modal-save
                        >Save</b-button>
                        <b-button
                            variant="outline-danger"
                            @click="handleClearCart"
                        >Clear Cart</b-button>
                    </div>
                </template>
                <template slot="table-caption">
                    <h3>Tổng tiền: {{sum | formatThreeDigit}}</h3>
                </template>

            </b-table>
        </div>
        <div v-else>
            <h3 class="font-italic mt-5 text-warning text-center">You have no products, please chose one</h3>
        </div>
        <!-- The modal -->
        <b-modal
            id="modal-save"
            title="Saving...."
            @ok="onSave"
        >
            <form>
                <b-form-group invalid-feedback="Name is required">
                    <p>Your orders have been save, would you like to continue shopping?</p>
                </b-form-group>
            </form>
        </b-modal>
    </b-container>
</template>

<script>
export default {
    filters: {
        formatThreeDigit(value) {
            return new Intl.NumberFormat().format(value) + " $";
        }
    },
    data() {
        return {
            newQuantity: 0,
            orderProduct: {},
            selected: [],
            fields: [
                "orderId",
                "orderName",
                "orderGender",
                "orderQuantity",
                "orderPrice"
            ]
            // cartItem: [...this.$store.getters.GET_CART]
        };
    },
    computed: {
        cartItem() {
            return this.$store.getters.GET_CART;
        },
        sum() {
            const sum = this.cartItem.reduce((sum, item) => {
                return sum + item.orderPrice * item.orderQuantity;
            }, 0);
            return sum;
        }
    },
    methods: {
        onSave() {
            this.$store.dispatch("SAVE", this.cartItem);
            this.$store.dispatch("CLEAR_CART");
        },
        handleClearCart() {
            this.$store.dispatch("CLEAR_CART");
        }
    }
};
</script>

<style>
</style>
