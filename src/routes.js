import TheHome from "./components/TheHome.vue";
import TheHeading from "./components/TheHeading.vue";
import TheFooter from "./components/TheFooter.vue";
import Porfolio from "./components/Porfolio.vue";
import PorfolioStock from "./components/PorfolioStock.vue";
import Stocks from "./components/Stocks.vue";
import StocksItem from "./components/StocksItem.vue";
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
        path: "/porfolio",
        name: "porfolio",
        components: {
            default: Porfolio,
            "the-heading": TheHeading,
            "the-footer": TheFooter
        },
        children: [
            {
                path: "porfolio-stock",
                name: "porfolio-stock",
                components: {
                    default: PorfolioStock,
                    "the-heading": TheHeading,
                    "the-footer": TheFooter
                }
            }
        ]
    },

    {
        path: "/stocks",
        name: "stocks",
        components: {
            default: Stocks,
            "the-heading": TheHeading,
            "the-footer": TheFooter
        },
        children: [
            {
                path: "stocks-item",
                name: "stocks-item",
                components: {
                    default: StocksItem
                }
            }
        ]
    }
];
