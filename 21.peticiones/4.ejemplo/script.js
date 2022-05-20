//ALMACENO MI URL EN UNA VARIABLE POR SI EL DIA DE MAÑANA CAMBIA, SOLO CAMBIO ESTO Y TODO SE EJECUTA IGUAL EN CADENA
const sakuraURL = "https://protected-taiga-89091.herokuapp.com/api/card";

const cardGallery$$ = document.querySelector(".gallery");

const getCards = async () => {
  const cardsAPI = await fetch(sakuraURL);
  const cardsJSON = await cardsAPI.json();
  const cardsData = cardsJSON.data;

  const mappedCards = cardsData.map((card) => ({
    spanish: card.spanishName,
    english: card.englishName,
    japanese: card.kanji,
    front: card.sakuraCard,
    reverse: card.cardsReverse?.sakuraReverse,
    description: card.meaning,
  }));

  paintCards(mappedCards); //AQUI EJECUTO PAINTCARDS PORQUE TENGO ACCESIBLE MAPPEDCARDS Y SE LO PASO POR PARÁMETRO
};

const paintCards = (arrayCards) => {
  for (let i = 0; i < 53; i++) { //HEMOS DADO 53 VUELTAS AL ARRAY PORQUE EL RESTO ERAN MUY FEAS O ESTABAN ROTAS
    const card = arrayCards[i]; //GENERO MI CARTA INDIVIDUAL

    //CREO LOS NODOS
    const cardDiv$$ = document.createElement("div");
    const titulo$$ = document.createElement("h2");
    const image$$ = document.createElement("img");
    const description$$ = document.createElement("p");

    //LES DOY INFORMACIÓN A LOS NODOS
    titulo$$.textContent = card.spanish;
    image$$.src = card.front; //Puedo atacar a los atributos de una imagen como si fuera objeto. TRUCO.
    image$$.alt = card.spanish;
    description$$.textContent = card.description;

    //LES AÑADO LOS NODOS HIJOS AL DIV QUE HE CREADO
    cardDiv$$.appendChild(titulo$$);
    cardDiv$$.appendChild(image$$);
    cardDiv$$.appendChild(description$$)

    //CADA UNO DE LOS DIVS (SEGUIMOS ESTANDO DENTRO DEL BUCLE) SE AÑADIRAN A LA GALERIA
    cardGallery$$.appendChild(cardDiv$$)
  }
};

getCards();
