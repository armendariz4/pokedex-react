import React, { useEffect, useState } from "react";
import PokemonCard from "../../components/UI/organisms/PokemonCard/PokemonCard";
import { pokemonService } from "../../services/PokemonService";

export const Home = () => {
  const [pokemons, setPokemons] = useState(undefined);
  // return <PokemonCard pokemon={pokemons[0]} />;

  useEffect(() => {
    (async () => {
      const data = await pokemonService.getPokemons();
      setPokemons(data);
    })();
  }, []);

  if (!pokemons) {
    return <div>Cargando...</div>;
  }

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
