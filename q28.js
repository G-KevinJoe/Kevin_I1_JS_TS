// 28. Rest Parameter
// Write a function using a rest parameter to calculate the total checkout amount from
// multiple items or charges, such as product prices, delivery fees, packaging charges, and
// service fees.

function calculateCheckoutTotal(...charges) {
    return charges.reduce((total, charge) => total + charge, 0);
}
const checkoutTotal = calculateCheckoutTotal(100, 50, 10, 5);
console.log("Total checkout amount:", checkoutTotal);