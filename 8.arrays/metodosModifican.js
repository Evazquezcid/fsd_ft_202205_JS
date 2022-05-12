// METODOS PARA MODIFICAR ARRAYS
const guardianes = ["Rocket", "Starlord", "Gamora", "Drax"];
console.log("Array original ->", guardianes);

// POP() -> Elimina el último elemento de una array
guardianes.pop();
console.log("Después del pop ->", guardianes);

// PUSH() -> Añade un elemento al array en la última posición
guardianes.push("Adam Warlock", "Groot");
console.log("Después del push ->", guardianes);

// REVERSE() -> Invierte el sentido del array
guardianes.reverse();
console.log("Después del reverse ->", guardianes);

// SHIFT() -> Elimina el primer elemento de un array
guardianes.shift();
console.log("Después del shift->", guardianes);

// SORT() -> Ordena los elementos de un array por orden alfabético
guardianes.sort();
console.log("Despues del sort->", guardianes);

// INTERLUDIO PARA PONER UN EJEMPLO DE COMO ORDENAR NUMERICAMENTE
const numeros = [2, 4, 9, 99, 10, 11, 45, 123, 78, 89];
numeros.sort(function (a, b) {
  return a - b;
});

// SPLICE -> Elimina elementos. El primer parámetro representa el indice donde tiene que empezar la modificación, el segundo parámetro es el número HUMANO de elementos que tiene eliminar. En el tercer parámetro puedo añadir en el hueco lo que yo quiera.
// Si en el segundo parámetro indico 0, no elimina nada y mete todo lo que tenga en el tercer parámetro en la posición indicada
// Vamos a eliminar a Gamora y a Rocket
guardianes.splice(1, 2, "Rocket", "Groot");
console.log("Después del splice(1,2)->", guardianes);

//Ejemplo de eliminar elementos salteados
const comida = ["patata", "lechuga", "tomate", "galletas"];
//Quiero eliminar lechuga y galletas
/* comida.splice(1, 1);
console.log(comida);
comida.splice(2, 1);
console.log(comida); */

// UNSHIFT() -> Añade todo lo que metamos por parámetro al principio de un array.
guardianes.unshift("Mantis");
console.log("Después del unshift ->", guardianes);

