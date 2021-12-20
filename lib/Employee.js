class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return `${this.name}'s id is ${this.id}`;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        const role = "Employee";

        return role;
    }
}

module.exports = Employee;