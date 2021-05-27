import React, { Component } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap';

// importing bootstrap icons
import { Sliders } from 'react-bootstrap-icons';

// jsx component, read name for obvious explanation
import PopoverStickOnHover from '../../utils/PopoverStickOnHover';

// Buttons
import Filter_Button from "./components/Filter_Button";
import Hero_Button from "./components/Hero_Button";
import Search_Button from "./components/Search_Button";


class SearchJSX extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const Filter_Overlay = () => {
            return (
                <h1>test</h1>
            );
        };

        return (
            <>
                <Container className="mt-5 mb-5 pt-5 filter-component" fluid="lg" >
                    <Row>
                        {/* Hero Button */}
                        <Col className="d-lg-none d-md-block" lg={12}>
                            <Hero_Button />
                        </Col>

                        {/* Search Button*/}
                        <Col xs={11} sm={11} md={11} lg={2} xl={2} className="filter_search">
                            <div className="name d-none d-sm-none d-lg-block d-md-none d-xl-block">Search</div>
                            <Search_Button />
                        </Col>

                        {/* Button toolbar, only on md */}
                        <Col md={9} className=" d-none d-sm-none d-lg-block d-md-none d-xl-block ">
                            <div className="filter_button_lg">
                                <Filter_Button mode="Genres" />
                                <Filter_Button mode="Years" />
                                <Filter_Button mode="Seasons" />
                                <Filter_Button mode="Formats" />
                            </div>
                        </Col>

                        {/* Button Burger */}
                        <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                            <div className="name d-none d-sm-none d-lg-block d-md-none d-xl-block">&nbsp;</div>
                            <PopoverStickOnHover component={<Filter_Overlay />} placement="bottom" onMouseEnter={() => { }} delay={200}>
                                <Button className="filter_burger"><Sliders color="grey" /></Button>
                            </PopoverStickOnHover>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default SearchJSX;