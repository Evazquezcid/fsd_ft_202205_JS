// HOISTING
// Según el lugar y dentro de qué esté declarada una variable será independiente, accesible (SI O NO);

const foo = () => {
  let x;
  console.log(x);
  x = 9;
};

foo();

/////////-------------

let y = "Primer valor";
const fooTwo = () => {
  console.log(y);
  y = "Segundo valor";
  console.log(y);
};

fooTwo();
