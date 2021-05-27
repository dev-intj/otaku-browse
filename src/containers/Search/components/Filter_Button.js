import React, { Component } from 'react'

import { Col, DropdownButton, Dropdown } from 'react-bootstrap';
import data from "./FilterComponent-Data";

// import react redux functionality
import { connect } from 'react-redux';
import { setFormat,setGenre,setYear,setSeason } from '../actions';



class Filter_Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect = (e) => {
    switch (this.props.mode) {
      case "Genres":
        this.props.genreAction(e);
        break
      case 'Seasons':
        this.props.seasonAction(e);
        break
      case "Years":
        this.props.yearAction(parseInt(e));
        break
      case "Formats":
        this.props.formatAction(e);
        break
      default:
        console.log(e)
        break
    }
  };

  render() {

    const Default_button = () => {
      return (
        <DropdownButton id={this.props.mode} alignbottom="true" title={this.props.mode} onSelect={this.handleSelect}>
          {this.state.options.map((option, index) => (
            <Dropdown.Item as="button" eventKey={option.value} key={index}>{option.label}</Dropdown.Item>
          ))}
        </DropdownButton>
      );
    }

    const Integers_button = () => {
      return (
        <DropdownButton id={this.props.mode} alignbottom="true" title={this.props.mode} onSelect={this.handleSelect}>
          {this.state.options.map((option, index) => (
            <Dropdown.Item as="button" eventKey={option} key={index}>{option}</Dropdown.Item>
          ))}
        </DropdownButton>
      )
    }

    const Switch_buttons = () => {
      switch (this.props.mode) {
        case "Genres":
          return (<Default_button />)
        case 'Seasons':
          return (<Default_button />)
        case "Years":
          return (<Integers_button />)
        case "Formats":
          return (<Default_button />)
        default:
          return (<h1>something went wrong</h1>)
      }
    }


    return (
      <Col>
        <div className="name">{this.props.mode}</div>
        <div className="select">
          <Switch_buttons />
        </div>
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
        const years = [];
        for (var i = 1940; i < 2022; i++) {
          years.push(parseInt(i));
        }
        this.setState({ options: years });
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
  yearAction: (payload) => dispatch(setYear(payload)),
  genreAction: (payload) => dispatch(setGenre(payload)),
  seasonAction: (payload) => dispatch(setSeason(payload)),
  formatAction: (payload) => dispatch(setFormat(payload)),
});

const connectToStore = connect(mapStateToProps, mapDispatchToProps)
const ConnectedComponent = connectToStore(Filter_Button)

export default connect(mapStateToProps, mapDispatchToProps)(Filter_Button);