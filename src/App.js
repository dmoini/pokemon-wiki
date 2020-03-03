import "./App.css";

import HomeHeader from "./components/HomeHeader/HomeHeader";
import React from "react";
import Search from "./components/Search/Search";

export default function App() {
  return (
    <div className="App">
      <HomeHeader />
      <Search />
    </div>
  );
}
