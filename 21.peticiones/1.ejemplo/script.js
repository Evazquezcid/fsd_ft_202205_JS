const getSWCharacters = async () => {
    let charactersData = await fetch("https://starwars-server.vercel.app/characters")
    let charactersJSON = await charactersData.json();
    const characters = charactersJSON.data.characters;
    console.log(characters)
}

getSWCharacters()