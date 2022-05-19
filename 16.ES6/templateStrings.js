// TEMPLATE STRINGS
const name = "Megazord";
const job = "Full Stack Developer";

const fraseTradicional = "Mi nombre es " + name + ", y soy un " + job;
console.log(fraseTradicional);

const fraseModerna = `Mi nombre es ${name}, y soy un ${job}`

// -> ${ }

const miFicha$$ = document.createElement("div");
const miHTML = `
<ul>
    <li>Name: ${name}</li>
    <li>Job: ${job}</li>
</ul>
`
miFicha$$.innerHTML = miHTML;
document.body.appendChild(miFicha$$)