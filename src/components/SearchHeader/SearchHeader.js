import "./SearchHeader.css";

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

export default function SearchHeader() {
  const [category, setCategory] = useState("Category");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Container>
      <Row>
        <Form inline className="searchbar center">
          <DropdownButton id="dropdown" variant="danger" title={category}>
            <Dropdown.Item
              onClick={() => {
                setCategory("Pokemon");
              }}
            >
              Pokemon
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCategory("Move");
              }}
            >
              Move
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setCategory("Item");
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
          />
          <Button
            variant="danger"
            onClick={() => {
              console.log(searchQuery);
            }}
          >
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  );
}
