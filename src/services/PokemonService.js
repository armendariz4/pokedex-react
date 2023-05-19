export const pokemonService = {
  getPokemons: async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();
    const pokemonsDTO = data.results;

    const pokemonDetailPromises = pokemonsDTO.map((pokemonDTO) => {
      return getPokemonData(pokemonDTO);
    });
    // const pokemonDetailPromises = pokemonsDTO.map(getPokemonData);

    const pokemonWithDetails = await Promise.all(pokemonDetailPromises).then(
      (data) => data
    );

    return pokemonWithDetails;
  },
};

const mapPokemonData = (pokemonDTO) => {
  return {
    id: pokemonDTO.id,
    name: pokemonDTO.name,
    height: pokemonDTO.height,
    weight: pokemonDTO.weight,
    types: pokemonDTO.types.map(({ type }) => type.name),
    src: pokemonDTO.sprites.front_shiny,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi.",
    // TODO ->color: getRandomHexadecimalColor(),
  };
};

const getPokemonData = async ({ url }) => {
  const response = await fetch(url);
  const data = await response.json();
  return mapPokemonData(data);
};
