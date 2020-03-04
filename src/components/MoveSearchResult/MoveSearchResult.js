import "./MoveSearchResult.css";

import Image from "../../images/disk.png";
import React from "react";
import { capitalize } from "../../helperFunctions";

export default function MoveSearchResult({ data }) {
  return (
    <section className="grid">
      <div className="image">
        <img id="disk-image" src={Image} alt="Disk" />
      </div>
      <div className="info pt-2">
        This move is called {capitalize(data.name)}. The accuracy is{" "}
        {data.accuracy}. The move has {data.pp} PP. The power of this move is{" "}
        {data.power}.
      </div>
    </section>
  );
}
