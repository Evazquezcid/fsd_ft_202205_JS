// PETICIONES

//.THEN -> VERSION TRADICIONAL
fetch("https://starwars-server.vercel.app/characters")
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson.data.characters);
  });

// ASYNC AWAIT
const getSWCharacters = async () => {
    // Con el fetch recupero la información cruda y le he metido un await para no siga la siguiente linea de ejecución hasta que tenga toda la información.
    let charactersData = await fetch("https://starwars-server.vercel.app/characters")
    // Con el .json() traduzco la información cruda a JSON para poder tratarla como un objeto, y con el await evito que salte a lo siguiente hasta que no termine de traducir todo.
    let charactersJSON = await charactersData.json();
    const characters = charactersJSON.data.characters;
    console.log("ASYNC AWAIT",characters)
}

getSWCharacters()