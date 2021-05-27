import React from 'react';
import { Navbar, Nav, Button,Row, Col, Media, Container } from 'react-bootstrap';
import PopoverStickOnHover from '../utils/PopoverStickOnHover';
//import logo from '../assets/images/logo.svg';
import logoman from '../assets/images/logoman.png';
//import logowoman from '../assets/images/logowoman.png';

//icons 
import { PlayFill } from 'react-bootstrap-icons';

function Navigationbar() {
    const Filter_Overlay = () => {
        return (
            <Row className="browse-tooltip-wrap justify-content-center">
                <Col className="browse-tool-column">
                    <Media>
                        <PlayFill size={25} className="align-self-center mr-3" />
                        <Media.Body>
                            <h3 className="title">Anime</h3>
                            <p className="sub-title">
                                Top-Top-Top
                        </p>

                        </Media.Body>
                    </Media>
                </Col>
            </Row>
        );
    };

    return (

        <Navbar className="d-none d-lg-block">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="navbar logo"
                        src={logoman}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Nav className="links-set-1">
                    <PopoverStickOnHover component={<Filter_Overlay />} placement="bottom" onMouseEnter={() => { }} delay={200}>
                        <Nav.Link href="#home">Browse</Nav.Link>
                    </PopoverStickOnHover>


                    <Nav.Link href="#social">Social</Nav.Link>
                    <Nav.Link href="#forum">Forum</Nav.Link>
                </Nav>

                <Nav className="links-set-2">
                    <Nav.Link href="#forum">Login</Nav.Link>
                    <Nav.Link href="#greek-translators"><Button size="sm">Sign Up</Button></Nav.Link>
                </Nav>
            </Container>
        </Navbar>


    );
}

export default Navigationbar;
