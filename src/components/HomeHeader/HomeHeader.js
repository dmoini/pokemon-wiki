import "./HomeHeader.css";

import Navbar from "react-bootstrap/Navbar";
import React from "react";

export default function HomeHeader() {
  return (
    <div className="center-navbar">
      <Navbar bg="danger" expand="lg">
        <Navbar.Brand href="App.js" className="navbar-brand-custom">
          Pokemon Wiki
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
