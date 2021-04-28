import React, { Component, useState } from 'react'
import { Container, Button, Row, Col, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
//importing bootstrap icons
import { Search, Sliders } from 'react-bootstrap-icons';
//jsx component, read name for obvious explanation
import PopoverStickOnHover from '../utils/PopoverStickOnHover';

import data from "../data/FilterComponent-Data";

function Filter() {
  const [GenresState,setGenresState] = useState("");

  //variable to hide buttons in certain screen sizes
  const hideclassosm = "d-none d-sm-none d-md-block d-xl-block";
  //variable for the buttons in lg

  const appearclassosm = "";


  const Filter_Overlay = () => {
    return (
      <h1>test</h1>
    );
  };

  const Construct_Button = (props) => {
    let options = [...props.options]
    return (
      <DropdownButton id={props.cid} alignBottom title={props.title} >
        {options.map(option =>
          <Dropdown.Item value={option.value} key={option.value}>{option.label}</Dropdown.Item>
        )}
      </DropdownButton>
    );
  };

  return (
    <Container className="mt-5 mb-5 filter-component" fluid="lg">

      <Row>
        <Col className="d-lg-none d-md-block" lg={12}>
          Browse Anime
          </Col>
        <Col md={11} lg={2} className="filter_search">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1"><Search /></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>

        <Col lg={9} className="filter_button_lg">
          <Col lg={3} className={hideclassosm}>
            <Construct_Button title="Genres" options={data.Genres_options} cid="Genres" />
          </Col>
          <Col lg={3} className={hideclassosm}>
            <Construct_Button title="Genres" options={data.Genres_options} cid="Genres" />
          </Col>
          <Col lg={3} className={hideclassosm}>
            <Construct_Button title="Genres" options={data.Genres_options} cid="Genres" />
          </Col>
          <Col lg={3} className={hideclassosm}>
            <Construct_Button title="Genres" options={data.Genres_options} cid="Genres" />
          </Col>
        </Col>

        <Col md={1} lg={1}>
          <PopoverStickOnHover component={<Filter_Overlay />} placement="bottom" onMouseEnter={() => { }} delay={200}>
            <Button className="filter_burger"><Sliders color="grey" /></Button>
          </PopoverStickOnHover>

        </Col>
      </Row>
    </Container>
  )
}
export default Filter;