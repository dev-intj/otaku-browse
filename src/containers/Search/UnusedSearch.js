import React, { Component, useState } from 'react'
import { Container, Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
//importing bootstrap icons
import { Search, Sliders } from 'react-bootstrap-icons';
//jsx component, read name for obvious explanation
import PopoverStickOnHover from '../../utils/PopoverStickOnHover';

import Filter_Button from "../../components/FilterComponents/Filter_Button";

function Filter(props) {
  const [GenresState, setGenresState] = useState("");
  
  const query_result = undefined;



  const Filter_Overlay = () => {
    return (
      <h1>test</h1>
    );
  };

  return (
    <>
    <Container className="mt-5 mb-5 filter-component" fluid="lg" >
      <Row>
        <Col className="d-lg-none d-md-block" lg={12}>
          Browse Anime
        </Col>

        <Col md={10} lg={2} className="filter_search">
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
        <Filter_Button/>
        <Filter_Button/>
        <Filter_Button/>
        <Filter_Button/>
        </Col>

        <Col md={2} lg={1}>
          <PopoverStickOnHover component={<Filter_Overlay />} placement="bottom" onMouseEnter={() => { }} delay={200}>
            <Button className="filter_burger"><Sliders color="grey" /></Button>
          </PopoverStickOnHover>
        </Col>

      </Row>
      
    </Container>
    </>
  )
}
export default Filter;