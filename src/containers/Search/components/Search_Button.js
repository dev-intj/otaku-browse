import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';


// import react redux functionality
import { connect } from 'react-redux';
import { setType } from '../actions';

// import different options for the buttons
import data from "../components/FilterComponent-Data";

class Search_Button extends Component {
    render() {
        return (
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">
                    <Search />
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1" />
            </InputGroup>
        )
    }
}
const mapStateToProps = (state) => ({
    ...state
});
const mapDispatchToProps = (dispatch) => ({
    typeAction: (payload) => dispatch(setType(payload))
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps)
const ConnectedComponent = connectToStore(Search_Button)

export default connect(mapStateToProps, mapDispatchToProps)(Search_Button);