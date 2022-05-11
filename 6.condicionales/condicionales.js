// CONDICIONALES

// GLOSARIO COMPARATIVO

// MAYOR QUE -> >
// MAYOR O IGUAL QUE -> >=
// MENOR QUE -> <
// MENOR O IGUAL QUE -> <=
// IGUAL QUE -> ==
// ESTRICTAMENTE IGUAL -> ===
// NO ES IGUAL -> !=
// ESTRICTAMENTE NO ES IGUAL -> !==
// IF -> SI X SE CUMPLE

const age = 17;

if (age >= 18) {
  console.log("PUEDES CONDUCIR");
}

// ELSE -> SI X NO SE CUMPLE

if (age >= 18) {
  console.log("PUEDES CONDUCIR");
} else {
  console.log("NO PUEDES CONDUCIR");
}

// ELSE IF -> Y SI
const comida = "galletas";

if (comida === "bocadillo") {
  console.log("En el Carrefour están revenidos");
} else if (comida === "pannini") {
  console.log("Por lo menos está caliente");
} else if (comida === "galletas") {
  console.log("Hoy voy a comer poquito");
} else {
  console.log("Hoy no como nada");
}

const edad = 10;

if (edad > 0 && edad <= 6) {
  console.log("GUARDERIA");
} else if (edad > 7 && edad < 14) {
  console.log("COLEGIO");
} else if (edad >= 14) {
  console.log("INSTITUTO");
} else {
  console.log("NO HAS NACIDO");
}

// TERNARIOS

const name = "Antonio";

const resultadoTernario =
  name === "Antonio" ? "ASI ME LLAMO" : "ASI NO ME LLAMO";

if (name === "Antonio") {
  ("ASI ME LLAMO");
} else if (name !== "Antonio") {
  ("ASI NO ME LLAMO");
}

console.log(resultadoTernario);

const edadMaxima = 89;
const resultadoEdadMaxima =
  edadMaxima > 90 && edadMaxima < 100
    ? "TE HAS PASADO"
    : "ENTRAS DENTRO DE LA EDAD";

console.log(resultadoEdadMaxima);

// MEGATERNARIO
const resultadoMegaEdadMaxima =
  edadMaxima > 90
    ? "Madre mia que mayor"
    : edadMaxima > 100
    ? "Todavia más mayor"
    : "No se que edad tienes";

// NEGACION

const delicuente = "Paco";

if (delicuente !== "Paco") {
  console.log("Es un nuevo delincuente");
} else {
  console.log("PACO EL MAS BUSCADO DEL OESTE");
}

////////////////////

const vivo = true;

if (!vivo) {
  console.log("RIP");
} else {
  console.log("Enhorabuena");
}

if (vivo) {
  console.log("Enhorabuena");
} else {
  console.log("RIP");
}

if (vivo === true) {
  console.log("Enhorabuena");
} else if (vivo === false) {
  console.log("RIP");
}

//////////////////
const nombrecito = "Pepe";

if (nombrecito) {
  console.log("Hola");
} else {
  console.log("No hay");
}
