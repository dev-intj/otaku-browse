import React,{Component} from 'react'
import { Container, Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
//importing bootstrap icons
import { Search, Sliders } from 'react-bootstrap-icons';
//jsx component, read name for obvious explanation
import PopoverStickOnHover from '../../utils/PopoverStickOnHover';

import Filter_Button from "./components/Filter_Button";

//import different options for the buttons
import data from "./components/FilterComponent-Data";

// import react redux functionality
import { connect } from 'react-redux';
import { setType } from './actions';


class SearchJSX extends Component {
    constructor(props) {
        super(props);
      }
    
    render() {
    const Filter_Overlay = () => {
        return (
            <h1>test</h1>
        );
    };

    const handleHeroBrowser = () => {
        this.props.typeAction("anime");
        console.log(this.props)
    }

    return (
        <>
            <Container className="mt-5 mb-5 pt-5 filter-component" fluid="lg" >
                <Row>
                    {/* Hero Button */}
                    <Col className="d-lg-none d-md-block" lg={12}>
                        <Button onClick={handleHeroBrowser}>Browse {this.props.SearchReducer.type}</Button>
                    </Col>

                    {/* Search Button*/}
                    <Col xs={11} sm={11} md={11} lg={2} xl={2} className="filter_search">
                        <div className="name">Search</div>
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

                    {/* Button toolbar, only on md */}
                    <Col md={9} className=" d-none d-sm-none d-lg-block d-md-none d-xl-block ">
                        <div className="filter_button_lg">
                            <Filter_Button mode="Genres" />
                            <Filter_Button mode="Years" />
                            <Filter_Button mode="Seasons" />
                            <Filter_Button mode="Formats" />
                        </div>
                    </Col>

                    {/* Button Burger */}
                    <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                        <div className="name">&nbsp;</div>
                        <PopoverStickOnHover component={<Filter_Overlay />} placement="bottom" onMouseEnter={() => { }} delay={200}>
                            <Button className="filter_burger"><Sliders color="grey" /></Button>
                        </PopoverStickOnHover>
                    </Col>
                </Row>
            </Container>
        </>
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
  const ConnectedComponent = connectToStore(SearchJSX)
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchJSX);