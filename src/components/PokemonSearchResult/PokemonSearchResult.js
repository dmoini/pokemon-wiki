import "./PokemonSearchResult.css";

import React from "react";
import { capitalize } from "../../helperFunctions";

export default function PokemonSearchResult({ data }) {
  return (
    <div className="body">
      <h2 id="header">
        {capitalize(data.name)} (#{data.id})
        <img
          id="pokeImage"
          src={data.sprites["front_default"]}
          alt={data.name}
        />
      </h2>
      <div className="basicNfo">
        <p>
          <b>Height: </b>
          {data.height}
        </p>
        <p>
          <b>Weight: </b>
          {data.weight}
        </p>
      </div>
      <div className="types">
        <p id="typeHeader">
          <b>{data.types.length > 1 ? "Types: " : "Type: "}</b>
        </p>
        {data.types.map(type => (
          <p key={type.slot}>{capitalize(type.type.name)}</p>
        ))}
      </div>
    </div>
  );
}
