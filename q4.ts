//Interface and Implementation - TypeScript
// Create an interface DiscountService with a method applyDiscount(). Implement this
// interface in a class PremiumDiscount to calculate discounts for premium customers.
export {};
interface DiscountService {
    applyDiscount(price: number): number;
}
class PremiumDiscount implements DiscountService {
    constructor(private discountPercentage: number = 20) {}
    applyDiscount(price: number): number {
        return price - (price * this.discountPercentage) / 100;
    }
}
const premiumDiscount = new PremiumDiscount();
console.log("Price After Premium Discount:", premiumDiscount.applyDiscount(50));