import "./ItemSearchResult.css";

import React from "react";
import { capitalize } from "../../helperFunctions";
import history from "../../history";

export default function ItemSearchResult({ data }) {
  return (
    <div
      className="content pt-2"
      onClick={() => {
        history.push("/item");
      }}
    >
      <h2>{capitalize(data.name)}</h2>
      <img id="itemImage" src={data.sprites.default} alt="Item" />
      <p>
        <b>{data.effect_entries[0].short_effect}</b>
      </p>
    </div>
  );
}
