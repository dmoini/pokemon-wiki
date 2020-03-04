import HomeHeader from "../HomeHeader/HomeHeader";
import React from "react";
import Search from "../Search/Search";

export default function HomePage({ setData }) {
  return (
    <div>
      <HomeHeader />
      <Search setData={setData} />
    </div>
  );
}
