// DESTRUCTRING
const superheroe = {
  name: {
    heroName: "Doctor Strange",
    humanName: "Stephen Vincent Strange",
  },
  team: ["Avengers", "Iluminati"],
};

// Forma clásica
const propiedadHeroName = superheroe.name.heroName;
console.log(propiedadHeroName);

// Destructuring
const { name } = superheroe;
const { heroName } = name;
console.log(heroName);

// Ejemplo #2
const { humanName } = superheroe.name;
console.log(humanName);

// ARRAYS

const numeros = [1, 2, 3, 4];

const [primerNum, segundoNum, tercerNum, cuartoNum] = numeros;

console.log(segundoNum);
