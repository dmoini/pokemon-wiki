import "./MoveSearchResult.css";

import React from "react";

export default function MoveSearchResult({ data }) {
  return (
    <div>
      <h2>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
      <div>
        <b>Accuracy</b>: {data.accuracy}
      </div>
      <div>
        <b>Move PP</b>: {data.pp}
      </div>
      <div>
        <b>Power</b>: {data.power}
      </div>
    </div>
  );
}
