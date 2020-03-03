import "./App.css";

import HomeHeader from "./components/HomeHeader/HomeHeader";
import React from "react";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import SearchResult from "./components/SearchResult/SearchResult";
import SearchMove from "./components/SearchMoveResult/SearchMove";

export default function App() {
  return (
    <div className="App">
      <HomeHeader />
      <SearchHeader />
      <SearchResult />
      <SearchMove />
    </div>
  );
}
