import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router";

class DetailCard extends Component {
    constructor() {
        super();

        this.state = {
            data: []
        }
    }
    componentDidMount() {
        const type = this.props.match.params.type;
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default withRouter(DetailCard);