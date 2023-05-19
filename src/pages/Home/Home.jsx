import React, { useEffect, useState } from "react";
import PokemonCard from "../../components/UI/organisms/PokemonCard/PokemonCard";

const mapPokemonData = (pokemonDTO) => {
  console.log("data", pokemonDTO);

  return {
    id: pokemonDTO.id,
    name: pokemonDTO.name,
    height: pokemonDTO.height,
    weight: pokemonDTO.weight,
    types: pokemonDTO.types.map(({ type }) => type.name),
    src: pokemonDTO.sprites.other.home.front_default,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi.",
  };
};

const getPokemonData = async (pokemonUrl) => {
  const response = await fetch(pokemonUrl);
  const data = await response.json();
  return mapPokemonData(data);
};

export const Home = () => {
  const [pokemons, setPokemons] = useState(undefined);
  // return <PokemonCard pokemon={pokemons[0]} />;

  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=25"
      );
      const data = await response.json();
      const pokemons = data.results;

      const pokemonDetailPromises = pokemons.map((pokemon) => {
        return getPokemonData(pokemon.url);
      });

      Promise.all(pokemonDetailPromises).then((data) => {
        setPokemons(data);
      });
    };

    getPokemons();
  }, []);

  if (!pokemons) {
    return <div>Cargando...</div>;
  }

  console.log("@@pokemons", pokemons);

  return (
    <div className="home-page">
      <section className="header-box">
        <div className="header"></div>
        <div className="search-bar-box">
          <img
            className="search-bar-icon"
            src="https://icones.pro/wp-content/uploads/2021/02/loupe-et-icone-de-recherche-de-couleur-grise.png"
            alt=""
          />
          <div className="search-bar-word">
            Indique el pokemon que desea buscar
          </div>
        </div>
      </section>
      <section className="card-container">
        {pokemons.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} />;
        })}
      </section>
    </div>
  );
};
