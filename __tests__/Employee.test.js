const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
    const employee = new Employee('John Doe', 0, 'johndoe@email.com');

    expect(employee.name).toBe('John Doe');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('johndoe@email.com');
});

test("retrieves employee's name", () => {
    const employee = new Employee('John Doe', 0, 'johndoe@email.com');

    expect(employee.getName()).toEqual(expect.stringContaining('John Doe'));
});

test("retrieves employee's id", () => {
    const employee = new Employee('John Doe', 0, 'johndoe@email.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test("retrieves employee's email", () => {
    const employee = new Employee('John Doe', 0, 'johndoe@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('johndoe@email.com'));
});

test("retrieves employee's role", () => {
    const employee = new Employee('John Doe', 0, 'johndoe@email.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});