//TIMEOUT
setTimeout(() => {
  console.log("Hola");
}, 3000);

setTimeout(() => {
  console.log("Adios");
}, 6000);

/////////--------------------

function showAlert() {
  alert("Hola, tengo 3 segundos de retraso");
}

function mostrarSaludoEnDosSegundos() {
  setTimeout(showAlert, 3000);
}

/* mostrarSaludoEnDosSegundos() */

// INTERVALOS
let contador = 0;

/* setInterval(() => {
    contador++;
    console.log("Han pasado " + contador + " segundos.")
}, 1000);
 */
setInterval(() => {
  if (contador < 10) {
    contador++;
    console.log("Han pasado " + contador + " segundos.");
  } else{
      clearInterval() //Con clearInterval paro el intervalo
  }
}, 1000);
