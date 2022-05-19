// FILTER
const pilots = [
  { id: 2, name: "Wedge Antilles", faction: "Rebels" },
  { id: 8, name: "Ciena Ree", faction: "Empire" },
  { id: 40, name: "Iden Versio", faction: "Empire" },
  { id: 66, name: "Thane Kyrell", faction: "Rebels" },
];

const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");
console.log(rebels);

const idOver20 = pilots.filter((pilot) => pilot.id > 20);
console.log(idOver20);

// EJEMPLO VISUAL
const alimentos = ["🥐", "🥞", "🥜", "🥐", "🥐", "🐑"];
const cruasanes = alimentos.filter((alimento) => alimento === "🥐");

console.log(cruasanes);
