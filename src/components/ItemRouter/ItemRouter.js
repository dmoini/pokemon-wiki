import "./ItemRouter.css";

import { capitalize, checkInvalidAccessToPage } from "../../helperFunctions";

import Image from "../../images/item_background.png";
import React from "react";

export default function ItemRouter({ data }) {
  checkInvalidAccessToPage(data);

  return (
    <body id="background" style={{ backgroundImage: `url(${Image})` }}>
      <div id="info">
        This is the entry for the {data.name}. {data.effect_entries[0].effect}
        The cost of this item in stores is {data.cost}. If applicable, the
        Pokemon who can be found holding this in the wild are:{" "}
        {data.held_by_pokemon.map(p => {
          return <p>{capitalize(p.pokemon.name)}</p>;
        })}
        . If applicable, the power of the move Fling when used with this item
        is: {data.fling_power}, and the effect is {data.fling_effect}. The
        Pokemon that holds this item is {data.pokemon}. The details for the
        version that this item is held in by the Pokémon are:{" "}
        {data.version_details}. The rarity of this item is {data.rarity}. The
        version that this item is held in by the Pokémon is {data.version}.
      </div>

      <br />
    </body>
  );
}
