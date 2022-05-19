// FIND
const numeros = [2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2];

const elPrimerDos = numeros.find((numero) => numero === 2);
console.log(elPrimerDos);

const alumnos = [
  { name: "Pepito Perez", dni: "76876544L" },
  { name: "Francisco Paco", dni: "85987466X" },
  { name: "Charmander Gonzalez", dni: "1412518Z" },
];

const elDNIQueQuiero = alumnos.find((numero) => numero.dni === "85987466X");
console.log(elDNIQueQuiero);

// Es más optimo cuando quiero una coincidencia exacta y única