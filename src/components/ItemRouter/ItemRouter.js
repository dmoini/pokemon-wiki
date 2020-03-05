import "./ItemRouter.css";

import React, { useState } from "react";
import { capitalize, checkInvalidAccessToPage } from "../../helperFunctions";

import HomeHeader from "../HomeHeader/HomeHeader";
import Image from "../../images/item_background.png";
import { fetchUrl } from "../../api";

export default function ItemRouter({ data }) {
  checkInvalidAccessToPage(data);

  const [flingEffect, setFlingEffect] = useState("");

  if (data.fling_effect) {
    fetchUrl(data.fling_effect.url).then(res => {
      setFlingEffect(res.effect_entries[0].effect);
    });
  }

  const flingPowerOutput = data.fling_power
    ? `If applicable, the power of the move Fling when used with this item
  is ${data.fling_power}`
    : "";
  const flingEffectOutput = data.fling_effect
    ? ` The effect is ${flingEffect.toLowerCase()}`
    : "";
  const heldByPokemonOutput = data.pokemon
    ? `The Pokemon that holds this item is ${data.pokemon}.`
    : "";

  return (
    <div>
      <HomeHeader />
      <div id="background" style={{ backgroundImage: `url(${Image})` }}>
        <div id="info">
          This is the entry for the {data.name}. {data.effect_entries[0].effect}
          The cost of this item in stores is {data.cost}. If applicable, the
          Pokemon who can be found holding this in the wild are:{" "}
          {data.held_by_pokemon.map(p => {
            return <p key={p.pokemon.name}>{capitalize(p.pokemon.name)}</p>;
          })}
          {flingPowerOutput}
          {flingEffectOutput}. {heldByPokemonOutput} The details for the version
          that this item is held in by the Pokémon are: {data.version_details}.
          The rarity of this item is {data.rarity}.
        </div>

        <br />
      </div>
    </div>
  );
}
