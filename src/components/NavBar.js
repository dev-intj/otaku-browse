import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'

import logo from '../assets/images/logo.svg';
import logoman from '../assets/images/logoman.png';
import logowoman from '../assets/images/logowoman.png';

export default class NavBar extends Component {
    render() {
        return (
            <div className="react-navbar">
                <Navbar bg="dark" variant="dark">
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
                </Navbar>
            </div>
        )
    }
}
