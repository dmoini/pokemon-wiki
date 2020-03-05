import "./PokemonRouter.css";
import HomeHeader from "../HomeHeader/HomeHeader";

import React from "react";
import { checkInvalidAccessToPage } from "../../helperFunctions";
import { capitalize } from "../../helperFunctions";


export default function PokemonRouter({ data }) {
  checkInvalidAccessToPage(data);
  
  return (
    <div> 
      <HomeHeader />
    <div className="bod">
      <h2 id="head">
        {capitalize(data.name)} 
        <br/>
        (#{data.id}) 
        <br/>
       <img
          id="pImage"
          src={data.sprites["front_default"]}
          alt={data.name}
          style = {{
            alignContent: 'center',
            alignItems: 'center',
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
      </div>


    </div>
  </div>
  );
}
