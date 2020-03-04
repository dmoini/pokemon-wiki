import "./SearchResult.css";

import ItemSearchResult from "../ItemSearchResult/ItemSearchResult";
import MoveSearchResult from "../MoveSearchResult/MoveSearchResult";
import PokemonSearchResult from "../PokemonSearchResult/PokemonSearchResult";
import React from "react";
import SearchResultError from "../SearchResultError/SearchResultError";

export default function SearchResult({
  searchType,
  searchQuery,
  searchResult,
  error,
}) {
  const SearchResultComponentType =
    searchType === "Pokemon"
      ? PokemonSearchResult
      : searchType === "Move"
      ? MoveSearchResult
      : ItemSearchResult;

  return error ? (
    <SearchResultError searchQuery={searchQuery} searchType={searchType} />
  ) : (
    <SearchResultComponentType data={searchResult} />
  );
}
