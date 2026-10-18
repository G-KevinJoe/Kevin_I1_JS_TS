// 24. Destructuring
// Demonstrate array and object destructuring to extract product names, customer details,
// and shipping address information.

const productNames = ["Notebook", "Pen", "Backpack"];
const [firstProduct, secondProduct] = productNames;
const customer = {
    name: "Kevin Prakash",
    email: "kevin@example.com"
};
const { name, email } = customer;
const shippingAddress = {
    street: "5th Avenue",
    city: "Mumbai",
    postalCode: "400068"
};
const { street, city, postalCode } = shippingAddress;
console.log("Product names:", firstProduct, secondProduct);
console.log("Customer:", name, email);
console.log("Shipping address:", street, city, postalCode);