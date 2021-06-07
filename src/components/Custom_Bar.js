import React, { Component } from 'react';
import axios from 'axios';

import PropTypes from 'prop-types'

import { Container, Row, Col,Button } from 'react-bootstrap';

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
            type: []
        }

    } 
    async componentDidMount() {
        //passing 
        const type = this.props.type;
        const page = this.props.page;
        const subtype = this.props.subtype;
        const url = 'https://api.jikan.moe/v3/top';
        const query = url + type + page + subtype;
        try {
            const res = await axios.get(query)
            const data = res.data.top;
            this.setState({ card_1:data[0],card_2:data[1],card_3:data[2],card_4:data[3],card_5:data[4],type:type});
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
            <Container className="pt-3 pb-3 d-flex justify-content-between align-items-center CustomBar" fluid="lg">
                <Row className="d-flex justify-content-between">

                    <Col xs={12} xl={12} md={12} lg={12}>
                        <Row className="d-flex justify-content-between hero">
                            <Col className="title">
                                <Button className="text-left" variant="link">{this.props.title}</Button>
                            </Col>
                            <Col className="title">
                            <Button className="text-right" variant="link">view all</Button>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={6} sm={6}  md={3} lg="auto" >
                        <Card details={this.state.card_1} type={this.state.type}/>
                    </Col>
                    <Col xs={6} sm={6} md={3} lg="auto" className="r"> 
                        <Card details={this.state.card_2} type={this.state.type}/>
                    </Col>
                    <Col xs={6} sm={6} md={3} lg="auto"> 
                        <Card details={this.state.card_3} type={this.state.type}/>
                    </Col>
                    <Col  xs={6} sm={6} md={3} lg="auto" className="r">
                        <Card details={this.state.card_4} type={this.state.type}/>
                    </Col>
                    {/* make it appear only on xl */}
                    <Col xs={6} md={4} lg="auto" className="d-none d-xl-block">
                        <Card details={this.state.card_5} type={this.state.type}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Custom_Bar;