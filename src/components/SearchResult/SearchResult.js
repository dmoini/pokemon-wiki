import "./SearchResult.css";

import React from "react";
import SearchResultError from "../SearchResultError/SearchResultError";

export default function SearchResult({
  searchType,
  searchQuery,
  searchResult,
  error,
}) {
  return error ? (
    <SearchResultError searchQuery={searchQuery} searchType={searchType} />
  ) : (
    <div>
      <div>
        {searchType}: {searchQuery}
      </div>
      <div>{JSON.stringify(searchResult)}</div>
    </div>
  );
}
