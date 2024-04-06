import React from 'react';

const Game = ({ title, image }) => {
    return (
        <div className="card" style={{ backgroundImage: image }}>
            <h3>{title}</h3>
        </div>
    );
};

export default Game;