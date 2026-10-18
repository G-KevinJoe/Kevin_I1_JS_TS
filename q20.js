// 20. Anonymous Function
// Write an anonymous function assigned to a variable that increases the prices of all products
// in an array by a specified percentage.

const increaseProductPrices = function (products, percentage) {
    return products.map((product) => ({
        ...product,
        price: product.price + (product.price * percentage) / 100
    }));
};
const products = [
    { productName: "Break Fluid", price: 10},
    { productName: "Windshield Wiper Fluid", price: 2},
    { productName: "Battery", price: 45}
];
console.log(increaseProductPrices(products, 45));