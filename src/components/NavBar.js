import React, { Component } from 'react'
import { Navbar, Nav,Container,Button } from 'react-bootstrap';

//import logo from '../assets/images/logo.svg';
import logoman from '../assets/images/logoman.png';
//import logowoman from '../assets/images/logowoman.png';

export default class NavBar extends Component {
    render() {
        return (
                <Navbar>
                    <div className="wrap d-flex justify-content-between">

                    
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logoman}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
    </Navbar.Brand>

    <Nav className="links-1">
    <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#social">Social</Nav.Link>
      <Nav.Link href="#forum">Forum</Nav.Link>
    </Nav>
    <Nav className="links-2">
    <Nav.Link href="#forum">Login</Nav.Link>
    <Nav.Link href="#greek-translators"><Button size="sm">Sign Up</Button></Nav.Link>
    </Nav>
    </div>
                </Navbar>
        )
    }
}
