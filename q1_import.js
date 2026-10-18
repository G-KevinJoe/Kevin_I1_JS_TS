// Part A: JavaScript and TypeScript
// 1. Import and Export in JavaScript and TypeScript
// Demonstrate import and export for the following:
// • a. Variable (e.g., taxRate)
// • b. Function (e.g., calculateDiscount)
// • c. Class (e.g., Product, ShoppingCart)
// • d. Write the commands to install TypeScript and compile and run a TypeScript file.

const { taxRate, calculateDiscount, Product, ShoppingCart } = require("./q1");
const product = new Product("Notebook", 10);
const cart = new ShoppingCart();
cart.addProduct(product);
console.log("Tax Rate:", taxRate);
console.log("Price After Discount:", calculateDiscount(product.price, 10));
console.log("Shopping Cart total:", cart.getTotal());