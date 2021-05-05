import React from 'react';
import { render } from '@testing-library/react';
import { Container, Button, Row, Col, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';

import { Search, Sliders } from 'react-bootstrap-icons';

export default function Card({ anime }) {

    const Card_Overlay = () => {
        return (
            <h1>test</h1>
        );
    };

    const onClick = () => {
        route = "anime.id"
    }

    return (
        <>
            <a >
                <div className="anilist-card">
                    <div className="card">
                        <img src={anime.image_url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{anime.title}</h5>
                        </div>
                    </div>
                </div>
            </a>

        </>
    )
}
