// Person class definition
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Method that returns the greeting text for Person
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
    }
}

// Employee class definition
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);  // Inherits name and age from Person
        this.jobTitle = jobTitle;
    }
    
    // Method that returns the greeting text for Employee
    jobGreet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
    }
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

// Instantiate a Person and an Employee
const person = new Person("Alice", 25);
const employee = new Employee("Bob", 30, "Manager");

// Get the greeting elements
const personGreetingDiv = document.getElementById("personGreeting");
const employeeGreetingDiv = document.getElementById("employeeGreeting");

// Set the text of the elements to the greetings
personGreetingDiv.textContent = person.greet();
employeeGreetingDiv.textContent = employee.jobGreet();