import React from 'react';
import { Navbar, Nav, Button, Row, Col, Media, Container, ButtonGroup } from 'react-bootstrap';
import PopoverStickOnHover from '../utils/PopoverStickOnHover';
//import logo from '../assets/images/logo.svg';
import logoman from '../assets/images/logoman.png';
//import logowoman from '../assets/images/logowoman.png';

//icons 
import { PlayFill,PersonFill,StarFill,HandThumbsUpFill } from 'react-bootstrap-icons';

function Navigationbar() {

    const Filter_Overlay = () => {
        return (
            <Row className="browse-tooltip-wrap justify-content-center">
                <Col className="browse-tool-column">
                    <Row>
                        <Col className="col-2 icon">
                            <Button>
                                <PlayFill />
                            </Button>
                        </Col>
                        <Col className="col-10 tab ">
                            <Row className="links">
                                <Col>
                                    <Button className="title">Anime</Button>
                                </Col>
                                <Col>
                                    <ButtonGroup className="mini-links" aria-label="Basic example">
                                        <Button>Top 100</Button>
                                        <Button>Trending</Button>
                                        <Button>Top Movies</Button>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col className="browse-tool-column">
                    <Row>
                        <Col className="col-2 icon">
                            <Button>
                                <PlayFill />
                            </Button>
                        </Col>
                        <Col className="col-10 tab ">
                            <Row className="links">
                                <Col>
                                    <Button className="title">Manga</Button>
                                </Col>
                                <Col>
                                    <ButtonGroup className="mini-links" aria-label="Basic example">
                                        <Button>Top 100</Button>
                                        <Button>Trending</Button>
                                        <Button>Top Manhwa</Button>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col className="browse-tool-column box-column">
                    <Row>
                        <Col>
                        <Button><PersonFill/> Staff</Button>
                        </Col>
                        <Col>
                        <Button><StarFill/> Reviews</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        
                        <Button><PersonFill/> Characters</Button>
                        </Col>
                        <Col>
                        <Button><HandThumbsUpFill/> Recommendations</Button>
                        </Col>
                    </Row>
                        
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
                    <PopoverStickOnHover component={<Filter_Overlay />} placement="bottom-start" onMouseEnter={() => { }} delay={200}>
                        <Nav.Link>Browse</Nav.Link>
                    </PopoverStickOnHover>


                    <Nav.Link>Social</Nav.Link>
                    <Nav.Link>Forum</Nav.Link>
                </Nav>

                <Nav className="links-set-2">
                    <Nav.Link>Login</Nav.Link>
                    <Nav.Link><Button size="sm">Sign Up</Button></Nav.Link>
                </Nav>
            </Container>
        </Navbar>


    );
}

export default Navigationbar;
