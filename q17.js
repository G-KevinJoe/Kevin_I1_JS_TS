// 17. User-Defined Exception
// Create a user-defined exception called InvalidProductException and demonstrate its usage
// when a product ID is invalid.
class InvalidProductException extends Error {
    constructor(productId) {
        super("Product ID " + productId + " is invalid.");
        this.name = "InvalidProductException";
    }
}

const products = [
    { productId: 1, productName: "Notebook" },
    { productId: 2, productName: "Pen" },
    {productId: 3, productName: "Backpack"},
    {productId: 4, productName: "calculator"}
];

function findProduct(productId) {
    const product = products.find((item) => item.productId === productId);

    if (!product) {
        throw new InvalidProductException(productId);
    }

    return product;
}


try {
    console.log(findProduct(4));
} catch (error) {
    if (error instanceof InvalidProductException) {
        console.log(error.name + ": " + error.message);
    } else {
        throw error;
    }
}

try{
    console.log(findProduct(5));
} catch (error) {
    if (error instanceof InvalidProductException) {
        console.log(error.name + ": " + error.message);
    } else {
        throw error;
    }
}
