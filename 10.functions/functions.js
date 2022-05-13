// FUNCION

// TIPS ->
// 1. El nombre de la función tiene que ser indicativo de lo que hace. Se suelen poner verbos inifinito.
// 2. Los nombres tienen que ser breves.
// 3. Poner en funciones numeros o series esta feo.

// #1
function saludador() {
  // Creo la función, la denomino y le indico los parámetros (en este caso ninguno)
  console.log("Hola a todos y todas"); // Indico que hace mi función
}

saludador(); // Ejecuto la función

// #2
function saludadorCustom(nombreDeAlguien) {
  // "nombreDeAlguien" es mi parámetro
  console.log("Buenos dias " + nombreDeAlguien);
}

saludadorCustom("Paco");
saludadorCustom("Emilio");

// #3
function saludadorCustomTwo(nombre, apellido) {
  // Ahora tengo dos parámetros y el order es ESTRICTO
  console.log("Buenas tardes " + nombre + " " + apellido); // Los coloco en mi ejecución en el order que quiera.
}

saludadorCustomTwo("Peter", "Parker");

//#4
function saludadorCustomThree(nombre, apellido) {
  const nombreCompleto = nombre + " " + apellido; //Puedo ejecutar más de una cosa en mi funcion
  console.log("Buenas noches " + nombreCompleto);
}

saludadorCustomThree("Paco", "Porras");

//#5
function sumaNumeros(numA, numB) {
  const resultado = numA + numB;
  console.log("El resultado de mi suma es: " + resultado);
}

sumaNumeros(2, 3);
sumaNumeros(24852, 290354);

function multiplicaNumeros(numA, numB) {
  const resultado = numA * numB;
  console.log("El resultado de mi multiplicacion es: " + resultado);
}

multiplicaNumeros(2, 4);

//#6
function saludadorPorEdad(name, surname, bornYear, actualYear = 2022) {
  // Se le pueden poner valores por defecto a los parametros
  const edad = actualYear - bornYear;
  const nombreCompleto = name + " " + surname;
  const saludo =
    "Hola, me llamo " + nombreCompleto + " y tengo " + edad + " años.";
  console.log(saludo);
}

saludadorPorEdad("Antonio", "Rosales", 1990); // Si no le meto, en este caso el 4º parametro, me coje el valor por defecto. Si se lo indico, sustituye el valor por defecto.

//#7
const perrillo = {
  edad: 10,
  nombre: "lucky",
  raza: "labrador",
  patas: 4,
  pelo: 100,
  comida: 50,
};

const conejillo = {
  edad: 5,
  nombre: "pedro",
  raza: "bunny",
  patas: 4,
  pelo: 60,
  comida: 0,
};

const gatillo = {
  edad: 8,
  nombre: "francisco",
  raza: "gatillo",
  patas: 3,
  pelo: 120,
  comida: 10,
};

console.log(
  "La barra de comida de mi perro antes de la función " + perrillo.comida
);
console.log(
  "La barra de comida de mi conejo antes de la función " + conejillo.comida
);
console.log(
  "La barra de comida de mi gatillo antes de la función " + gatillo.comida
);

function darDeComer(animal) {
  if (animal.comida < 70) {
    animal.comida += 30;
    console.log(
      "La barra de comida de " + animal.nombre + " es de " + animal.comida
    );
  } else {
    console.log(animal.nombre + " no tiene más hambre");
  }
}

function hacerEjercicio(animal) {
  if (animal.comida >= 30) {
    animal.comida -= 15;
    console.log(
      "Después del ejercicio, " +
        animal.nombre +
        " tiene " +
        animal.comida +
        " en la barra de comida."
    );
  } else {
    console.log(
      animal.nombre + " no puede hacer ejercicio con la panza vacia."
    );
  }
}

console.log("-------Primera comida-------");

darDeComer(perrillo);
darDeComer(conejillo);
darDeComer(gatillo);

console.log("-------Segunda comida-------");

darDeComer(perrillo);
darDeComer(conejillo);
darDeComer(gatillo);

console.log("-------Primer paseo-------");

hacerEjercicio(perrillo);
hacerEjercicio(conejillo);
hacerEjercicio(gatillo);

//#8

const carrito = [];

function meterAlimentoEnCarro(alimento) {
  carrito.push(alimento);
  console.log(alimento + " se ha añadido al carrito");
  console.log(
    "El estado del carrito es: ",
    carrito,
    "con una totalidad de " + carrito.length + " unidades de articulos."
  );
}

//Hacemos la compra:
meterAlimentoEnCarro("pan");
meterAlimentoEnCarro("pizza");
meterAlimentoEnCarro("horchata");

//#9
const carroDeLaCompra = [];
const bolso = [];
const maletero = [];

function irAlSupermercado(articulo, donde) {
  donde.push(articulo);
  if (donde === bolso) {
    console.log(
      "Acabo de mangar una unidad de " + articulo + " y mi bolso contiene:",
      bolso
    );
  } else if (donde === carroDeLaCompra) {
    console.log(
      "He comprado una unidad de " + articulo + " y mi carrito contiene:",
      carroDeLaCompra
    );
  } else if (donde === maletero) {
    console.log(
      "He secuestrado una unidad de " + articulo + " y mi maletero contiene:",
      maletero
    );
  }
}

irAlSupermercado("pan", bolso);
irAlSupermercado("melon", bolso);
irAlSupermercado("galletas", carroDeLaCompra);
irAlSupermercado("bebe", maletero);
