import React from 'react';
import Game from './Game';
import { Row, Col } from 'react-bootstrap';

const HorizontalGameList = ({ games }) => {
    return (
        <Row>
            <Col xs={12} md={12}>
                <div className="card-list-container">
                    <div className="card-list">
                        {games.map((game, index) => (
                            <Game key={index} title={game.title} image={game.image} />
                        ))}
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default HorizontalGameList;