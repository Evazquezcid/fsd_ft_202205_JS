// METODOS PARA LOCALIZAR VALORES DE UN ARRAY

const comida = ["patata", "lechuga", "tomate", "galletas", "lechuga"];

// INDEXOF -> Devuelve la posición del primer elemento que coincida con el parámetro.
// Si el elemento no se encuentra devuelve -1
const indexOfLechuga = comida.indexOf("lechuga");
console.log(indexOfLechuga); // DEVUELVE 1

// LASTINDEXOF -> Devuelve la última posición del elemento que coincida con el parámetro.
// Si el elemento no se encuentra devuelve -1
const lastIndexOfLechuga = comida.lastIndexOf("lechuga");
console.log(lastIndexOfLechuga); // DEVUELVE 4

// INCLUDES -> Devuelve un valor booleano si el elemento indicado por parametro se encuentra en el array
console.log(comida.includes("lechuga"));
console.log(comida.includes("cebolla"));

//PRUEBA
const busquedaDelTomate = comida.indexOf("tomate");
console.log(comida[busquedaDelTomate]);
