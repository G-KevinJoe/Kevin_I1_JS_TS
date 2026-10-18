// 3. Abstract Class and Inheritance - TypeScript
// Define an abstract class PaymentMethod with abstract methods processPayment() and
// getPaymentDetails(). Create derived classes CreditCardPayment and UPIPayment that
// implement these methods.

export {};
abstract class PaymentMethod {
    abstract processPayment(amount: number): void;
    abstract getPaymentDetails(): string;
}
class CreditCardPayment extends PaymentMethod {
    constructor(private cardNumber: string) {
        super();
    }
    processPayment(amount: number): void {
        console.log(`Paid $${amount} using a credit card.`);
    } 
    getPaymentDetails(): string {
        return `Credit card ending in ${this.cardNumber.slice(-4)}`;
    }
}
class UPIPayment extends PaymentMethod {
    constructor(private upiId: string) {
        super();
    }
    processPayment(amount: number): void {
        console.log(`Paid $${amount} using UPI.`);
    }
    getPaymentDetails(): string {
        return `UPI ID: ${this.upiId}`;
    }
}
const creditCard = new CreditCardPayment("1234567890123456");
creditCard.processPayment(45);
console.log(creditCard.getPaymentDetails());
const upi = new UPIPayment("kevin@upi");
upi.processPayment(35);
console.log(upi.getPaymentDetails());