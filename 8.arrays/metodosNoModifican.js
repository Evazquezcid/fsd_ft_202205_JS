// METODOS QUE NO MODIFICAN EL ARRAY

const heroes = ["Batman", "Superman", "Aquaman", "WonderWoman"];
const villanos = ["Darkseid", "Luthor", "Hades", "Joker"];

// CONCAT -> Concatena dos arrays y genera uno nuevo, respetando los originales
const personajes = heroes.concat(villanos);
console.log("CONCAT ->", personajes);

// JOIN -> Devuelve un string con los elementos del array y el parametro que acepta es el separador.
const heroesJoin = heroes.join(" ");
console.log("Despues del join ->", heroesJoin);
// Lo que saca el join es "Batman Superman Aquaman WonderWoman", no tiene comas porque le he indicado por parametro que el separador sea un espacio vacio

// SLICE -> Es el primo de SPLICE pero no modifica el array, solo sirve para obtener cierta información. Este método tiene por parámetro 1º la posición donde empieza y 2º la posición donde acaba sin contar este último elemento.
const heroesSlice = heroes.slice(1, 3);
console.log(heroesSlice);

// TOSTRING -> Convierte a lo bruto un array en un string. No admite parámetros.
const heroesToString = heroes.toString();
console.log(heroesToString);

