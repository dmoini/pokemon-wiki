import "./SearchHeader.css";

import React from "react";
import {DropdownButton, Dropdown } from "react-bootstrap";


export default function SearchHeader() {
    return ( 
    <DropdownButton id="Dropdown" title = "Categories">
      {/* <Dropown.Item as = "Pokemon"><dive onClick={(e) => this.changeValue(e.target.textContent)}>Pokemon</dive></Dropdown.Item> */}
      <Dropdown.Item as = "Pokemon">Pokemon</Dropdown.Item>
      <Dropdown.Item as = "Move">Move</Dropdown.Item>
      <Dropdown.Item as = "Item">Item</Dropdown.Item>
    </DropdownButton>
  );
}
