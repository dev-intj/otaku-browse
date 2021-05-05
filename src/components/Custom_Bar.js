import React, { Component } from 'react';
import axios from 'axios';

import PropTypes from 'prop-types'

import { Container, Row, Col } from 'react-bootstrap';

import Card from "../components/Card";

class Custom_Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card_1: [],
            card_2: [],
            card_3: [],
            card_4: [],
            card_5: [],
        }

    } 
    async componentDidMount() {
        //passing 
        const type = this.props.type;
        const page = this.props.page;
        const subtype = this.props.subtype;
        const url = 'https://api.jikan.moe/v3/top/';
        const query = url + type + page + subtype;
        try {
            const res = await axios.get(query)
            const data = res.data.top;
            this.setState({ card_1:data[0],card_2:data[1],card_3:data[2],card_4:data[3],card_5:data[4]});
        } catch (err) {
            console.log(err)
        }
    }

    ontClick = () => {
        // update state mode, and send query to state, home will handle the change, 
        //and update the query to the results component, the buttons should get a reset
    }
    
    render() {
        
        return (
            <Container className="d-flex justify-content-between align-items-center CustomBar" fluid="lg">
                <Row>

                    <Col xs={12} xl={12} md={12} lg={12}>
                        <Row className="d-flex justify-content-between hero">
                            <Col className="title">
                                <p className="title text-left">{this.props.title}</p>
                            </Col>
                            <Col>
                                <p className="text-right">view all</p>
                            </Col>
                        </Row>

                    </Col>
                    <Col>
                        <Card anime={this.state.card_1} />
                    </Col>
                    <Col>
                        <Card anime={this.state.card_2} />
                    </Col>
                    <Col>
                        <Card anime={this.state.card_3} />
                    </Col>
                    <Col>
                        <Card anime={this.state.card_4} />
                    </Col>
                    <Col className="">
                        <Card anime={this.state.card_5} />
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Custom_Bar;