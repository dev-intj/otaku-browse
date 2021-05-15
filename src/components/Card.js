import React, { Component,useRef } from 'react';
import { Tooltip, OverlayTrigger, Overlay, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() { 

        const details = this.props.details;
        // "/" = doesnt work, but "/ " does work, the problem with that, it's that if I reload the page, it forgets the space
        const Linkto = '/details' + this.props.type + '/' + details.mal_id + '/' + details.title + "/overview";

         const Card_Overlay = (props) => {
            return (
                <Tooltip id="button-tooltip" {...props}>
                    Simple tooltip
                </Tooltip>
            )
        };

        const Card_Interface = () => {
            return (
                <div className="anilist-card">
                    <div className="card">
                        <img src={details.image_url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{details.title}</h5>
                        </div>
                    </div>
                </div>
            )
        };
        return (
            <Link to={Linkto}>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={Card_Overlay}>
                    <div> <Card_Interface /></div>

                </OverlayTrigger>

            </Link>
        )
    }
}
export default Card;