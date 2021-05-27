import React, { Component } from 'react'

import { Col, DropdownButton, Dropdown } from 'react-bootstrap';
import data from "./FilterComponent-Data";

// import react redux functionality
import { connect } from 'react-redux';
import { setType } from '../actions';



class Hero_Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect = (e) => {
    console.log(e);
  };

  render() {

    return (
        <h1>test</h1>
    )
    
  }

  componentDidMount() {

  }

}

const mapStateToProps = (state) => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  typeAction: (payload) => dispatch(setType(payload))
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps)
const ConnectedComponent = connectToStore(Hero_Button)

export default connect(mapStateToProps, mapDispatchToProps)(Hero_Button);