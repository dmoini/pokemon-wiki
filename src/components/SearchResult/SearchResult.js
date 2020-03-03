import "./SearchResult.css";

import MoveSearchResult from "../MoveSearchResult/MoveSearchResult";
import PokemonSearchResult from "../PokemonSearchResult/PokemonSearchResult";
import ItemSearchResult from "../ItemSearchResult/ItemSearchResult";
import React from "react";
import SearchResultError from "../SearchResultError/SearchResultError";

export default function SearchResult({
  searchType,
  searchQuery,
  searchResult,
  error,
}) {
  const SearchResultComponentType =
    searchType === "Pokemon" ? 
    PokemonSearchResult : 
    searchType === "Move" ? 
    MoveSearchResult: 
    searchType === "Item" ? 
    ItemSearchResult: ItemSearchResult;

  return error ? (
    <SearchResultError searchQuery={searchQuery} searchType={searchType} />
  ) : (
    <div>
      {/* <div>
        {searchType}: {searchQuery}
      </div>
      <br />
      <div>{JSON.stringify(searchResult)}</div>
      <br /> */}
      <SearchResultComponentType data={searchResult} />
    </div>
  );
}