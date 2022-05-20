// ASYNC / AWAIT

const suma = (numA, numB) => {
  return numA + numB;
};

const operacionAsincrona = async () => { //Con async convierto mi función en asincrona
  const resultado = await suma(2, 5); //Con await voy poniendo stops en mi función asincrona
  console.log(resultado);
};

operacionAsincrona()