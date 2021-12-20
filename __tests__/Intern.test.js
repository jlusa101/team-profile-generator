const Intern = require('../lib/Intern.js');

test("creates a manager object", () => {
    const intern = new Intern('Denise Sharp', 14, 'denisesharp@email.com', 'University of California');

    expect(intern.name).toBe('Denise Sharp');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('denisesharp@email.com');
    expect(intern.school).toBe('University of California');
});

test("retrieves intern's role", () => {
    const intern = new Intern('Denise Sharp', 14, 'denisesharp@email.com', 'University of California');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});

test("retrieves intern's school name", () => {
    const intern = new Intern('Denise Sharp', 14, 'denisesharp@email.com', 'University of California');

    expect(intern.getSchool()).toEqual(expect.stringContaining('University of California'));
});