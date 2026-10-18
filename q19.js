// 19. Arrow Function
// Write an arrow function calculateDiscount that calculates the final product price after
// applying a discount percentage.

const calculateDiscount = (price, discountPercentage) => {
    return price - (price * discountPercentage) / 100;
};
console.log("Final price:", calculateDiscount(10007, 55));