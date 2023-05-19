import React from "react";
import PokemonCard from "../../components/UI/organisms/PokemonCard/PokemonCard";
const getPokemon = (async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=25");
  const jsonData = await response.json();
  console.log(jsonData);
  const nombre = jsonData.results[0].name;
  console.log(nombre);
})();
const pokemons = [];

export const Home = () => {
  // return <PokemonCard pokemon={pokemons[0]} />;
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
