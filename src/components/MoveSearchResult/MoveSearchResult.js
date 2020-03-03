import "./MoveSearchResult.css";



import React from "react";

export default function MoveSearchResult({ data }) {
  return (


<body className="body">
  <div id="header">
    <img id="pokeImage" src=".../../images/disk"/>
  </div>

  <div id="basicNfo">
      This move is called {data.name.charAt(0).toUpperCase() + data.name.slice(1)}. The accuracy is {data.accuracy}.
       The move has {data.pp} PP. The power of this move is {data.power}
  </div>
</body>

  );
}


// import Background from "../../images/pokemon-background.png";
//       <div
// id="background-img"
// style={{ backgroundImage: `url(${Background})` }}
// >