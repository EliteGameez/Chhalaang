import React from 'react';

const Card = ({ username, location, interests }) => {
    return (
        <div className="card">
            <h2>{username}</h2>
            <p>{location}</p>
            <p>{interests}</p>
        </div>
    );
};

export default Card;