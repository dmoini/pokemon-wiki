import "./PokemonSearchResult.css";

import React from "react";

export default function PokemonSearchResult({ data }) {
  return (
    <div>
      <h2>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
      
      <h2>You've reached the Pokemon Search Result page!</h2>
    </div>
  );
}