const Engineer = require('../lib/Engineer.js');

test("creates a manager object", () => {
    const engineer = new Engineer('Ricky Stok', 25, 'rickystok@email.com', 'rstok');

    expect(engineer.name).toBe('Ricky Stok');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('rickystok@email.com');
    expect(engineer.github).toBe('rstok');
});

test("retrieves engineers's role", () => {
    const engineer = new Engineer('Ricky Stok', 25, 'rickystok@email.com', 'rstok');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});

test("retrieves engineer's github username", () => {
    const engineer = new Engineer('Ricky Stok', 25, 'rickystok@email.com', 'rstok');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('rstok'));
});