import React from 'react';
import './Home.css';

const Card = ({ username, location, interests }) => {
    return (
        <div className="card">
            <h3>{username}</h3>
            <p>{location}</p>
            <p>{interests}</p>
            <button className="connectbtn">Connect</button>
        </div>
    );
};

export default Card;