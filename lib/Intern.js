const Employee = require("../lib/Employee");

// Intern class that extends the Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };

    // Returns an intern's school name
    getSchool() {
        return this.school;
    }

    // Overrides Employee's getRole() to return Intern's instead
    getRole() {
        const role = "Intern";
        return role;
    };
}

module.exports = Intern;