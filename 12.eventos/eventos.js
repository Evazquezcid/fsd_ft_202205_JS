// EVENTOS

// SINTAXIS EVENTOS
//Ejemplo:
// <button onclick="alertaMensaje()">Púlsame</button>
// Primero indico el evento por tributo y le doy como valor la función que quiero ejecutar llamándola
// Los eventos en html se suelen escribir con un "on" al principio

//click
function alertaMensaje() {
  alert("Buenos dias");
}

function mostrarPárrafo() {
  const newP$$ = document.createElement("p");
  newP$$.innerText = "Acabo de aparecer";
  document.body.appendChild(newP$$);
}

//mouseover
function cambiarTitulo() {
  const myTitle$$ = document.querySelector("h1");
  myTitle$$.innerText = "Esto es un poco más sencillo";
}

//keypress / keyup / input
//Keypress es el evento que se ejecuta al pulsar una tecla
//keyup al soltarla
//input lee los cambios del input
function leerTecla() {
  const myInput$$ = document.querySelector(".escribe");
  console.log(myInput$$.value);
}

// FORMULARIOS

//onsubmit
//Si yo le indico a un formulario que al hacer onsubmit me ejecute x función, va a leer automáticamente que esa función se tiene que ejecutar al pulsar el botón del formulario.

function onSubmit() {
  const userNameInput$$ = document.querySelector("#username");
  const passwordInput$$ = document.querySelector("#password");
  let username = userNameInput$$.value;
  let password = passwordInput$$.value;
  const user = {
    username: username,
    password: password,
  };
  alert(user.username + " " + user.password);
  //alert(JSON.stringify(user))
}

// ESCUCHADORES DE EVENTOS
function saludador(){
  console.log("Hola")
}

const saludadorBtn$$ = document.querySelector(".saluda");
// En los escuchadores de eventos como primer parámetro tiene el nombre del evento y como segundo parámetro el nombre de la función sin ejecutar
saludadorBtn$$.addEventListener("click", saludador)

/////////////-------------------

const btnNumero$$ = document.createElement("button");
btnNumero$$.innerText = "Pulsa para ver un número";

function mostrarNumero(){
  alert(Math.floor(Math.random()*10))
}

btnNumero$$.addEventListener("click", mostrarNumero);
document.body.appendChild(btnNumero$$)

// LEYENDO LAS TRIPAS DE UN EVENTO
function handleScroll(event){
  console.log(event)
}

document.addEventListener("scroll", handleScroll)


// VAMOS A LEER EL TAMAÑO DEL NAVEGADOR
function handleResize(event){
  console.log(event)
}

window.addEventListener("resize", handleResize);

// CALCULADORA SUMA
function sumarNumeros(){
  let numA$$ = document.querySelector("#numA");
  let numB$$  = document.querySelector("#numB");
  let resultado$$ = document.createElement("p");
  resultado$$.innerText = parseInt(numA$$.value) + parseInt(numB$$.value);
  // Con el método parseInt convierto el valor de mis inputs en un numero entero, asi los puedo sumar
  document.body.appendChild(resultado$$);
}