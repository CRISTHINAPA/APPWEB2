const alergiasAlimentarias = [
    { id: 1, nombre: "Nueces", gravedad: "Alta" },
    { id: 2, nombre: "Lácteos", gravedad: "Moderada" },
    { id: 3, nombre: "Huevos", gravedad: "Baja" },
    { id: 4, nombre: "Gluten", gravedad: "Moderada" },
    { id: 5, nombre: "Mariscos", gravedad: "Alta" },
  ];
// Usando forEach
console.log("Usando forEach:");
alergiasAlimentarias.forEach((alergia) => {
  for (let i = 0; i < 3; i++) {
    console.log(alergia.nombre);
  }
});

// Usando for...in
console.log("Usando for...in:");
for (const indice in alergiasAlimentarias) {
  const alergia = alergiasAlimentarias[indice];
  for (let i = 0; i < 3; i++) {
    console.log(alergia.nombre);
  }
}

// Usando for...of
console.log("Usando for...of:");
for (const alergia of alergiasAlimentarias) {
  for (let i = 0; i < 3; i++) {
    console.log(alergia.nombre);
  }
}
function buscarAlergiaPorID(id: number, arreglo: any[], callback: (objeto: any) => void) {
    const alergiaEncontrada = arreglo.find((alergia) => alergia.id === id);
    if (alergiaEncontrada) {
      callback(alergiaEncontrada);
    } else {
      console.log("Alergia no encontrada.");
    }
  }
  
  // Llamamos a la función con un ID y una función de callback para mostrar la alergia.
  buscarAlergiaPorID(2, alergiasAlimentarias, (alergia) => {
    console.log("Alergia encontrada:", alergia.nombre);
  });

    