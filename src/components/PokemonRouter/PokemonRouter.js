import "./PokemonRouter.css";

import React, { useState } from "react";
import { capitalize, checkInvalidAccessToPage } from "../../helperFunctions";

import HomeHeader from "../HomeHeader/HomeHeader";
import { fetchUrl } from "../../api";

export default function PokemonRouter({ data }) {
  checkInvalidAccessToPage(data);

  const [ability, setAbility] = useState({});

  fetchUrl(data.abilities[0].ability.url).then(res => {
    setAbility(res);
  });

  return (
    <div>
      <HomeHeader />
      <div className="bod">
        <h2 id="head">
          {capitalize(data.name)}
          <br />
          (#{data.id})
          <br />
          <img
            id="pImage"
            src={data.sprites["front_default"]}
            alt={data.name}
            style={{
              alignContent: "center",
              alignItems: "center",
              flex: 1,
              width: 500,
            }}
          />
        </h2>
        <div className="Info">
          <p>
            <b>Species: </b>
            {data.name}
          </p>
          <p>
            <b>Order: </b>
            {data.order}
          </p>
          <p>
            <b>Type: </b>
            {capitalize(data.types[0].type.name)}
          </p>
          <p>
            <b>Height: </b>
            {data.height}
          </p>
          <p>
            <b>Weight: </b>
            {data.weight}
          </p>
          <p>
            <b>Ability: </b>
            {ability.effect_entries && ability.effect_entries[0].effect}
          </p>
        </div>
      </div>
    </div>
  );
}
