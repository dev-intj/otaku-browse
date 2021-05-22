import React from 'react'
import { Col, DropdownButton, Dropdown } from 'react-bootstrap';
import data from "../../data/FilterComponent-Data";
export default function Filter_Button() {

  const Construct_Button = (props) => {
    let options = [...props.options]
    return (
      <DropdownButton id={props.cid} alignbottom="true" title={props.title} >
        {options.map(option =>
          <Dropdown.Item value={option.value} key={option.value}>{option.label}</Dropdown.Item>
        )}
      </DropdownButton>
    );
  };
  const hideclassonsm = "d-none d-sm-none d-lg-block d-md-none d-xl-block";

  const appearclassosm = "";
  return (
    <Col lg={3} className={hideclassonsm}>
      <Construct_Button title="Genres" options={data.Genres_options} cid="Genres" />
    </Col>
  )
}
