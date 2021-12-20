const Employee = require("../lib/Employee");

// Engineer class that extends the Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };

    // Returns an engineer's github username
    getGithub() {
        return this.github;
    }

    // Overrides Employee's getRole() to return Engineer instead
    getRole() {
        const role = "Engineer";
        return role;
    };
}

module.exports = Engineer;