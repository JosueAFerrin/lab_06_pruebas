// math.test.js
const { factorial, fibonacci, suma } = require('./math');

describe('Pruebas de funciones matemáticas', () => {
  
  // Pruebas factorial
  test('Factorial de 0 debe ser 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('Factorial de 5 debe ser 120', () => {
    expect(factorial(5)).toBe(120);
  });

  test('Factorial con número negativo debe lanzar error', () => {
    expect(() => factorial(-1)).toThrow('No existe factorial de números negativos');
  });

  // Pruebas fibonacci
  test('Fibonacci de 0 debe ser 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('Fibonacci de 7 debe ser 13', () => {
    expect(fibonacci(7)).toBe(13);
  });

  test('Fibonacci con número negativo debe lanzar error', () => {
    expect(() => fibonacci(-5)).toThrow('No existe fibonacci de números negativos');
  });

  // Prueba de suma
  test('Suma de 2 y 3 debe ser 5', () => {
    expect(suma(2, 3)).toBe(5);
  });

});