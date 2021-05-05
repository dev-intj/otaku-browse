import React from 'react'
import { Container,Row} from 'react-bootstrap';

//import card
import Card from "../components/Card";

export default function Search_Section(props) {
    const query = props.query;

    const Change_Modes = () => {
        return (
          <h1>test</h1>
        );
      };



    Change_Modes();
    console.log({query});
    return (
        <Container className="mt-5 mb-5 filter-component">
            <Card/>
        
        </Container>
    )
}
