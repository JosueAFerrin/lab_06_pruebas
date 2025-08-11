// math.js

// Función factorial (iterativa)
function factorial(n) {
  if (n < 0) throw new Error('No existe factorial de números negativos');
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Función fibonacci (iterativa)
function fibonacci(n) {
  if (n < 0) throw new Error('No existe fibonacci de números negativos');
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1, temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

// Ejemplo de otra función que ya tengas
function suma(a, b) {
  return a + b;
}

module.exports = { factorial, fibonacci, suma };
