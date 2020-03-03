import "./ItemSearchResult.css";

import React from "react";

export default function ItemSearchResult({ data }) {
  return (
    <div>
      <h2>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
      
      <h2>You've reached the Item Search Result page!</h2>
    </div>
  );
}