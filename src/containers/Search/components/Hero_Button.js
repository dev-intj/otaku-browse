import React, { Component } from 'react'

import { Col, DropdownButton, Dropdown } from 'react-bootstrap';
import data from "./FilterComponent-Data";

import { withRouter } from 'react-router-dom';


class Hero_Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect = (event) => {
    this.props.onChange(this.state.options[event]);
  };

  render() {

    const ConstructButton = () => {
      let options = this.state.options;
      if (Array.isArray(options) && options.length) {
        return (
          <div className="Hero-Browse">
          <div className="Title">{this.props.title}</div>
          
          <DropdownButton variant="link" id={this.props.title} alignbottom="true" title={this.props.value['label']} onSelect={this.handleSelect} className="Hero-Button">
            {options.map((option, index) => (
              <Dropdown.Item as="button" eventKey={index} key={index}>{option.label}</Dropdown.Item>
            ))}

          </DropdownButton>
          </div>
        )
      } else {
        return (
        <h1>Nothing</h1>
        )
      }

    }

    return (
      <ConstructButton />
    )

  }

  componentDidMount() {
    const omega = this.props.options;
    this.setState({ options: omega })
  }

}


export default withRouter(Hero_Button);