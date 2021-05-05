import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router";

class Search extends Component {
    constructor() {
        super();

        this.state = {
            data: []
        }
    }
    componentDidMount() {
        const type = this.props.match.params.type;
        const id = this.props.match.params.id;
        const title = this.props.match.params.title;
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default withRouter(Search);