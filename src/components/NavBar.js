import React, { Component } from 'react'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';

import logo from '../assets/images/logo.svg';
import logoman from '../assets/images/logoman.png';
import logowoman from '../assets/images/logowoman.png';

export default class NavBar extends Component {
    render() {
        return (
            <div className="react-navbar">
                <Navbar>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logoman}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
      otaku browse 
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
                </Navbar>
            </div>
        )
    }
}
