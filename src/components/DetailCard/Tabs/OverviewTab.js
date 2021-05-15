import React, { Component } from 'react';

//import overview components
import Relations from '../Components/Relations';
import Characters from '../Components/Characters';
import Staff from '../Components/Staff';
import Watch from '../Components/Watch';
import Recommendations from '../Components/Recommendations';

export default class OverviewTab extends Component {
    
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    async componentDidMount(){
        this.setState({ data: this.props.array });
    }
    
    render() {
        return (
            <>
                <Relations array={this.state.data}/>
                <Characters array={this.state.data}/>
                <Staff array={this.state.data}/>
                <Watch array={this.state.data}/>
                <Recommendations array={this.state.data}/>
            </>
        )
    }
}
