// PROMESAS
const addItem = (item, list) => {
  const promise = new Promise((resolve, reject) => {
    if (!list) {
      reject("No existe el array");
    }

    setTimeout(function () {
      list.push(item);
      resolve(list);
    }, 2000);
  });

  return promise;
};

const colores = ["Rojo", "Azul", "Verde"];

addItem("Amarillo")
  .then((colores) => {
    console.log(`El listado final es: ${colores.join(", ")}`);
  })
  .catch((err) => {
    throw new Error(err);
  });
