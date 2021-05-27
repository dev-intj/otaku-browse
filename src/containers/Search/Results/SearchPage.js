import React, { Component } from 'react';
import Search from '../SearchBar';
import { connect } from 'react-redux';
import { Container,Spinner,Row,Col  } from 'react-bootstrap';
import axios from 'axios';
import Navigationbar from '../../../components/Navigationbar';
import Card from '../../../components/Card';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: '',
      season: '',
      year: '',
      format: '',
      type: '',
      search: '',
      url: '',
      data: [],
    }
  }

  render() {

    const ResultsSection = () => {
      if (Array. isArray(this.state.data.anime) && this.state.data.anime.length) {
        const results = this.state.data.anime;
        return(
          <Row className="d-flex align-items-center justify-content-center results_section">
            {results.map((material,index) => 
              <Col>
                <Card details={material} type={'/' + this.state.type} key={index}/>
              </Col>
            )}
          </Row>
        ) 
      }else{
        return(
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )
      }
    }

    // setting for faster 
    const type = this.props.SearchReducer.type;
    const season = this.props.SearchReducer.season;
    const year = this.props.SearchReducer.year;
    const genre = this.props.SearchReducer.genre;
    const format = this.props.SearchReducer.format;
    return (
      <>
        <Navigationbar />
        <Search />
        <Container>
          <h1>genre: {genre}</h1>
          <h1>season: {season}</h1>
          <h1>year: {year}</h1>
          <h1>format: {format}</h1>
        </Container>
        <Container>
          {ResultsSection()}
        </Container>
      </>
    )

  }

  static getDerivedStateFromProps(props, current_state) {
    //in case of updated props, update state, and then do a new fetch from the api
    if (current_state.value !== props.SearchReducer.value) {
      return {
        value: props.SearchReducer.value
      }
    }
    return (null)
  }

  async componentDidUpdate() {
    const url = this.buildquery();
    if (this.state.url != url) {
      this.AxiosGet();
      console.log('recalculating')
      this.setState({ url: url });
    }
  }

  AxiosGet = () => {
    const url = this.buildquery();
    axios.get(`${url}`)
      .then(res => {
        const data = res.data;
        console.log('i got the data')
        this.setState({ data: data });
      })
      .catch(error => {
        console.log("there was an error fetching from my anime list.")
      });
  }

  buildquery() {
    const type = this.props.SearchReducer.type;
    const season = this.props.SearchReducer.season;
    const year = this.props.SearchReducer.year;
    const genre = this.props.SearchReducer.genre;
    const format = this.props.SearchReducer.format;
    const search = '';
    var url = '';
    if (search != '') {
      url = 'https://api.jikan.moe/v3/search/' + type + '?q=' + (!search ? '' : search) + (!genre ? '' : '&genre=' + genre) + (!year ? '' : '&year=' + year);
    } else {
      url = 'https://api.jikan.moe/v3/genre/' + type + '/' + genre;
    }
    return (url);
  }

  async componentDidMount() {
    const url = this.buildquery();
    this.AxiosGet()
    this.setState({
      genre: this.props.SearchReducer.genre,
      season: this.props.SearchReducer.season,
      year: this.props.SearchReducer.year,
      format: this.props.SearchReducer.format,
      type: this.props.SearchReducer.type,
      url: url,
    })
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
const ConnectedComponent = connectToStore(SearchPage)

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);