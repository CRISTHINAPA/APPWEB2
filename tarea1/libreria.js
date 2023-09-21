fetch("https://pokeapi.co/api/v2/pokemon/100", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    const pokemonId = data.weight;
    console.log(` ${pokemonId}`);
  })
  .catch((error) => console.error("Ha ocurrido un error:", error));