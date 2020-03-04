import "./PokemonRouter.css";

import React from "react";
import { checkInvalidAccessToPage } from "../../helperFunctions";

export default function PokemonRouter({ data }) {
  checkInvalidAccessToPage(data);
  return (
    <div>
      <div>This is a Pokemon Router</div>
      <br />
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
