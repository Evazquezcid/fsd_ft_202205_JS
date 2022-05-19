// SPREAD OPERATOR
const heroes = ["Luke", "Leia", "Han", "Chewie"];
const villanos = ["Vader", "Emperador", "Tarkin", "Sebulba"];

const personajes = [...heroes, ...villanos];
personajes.reverse();
console.log(personajes);

/////////-----------------
//EJEMPLO PRACTICO SIMILAR A UN TODOLIST

let tareas = ["Programar"];

const añadirTarea = (nuevaTarea) => {
  tareas = [...tareas, nuevaTarea];
  console.log(tareas);
};

añadirTarea("Comer");
añadirTarea("Dormir");

// OBJETOS
const primerObjeto = {
  name: "Pepe",
  age: 25,
};

const segundoObjeto = {
  apellido: "Heredia",
  ciudad: "Toledo",
};

const nuevoObjeto = { ...primerObjeto, ...segundoObjeto, pelo: "Rubio" };
console.log(nuevoObjeto);
