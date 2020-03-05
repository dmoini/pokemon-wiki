import "./ItemRouter.css";

import React, { useState } from "react";
import { capitalize, checkInvalidAccessToPage } from "../../helperFunctions";

import HomeHeader from "../HomeHeader/HomeHeader";
import Image from "../../images/item_background.png";
import { fetchUrl } from "../../api";

export default function ItemRouter({ data }) {
  checkInvalidAccessToPage(data);

  const [setFlingEffect, setPowerOutput, setHeldByPokemonOutput, 
    setCostOutput, setVersionDetailsOutput, setRarityOutput] = useState("");

  if (data.fling_effect) {
    fetchUrl(data.fling_effect.url).then(res => {
      setFlingEffect(res.effect_entries[0].effect);
    });
  }
  if (data.fling_power) {
    fetchUrl(data.fling_power.url).then(res => {
      setPowerOutput(res.effect_entries[0].effect);
    });
  }
  if (data.pokemon) {
    fetchUrl(data.pokemon.url).then(res => {
      setHeldByPokemonOutput(res.effect_entries[0].effect);
    });
  }
  if (data.cost) {
    fetchUrl(data.cost.url).then(res => {
      setCostOutput(res.effect_entries[0].effect);
    });
  }
  if (data.version_details) {
    fetchUrl(data.version_details.url).then(res => {
      setVersionDetailsOutput(res.effect_entries[0].effect);
    });
  }
  if (data.rarity) {
    fetchUrl(data.rariry.url).then(res => {
      setRarityOutput(res.effect_entries[0].effect);
    });
  }


  const flingPowerOutput = data.fling_power
    ? `The power of the move Fling when used with this item
  is ${data.fling_power}`
    : "";
  const flingEffectOutput = data.fling_effect
    ? ` The effect is ${data.flingEffect.toLowerCase()}`
    : "";
  const heldByPokemonOutput = data.pokemon
    ? `Pokemon who can be found holding this in the wild are ${data.pokemon}.`
    : "";
  const costOutput = data.cost
    ? `The item costs ${data.cost} in game.`
    : "";
  const versionDetailsOutput = data.version_details
    ? `The details for the version that this item is held in by the Pokémon are: ${data.version_details}.`
    : "";
  const rarityOutput = data.rarity
    ? `TThe rarity of this item is ${data.version_details}.`
    : "";

  return (
    <div>
      <HomeHeader />
      <div id="background" style={{ backgroundImage: `url(${Image})` }}>
        <div id="info">
          This is the entry for the {data.name}! {data.effect_entries[0].effect}

          {flingPowerOutput}
          {flingEffectOutput}. 
          
          {heldByPokemonOutput} {costOutput} 
          {versionDetailsOutput} {rarityOutput}
        </div>
        <br />
      </div>
    </div>
  );
}
