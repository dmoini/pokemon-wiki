import "./MoveRouter.css";

import { capitalize, checkInvalidAccessToPage } from "../../helperFunctions";

import React from "react";

export default function MoveRouter({ data }) {
  checkInvalidAccessToPage(data);
  const moveEnglishDescription = () => {
    for (let i = 0; i < data.flavor_text_entries.length; i++) {
      if (data.flavor_text_entries[i].language.name === "en") {
        return data.flavor_text_entries[i].flavor_text;
      }
    }
  };
  return (
    <div>
      <div className="allInfo">
        <div className="nameAndDesc">
          <h2 id="name">
            <u>{capitalize(data.name).toUpperCase()}</u>
          </h2>
          <p id="description">{moveEnglishDescription()}</p>
        </div>
        <div className="details">
          <p id="power">
            Power: <u>{data.power}</u>
          </p>
          <p id="pp">
            PP: <u>{data.pp}</u>
          </p>
          <p id="type">
            Damage Type: <u>{capitalize(data.type.name)}</u>
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}
