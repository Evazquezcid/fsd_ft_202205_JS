// OPERADORES LOGICOS

// O -> OR -> ||
const tengoEfectivo = false;
const tengoTarjeta = true;

const puedoPagar = tengoEfectivo || tengoTarjeta;
/* const puedoPagar = tengoEfectivo === true || tengoTarjeta === true; */
console.log("¿PUEDO PAGAR?->", puedoPagar);

// Y -> AND -> &&;
const tengoCoche = false;
const tengoCarnetDeConducir = true;

const puedoConducirHastaLaPlaya = tengoCoche && tengoCarnetDeConducir;
console.log("¿PUEDO IR CONDUCIENDO A LA MANGA? ->", puedoConducirHastaLaPlaya);

// NOT -> NO -> !;
const valor = !true;
console.log(valor);
