import React from "react";
import PokemonCard from "../../components/UI/organisms/PokemonCard/PokemonCard";

const pokemons = [
  {
    id: "001",
    name: "Bulbasaur",
    height: 4.3,
    weight: 6.5,
    types: ["grass", "poison"],
    src: "https://...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi.",
  },
  {
    id: "002",
    name: "Charmander",
    height: 6.3,
    weight: 9.5,
    types: ["steel", "bug"],
    src: "https://...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi.",
  },
];

export const Home = () => {
  return <PokemonCard pokemon={pokemons[0]} />;
};
