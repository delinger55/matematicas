function sumar(a, b) {
    return a + b;
  }
  
  function restar(a, b) {
    return a - b;
  }

  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    if (b === 0) throw new Error("División por cero");
    return a / b;
  }  

sumar(5,3);
restar(10,4);
multiplicar(12,3);
dividir(6,2);

console.log("Suma:", sumar(5, 3));
console.log("Resta:", restar(10, 4));
console.log("Multiplicación:", multiplicar(12, 3));
console.log("División:", dividir(6, 2));