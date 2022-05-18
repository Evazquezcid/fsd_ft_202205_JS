// ARROW FUNCTIONS

//TRUCO:
//Si yo quiero hacer un numero meto const x y el numero, si quiero hacer un objeto meto const y {}, si quiero hacer un array meto const y [], si quiero hacer una funcion meto const ()

// Función tradicional:
/* function saludador(){
    console.log("Hola")
} */

const saludador = () => {
  console.log("Hola");
};

saludador();

///////////
const suma = (numA, numB) => {
  const resultado = numA + numB;
  return resultado;
  // Retorno el resultado porque es la información "util" que voy a sacar de esta función
};

const resultadoDosMasCinco = suma(2, 5);
const resultadoSeisMasOcho = suma(6, 8);

console.log(resultadoDosMasCinco)
console.log(resultadoSeisMasOcho)

