fetch("https://pokeapi.co/api/v2/pokemon/100", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    const pokemonid = data.weight;  
    console.log(` ${pokemonid}`);
  })
  .catch((error) => console.error("Ha ocurrido un error:", error));