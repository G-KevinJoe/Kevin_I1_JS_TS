// 27. Default Parameter
// Write a function using a default parameter to calculate a delivery charge when no delivery
// fee is provided.

function calculateDeliveryCharge(deliveryFee = 50) {
    return deliveryFee;
}
console.log("Default delivery charge:", calculateDeliveryCharge());
console.log("Delivery charge provided:", calculateDeliveryCharge(30));