import TheHome from "./components/TheHome.vue";
import TheHeading from "./components/TheHeading.vue";
import TheFooter from "./components/TheFooter.vue";
import Cart from "./components/Cart";
import Product from "./components/Product";
export const routes = [
    {
        path: "/",
        name: "the-home",
        components: {
            default: TheHome,
            "the-heading": TheHeading,
            "the-footer": TheFooter
        }
    },

    {
        path: "/product",
        name: "product",
        components: {
            default: Product,
            "the-heading": TheHeading,
            "the-footer": TheFooter
        }
    },
    {
        path: "/product/:gender",
        name: "product-item",
        components: {
            default: Product,
            "the-heading": TheHeading,
            "the-footer": TheFooter
        }
    },
    {
        path: "/cart",
        name: "cart",
        components: {
            default: Cart,
            "the-heading": TheHeading,
            "the-footer": TheFooter
        }
    }
];
