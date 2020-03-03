import "./Search.css";

import {
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import React, { useState } from "react";
import { searchItem, searchMove, searchPokemon } from "../../api";

import Background from "../../images/pokemon-background.png";
import SearchResult from "../SearchResult/SearchResult";

export default function SearchHeader() {
  const [searchType, setSearchType] = useState("Pokemon");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState({});
  const [search, setSearch] = useState({});
  const [error, setError] = useState(false);

  const handleSearch = () => {
    if (searchQuery === "") {
      window.alert("Please enter a non-empty search query.");
      return;
    }
    searchCategory(searchType, searchQuery)
      .then(res => {
        setSearch({
          searchType,
          searchQuery,
        });
        setSearchResult({ ...res, searchType });
        setError(false);
      })
      .catch(() => {
        setSearch({
          searchType,
          searchQuery,
        });
        setSearchResult({});
        setError(true);
      });
  };

  const searchCategory = (searchType, searchQuery) => {
    let formattedSearchQuery = searchQuery
      .toLowerCase()
      .split(" ")
      .join("-");
    if (
      searchType === "Item" &&
      searchQuery.endsWith("ball") &&
      !searchQuery.includes("-")
    ) {
      formattedSearchQuery =
        searchQuery.slice(0, searchQuery.length - 4) +
        "-" +
        searchQuery.slice(searchQuery.length - 4);
    }
    switch (searchType) {
      case "Pokemon":
        return searchPokemon(formattedSearchQuery);
      case "Move":
        return searchMove(formattedSearchQuery);
      default:
        return searchItem(formattedSearchQuery);
    }
  };

  const handleEnterKey = e => {
    // e.preventDefault();
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div>
      <div
        id="background-img"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Container id="search-bar">
          <Row>
            <Form inline className="center">
              <DropdownButton id="dropdown" variant="danger" title={searchType}>
                <Dropdown.Item
                  onClick={() => {
                    setSearchType("Pokemon");
                  }}
                >
                  Pokemon
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setSearchType("Move");
                  }}
                >
                  Move
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setSearchType("Item");
                  }}
                >
                  Item
                </Dropdown.Item>
              </DropdownButton>
              <FormControl
                type="text"
                placeholder="Search"
                onChange={e => {
                  setSearchQuery(e.target.value);
                }}
                onKeyPress={e => {
                  handleEnterKey(e);
                }}
              />
              <Button variant="danger" onClick={handleSearch}>
                Submit
              </Button>
            </Form>
          </Row>
        </Container>
      </div>
      <>
        {(Object.entries(searchResult).length > 0 || error) && (
          <SearchResult
            id="search-result"
            searchType={search.searchType}
            searchQuery={search.searchQuery}
            searchResult={searchResult}
            error={error}
          />
        )}
      </>
    </div>
  );
}
