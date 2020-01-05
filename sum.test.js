const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
})

test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
})

test('object assigment', () => {
    const data = {
        one: 1,
        two: 2,
        four: 4
    }

    data['five'] = 5;

    expect(data).toEqual({one: 1, two: 2, four: 4, five: 5});
})

test('adding positive numbers is not zero', () => {
    for(let a = 1; a < 10; a++) {
        for(let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0)
        }
    }
})

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
})

test('false', () => {
    const x = false;
    expect(x).toBeFalsy();
})

test('true', () => {
    const p = true;
    expect(p).not.toBeFalsy();
})

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
})

test('two plus two', () => {
    const value = 2 + 2;

    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5)

    expect(value).toBe(4);
    expect(value).toEqual(4);
})

test('adding floating point numbers', () => {
    const value = 0.2 + 0.2;

    expect(value).toBeCloseTo(0.4);
})

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
})

test('x in example', () => {
    expect('example').toMatch(/x/);
})

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
})

test('the shopping list has beer on it', () => {
    const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'beer',
        'pepsi'
    ];

    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
})

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
})

describe('example describe', () => {
  test.each`
    number1  | number2  | expectedResult
    ${2}     | ${2}     | ${4}
    ${2}     | ${4}     | ${6}
    ${2}     | ${8}     | ${10}
    ${2}     | ${10}    | ${12}
  `('add two numbers $input1 and $input2 and $expectedResult', ({number1, number2, expectedResult}) => {
    expect(sum(number1, number2)).toBe(expectedResult)
  })
})

const data = new Array("Saab", "Volvo", "BMW");

test('check type - object', () => {
  expect(typeof(data) === 'object').toBeTruthy();
})

const exampleData = {
  data1: true,
  data2: false
}

describe('test exampleData', () => {
  test('test data1', () => {
    expect(exampleData.data1).toBeTruthy();
  })

  test('test data2', () => {
    expect(exampleData.data2).toBeFalsy();
  })
})