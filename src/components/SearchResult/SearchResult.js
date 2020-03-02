import "./SearchResult.css";

import React from "react";
import SearchResultError from "../SearchResultError/SearchResultError";

export default function SearchResult() {
  return <SearchResultError searchQuery="pikachu" searchType="Pokemon" />;
}
