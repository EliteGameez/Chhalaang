import React from 'react';
import Card from './Card';
import { Row, Col } from 'react-bootstrap';

const HorizontalCardList = ({ cards }) => {
    return (
        <Row>
            <Col xs={12} md={12}>
                <div className="card-list-container">
                    <div className="card-list">
                        {cards.map((card, index) => (
                            <Card key={index} username={card.username} location={card.location} interests={card.interests} />
                        ))}
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default HorizontalCardList;