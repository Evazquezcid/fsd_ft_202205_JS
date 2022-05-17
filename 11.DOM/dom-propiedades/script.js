// PROPIEDADES DE LOS NODOS

const myTitle$$ = document.querySelector("h1");
console.log(myTitle$$);

// attributes
console.log(myTitle$$.attributes);

// setAttributes
const myImage$$ = document.querySelector(".banner");
myImage$$.setAttribute(
  "src",
  "https://images.twinkl.co.uk/tr/image/upload/t_illustration/illustation/banner.png"
);
myImage$$.setAttribute("alt", "Banderola de color beige");

// classList
console.log(myTitle$$.classList);
myTitle$$.classList.add(["hola"]);

// className
const myParagraph$$ = document.querySelector("p");
myParagraph$$.className = "parrafo";

// style
myImage$$.style = "width: 300px";

// innerText
myParagraph$$.innerText = "Hola, soy un párrafo";

// firstElementChild
const myGallery$$ = document.querySelector(".gallery");
console.log(myGallery$$.firstElementChild);

// lastElementChild
console.log(myGallery$$.lastElementChild);

// innerHTML
const myPhotos$$ = document.querySelector(".photos");
myPhotos$$.innerHTML = `
<ul>
    <li>
<img src="https://www.gormiti.com/images/af/hyperbeast-alfa-pyron-04.jpg" alt="Gormiti leon" class="gormiti"/>
    </li>
    <li>
    <img src="https://m.media-amazon.com/images/I/51TSJcqXVzL._AC_SX679_.jpg" alt="Gormiti leon" class="gormiti"/></li>
</ul>
`;

/* const gormitiList$$ = document.createElement("ul");
const firstGormiti$$ = document.createElement("li");
const secondGormiti$$ = document.createElement("li");
const firstImg$$ = document.createElement("img");
const secondImg$$ = document.createElement("img");
firstImg$$.setAttribute("src", "https://www.gormiti.com/images/af/hyperbeast-alfa-pyron-04.jpg")
firstImg$$.setAttribute("alt", "Gormiti Leon")
... */