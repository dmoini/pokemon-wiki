import "./SearchResultError.css";

import { Alert } from "react-bootstrap";
import React from "react";

export default function SearchResultError({ searchType, searchQuery }) {
  return (
    <Alert key="alert" variant="danger" className="center mt-3" id="error">
      Could not find "{searchQuery}" for {searchType} search.
    </Alert>
  );
}
