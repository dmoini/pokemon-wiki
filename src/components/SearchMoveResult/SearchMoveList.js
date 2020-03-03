import React, { useState, useEffect } from "react";


// not sure about setters 
export default function SearchMoveList({ setter }) {
  const [moves, setMoves] = useState([]);

  // how to change to actual API? (- not displaying anyways)
  useEffect(() => {
    const MOCK_ITEM = require("./mock/mockItem").MOCK_ITEM;;
    fetch(MOCK_ITEM)
      .then(r => r.json())
      .then(r => setMoves(r));
  }, []);


// somehow search from search bar input?? 
  return (
    <div>
      <ul>
        {moves &&
          moves.map(move => (
            <li key={move.id} onSearch={e => setter(move)}>
              {move.name}
            </li>
          ))}
      </ul>
    </div>
  );
}
