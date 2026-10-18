// 22. Array Methods
// Demonstrate the following array methods using product and order records:
// • a. map() – Apply a discount to every product price.
// • b. filter() – Find products whose prices exceed a specified amount.
// • c. reduce() – Calculate the total value of all items in a shopping cart using price and
// quantity.

const products = [
    { productName: "Notebook", price: 10 },
    { productName: "Backpack", price: 45 },
    { productName: "Calculator", price: 30 }
];
const discountedProducts = products.map((product) => ({
    ...product,
    price: product.price * 0.9
}));
const expensiveProducts = products.filter((product) => product.price > 25);
const shoppingCart = [
    { productName: "Notebook", price: 10, quantity: 2 },
    { productName: "Backpack", price: 45, quantity: 1 }
];
const cartTotal = shoppingCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
);
console.log("Products after 10% discount:", discountedProducts);
console.log("Products over $25:", expensiveProducts);
console.log("Shopping cart total:", cartTotal);