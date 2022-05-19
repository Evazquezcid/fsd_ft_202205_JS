// UTILIZANDO MAP, REDUCE Y FILTER
const tripulacion = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

//1º Necesitamos filtrar a la tripulación que tiene la Fuerza

const jedis = tripulacion.filter(
  (tripulante) => tripulante.isForceUser === true
);
console.log(jedis);

//2º Necesitamos crear un array con la punutación total de cada Jedi, es decir, sumar la puntuación de piloto y la puntuación de disparo.

const jediScores = jedis.map((jedi) => jedi.pilotingScore + jedi.shootingScore);
console.log(jediScores);

//3º Necesitamos obtener el total de las puntuaciones sumadas de los jedi

const totalJediScore = jediScores.reduce(
  (acc, jediScore) => acc + jediScore,
  0
);
console.log(totalJediScore);

//Se puede hacer todo esto en una sola linea pero no lo recomendamos hasta que lo tengais mega-clarinete, y aun asi tampoco.
const total = tripulacion
  .filter((tripulante) => tripulante.isForceUser)
  .map((jedi) => jedi.pilotingScore + jedi.shootingScore)
  .reduce((acc, score) => acc + score, 0);

console.log(total);
