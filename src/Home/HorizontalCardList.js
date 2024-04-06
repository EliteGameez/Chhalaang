import React, { useState, useContext, useEffect } from 'react';
import Card from './Card';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

import UserContext from '../lib/UserProvider';
const HorizontalCardList = ({ cards }) => {
    const user = useContext(UserContext);
    const [nearUsers, setNearUsers] = useState({
        username: "",
        location: "",
        interests: []
    });
    useEffect(()=> {
        console.log("contextData: ", user.lat);
        axios.post('https://teamelitegameez.pythonanywhere.com/match',
            {
              userId: user.userId,
              latitude: user.lat,
              longitude: user.long,
              radius: 1000
            }
          , {
			headers: {
			  Accept: "application/json",
			  "Content-Type": "application/json;charset=UTF-8",
			},
		  })
		  .then(function (response) {
            setNearUsers(response.data);
		  })
		  .catch(function (error) {
			console.log(error);
		  });
    // const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${user.lat}&lon=${user.long}`);
    // const data = response.json();
    // console.log(data.display_name);
    });
    return (
        <Row>
            <Col xs={12} md={12}>
                <div className="card-list-container">
                    <div className="card-list">
                        {cards.map((card, index) => (
                            <Card key={index} username={card.username}
                                location={card.location}
                                interests={card.interests} />
                        ))}
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default HorizontalCardList;