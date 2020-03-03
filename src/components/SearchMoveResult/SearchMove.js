import "./SearchMove.css";

import React from "react";

export default function SearchMoveList({ move }) {

  if (!move) {
    return <div>Uh oh!</div>;
    // implement search result not found page from github
  }
  return (
    <div>
      <h2>{move.name}</h2>
      <div>
        <b>Accuracy</b>: {move.accuracy}
      </div>
      <div>
        <b>Move PP</b>: {move.pp}
      </div>
      <div>
        <b>Power</b>: {move.power}
      </div>
    </div>
  );
}
