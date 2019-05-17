import { productsData } from "../data/products.data";

const getByGender = gender => {
    console.log("getByGender" + productsData);
    const _products = productsData.filter(product => {
        return product.gender === gender;
    });
    return _products;
};
const getAll = () => {
    return productsData;
};
export default { getByGender, getAll };
