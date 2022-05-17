// MANIPULANDO EL DOM

// Aqui estoy recuperando un elemento h1 de mi HTML en un nodo llamado myTitle$$
const myTitle$$ = document.querySelector("h1");

//------------- createElement(name);
// Aquí estoy creando un nodo llamado paragraph$$ con una etiqueta p dentro.
const paragraph$$ = document.createElement("p");
paragraph$$.innerText = "Hola, soy un párrafo"; // Estoy modificando la propiedad innerText de mi párrafo

//------------- appendChild(nodo);
// Con este método inserto en un nodo el nodo que le pase por parámetro. El nodo que yo meta se va a colocar en el último lugar.

document.body.appendChild(paragraph$$);

const myList$$ = document.querySelector(".listaPredefinida");
const myLi$$ = document.createElement("li");
myLi$$.innerText = "Hola, soy un elemento li";

myList$$.appendChild(myLi$$);

// Vamos a crear una lista completa con su ul y su li manipulando el DOM
const newList$$ = document.createElement("ul");
const newLi$$ = document.createElement("li");
newLi$$.innerText = "Hola, soy un nuevo elemento de lista";
newList$$.appendChild(newLi$$);

document.body.appendChild(newList$$);

// Vamos a crear una lista de comida de forma dinámica
const alimentos = [
  "platano",
  "gazpacho",
  "horchata",
  "donetes",
  "cachopo",
  "hamburguesa",
  "pizza",
  "sushi",
];

const listaComida$$ = document.createElement("ul"); // Creo mi nodo de lista
console.log(listaComida$$);

for (const alimento of alimentos) {
  // Recorro alimentos
  const comidaLi$$ = document.createElement("li"); // Creo en cada una de las vueltas un nodo
  comidaLi$$.innerText = alimento; // Le meto el texto correspondiente a cada vuelta
  listaComida$$.appendChild(comidaLi$$); // Se los añado a la lista
}

document.body.appendChild(listaComida$$);
