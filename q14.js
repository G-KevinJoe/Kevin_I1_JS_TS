// 14. Try/Catch
// Use try/catch to handle errors such as insufficient product stock when a customer attempts
// to purchase more items than are available.

const availableStock = 5;

function purchaseProduct(requestedQuantity) {
    if (requestedQuantity > availableStock) {
        throw new Error("Insufficient product stock.");
    }

    return "Purchase successful.";
}

try {
    console.log(purchaseProduct(4)); // Successful purchase
    console.log(purchaseProduct(6)); // This will throw a error
} catch (error) {
    console.log("Purchase failed:", error.message);
}