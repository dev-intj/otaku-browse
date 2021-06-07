import React, { Component, useState } from 'react';
import axios from 'axios';
import { withRouter } from "react-router";
import Navbar from '../components/Navigationbar';
import { Container, Row, Col, Button, DropdownButton, Dropdown,ToggleButtonGroup,ToggleButton} from 'react-bootstrap';

import { HeartFill, StarFill, ChevronDown } from 'react-bootstrap-icons';

//import content controller
import MainContent from '../components/DetailCard/MainContent';


class DetailCard extends Component {
    constructor() {
        super();
        this.handleTab = this.handleTab.bind(this);
        this.state = {
            details: [],
            genres: [],
            tab:["overview"]
        }
    }

    async componentDidMount() {
        window.scrollTo(0, 0)
        const type = this.props.match.params.type;
        const id = this.props.match.params.id;
        const title = this.props.match.params.title;
        const url = 'https://api.jikan.moe/v3/anime/';
        const query = url + id;
        try {
            const res = await axios.get(query)
            const data = res.data;
            this.setState({ details: data, genres: data.genres });
        } catch (err) {
            console.log(err)
        }
    }

  handleTab(e) {
    this.setState({ tab: e });
  }

    render() {

        const RenderInfo = () => {
            //clean info
            const details = this.state.details;
            const producers = details.producers;
            const info = [
                {
                    type: "Format",
                    value: details.type
                },
                {
                    type: "Episodes",
                    value: details.episodes
                },
                {
                    type: "Episode Duration",
                    value: details.duration
                },
                {
                    type: "Status",
                    value: details.status
                },
                {
                    type: "Start Date",
                    value: details.status
                },
                {
                    type: "Season",
                    value: details.premiered
                },
                {
                    type: "Score",
                    value: details.score
                },
                {
                    type: "Popularity",
                    value: details.popularity
                },
                {
                    type: "Producers",
                    value: producers
                },
                {
                    type: "Studios",
                    value: details.studios
                },
                {
                    type: "Source",
                    value: details.source
                },
                {
                    type: "English",
                    value: details.title_english
                },
                {
                    type: "Native",
                    value: details.title_japanese
                },
                {
                    type: "Synonyms",
                    value: details.title_synonyms
                }
            ];
            return (
                <>
                    {/*rated ranking all time*/}
                    <div className="data-set">
                        <div className="rank">
                            <Button>rank</Button>
                        </div>
                        {/*popular ranking all time*/}
                        <div className="popular">
                            <Button>popular</Button>
                        </div>
                    </div>

                    <div className="info">
                        {info.map(data =>
                            <div className="data-set" key={data.type}>
                                <div className="type">{data.type}</div>
                                <div className="value">{String(data.value)}
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )


        };

        const BuildDetailsNav = () => {
            return (
                <ToggleButtonGroup
                type="radio" name="options" 
                value={this.state.tab}
                onChange={this.handleTab} defaultValue="overview">
                <ToggleButton value="overview">Overview</ToggleButton>
                <ToggleButton value="watch">Watch</ToggleButton>
                <ToggleButton value="characters">Characters</ToggleButton>
                <ToggleButton value="staff">Staff</ToggleButton>
                <ToggleButton value="reviews">Reviews</ToggleButton>
                <ToggleButton value="stats">Stats</ToggleButton>
                <ToggleButton value="social">Social</ToggleButton>
              </ToggleButtonGroup>
            )
        }

        const BuildTags = () => {
            const genres = this.state.genres;
            return (
                <div className="tags">
                    {genres.map(tag =>
                        <Button key={tag.mal_id}>{tag.name}</Button>
                    )}
                </div>
            )
        };

        const details = this.state.details;
        return (

            //should I even have 2 containers, or make everything into one
            //hero img should have 100% of the width, let's zoom in a bit and zoom out
            //deprecated background from the api lets try things with the trailer
            <>

                <Navbar />
                <Container className="details-page header" fluid>
                </Container>
                <Container className="details-page header-body">
                    <Row >
                        <Col xs={12} md={3} className="cover">
                            <img src={details.image_url} />

                            <Row className="d-flex justify-content-between actions">
                                <Col className="addtolist" md lg xl={9}>
                                    <DropdownButton title="Dropdown" id="bg-vertical-dropdown-2">
                                        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                    </DropdownButton>
                                </Col>
                                <Col className="heart-it">
                                    <Button><HeartFill /></Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={9}>
                            <Row className="content">
                                <Col>
                                    <h1 className="title">{details.title}</h1>
                                </Col>
                                <Col>
                                    <p className="synopsis">{details.synopsis}</p>
                                </Col>
                                <Col className="col-12 main-content-navbar">
                                <BuildDetailsNav />
                                </Col>
                            </Row>
                            {/* I will have to cut the synposis to certain characters*/}
                            

                        </Col>
                    </Row>
                </Container>
                <Container className="details-page content">
                    <Row>
                        {/* left side */}
                        <Col md={3} className="sidebar">
                            {/*info section*/}
                            <RenderInfo/>
                            {/*tags section*/}
                            <BuildTags/>
                        </Col>
                        <Col md={9} className="main-content">
                            <MainContent mode={this.state.tab} data={this.state.details}/>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default withRouter(DetailCard);

/* 
Dev notes, I can add block on the end of the buttons to make it have the full width
<>
  <Button variant="primary" size="lg" block>
    Block level button
  </Button>
  <Button variant="secondary" size="lg" block>
    Block level button
  </Button>
</>
*/