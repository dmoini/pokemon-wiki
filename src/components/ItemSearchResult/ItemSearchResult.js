import "./ItemSearchResult.css";

import React from "react";

export default function ItemSearchResult({ data }) {
  return (
    <div className="content">
      <h2>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
      <img id="itemImage" src={data.sprites.default} />
      <p><b>{data.effect_entries[0].short_effect}</b></p>
    </div>
  );
}