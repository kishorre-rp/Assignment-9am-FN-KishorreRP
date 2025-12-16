class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Salary: ${this.salary}`);
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary); 
    this.department = department;
  }
 
  displayInfo() {
    console.log(
      `Name: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`
    );
  }
}

// Example usage:
const e1 = new Employee("Kishorre R P", 40000);
e1.displayInfo();

const m1 = new Manager("Jeeva", 60000, "IT");
m1.displayInfo(); 
