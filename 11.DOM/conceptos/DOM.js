// Document: el nodo principal, es todo el documento HTML
// Elements: Todo lo que esté definido por etiquetas de apertura y cierre, lo que viene siendo una etiqueta
// Attr: los atributos de nuestras etiquetas o elementos
// Text: el contenido de texto

// En mi html enlazo mi script de JS con la etiqueta  <script src="DOM.js" defer></script>

// BUSCANDO EN EL DOM

// Para buscar un elemento por clase, tag o id
const myTitle$$ = document.querySelector(".miTitulo"); // myTitle$$ es ahora un NODO

// Para buscar varios elementos por clase, tag o id
const myLis$$ = document.querySelectorAll(".list-element")

console.log(myTitle$$)
console.log(myLis$$)

