// LOOPS

const users = [
  { name: "Abel", years: 43 },
  { name: "Maria", years: 18 },
  { name: "Pedro", years: 14 },
  { name: "Samantha", years: 32 },
  { name: "Raquel", years: 16 },
];

const alimentos = ["patata", "lechuga", "tomate", "galletas"];
/* console.log("USER.LENGTH", users.length) */

// Indicar cuales son los menores y los mayores de edad con sus nombres

for (let i = 0; i < users.length; i++) {
  const user = users[i];
  console.log(user);
}

// FOROF -> Es un atajo del for tradicional para recorrer por completo un array sin ninguna configuración sacando los elementos individuales

for (const user of users) {
  console.log("FOROF", user);
}

for (const alimento of alimentos) {
  console.log(alimento);
}

// FOREACH -> Por cada uno de los elementos de un array va a ejecutar X
alimentos.forEach((alimento, index) => {
  console.log(alimento, index);
});

for (let index = 0; index < alimentos.length; index++) {
  const alimento = alimentos[index];
  console.log(alimento, index);
}

//FORIN -> Puede recorrer objetos iterables
const superheroe = {
  id: 1,
  nombre: "Spiderman",
  nombreReal: "Peter Parker",
  edad: 22,
  traje: "rojo",
  vivo: true,
};

/* console.log(superheroe["nombre"]); */

for (const clave in superheroe) {
  const valor = superheroe[clave];
  console.log("Tengo la clave " + clave + " con valor: " + valor);
}
