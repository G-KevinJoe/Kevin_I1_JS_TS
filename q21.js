// 21. Named Function
// Write a named function filterExpensiveProducts that returns products whose price exceeds
// a given amount.

function filterExpensiveProducts(products, minimumPrice) {
    return products.filter((product) => product.price > minimumPrice);
}
const products = [
    { productName: "Notebook", price: 10 },
    { productName: "Backpack", price: 45 },
    { productName: "Calculator", price: 30 }
];
console.log(filterExpensiveProducts(products, 25));