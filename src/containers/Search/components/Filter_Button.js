import React, { Component } from 'react'

import { Col, DropdownButton, Dropdown } from 'react-bootstrap';

import { withRouter } from 'react-router-dom';


class Filter_Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect = (e) => {
    if (this.props.location.pathname === '/') {
      this.props.history.push('/search')
    }
    this.props.onChange(e);
  };

  render() {

    const ConstructButton = () => {
      let options = this.state.options;
      if (Array.isArray(options) && options.length) {
        return(
        <DropdownButton id={this.props.mode} alignbottom="true" title={this.props.mode} onSelect={this.handleSelect}>
          
          {options.map((option, index) => (
            <Dropdown.Item as="button" eventKey={option.value} key={index}>{option.label}</Dropdown.Item>
          ))}

        </DropdownButton>
        )
      }else{
        return(<h1>Nothing</h1>)
      }
      
    }
    
    return (
      <Col>
        <div className="name">{this.props.mode}</div>
        <div className="select">
        <ConstructButton/>
        </div>
      </Col>
    )
  }

  componentDidMount() {
    const omega = this.props.options;
    this.setState({options:omega})
  }
  
}

export default withRouter(Filter_Button);