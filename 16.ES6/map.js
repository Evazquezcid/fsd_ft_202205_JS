// MAP

const officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];

// Queremos sacar solo los valores de los id

// Con un foreach
/* let officersIds = [];

officers.forEach((officer) => {  
  officersIds.push(officer.id);
}); */

// Con un mapeo
const officersIds = officers.map((officer) => officer.id);
console.log(officersIds);

const saludos = officers.map((officer) => "Hola");
console.log(saludos);

/////////----------------

const personajes = [
  { nombresito: "Luke", añitos: 25, pelo: "rubio" },
  { nombresito: "Leia", añitos: 23, pelo: "moreno" },
];

const personajesBien = personajes.map((personaje) => ({
  name: personaje.nombresito,
  age: personaje.añitos,
}));

console.log(personajesBien);

//EJEMPLO VISUAL
const cruasanes = ["🥐", "🥐", "🥐", "🥐", "🥐"];
const antonio = cruasanes.map((comer) => "😁");
console.log(antonio);
