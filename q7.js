// 7. Customer Information
// Create a class CustomerSupportAgent with attributes name, employeeId, department, and
// experience. Define a method displayInfo() to display the employee's details.

class CustomerSupportAgent {
    constructor(name, employeeId, department, experience) {
        this.name = name;
        this.employeeId = employeeId;
        this.department = department;
        this.experience = experience;
    }
    displayInfo() {
        console.log("Name:", this.name);
        console.log("Employee ID:", this.employeeId);
        console.log("Department:", this.department);
        console.log("Experience:", this.experience, "years");
    }
}
const agent = new CustomerSupportAgent("Kevin Prakash", 1, "Software Engineering", 1);
agent.displayInfo();