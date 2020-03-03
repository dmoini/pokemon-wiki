import "./ItemSearchResult.css";

import React from "react";
import { capitalize } from "../../helperFunctions";

export default function ItemSearchResult({ data }) {
  return (
    <div className="content pt-2">
      <h2>{capitalize(data.name)}</h2>
      <img id="itemImage" src={data.sprites.default} alt="Item" />
      <p>
        <b>{data.effect_entries[0].short_effect}</b>
      </p>
    </div>
  );
}
