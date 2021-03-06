import React, { Component } from 'react'
import { Container,Button,Row,Col } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
//icons
import stats from '../assets/images/stats.svg';
import apps from '../assets/images/apps.svg';
import social from '../assets/images/social.svg';
import custom from '../assets/images/custom.svg';

export default class Landing extends Component {
    render() {
        return (
            <Container className="landing mt-lg-5 mt-md-0" fluid="lg">
                    {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                    <h1 className="heading">The next-generation anime platform</h1>
                    <h2 className="sub-heading">Track, share, and discover your favorite anime and manga with AniList.</h2>
                    <Row className="feature-cards">
                    <Col xs={12} md={6}>
                    <div className="feature-card">
                            <div className="icon">
                                <img src={stats} alt="stats section"/>
                            </div>
                            <div>
                                <div className="title">
                                Discover your obsessions
                                </div>
                                <div className="description">

                                What are your highest rated genres or most watched voice actors? 
						Follow your watching habits over time with in-depth statistics. 
					
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                    <div className="feature-card">
                            <div className="icon">
                                <img src={apps} alt="apps section"/>
                            </div>
                            <div>
                                <div className="title">
                                Bring AniList anywhere
                                </div>
                                <div className="description">

                                Keep track of your progress on-the-go with one of many AniList apps across iOS, Android, macOS, and Windows.
					
                                </div>
                            </div>
                        </div>
                        </Col>
                        <Col xs={12} md={6}>
                        <div className="feature-card">
                            <div className="icon">
                                <img src={social} alt="social section"/>
                            </div>
                            <div>
                                <div className="title">
                                Join the conversation
                                </div>
                                <div className="description">

                                Share your thoughts with our thriving community, make friends, socialize, and receive recommendations.
					
                                </div>
                            </div>
                        </div>
                        </Col>
                        <Col xs={12} md={6}>
                        <div className="feature-card">
                            <div className="icon">
                                <img src={custom} alt="custom section"/>
                            </div>
                            <div>
                                <div className="title">
                                Tweak it to your liking
                                </div>
                                <div className="description">

                                Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode.
					
                                </div>
                            </div>
                        </div>
                        </Col>
                        
                    </Row>
                    <Col className="d-flex justify-content-center join-button-col">
                        <Button className="join-button" size="lg">
                        <div className="label">Join Now <ArrowRight/></div>
                        </Button>
                    </Col>
            </Container>
        )
    }
}