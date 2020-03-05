import "./MoveRouter.css";

import React from "react";
import { checkInvalidAccessToPage } from "../../helperFunctions";

export default function MoveRouter({ data }) {
  checkInvalidAccessToPage(data);
  const Description = () => {
    for (let i=0; i<data.flavor_text_entries.length; i++) {
      if (data.flavor_text_entries[i].language.name === "en") {
        return data.flavor_text_entries[i].flavor_text;
      }
    }
  };
  return (
    <div>
      <div className="allInfo">
        <div className="nameAndDesc">
          <h2 id="name"><u>{data.name.toUpperCase()}</u></h2>
          <p id="description">{Description()}</p>
        </div>
        <div className="details">
          <p id="power">Power: <u>{data.power}</u></p>
          <p id="pp">PP: <u>{data.pp}</u></p>
          <p id="type">Damage Type: <u>{data.type.name.charAt(0).toUpperCase() + data.type.name.slice(1)}</u></p>
        </div>
      </div>
      <br />
      {/* <div>{JSON.stringify(data)}</div> */}
    </div>
  );
}
