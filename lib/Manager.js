const Employee = require("../lib/Employee");

// Manager class that extends the Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };

    // Returns manager's role
    getRole() {
        const role = "Manager";

        return role;
    };
}

module.exports = Manager;