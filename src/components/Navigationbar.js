import React from 'react';
import { Navbar, Nav, Button, Tooltip, OverlayTrigger, Row, Col, Media,Container } from 'react-bootstrap';

//import logo from '../assets/images/logo.svg';
import logoman from '../assets/images/logoman.png';
//import logowoman from '../assets/images/logowoman.png';

//icons 
import { PlayFill } from 'react-bootstrap-icons';

function Navigationbar() {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" className="navbar-browse-tooltip" {...props}>
            <Row className="browse-tooltip-wrap justify-content-center">
                <Col className="browse-tool-column">
                    <Media>
                        <PlayFill size={25} className="align-self-center mr-3"/>
                        <Media.Body>
                            <h3 className="title">Anime</h3>
                            <p className="sub-title">
                                Top-Top-Top
                            </p>

                        </Media.Body>
                    </Media>
                </Col>
            </Row>
        </Tooltip>
    );

    return (

<Navbar expand="lg">
<Container>
    <Navbar.Brand href="#home">
               <img
                   alt="navbar logo"
                   src={logoman}
                   width="40"
                   height="40"
                   className="d-inline-block align-top"
               />{' '}
           </Navbar.Brand>
                   <Nav className="links-set-1">
               <OverlayTrigger
                   placement="bottom"
                   delay={{ show: 250, hide: 400 }}
                   overlay={renderTooltip}
                   className="browse-tooltip"
               ><Nav.Link href="#home">Browse</Nav.Link></OverlayTrigger>

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
