import "./SearchHeader.css";

import React, { useState } from "react";
import {Form, Button, DropdownButton, Dropdown, FormControl } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

export default function SearchHeader() {
  const [category, setCategory] = useState("Category");

  return ( 
    <div>
    <DropdownButton id="dropdown" title={category}>
      <Dropdown.Item onClick={() => {setCategory("Pokemon")}}>Pokemon</Dropdown.Item>
      <Dropdown.Item onClick={() => {setCategory("Move")}}>Move</Dropdown.Item>
      <Dropdown.Item onClick={() => {setCategory("Item")}}>Item</Dropdown.Item>
    </DropdownButton> 
    <Navbar>
      <Form inline> 
      <FormControl type="text" placeholder="Search" className ="searchbar"/>
      <Button onClick={() => {setCategory("Submit")}}>Submit</Button>
      </Form>
    </Navbar>
    </div>
  );
}