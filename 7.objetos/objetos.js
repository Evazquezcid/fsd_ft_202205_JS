// OBJETOS
const coche = { // Es constante porque no puede dejar de ser un objeto y así lo bloqueamos
  color: "rojo",
  ruedas: 4,
  marca: "Opel",
  homologado: true,
};

console.log(coche);

// Vamos a acceder a leer el valor de color
console.log(coche.color); // Nos quedamos con esta que es más sencilla
console.log(coche["color"]);


// Vamos a modificar algunas de las propiedades
coche.color = "azul"; // Podemos modificar el valor de una clave llamandola
console.log(coche)

coche.puertas = 4; // Si llamamos a una propiedad que no tiene se la añadimos
console.log(coche)