<template>
    <div id="app">
        <router-view name="the-heading"></router-view>
        <transition
            name="fade"
            mode="out-in"
            @beforeLeave="beforeLeave"
            @enter="enter"
            @afterEnter="afterEnter"
        >
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
        <router-view name="the-footer"></router-view>
    </div>
</template>

<script>
import productsServices from "./services/products.service";
export default {
    name: "App",
    created() {
        this.$store.dispatch("INIT_PRODUCTS", productsServices.getAll());
    },
    data() {
        return {
            prevHeight: 0
        };
    },
    methods: {
        beforeLeave(element) {
            this.prevHeight = getComputedStyle(element).height;
        },
        enter(element) {
            const { height } = getComputedStyle(element);

            element.style.height = this.prevHeight;

            setTimeout(() => {
                element.style.height = height;
            });
        },
        afterEnter(element) {
            element.style.height = "auto";
        }
    }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-property: height, opacity;
    transition-timing-function: ease-in-out;
    overflow: hidden;
}
</style>
