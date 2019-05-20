<template v-if="true">
    <b-container>
        <div v-if="cartItem.length > 0 ">
            <b-table
                :fields="fields"
                borderless
                hover
                :items="cartItem"
            >
                <template
                    slot="actions"
                    slot-scope="data"
                >
                    <b-button
                        variant="info"
                        @click="handleDeleteItem(data.item)"
                    >
                        Delete
                    </b-button>
                </template>
                <template
                    slot="actions2"
                    slot-scope="data"
                >
                    <b-button
                        variant="danger"
                        @click="handleModal(data.item)"
                    >
                        Change Quantity
                    </b-button>
                </template>

                <template slot="table-caption">
                    <div class="text-right">
                        <b-button
                            class="mr-3"
                            variant="outline-success"
                        >Order</b-button>
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
            id="modal-prevent-closing"
            title="Update quantity"
            @ok="handleSubmitModal"
        >
            <form>
                <b-form-group invalid-feedback="Name is required">
                    <b-form-input
                        v-model="newQuantity"
                        required
                    ></b-form-input>
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
                "orderPrice",
                "actions",
                "actions2"
            ],
            cartItem: this.$store.getters.GET_CART
        };
    },
    computed: {
        sum() {
            const sum = this.cartItem.reduce((sum, item) => {
                return sum + item.orderPrice * item.orderQuantity;
            }, 0);
            return sum;
        }
    },
    methods: {
        handleSubmitModal() {
            console.log(this.newQuantity);
            if (this.newQuantity == 0) {
                this.$store.dispatch("FIND_AND_DELETE", this.orderProduct);
            } else {
                this.orderProduct.orderQuantity = this.newQuantity;
                this.$store.dispatch("FIND_OR_CREATED", this.orderProduct);
            }
            this.newQuantity = 0;
        },
        handleModal(item) {
            this.$bvModal.show("modal-prevent-closing");
            this.orderProduct = { ...item };
            this.newQuantity = item.orderQuantity;
            console.log(this.orderProduct);
        },
        handleDeleteItem(cartItem) {
            this.$store.dispatch("FIND_AND_DELETE", cartItem);
        },
        rowSelected(items) {
            this.selected = items;
        },
        handleClearCart() {
            this.$store.dispatch("CLEAR_CART");
        }
    }
};
</script>

<style>
</style>
