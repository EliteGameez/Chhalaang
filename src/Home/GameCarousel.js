import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Your custom CSS file for styling

const GameCarousel = ({ games }) => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={12}>
                    <h2>Featured Games</h2>
                </Col>
            </Row>
            <Row className='cas-row'>
                <Col xs={12} md={12}>
                    <Carousel className='cas-main'>
                        {games.map((game, index) => (
                            <Carousel.Item key={index} style={{ alignItems: 'center' }}>
                                <img
                                    className="d-block w-50"
                                    src={game.image}
                                    alt={game.title}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
                {/* <Col xs={12} md={6} className='casside'>
        {games.slice(1).map((game, index) => (
            <div key={index} className="small-game">
                <img src={game.image} alt={game.title} />
                <p>{game.title}</p>
            </div>
        ))}
    </Col> */}
            </Row>
        </Container>

    );

};
export default GameCarousel;