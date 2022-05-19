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
