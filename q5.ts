// 5. Generic Function
// Write a generic function getProductInfo<T>(info: T): T that accepts and returns any type of
// product-related information.

export {};
function getProductInfo<T>(info: T): T {
    return info;
}
const productName = getProductInfo<string>("Notebook");
const productDetails = getProductInfo({ productId: 1, price: 25 });
console.log(productName);
console.log(productDetails);