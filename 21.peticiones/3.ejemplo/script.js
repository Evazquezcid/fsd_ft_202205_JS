const charactersGallery$$ = document.querySelector(".characters-gallery");

//FUNCION QUE ME RECUPERA LOS PERSONAJES
const getCharacters = async () => {
  const charactersAPI = await fetch(
    "https://bobsburgers-api.herokuapp.com/characters/"
  );
  const charactersJSON = await charactersAPI.json();
  mapCharacters(charactersJSON) //EN ESTE PUNTO EJECUTO LA FUNCION DE MAPEAR PERSONAJES PASANDOLE LOS charactersJSON
};

//FUNCION QUE ME MAPEA LOS PERSONAJES Y ME LOS SACA CON LA INFORMACION QUE QUIERO
const mapCharacters = (array) => {
  const mappedCharacters = array.map((character) => ({
    name: character.name,
    gender: character.gender,
    photo: character.image,
    job: character.occupation,
    url: character.wikiUrl,
  }));
  paintCharacters(mappedCharacters)
};

//FUNCION PARA PINTAR LOS PERSONAJES
const paintCharacters = (array) => {
    const characterHTML = array.map((character) => `
   <div>
   <h2>${character.name}</h2>
   <img src=${character.photo} alt=${character.name} />
   <p>Occupation: ${character.job}</p>
   <p>Gender: ${character.gender}</p>
   <a href=${character.url} target=”_blank”>More info</a>
   </div>
    `
    ).join("")
    charactersGallery$$.innerHTML = characterHTML

}

//EJECUTO SOLO GETCHARACTERS
getCharacters();
