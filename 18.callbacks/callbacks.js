// CALLBACKS

const sum = (numA, numB) => {
  const resultado = numA + numB;
  console.log(resultado);
};

const saludador = (nombre) => {
  console.log("Hola " + nombre);
};

const despedidor = (numeroA, numeroB, name) => {
  saludador(name);
  sum(numeroA, numeroB);
  console.log("Adios");
};

despedidor(2, 5, "Pepe");

////////-----------------

const sumador = (numA, numB) => {
  const resultado = numA + numB;
  console.log(resultado);
};

const restador = (numA, numB) => {
  const resultado = numA - numB;
  console.log(resultado);
};

const sumaYResta = (sumA, sumB, resA, resB) => {
  sumador(sumA, sumB);
  restador(resA, resB);
};

sumaYResta(12, 6, 8, 3);

// Puedes reutilizar el mismo parametro en la función, lo que pasa es que en este caso restar el mismo numero con el mismo numero no tiene sentido porque da 0 siempre
/* const sumaYResta = (numero) => {
  sumador(numero, numero);
  restador(numero, numero);
};

sumaYResta(12);
 */

