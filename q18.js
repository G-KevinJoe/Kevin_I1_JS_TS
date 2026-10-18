// 18. Throw Statement
// Use throw to generate an error when an order amount exceeds the maximum permitted
// transaction limit.

const maximumTransactionAmount = 10000;

function processOrder(orderAmount) {
    if (orderAmount > maximumTransactionAmount) {
        throw new Error("Order amount exceeds the transaction limit.");
    }

    return "Order approved.";
}
try {
    console.log(processOrder(12000));
} catch (error) {
    console.log("Order rejected:", error.message);
}
try {
    console.log(processOrder(8000));
}catch(error) {
    console.log("Order rejected:",error.message);
}
