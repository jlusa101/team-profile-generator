// Class named Employee that potrays a typical employee
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Returns name of the employee
    getName() {
        return this.name;
    }

    // Returns the id of the specified employee as a string literal
    getId() {
        return `${this.name}'s id is ${this.id}`;
    }

    // Returns the email address of the employee
    getEmail() {
        return this.email;
    }

    // Returns the role of the person
    getRole() {
        const role = "Employee";

        return role;
    }
}

module.exports = Employee;