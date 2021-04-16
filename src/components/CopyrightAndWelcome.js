import React, { Component } from 'react'
import { Container,Button } from 'react-bootstrap';

//icons
import stats from '../assets/images/stats.svg';
import apps from '../assets/images/apps.svg';
import social from '../assets/images/social.svg';
import custom from '../assets/images/custom.svg';

export default class CopyrightAndWelcome extends Component {
    render() {
        return (
            <Container>
                <div className="landing">
                    {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                    <h1 className="heading">The next-generation anime platform</h1>
                    <h2 className="sub-heading">Track, share, and discover your favorite anime and manga with AniList.</h2>
                    <div className="feature-cards">
                        <div className="feature-card">
                            <div className="icon">
                                <img src={stats} />
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
                        <div className="feature-card">
                            <div className="icon">
                                <img src={apps} />
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
                        <div className="feature-card">
                            <div className="icon">
                                <img src={social} />
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
                        <div className="feature-card">
                            <div className="icon">
                                <img src={custom} />
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
                    </div>
                    <Button className="join-btn"><div className="label">Join Now</div></Button>
                </div>
            </Container>
        )
    }
}