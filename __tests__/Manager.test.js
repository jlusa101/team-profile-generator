const Manager = require('../lib/Manager.js');

test("creates a manager object", () => {
    const manager = new Manager('Steve Bossman', 32, 'stevebossman@email.com', 25);

    expect(manager.name).toBe('Steve Bossman');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('stevebossman@email.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("retrieves managers's role", () => {
    const manager = new Manager('Steve Bossman', 32, 'stevebossman@email.com', 25);

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});