import React from 'react';

const Card = ({ username, location, interests }) => {
    return (
        <div className="card">
            <h3>{username}</h3>
            <p>{location}</p>
            <p>{interests}</p>
        </div>
    );
};

export default Card;