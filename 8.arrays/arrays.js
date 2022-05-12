// ARRAYS
const comida = ["patata", "lechuga", "tomate", "galletas"];
const numbers = [1, 5, 6, 235346];
const random = ["patata", 3, true, "hola"]; // Esto no tiene sentido pero se puede hacer
const superheroes = [
  {
    id: 1,
    nombre: "Spiderman",
    nombreReal: "Peter Parker",
    edad: 22,
    traje: "rojo",
    vivo: true,
  },
  {
    id: 2,
    nombre: "Iron Man",
    nombreReal: "Tony Stark",
    edad: 50,
    traje: "dorado",
    vivo: false,
  },
];

// Acceder a los elementos de un array
console.log(comida[0]);
console.log(superheroes[1]);
console.log(superheroes[1].nombre);
// Podemos combinar la forma de acceder a un array con la de un objeto

//INTERMEDIO PARA VER LA LONGITUD Y LA POSICION
//LONGITUD SON LOS NUMEROS HUMANOS Y LA POSICION LOS NUMEROS DEL ORDENADOR
const array = ["Adrian", "Raquel", "Silvia", "Carmen", "Fran"];
const name = "Pepe";

//LONGITUD->  length -> L E N GO TO HELL
console.log("LONGITUD", array.length);

// array tiene 5 elementos de longitud 1-2-3-4-5, pero tiene 5 posiciones 0-1-2-3-4
console.log("LONGITUD DE NAME", name.length);
