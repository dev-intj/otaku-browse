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

// import react redux functionality
import { connect } from 'react-redux';
import { setFormat, setGenre, setYear, setSeason,setType } from './actions';
import { withRouter } from 'react-router-dom';

import data from "./components/FilterComponent-Data";

class SearchJSX extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const years = [];
        for (var i = 1940; i < 2022; i++) {
            years.push(
                {
                    label: i,
                    value: parseInt(i)
                }
            );
        }

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
                            <Hero_Button options={data.Browse_options} title="Browse"
                            value={this.props.SearchReducer.type}
                            onChange={value => { this.props.typeAction(value) }}                      
                            />
                        </Col>

                        {/* Search Button*/}
                        <Col xs={11} sm={11} md={11} lg={2} xl={2} className="filter_search">
                            <div className="name d-none d-sm-none d-lg-block d-md-none d-xl-block">Search</div>
                            <Search_Button />
                        </Col>

                        {/* Button toolbar, only on md */}
                        <Col md={9} className=" d-none d-sm-none d-lg-block d-md-none d-xl-block ">
                            <div className="filter_button_lg">

                                <Filter_Button options={data.Genre_options} title="Genres"
                                    value={this.props.SearchReducer.genre}
                                    onChange={value => { this.props.genreAction(value) }} />

                                <Filter_Button options={years} title="Years"
                                    value={this.props.SearchReducer.year}
                                    onChange={value => { this.props.yearAction(value) }} />

                                <Filter_Button options={data.Season_options} title="Seasons"
                                    value={this.props.SearchReducer.season}
                                    onChange={value => { this.props.seasonAction(value) }} />

                                <Filter_Button options={data.Format_options} title="Formats"
                                    value={this.props.SearchReducer.format}
                                    onChange={value => { this.props.formatAction(value) }} />

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


const mapStateToProps = (state) => ({
    ...state
});
const mapDispatchToProps = dispatch => ({
    typeAction: (payload) => dispatch(setType(payload)),
    yearAction: (payload) => dispatch(setYear(payload)),
    genreAction: (payload) => dispatch(setGenre(payload)),
    seasonAction: (payload) => dispatch(setSeason(payload)),
    formatAction: (payload) => dispatch(setFormat(payload)),
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps)
const ConnectedComponent = connectToStore(SearchJSX)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchJSX));