const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
    const employee = new Employee('John Doe', 0, 'johndoe@email.com');

    expect(employee.name).toBe('John Doe');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('johndoe@email.com');
});