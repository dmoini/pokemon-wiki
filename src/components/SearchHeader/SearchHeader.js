import "./SearchHeader.css";

import React, { useState } from "react";
import {DropdownButton, Dropdown } from "react-bootstrap";

export default function SearchHeader() {
  const [category, setCategory] = useState("Category");

  return ( 
    <DropdownButton id="dropdown" title={category}>
      {/* <Dropown.Item as = "Pokemon"><dive onClick={(e) => this.changeValue(e.target.textContent)}>Pokemon</dive></Dropdown.Item> */}
      <Dropdown.Item onClick={() => {setCategory("Pokemon")}}>Pokemon</Dropdown.Item>
      <Dropdown.Item onClick={() => {setCategory("Move")}}>Move</Dropdown.Item>
      <Dropdown.Item onClick={() => {setCategory("Item")}}>Item</Dropdown.Item>
    </DropdownButton>
  );
}