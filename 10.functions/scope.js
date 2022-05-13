// SCOPE
// Declaramos variable
let avenger = "Wolverine";
// Función
function global() {
  // Accedemos a la variable
  console.log("in function " + avenger);
}
// Ejecutamos función
global();
// Imprimimos valor de variable
console.log("out function " + avenger);

// NO SE PUEDE

function crearNumero() {
  const numero = Math.floor(Math.random() * 10); //Ejemplo de un numero aleatorio hasta el 10
  console.log(numero);
}

crearNumero();

/* console.log(numero); ESTO FALLA PORQUE NUMERO SE HA CREADO EN LA FUNCION, NO PUEDE ACCEDER FUERA DE ELLA*/

//SI SE PUEDE

let contador = 0;

function sumarNumero() {
  contador += 1;
  console.log(contador);
}

sumarNumero()
sumarNumero()
sumarNumero()
sumarNumero()

console.log(contador)
