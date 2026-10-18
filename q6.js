//6. Parameterized Constructor for Category
// Create a class Category with a parameterized constructor to initialize categoryId,
// categoryName, and description.
class Category {
    constructor(categoryId, categoryName, description) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.description = description;
    }
}
const category = new Category(1, "Automotive", "Products related to automotive industry.");
console.log(category);