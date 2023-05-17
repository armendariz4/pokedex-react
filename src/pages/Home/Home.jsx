import React from "react";
import PokemonCard from "../../components/UI/organisms/PokemonCard/PokemonCard";

const pokemons = [
  {
    id: "001",
    name: "Bulbasaur",
    height: 0.7,
    weight: 6.9,
    types: ["grass", "poison"],
    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi.",
  },
  {
    id: "002",
    name: "Ivysaur",
    height: 1.0,
    weight: 13.0,
    types: ["grass", "poison"],
    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi.",
  },
  {
    id: "003",
    name: "Venusaur",
    height: 2.0,
    weight: 100.0,
    types: ["grass", "poison"],
    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi.",
  },
  {
    id: "004",
    name: "Charmander",
    height: 0.6,
    weight: 8.5,
    types: ["fire"],
    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi.",
  },
  {
    id: "005",
    name: "Charmeleon",
    height: 1.1,
    weight: 19.0,
    types: ["fire"],
    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi.",
  },
  {
    id: "006",
    name: "Charizard",
    height: 1.7,
    weight: 90.5,
    types: ["fire", "flying"],
    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi.",
  },
  {
    id: "007",
    name: "Squirtle",
    height: 0.5,
    weight: 9.0,
    types: ["water"],
    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi.",
  },
  {
    id: "008",
    name: "Wartortle",
    height: 1.0,
    weight: 22.5,
    types: ["water"],
    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi.",
  },
  {
    id: "009",
    name: "Blastoise",
    height: 1.6,
    weight: 85.5,
    types: ["water"],
    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi.",
  },
  {
    id: "010",
    name: "Caterpie",
    height: 0.3,
    weight: 2.9,
    types: ["bug"],
    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi.",
  },
  {
    id: "011",
    name: "Metapod",
    height: 0.7,
    weight: 9.9,
    types: ["bug"],
    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi.",
  },
  {
    id: "012",
    name: "Butterfree",
    height: 1.1,
    weight: 32.0,
    types: ["bug", "flying"],
    src: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi.",
  },
];

export const Home = () => {
  // return <PokemonCard pokemon={pokemons[0]} />;
  return (
    <div className="Home-page">
      <section className="Search-bar">Hola</section>
      <section className="card-container">
        {pokemons.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} />;
        })}
      </section>
    </div>
  );
};
