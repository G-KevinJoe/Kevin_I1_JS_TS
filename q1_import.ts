import { taxRate, calculateDiscount, Product, ShoppingCart } from "./q1";

const product = new Product("Notebook", 10);
const cart = new ShoppingCart();
cart.addProduct(product);

console.log("Tax Rate:", taxRate);
console.log("Price After Discount:", calculateDiscount(product.price, 10));
console.log("Shopping Cart total:", cart.getTotal());