import "./Pokemon.css";
import React, { useState } from "react";

// const MOCK_POKEMON = require(".../mock/mockPokemon").MOCK_POKEMON;

export default function Pokemon() {
  return (
    <div className="pokeComp">
      <div className="pokeImage">Pokemon image</div>
      <div className="pokeHeader">Header
        <p>Name and Number</p>
        <p>Form</p>
      </div>
      <div className="pokeInfo">Pokemon info
        <p>Height</p>
        <p>Weight</p>
        <ul>Abilities
          <li>Ability 1</li>
          <li>Ability 2</li>
        </ul>
        <ul>Moves
          <li>move 1</li>
          <li>move 2</li>
          <li>move 3</li>
          <li>move 4</li>
        </ul>
        <p>Types</p>
      </div>
      <div className="pokeStats">Pokemon stats
        <ul>Stats
          <li>Speed</li>
          <li>Special Atk</li>
          <li>Special Def</li>
        </ul>
        <ul>Stats too
          <li>hp</li>
          <li>Atk</li>
          <li>Def</li>
        </ul>
      </div>
      <div className="pokeItems">Held Items
        <ul>Held Items
          <li>item 1</li>
          <li>itme 2</li>
          <li>item 3</li>
        </ul>
      </div>
    </div>
  )
}