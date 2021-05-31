import React, { Component } from 'react';
import Search from '../SearchBar';
import { connect } from 'react-redux';
import { Container, Spinner, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Navigationbar from '../../../components/Navigationbar';
import Card from '../../../components/Card';
import buildURL from '../searchAPI';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      data: [],
    }
  }

  render() {
    console.log(this.state.data)
    const ResultsSection = () => {
      if (Array.isArray(this.state.data.results) && this.state.data.results) {
        const results = this.state.data.results;
        return (
          <Row className="d-flex align-items-center justify-content-center results_section">
            {results.map((material, index) =>
              <Col>
                <Card details={material} type={'/' + this.state.type} key={index} />
              </Col>
            )}
          </Row>
        )
      } else {
        return (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )
      }
    }

    // just debugging
    const type = this.props.SearchReducer.type['label'];
    const season = this.props.SearchReducer.season['label'];
    const year = this.props.SearchReducer.year['label'];
    const genre = this.props.SearchReducer.genre['label'];
    const format = this.props.SearchReducer.format['label'];
    const search = this.props.SearchReducer.search;

    return (
      <>
        <Navigationbar />
        <Search />
        <Container>
          <h1>genre: {genre}</h1>
          <h1>season: {season}</h1>
          <h1>year: {year}</h1>
          <h1>format: {format}</h1>
          <h1>search: {search}</h1>
          <h1>type: {type}</h1>
        </Container>
        <Container>
          <ResultsSection />
        </Container>
      </>
    )
  }
  
  sendGetRequest = async (url) => {
    try {
        const resp = await axios.get(url);
        this.setState({data:resp.data});
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
  };
  
  componentDidUpdate(previousProps, previousState) {
    if (previousProps.SearchReducer != this.props.SearchReducer) {
      let url = buildURL(this.props.SearchReducer);
      this.sendGetRequest(url)
    }
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const connectToStore = connect(mapStateToProps)
const ConnectedComponent = connectToStore(SearchPage)

export default connect(mapStateToProps)(SearchPage);