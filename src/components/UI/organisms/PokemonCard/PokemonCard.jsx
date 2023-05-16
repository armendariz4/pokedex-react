import React from "react";
import "./styles.css";
import { ReactComponent as WeightIcon } from "../../../../assets/images/icons/weight.svg"; // Importo una imagen metiendola dentro de un componente llamado "WeightIcon", con la ayuda de la herramienta "ReactComponent"
import { ReactComponent as HeightIcon } from "../../../../assets/images/icons/height.svg"; // Importo una imagen metiendola dentro de un componente llamado "HeightIcon", con la ayuda de la herramienta "ReactComponent"
import { AboutTitle } from "../../atoms/AboutTitle"; // Importo la función AboutTitle para usarlo mas tarde en el código
import { ChipGroup } from "../../molecules/ChipGroup"; // Importo la función ChipGroup para uarla mas tarde en el código

//___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// DIEGO SI LEES ESTO, ESTOY MODIFICANDO EL CÓDIGO, ACEPTAME POR DISCORD PARA HABLAR Y NO PISARNOS TRABAJO AL PUSHEAR
// LO UNICO QUE VOY A HACER ES COMENTAR TODO E INTENTAR QUE APAREZCAN LAS IMAGENES

// Esto es una unica función, que nos creará la carta entera, en función del objeto pokemon que le llega como entrada
const PokemonCard = ({ pokemon }) => {
  const mainType = pokemon.types[0]; // Del atributo type del objeto, pokemon, se escoge el primer elemento y ese será el tipo principal de la carta
  const styles = `card type-${mainType}`; // mete en "styles", los estilo que tiene la clase "class" + la clase "typeX". Siendo X, el tipo principal, que se obtiene en la linea de código anterior.

  // De aqui para abajo, será lo que devuelva la función PokemonCard
  return (
    <article className={styles}>
      <div className="card-header">
        <span className="pokemon-name">{pokemon.name}</span>
        <span className="pokemon-number">#{pokemon.id}</span>
      </div>
      <div className="pokemon-attributes">
        <img
          src={"../../../../assets/images/pokemons/bulbasaur.svg"}
          alt=""
          className="poke-image"
        ></img>
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
