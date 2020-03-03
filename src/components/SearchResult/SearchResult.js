import "./SearchResult.css";

import MoveSearchResult from "../MoveSearchResult/MoveSearchResult";
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
      ? MoveSearchResult
      : searchType === "Move"
      ? MoveSearchResult
      : MoveSearchResult;

  return error ? (
    <SearchResultError searchQuery={searchQuery} searchType={searchType} />
  ) : (
    <div>
      <div>
        {searchType}: {searchQuery}
      </div>
      <br />
      {/* <div>{JSON.stringify(searchResult)}</div> */}
      <br />
      <SearchResultComponentType data={searchResult} />
    </div>
  );
}
