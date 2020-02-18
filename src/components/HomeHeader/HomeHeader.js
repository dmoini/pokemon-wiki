import './HomeHeader.css'

import Navbar from 'react-bootstrap/Navbar';
import React from 'react'

function HomeHeader() {
    return (
      <Navbar bg="primary" expand="lg">
        <Navbar.Brand href="App.js" className="brandName">Pokemon Wiki</Navbar.Brand>
      </Navbar>
    )
}

export default HomeHeader