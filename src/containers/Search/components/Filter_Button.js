import React, { Component } from 'react'

import { Col, DropdownButton, Dropdown } from 'react-bootstrap';
import data from "./FilterComponent-Data";

// import react redux functionality
import { connect } from 'react-redux';
import { setType } from '../actions';



class Filter_Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    }
  }




  render() {
    
    const Construct_Button = (props) => {
      return (
        <DropdownButton id={props.cid} alignbottom="true" title={props.title} >
          {this.state.options.map(option =>
            <Dropdown.Item value={option.value} key={option.value}>{option.label}</Dropdown.Item>
          )}
        </DropdownButton>
      );
    };

    return (
      <Col>
        <div className="name">{this.props.mode}</div>
        <div className="select"><Construct_Button title={this.props.mode} cid={this.props.mode} /></div>
      </Col>
    )
  }

  componentDidMount() {
    switch (this.props.mode) {
      case "Genres":
        this.setState({ options: data.Genres_options });
        break
      case 'Seasons':
        this.setState({ options: data.Season_options });
        break
      case "Years":
        this.setState({ options: data.Genres_options });
        break
      case "Formats":
        this.setState({ options: data.Format_options });
        break
      default:
        this.setState({ options: data.Genres_options });
    }
  }
}
const mapStateToProps = (state) => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  typeAction: (payload) => dispatch(setType(payload))
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps)
const ConnectedComponent = connectToStore(Filter_Button)

export default connect(mapStateToProps, mapDispatchToProps)(Filter_Button);