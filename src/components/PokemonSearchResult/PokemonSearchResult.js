import "./PokemonSearchResult.css";

import React from "react";

export default function PokemonSearchResult({ data }) {
  return (
    <div className="body">
      <h2 id="header">
        <img id="pokeImage" src={data.sprites["front_default"]} alt={data.name}/>
        {data.name.charAt(0).toUpperCase() + data.name.slice(1)} (#{data.id})
      </h2>
      
      <div className="basicNfo">
        <p><b>Height: </b>{data.height}</p>
        <p><b>Weight: </b>{data.weight}</p>
      </div>
      <div className="types">
        <p id="typeHeader"><b>{data.types.length>1 ? "Types: " : "Type: "}</b></p>
        {data.types.map((type) => (
          <p key={type.slot}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</p>
        ))}
      </div>
    </div>
  );
}