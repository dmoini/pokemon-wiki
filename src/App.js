import "./App.css";

import React, { useState } from "react";

import HomePage from "./components/HomePage/HomePage";
import ItemRouter from "./components/ItemRouter/ItemRouter";
import MoveRouter from "./components/MoveRouter/MoveRouter";
import PokemonRouter from "./components/PokemonRouter/PokemonRouter";
import { Route } from "react-router-dom";
import { Router } from "react-router";
import history from "./history";

export default function App() {
  const [data, setData] = useState({});

  const pokemonData = data.searchType === "Pokemon" ? data : {};
  const moveData = data.searchType === "Move" ? data : {};
  const itemData = data.searchType === "Item" ? data : {};

  return (
    <Router history={history}>
      <Route exact path="/" render={() => <HomePage setData={setData} />} />
      <Route
        path="/pokemon"
        render={() => <PokemonRouter data={pokemonData} />}
      />
      <Route path="/move" render={() => <MoveRouter data={moveData} />} />
      <Route path="/item" render={() => <ItemRouter data={itemData} />} />
    </Router>
  );
}
