const getGhibliMovies = async () => {
  //Recupero la información y la convierto en JSON
  let moviesData = await fetch("https://ghibliapi.herokuapp.com/films");
  let moviesJSON = await moviesData.json();

  //Mapeo moviesJSON y me quedo con los datos que me interesan y los nombro como quiero
  const movies = moviesJSON.map((movie) => ({
    title: movie.title,
    japanese_title: movie.original_title,
    poster: movie.image,
    banner: movie.movie_banner,
    description: movie.description,
    director: movie.director,
    year: movie.release_date,
  }));

  //Compruebo que me están llegando correctamente después del mapeo
  console.log(movies);

  //Recupero el section de HTML donde quiero volcar mis peliculas
  let myGallery$$ = document.querySelector(".movies-gallery");

  //Recorro las peliculas y por cada una de ellas genero un nodo div, le doy un class, genero un bloque de HTML, le inyecto al div con innerHTML dicho bloque y le hago un appendChild de cada uno de ellos a mi section de galleria
  for (const movie of movies) {
    let movieDiv$$ = document.createElement("div");
    movieDiv$$.className = "movie-card";
    let movieHTML = `
      <h2>${movie.title} - ${movie.japanese_title}</h2>
      <img src=${movie.poster} alt=${movie.title + "poster"} />
      <p>${movie.description}</p>
      <p>Year: ${movie.year}</p>
      <p>Director: ${movie.director}</p>
      `;

    movieDiv$$.innerHTML = movieHTML;
    myGallery$$.appendChild(movieDiv$$);
  }
};

//Ejecuto la función para que tenga efecto en mi HTML
getGhibliMovies();
