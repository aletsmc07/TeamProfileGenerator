const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Alejandro', 1, 'alejandro.mince07@gmail', 5566778899);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Gets role of employee', () => {
    const manager = new Manager('Alejandro', 1, 'alejandro.mince07@gmail');
    expect(manager.getRole()).toEqual("Manager");
}); 