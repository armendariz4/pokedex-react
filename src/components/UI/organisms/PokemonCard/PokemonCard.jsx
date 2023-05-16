import React from "react";
import "./styles.css";
import { ReactComponent as WeightIcon } from "../../../../assets/images/icons/weight.svg";
import { ReactComponent as HeightIcon } from "../../../../assets/images/icons/height.svg";
import bulbasaur from "../../../../assets/images/pokemons/bulbasaur.svg";
import { AboutTitle } from "../../atoms/AboutTitle";
import { ChipGroup } from "../../molecules/ChipGroup";

const PokemonCard = ({ pokemon }) => {
  const mainType = pokemon.types[0];
  const styles = `card type-${mainType}`;

  return (
    <article className={styles}>
      <div className="card-header">
        <span className="pokemon-name">{pokemon.name}</span>
        <span className="pokemon-number">#{pokemon.id}</span>
      </div>
      <div className="pokemon-attributes">
        <img src={bulbasaur} alt="" className="poke-image"></img>
        <ChipGroup types={pokemon.types} />
        <AboutTitle type={mainType} />
        <div className="pokemon-data">
          <div className="data-group">
            <div className="title-data-group">
              <WeightIcon />
              <p>{pokemon.weight} kg</p>
            </div>
            <span className="data-group-subtitle">Weight</span>
          </div>
          <div className="divider" />
          <div className="data-group">
            <div className="title-data-group">
              <HeightIcon />
              <p>{pokemon.height} m</p>
            </div>
            <span className="data-group-subtitle">Height</span>
          </div>
        </div>
        <p className="pokemon-description">{pokemon.description} </p>
      </div>
    </article>
  );
};

export default PokemonCard;
